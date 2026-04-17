/**
 * Gingins solar heatmap on Leaflet/OSM map.
 * Toggle: with/without vegetation. Click pixel for hours.
 */
(function () {
  var container = document.getElementById('viz-gingins-heatmap');
  if (!container) return;

  // ── LV95 → WGS84 (reverse of lib/geo/projection.ts) ─────────
  // Source: swisstopo Formulas and constants for the calculation
  // of the Swiss conformal cylindrical projection.
  function lv95ToWgs84(easting, northing) {
    var y = (easting - 2600000) / 1e6;
    var x = (northing - 1200000) / 1e6;
    var lon = 2.6779094 + 4.728982 * y + 0.791484 * y * x + 0.1306 * y * x * x - 0.0436 * y * y * y;
    var lat = 16.9023892 + 3.238272 * x - 0.270978 * y * y - 0.002528 * x * x - 0.0447 * y * y * x - 0.0140 * x * x * x;
    return { lon: (lon * 100) / 36, lat: (lat * 100) / 36 };
  }

  // UI layout
  var uiDiv = document.createElement('div');
  uiDiv.style.cssText = 'padding: 0.75rem 1rem; display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center; font-family: var(--mono, monospace); font-size: 0.8rem; color: var(--text-body, #c8c9cd);';
  uiDiv.innerHTML = '' +
    '<button id="btn-with-veg" style="background: var(--accent, #7effd4); color: var(--bg, #0b0c0e); border: 1px solid var(--accent, #7effd4); padding: 0.4rem 0.8rem; border-radius: 4px; font-family: inherit; font-size: 0.75rem; cursor: pointer; font-weight: bold;">Avec végétation</button>' +
    '<button id="btn-no-veg" style="background: var(--bg, #111316); color: var(--text-body, #c8c9cd); border: 1px solid var(--border, #1e2128); padding: 0.4rem 0.8rem; border-radius: 4px; font-family: inherit; font-size: 0.75rem; cursor: pointer;">Sans végétation</button>' +
    '<button id="btn-diff" style="background: var(--bg, #111316); color: var(--text-body, #c8c9cd); border: 1px solid var(--border, #1e2128); padding: 0.4rem 0.8rem; border-radius: 4px; font-family: inherit; font-size: 0.75rem; cursor: pointer;">Heures perdues (arbres)</button>' +
    '<span id="hm-legend" style="margin-left: auto; font-size: 0.7rem; color: var(--muted-dim, #5c6070);"></span>';
  container.appendChild(uiDiv);

  var mapDiv = document.createElement('div');
  mapDiv.style.cssText = 'width: 100%; height: 500px;';
  container.appendChild(mapDiv);

  // Pre-compose tooltip tracker
  var hoverInfo = document.createElement('div');
  hoverInfo.style.cssText = 'padding: 0.5rem 1rem; font-family: var(--mono, monospace); font-size: 0.75rem; color: var(--text-body, #c8c9cd); background: var(--bg2, #111316); border-top: 1px solid var(--border, #1e2128); min-height: 1.2rem;';
  hoverInfo.textContent = 'Survolez la carte pour voir les heures annuelles…';
  container.appendChild(hoverInfo);

  // Load Leaflet CSS dynamically
  if (!document.querySelector('link[href*="leaflet.css"]')) {
    var leafletCss = document.createElement('link');
    leafletCss.rel = 'stylesheet';
    leafletCss.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(leafletCss);
  }

  function loadLeaflet(cb) {
    if (typeof L !== 'undefined') return cb();
    var s = document.createElement('script');
    s.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    s.onload = cb;
    document.head.appendChild(s);
  }

  loadLeaflet(function () {
    // Initial map — will be centered once we load data
    var map = L.map(mapDiv, { preferCanvas: true }).setView([46.4145, 6.1765], 17);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OSM contributors',
      maxZoom: 19,
    }).addTo(map);

    fetch('/assets/data/gingins-heatmap.json').then(function (r) { return r.json(); }).then(function (data) {
      var gs = data.gridSize;
      var sunny = data.sunnyHours;
      var sunnyNoVeg = data.sunnyNoVegHours;
      var indoor = data.indoor;

      // Compute corners in WGS84
      var swE = data.minEasting, swN = data.minNorthing;
      var neE = data.maxEasting, neN = data.maxNorthing;
      var sw = lv95ToWgs84(swE, swN);
      var ne = lv95ToWgs84(neE, neN);
      var nw = lv95ToWgs84(swE, neN);
      var se = lv95ToWgs84(neE, swN);

      // Fit bounds
      var bounds = L.latLngBounds([sw.lat, sw.lon], [ne.lat, ne.lon]);
      map.fitBounds(bounds);

      // Render to a canvas
      var canvas = document.createElement('canvas');
      canvas.width = gs;
      canvas.height = gs;
      var ctx = canvas.getContext('2d');

      function colorForHours(h, maxH) {
        // 0 (blue cold) → maxH (yellow hot). Indoor or very low = gray.
        if (h === null) return [80, 80, 90, 200]; // indoor
        var t = Math.max(0, Math.min(1, h / maxH));
        // Interpolate: purple (0) → red (0.5) → orange (0.75) → yellow (1)
        var r = Math.round(40 + t * 215);
        var g = Math.round(t < 0.3 ? 20 : (t - 0.3) * 220);
        var b = Math.round(80 * (1 - t));
        return [r, g, b, 230];
      }

      function renderMode(mode) {
        var img = ctx.createImageData(gs, gs);
        var values = mode === 'no-veg' ? sunnyNoVeg : (mode === 'diff' ? null : sunny);
        var max = 1700; // max hours realistic for Swiss plateau
        for (var y = 0; y < gs; y++) {
          for (var x = 0; x < gs; x++) {
            // LV95 point: pixel (x, y) with y=0 at north (maxN)
            var idx = (gs - 1 - y) * gs + x;
            var a = img.data;
            var i = (y * gs + x) * 4;
            if (indoor[idx]) {
              a[i] = 60; a[i+1] = 60; a[i+2] = 70; a[i+3] = 180;
              continue;
            }
            var h;
            if (mode === 'diff') {
              h = sunnyNoVeg[idx] - sunny[idx];
              var tm = 400; // max diff we expect
              var t = Math.max(0, Math.min(1, h / tm));
              a[i] = Math.round(10 + t * 100);
              a[i+1] = Math.round(160 - t * 160);
              a[i+2] = Math.round(40 + t * 40);
              a[i+3] = Math.round(t * 220);
              continue;
            }
            h = values[idx];
            var c = colorForHours(h, max);
            a[i] = c[0]; a[i+1] = c[1]; a[i+2] = c[2]; a[i+3] = c[3];
          }
        }
        ctx.putImageData(img, 0, 0);
        if (overlay) map.removeLayer(overlay);
        // imageOverlay via canvas dataURL
        overlay = L.imageOverlay(canvas.toDataURL(), bounds, { opacity: 0.75 }).addTo(map);

        var legend = document.getElementById('hm-legend');
        if (mode === 'diff') {
          legend.textContent = 'Heures/an perdues à cause des arbres (0 ← vert → 400+ rouge)';
        } else {
          legend.textContent = (mode === 'no-veg' ? 'Sans végétation : ' : '') + '0 ← bleu/violet → 1700h jaune';
        }
      }

      var overlay = null;
      renderMode('with');

      // Hover: pixel lookup
      map.on('mousemove', function (e) {
        var latlng = e.latlng;
        // Convert latlng to pixel (rough: assume linear within tile)
        var fracX = (latlng.lng - sw.lon) / (ne.lon - sw.lon);
        var fracY = (latlng.lat - sw.lat) / (ne.lat - sw.lat);
        if (fracX < 0 || fracX > 1 || fracY < 0 || fracY > 1) {
          hoverInfo.textContent = 'Hors tuile';
          return;
        }
        var x = Math.floor(fracX * gs);
        var y = Math.floor(fracY * gs);
        var idx = y * gs + x;
        if (indoor[idx]) {
          hoverInfo.textContent = 'Intérieur bâtiment';
          return;
        }
        var h1 = sunny[idx];
        var h2 = sunnyNoVeg[idx];
        var loss = (h2 - h1).toFixed(1);
        hoverInfo.innerHTML = '<b>' + h1.toFixed(0) + ' h/an</b> avec végétation · ' + h2.toFixed(0) + ' h/an sans · <span style="color: var(--accent2, #ff6b6b);">' + loss + ' h perdues par les arbres</span>';
      });

      // Buttons
      document.getElementById('btn-with-veg').onclick = function () {
        setActive('btn-with-veg'); renderMode('with');
      };
      document.getElementById('btn-no-veg').onclick = function () {
        setActive('btn-no-veg'); renderMode('no-veg');
      };
      document.getElementById('btn-diff').onclick = function () {
        setActive('btn-diff'); renderMode('diff');
      };
      function setActive(id) {
        ['btn-with-veg', 'btn-no-veg', 'btn-diff'].forEach(function (b) {
          var el = document.getElementById(b);
          var active = (b === id);
          el.style.background = active ? 'var(--accent, #7effd4)' : 'var(--bg, #111316)';
          el.style.color = active ? 'var(--bg, #0b0c0e)' : 'var(--text-body, #c8c9cd)';
          el.style.fontWeight = active ? 'bold' : 'normal';
          el.style.borderColor = active ? 'var(--accent, #7effd4)' : 'var(--border, #1e2128)';
        });
      }
    });
  });
})();
