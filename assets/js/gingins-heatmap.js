/**
 * Gingins solar heatmap on Leaflet/OSM map.
 * Toggle: with/without vegetation. Click pixel for hours.
 */
(function () {
  var container = document.getElementById('viz-gingins-heatmap');
  if (!container) return;

  // ── LV95 → WGS84 (proj4, loaded dynamically) ──────────────────
  var lv95ToWgs84; // defined once proj4 is loaded

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

  function loadScript(src) {
    return new Promise(function (resolve) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      document.head.appendChild(s);
    });
  }

  function setupProj4() {
    proj4.defs('EPSG:2056',
      '+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 ' +
      '+k_0=1 +x_0=2600000 +y_0=1200000 +ellps=bessel ' +
      '+towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs');
    lv95ToWgs84 = function (e, n) {
      var r = proj4('EPSG:2056', 'EPSG:4326', [e, n]);
      return { lon: r[0], lat: r[1] };
    };
  }

  Promise.all([
    typeof L !== 'undefined' ? Promise.resolve() : loadScript('https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'),
    typeof proj4 !== 'undefined' ? Promise.resolve() : loadScript('https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.11.0/proj4.js'),
  ]).then(function () {
    return loadScript('https://unpkg.com/leaflet-imageoverlay-rotated@0.2.1/Leaflet.ImageOverlay.Rotated.js');
  }).then(function () {
    setupProj4();
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

      // Compute all 4 corners in WGS84 (LV95 rectangle is slightly rotated
      // relative to lat/lng — using only SW/NE offsets buildings by ~4m)
      var swE = data.minEasting, swN = data.minNorthing;
      var neE = data.maxEasting, neN = data.maxNorthing;
      var sw = lv95ToWgs84(swE, swN);
      var ne = lv95ToWgs84(neE, neN);
      var nw = lv95ToWgs84(swE, neN);
      var se = lv95ToWgs84(neE, swN);
      var tlLatLng = L.latLng(nw.lat, nw.lon);
      var trLatLng = L.latLng(ne.lat, ne.lon);
      var blLatLng = L.latLng(sw.lat, sw.lon);

      var bounds = L.latLngBounds([sw.lat, sw.lon], [ne.lat, ne.lon]);
      bounds.extend([nw.lat, nw.lon]).extend([se.lat, se.lon]);
      map.fitBounds(bounds);

      // Render to a canvas
      var canvas = document.createElement('canvas');
      canvas.width = gs;
      canvas.height = gs;
      var ctx = canvas.getContext('2d');

      // Compute actual min/max from the data for proper contrast.
      // Outdoor-only (indoor points skew the min to 0).
      var outdoorSunny = [], outdoorNoVeg = [];
      for (var k = 0; k < sunny.length; k++) {
        if (!indoor[k]) { outdoorSunny.push(sunny[k]); outdoorNoVeg.push(sunnyNoVeg[k]); }
      }
      function pct(arr, p) {
        var sorted = arr.slice().sort(function(a,b){return a-b;});
        return sorted[Math.max(0, Math.min(sorted.length - 1, Math.floor(sorted.length * p)))];
      }
      // Use the 2nd and 98th percentiles to avoid a handful of extreme pixels
      // squashing the scale. This spreads the color range across where 96%
      // of the data actually lives — making shadows VISIBLE.
      var sunnyScale = { min: pct(outdoorSunny, 0.02), max: pct(outdoorSunny, 0.98) };
      var noVegScale = { min: pct(outdoorNoVeg, 0.02), max: pct(outdoorNoVeg, 0.98) };

      function colorForHours(h, scale) {
        if (h === null) return [80, 80, 90, 200]; // indoor
        var t = Math.max(0, Math.min(1, (h - scale.min) / Math.max(1, scale.max - scale.min)));
        // Viridis-like gradient: purple (cold/shadow) → teal → yellow (full sun)
        var r, g, b;
        if (t < 0.33) {
          var u = t / 0.33; r = 68 + u * (59 - 68); g = 1 + u * (82 - 1); b = 84 + u * (139 - 84);
        } else if (t < 0.67) {
          var u = (t - 0.33) / 0.34; r = 59 + u * (94 - 59); g = 82 + u * (201 - 82); b = 139 + u * (98 - 139);
        } else {
          var u = (t - 0.67) / 0.33; r = 94 + u * (253 - 94); g = 201 + u * (231 - 201); b = 98 + u * (37 - 98);
        }
        return [Math.round(r), Math.round(g), Math.round(b), 230];
      }

      function renderMode(mode) {
        var img = ctx.createImageData(gs, gs);
        var values = mode === 'no-veg' ? sunnyNoVeg : (mode === 'diff' ? null : sunny);
        var scale = mode === 'no-veg' ? noVegScale : sunnyScale;
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
            var c = colorForHours(h, scale);
            a[i] = c[0]; a[i+1] = c[1]; a[i+2] = c[2]; a[i+3] = c[3];
          }
        }
        ctx.putImageData(img, 0, 0);
        if (overlay) map.removeLayer(overlay);
        // Plain axis-aligned overlay — the LV95 rotation is <0.5° (<4m at
        // 250m corners), negligible for a heatmap visualization and avoids
        // the numerical distortion from L.imageOverlay.Rotated on tiny angles.
        overlay = L.imageOverlay(canvas.toDataURL(), bounds, {
          opacity: 0.75,
          interactive: false,
        }).addTo(map);
        var el = overlay.getElement();
        if (el) {
          el.style.imageRendering = 'pixelated';
          el.style.imageRendering = 'crisp-edges';
        }

        var legend = document.getElementById('hm-legend');
        if (mode === 'diff') {
          legend.textContent = 'Heures/an perdues à cause des arbres (vert ← peu → rouge beaucoup)';
        } else {
          legend.textContent = (mode === 'no-veg' ? 'Sans végétation : ' : 'Avec végétation : ') +
            'violet ' + Math.round(scale.min) + 'h ← → ' + Math.round(scale.max) + 'h jaune';
        }
      }

      var overlay = null;
      renderMode('with');

      // Hover: convert WGS84 → LV95 via proj4 for exact pixel lookup
      map.on('mousemove', function (e) {
        var lv = proj4('EPSG:4326', 'EPSG:2056', [e.latlng.lng, e.latlng.lat]);
        var col = Math.floor(lv[0] - data.minEasting);
        var row = Math.floor(lv[1] - data.minNorthing);
        if (col < 0 || col >= gs || row < 0 || row >= gs) {
          hoverInfo.textContent = 'Hors tuile';
          return;
        }
        var idx = row * gs + col;
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
