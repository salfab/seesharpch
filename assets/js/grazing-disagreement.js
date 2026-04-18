/**
 * Grazing-instants disagreement map.
 * Tile GE (Lausanne), 2 grazing-sun frames, 4 methods (CPU + 3 atlas resolutions).
 * Shows WHERE each atlas bucket diverges from the CPU ray-traced reference.
 */
(function () {
  var container = document.getElementById('viz-grazing-disagreement');
  if (!container) return;

  var lv95ToWgs84;

  // UI layout: two rows of buttons
  var uiDiv = document.createElement('div');
  uiDiv.style.cssText = 'padding: 0.75rem 1rem; display: flex; flex-direction: column; gap: 0.5rem; font-family: var(--mono, monospace); font-size: 0.8rem; color: var(--text-body, #c8c9cd);';
  uiDiv.innerHTML = '' +
    '<div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">' +
      '<span style="color: var(--muted-dim, #5c6070); min-width: 5.5rem;">Instant</span>' +
      '<button id="btn-sunrise" class="gd-btn gd-inst active" data-inst="0">08:15 — soleil rasant sunrise (alt=14.9°)</button>' +
      '<button id="btn-sunset" class="gd-btn gd-inst" data-inst="1">18:45 — soleil rasant sunset (alt=16.1°)</button>' +
    '</div>' +
    '<div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">' +
      '<span style="color: var(--muted-dim, #5c6070); min-width: 5.5rem;">Méthode</span>' +
      '<button id="btn-cpu" class="gd-btn gd-meth active" data-meth="cpu">Référence CPU (ray-trace exact)</button>' +
      '<button id="btn-a1" class="gd-btn gd-meth" data-meth="a1">Δ Atlas 1°</button>' +
      '<button id="btn-a075" class="gd-btn gd-meth" data-meth="a075">Δ Atlas 0.75°</button>' +
      '<button id="btn-a05" class="gd-btn gd-meth" data-meth="a05">Δ Atlas 0.5°</button>' +
    '</div>' +
    '<div id="gd-legend" style="font-size: 0.7rem; color: var(--muted-dim, #5c6070); min-height: 1rem;"></div>';
  container.appendChild(uiDiv);

  // Inject button styles
  var style = document.createElement('style');
  style.textContent = '' +
    '.gd-btn { background: var(--bg, #111316); color: var(--text-body, #c8c9cd); border: 1px solid var(--border, #1e2128); padding: 0.4rem 0.8rem; border-radius: 4px; font-family: inherit; font-size: 0.72rem; cursor: pointer; }' +
    '.gd-btn.active { background: var(--accent, #7effd4); color: var(--bg, #0b0c0e); border-color: var(--accent, #7effd4); font-weight: bold; }';
  document.head.appendChild(style);

  var mapDiv = document.createElement('div');
  mapDiv.style.cssText = 'width: 100%; height: 520px;';
  container.appendChild(mapDiv);

  var hoverInfo = document.createElement('div');
  hoverInfo.style.cssText = 'padding: 0.5rem 1rem; font-family: var(--mono, monospace); font-size: 0.72rem; color: var(--text-body, #c8c9cd); background: var(--bg2, #111316); border-top: 1px solid var(--border, #1e2128); min-height: 1.2rem;';
  hoverInfo.textContent = 'Survolez la carte pour voir la classification de chaque méthode sur un pixel…';
  container.appendChild(hoverInfo);

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
    setupProj4();

    var map = L.map(mapDiv, { preferCanvas: true }).setView([46.52, 6.63], 17);
    // CartoDB Positron: minimal style — streets + labels, no POI icons/businesses
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '© OSM contributors · © CARTO',
      subdomains: 'abcd',
      maxZoom: 20,
    }).addTo(map);

    fetch('/assets/data/grazing-disagreement.json').then(function (r) { return r.json(); }).then(function (data) {
      var gs = data.gridSize;
      var indoor = data.indoor;
      var instants = data.instants;

      var sw = lv95ToWgs84(data.minEasting, data.minNorthing);
      var ne = lv95ToWgs84(data.maxEasting, data.maxNorthing);
      var nw = lv95ToWgs84(data.minEasting, data.maxNorthing);
      var se = lv95ToWgs84(data.maxEasting, data.minNorthing);
      var bounds = L.latLngBounds([sw.lat, sw.lon], [ne.lat, ne.lon])
        .extend([nw.lat, nw.lon]).extend([se.lat, se.lon]);
      map.fitBounds(bounds);

      var canvas = document.createElement('canvas');
      canvas.width = gs;
      canvas.height = gs;
      var ctx = canvas.getContext('2d');

      var state = { instant: 0, method: 'cpu' };
      var overlay = null;

      function render() {
        var inst = instants[state.instant];
        var cpu = inst.masks.cpu;
        var other = inst.masks[state.method];
        var img = ctx.createImageData(gs, gs);

        var disagreeCount = 0;

        for (var y = 0; y < gs; y++) {
          for (var x = 0; x < gs; x++) {
            // LV95 row origin: y=0 top (maxN), idx counts from minN up
            var idx = (gs - 1 - y) * gs + x;
            var i = (y * gs + x) * 4;

            if (indoor[idx]) {
              // Indoor pixels: fully transparent — let the base map show building
              // outlines instead of overlaying a grey box that reads as extra shadow.
              img.data[i] = 0; img.data[i+1] = 0; img.data[i+2] = 0; img.data[i+3] = 0;
              continue;
            }

            if (state.method === 'cpu') {
              // Show CPU ground truth: yellow for sunny, dark for shade
              if (cpu[idx]) {
                img.data[i] = 253; img.data[i+1] = 231; img.data[i+2] = 37; img.data[i+3] = 210;
              } else {
                img.data[i] = 30; img.data[i+1] = 25; img.data[i+2] = 60; img.data[i+3] = 150;
              }
            } else {
              // XOR mode: only color disagreements
              var c = cpu[idx], o = other[idx];
              if (c === o) {
                img.data[i] = 0; img.data[i+1] = 0; img.data[i+2] = 0; img.data[i+3] = 0;
              } else if (o === 1 && c === 0) {
                // Atlas claims sunny, CPU says shade → over-estimate (orange)
                img.data[i] = 255; img.data[i+1] = 120; img.data[i+2] = 20; img.data[i+3] = 240;
                disagreeCount++;
              } else {
                // Atlas claims shade, CPU says sunny → under-estimate (magenta)
                img.data[i] = 220; img.data[i+1] = 20; img.data[i+2] = 190; img.data[i+3] = 240;
                disagreeCount++;
              }
            }
          }
        }

        ctx.putImageData(img, 0, 0);
        if (overlay) map.removeLayer(overlay);
        overlay = L.imageOverlay(canvas.toDataURL(), bounds, {
          opacity: state.method === 'cpu' ? 0.70 : 0.95,
          interactive: false,
        }).addTo(map);
        var el = overlay.getElement();
        if (el) {
          el.style.imageRendering = 'pixelated';
          el.style.imageRendering = 'crisp-edges';
        }

        var legend = document.getElementById('gd-legend');
        if (state.method === 'cpu') {
          var sunny = 0, shade = 0;
          for (var k = 0; k < cpu.length; k++) {
            if (indoor[k]) continue;
            if (cpu[k]) sunny++; else shade++;
          }
          legend.innerHTML = '<b>Référence CPU</b> — jaune = ensoleillé (' + sunny +
            ' pts) · violet foncé = à l\'ombre (' + shade + ' pts) · transparent = intérieur bâtiment';
        } else {
          var pct = (100 * disagreeCount / data.outdoorPointCount).toFixed(3);
          var methodLabel = { a1: 'Atlas 1°', a075: 'Atlas 0.75°', a05: 'Atlas 0.5°' }[state.method];
          legend.innerHTML = '<b>' + methodLabel + ' vs CPU</b> — <span style="color:#ff7814;">orange</span> : atlas dit ensoleillé, CPU dit ombre (sur-estimation) · ' +
            '<span style="color:#dc14be;">magenta</span> : atlas dit ombre, CPU dit ensoleillé (sous-estimation) · ' +
            '<b>' + disagreeCount + '</b> pixels en désaccord sur ' + data.outdoorPointCount + ' (' + pct + ' %)';
        }
      }

      map.on('mousemove', function (e) {
        var lv = proj4('EPSG:4326', 'EPSG:2056', [e.latlng.lng, e.latlng.lat]);
        var col = Math.floor(lv[0] - data.minEasting);
        var row = Math.floor(lv[1] - data.minNorthing);
        if (col < 0 || col >= gs || row < 0 || row >= gs) {
          hoverInfo.textContent = 'Hors tuile';
          return;
        }
        var idx = row * gs + col;
        if (indoor[idx]) { hoverInfo.textContent = 'Intérieur bâtiment'; return; }
        var inst = instants[state.instant];
        var labels = {
          cpu: inst.masks.cpu[idx] ? 'soleil' : 'ombre',
          a1: inst.masks.a1[idx] ? 'soleil' : 'ombre',
          a075: inst.masks.a075[idx] ? 'soleil' : 'ombre',
          a05: inst.masks.a05[idx] ? 'soleil' : 'ombre',
        };
        hoverInfo.innerHTML = 'CPU : <b>' + labels.cpu + '</b> · ' +
          'Atlas 1° : ' + labels.a1 + ' · ' +
          'Atlas 0.75° : ' + labels.a075 + ' · ' +
          'Atlas 0.5° : ' + labels.a05;
      });

      function setActiveGroup(selector, id) {
        var btns = container.querySelectorAll(selector);
        for (var i = 0; i < btns.length; i++) btns[i].classList.remove('active');
        var el = document.getElementById(id);
        if (el) el.classList.add('active');
      }

      container.querySelectorAll('.gd-inst').forEach(function (b) {
        b.addEventListener('click', function () {
          state.instant = Number(b.getAttribute('data-inst'));
          setActiveGroup('.gd-inst', b.id);
          render();
        });
      });
      container.querySelectorAll('.gd-meth').forEach(function (b) {
        b.addEventListener('click', function () {
          state.method = b.getAttribute('data-meth');
          setActiveGroup('.gd-meth', b.id);
          render();
        });
      });

      render();
    });
  });
})();
