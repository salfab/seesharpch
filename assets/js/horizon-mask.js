/**
 * Three.js visualization: Horizon mask explained
 *
 * Shows how the horizon mask works:
 * - Observer at center (Great Escape terrace)
 * - 360° wall whose height = max elevation angle per azimuth
 * - Sun path arcs for summer/winter/march with toggle
 * - Sun arc drawn OUTSIDE the wall (further from center)
 */
(function () {
  'use strict';
  var container = document.getElementById('viz-horizon');
  if (!container) return;

  var WIDTH = container.clientWidth;
  var HEIGHT = 450;

  var scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0b0c0e);

  var camera = new THREE.PerspectiveCamera(50, WIDTH / HEIGHT, 0.1, 500);
  camera.position.set(0, 80, 110);
  camera.lookAt(0, 10, 0);

  var renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(WIDTH, HEIGHT);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  var controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.target.set(0, 10, 0);
  controls.update();

  scene.add(new THREE.AmbientLight(0x8899aa, 1.4));
  scene.add(new THREE.HemisphereLight(0xaabbcc, 0x444466, 0.6));
  var dirLight = new THREE.DirectionalLight(0xffeedd, 0.8);
  dirLight.position.set(30, 50, 20);
  scene.add(dirLight);

  // ── Horizon data (360 bins, synthetic for Lausanne) ────────────────
  var horizon = [];
  for (var i = 0; i < 360; i++) {
    var elev = 1.5 + Math.sin(i * 0.017) * 0.3;
    if (i >= 280 && i <= 350) {
      var t = (i - 280) / 70;
      elev += 7 * Math.sin(t * Math.PI) + 2 * Math.sin(t * Math.PI * 3.2) + Math.sin(t * Math.PI * 7) * 0.8;
    }
    if (i >= 40 && i <= 165) {
      var t = (i - 40) / 125;
      elev += 14 * Math.sin(t * Math.PI) + 3 * Math.sin(t * Math.PI * 2.7) + 2 * Math.sin(t * Math.PI * 6.3);
    }
    if (i >= 190 && i <= 240) {
      var t = (i - 190) / 50;
      elev = Math.max(0.8, elev - 3 * Math.sin(t * Math.PI));
    }
    if (i >= 306 && i <= 314) {
      var t = (i - 306) / 8;
      elev = Math.max(elev, 28 * Math.sin(t * Math.PI));
    }
    if (i >= 18 && i <= 42) {
      var t = (i - 18) / 24;
      elev = Math.max(elev, 22 * Math.sin(t * Math.PI));
    }
    if (i >= 180 && i <= 190) {
      var t = (i - 180) / 10;
      elev = Math.max(elev, 18 * Math.sin(t * Math.PI));
    }
    horizon.push(Math.max(elev, 0));
  }

  // ── Sun paths ──────────────────────────────────────────────────────
  var sunPaths = {
    march: [
      {h:7.25,az:99,alt:1.5},{h:8,az:107.3,alt:9.1},{h:9,az:119.2,alt:18.5},
      {h:10,az:132.6,alt:26.9},{h:11,az:148.2,alt:33.5},{h:12,az:165.9,alt:37.6},
      {h:12.75,az:180.1,alt:38.5},{h:14,az:203.4,alt:35.9},{h:15,az:220.1,alt:30.5},
      {h:16,az:234.5,alt:22.9},{h:17,az:247.1,alt:13.9},{h:17.5,az:252.9,alt:9.1},
      {h:18,az:258.5,alt:4.1},{h:18.25,az:261.3,alt:1.5}
    ],
    summer: [
      {h:6,az:57.1,alt:1.9},{h:7,az:67.5,alt:11},{h:8,az:77.5,alt:20.9},
      {h:9,az:87.8,alt:31.1},{h:10,az:99.1,alt:41.4},{h:11,az:113,alt:51.3},
      {h:12,az:132.1,alt:60},{h:13,az:159.8,alt:65.8},{h:14,az:194.2,alt:66.4},
      {h:15,az:223.6,alt:61.3},{h:16,az:244,alt:53},{h:17,az:258.6,alt:43.2},
      {h:18,az:270.3,alt:33},{h:19,az:280.7,alt:22.7},{h:20,az:290.7,alt:12.8},
      {h:21,az:301,alt:3.5}
    ],
    winter: [
      {h:9,az:132.7,alt:5.3},{h:10,az:144.8,alt:12.1},{h:11,az:158,alt:17},
      {h:12,az:172.3,alt:19.7},{h:13,az:186.9,alt:19.7},{h:14,az:201.1,alt:17.3},
      {h:15,az:214.5,alt:12.4},{h:16,az:226.6,alt:5.7}
    ]
  };

  // ── Geometry ───────────────────────────────────────────────────────
  var wallRadius = 50;
  var sunArcRadius = 58; // OUTSIDE the wall
  var elevScale = 1.8;

  function azToRad(azDeg) { return (azDeg - 90) * Math.PI / 180; }

  function azElevToPos(azDeg, elevDeg, radius) {
    var r = radius || wallRadius;
    var rad = azToRad(azDeg);
    return new THREE.Vector3(Math.cos(rad) * r, elevDeg * elevScale, -Math.sin(rad) * r);
  }

  // ── Ground ─────────────────────────────────────────────────────────
  var groundGeo = new THREE.CircleGeometry(sunArcRadius + 8, 64);
  groundGeo.rotateX(-Math.PI / 2);
  scene.add(new THREE.Mesh(groundGeo, new THREE.MeshLambertMaterial({ color: 0x2a2d35 })));

  // ── Observer ───────────────────────────────────────────────────────
  var obs = new THREE.Mesh(
    new THREE.CylinderGeometry(0.8, 0.8, 2, 16),
    new THREE.MeshPhongMaterial({ color: 0x7effd4 })
  );
  obs.position.set(0, 1, 0);
  scene.add(obs);

  // ── Horizon wall ───────────────────────────────────────────────────
  var wallPositions = [];
  var wallColors = [];
  var wallIndices = [];

  for (var i = 0; i <= 360; i++) {
    var az = i % 360;
    var elev = horizon[az];
    var rad = azToRad(az);
    var x = Math.cos(rad) * wallRadius;
    var z = -Math.sin(rad) * wallRadius;

    wallPositions.push(x, 0, z);
    wallPositions.push(x, elev * elevScale, z);

    var r, g, b;
    if (elev > 15) { r = 1.0; g = 0.42; b = 0.42; }
    else if ((az >= 280 && az <= 350) || (az >= 40 && az <= 165)) { r = 0.5; g = 0.8; b = 0.7; }
    else { r = 0.4; g = 0.42; b = 0.46; }
    wallColors.push(r, g, b); wallColors.push(r, g, b);

    if (i > 0) {
      var base = (i - 1) * 2;
      wallIndices.push(base, base + 1, base + 2);
      wallIndices.push(base + 1, base + 3, base + 2);
    }
  }

  var wallGeo = new THREE.BufferGeometry();
  wallGeo.setAttribute('position', new THREE.Float32BufferAttribute(wallPositions, 3));
  wallGeo.setAttribute('color', new THREE.Float32BufferAttribute(wallColors, 3));
  wallGeo.setIndex(wallIndices);
  wallGeo.computeVertexNormals();
  scene.add(new THREE.Mesh(wallGeo, new THREE.MeshPhongMaterial({
    vertexColors: true, flatShading: true, side: THREE.DoubleSide,
    transparent: true, opacity: 0.85,
  })));

  // Horizon outline
  var outlinePoints = [];
  for (var i = 0; i <= 360; i++) outlinePoints.push(azElevToPos(i % 360, horizon[i % 360]));
  scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(outlinePoints),
    new THREE.LineBasicMaterial({ color: 0x7effd4, linewidth: 2 })));

  // ── Labels ─────────────────────────────────────────────────────────
  function addLabel(text, x, y, z, color) {
    var c = document.createElement('canvas');
    c.width = 128; c.height = 48;
    var ctx = c.getContext('2d');
    ctx.font = 'bold 28px IBM Plex Mono, monospace';
    ctx.fillStyle = color || '#888';
    ctx.textAlign = 'center';
    ctx.fillText(text, 64, 34);
    var sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true }));
    sp.position.set(x, y, z);
    sp.scale.set(8, 3, 1);
    scene.add(sp);
  }

  [{ az: 0, t: 'N' }, { az: 90, t: 'E' }, { az: 180, t: 'S' }, { az: 270, t: 'W' }].forEach(function (l) {
    var pos = azElevToPos(l.az, 0, wallRadius + 10);
    addLabel(l.t, pos.x, 3, pos.z, '#888');
  });
  var juraPos = azElevToPos(315, horizon[315], wallRadius);
  addLabel('Jura', juraPos.x, horizon[315] * elevScale + 6, juraPos.z, '#7effd4');
  var alpPos = azElevToPos(110, horizon[110], wallRadius);
  addLabel('Alpes', alpPos.x, horizon[110] * elevScale + 6, alpPos.z, '#7effd4');
  var lacPos = azElevToPos(215, 0, wallRadius + 10);
  addLabel('Lac', lacPos.x, 3, lacPos.z, '#7effd4');

  // ── Sample rays ────────────────────────────────────────────────────
  var rayMat = new THREE.LineBasicMaterial({ color: 0x333840, transparent: true, opacity: 0.3 });
  [0, 45, 90, 135, 180, 225, 270, 315].forEach(function (az) {
    var pts = [new THREE.Vector3(0, 0.5, 0), azElevToPos(az, horizon[az])];
    scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), rayMat));
    for (var d = 10; d <= wallRadius; d += 10) {
      var rad = azToRad(az);
      var dot = new THREE.Mesh(new THREE.SphereGeometry(0.3, 6, 6), new THREE.MeshBasicMaterial({ color: 0x556677 }));
      dot.position.set(Math.cos(rad) * d, 0.3, -Math.sin(rad) * d);
      scene.add(dot);
    }
  });

  // ── Sun path arcs (switchable) ─────────────────────────────────────
  var sunArcGroup = new THREE.Group();
  scene.add(sunArcGroup);
  var sunMarkerGroup = new THREE.Group();
  scene.add(sunMarkerGroup);

  var seasonColors = { march: 0xffe066, summer: 0xff9944, winter: 0x66aaff };
  var seasonLabels = {
    march: '8 mars (equinoxe) — 99° a 261°',
    summer: '21 juin (solstice) — 57° a 301°',
    winter: '21 dec (solstice) — 133° a 227°'
  };
  var currentSeason = 'march';

  function drawSunArc(season) {
    while (sunArcGroup.children.length) sunArcGroup.remove(sunArcGroup.children[0]);
    var path = sunPaths[season];
    var color = seasonColors[season];

    // Arc line — OUTSIDE the wall
    var arcPoints = [];
    path.forEach(function (sp) { arcPoints.push(azElevToPos(sp.az, sp.alt, sunArcRadius)); });
    sunArcGroup.add(new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(arcPoints),
      new THREE.LineBasicMaterial({ color: color, linewidth: 2 })
    ));

    // Hour markers
    path.forEach(function (sp) {
      if (sp.h % 2 === 0 || sp.h === path[0].h || sp.h === path[path.length - 1].h) {
        var pos = azElevToPos(sp.az, sp.alt, sunArcRadius);
        var dot = new THREE.Mesh(new THREE.SphereGeometry(0.5, 8, 8), new THREE.MeshBasicMaterial({ color: color }));
        dot.position.copy(pos);
        sunArcGroup.add(dot);

        var c = document.createElement('canvas');
        c.width = 64; c.height = 32;
        var ctx = c.getContext('2d');
        ctx.font = '18px IBM Plex Mono, monospace';
        ctx.fillStyle = '#' + color.toString(16).padStart(6, '0');
        ctx.textAlign = 'center';
        ctx.fillText(Math.floor(sp.h) + 'h', 32, 22);
        var label = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true }));
        label.position.set(pos.x, pos.y + 3.5, pos.z);
        label.scale.set(5, 2.5, 1);
        sunArcGroup.add(label);
      }
    });

    // Update info
    var info = container.querySelector('.viz-season-info');
    if (info) info.textContent = seasonLabels[season];
  }

  function updateSunMarker(hour) {
    while (sunMarkerGroup.children.length) sunMarkerGroup.remove(sunMarkerGroup.children[0]);
    var path = sunPaths[currentSeason];
    var sp = null;
    for (var i = 0; i < path.length - 1; i++) {
      if (hour >= path[i].h && hour <= path[i + 1].h) {
        var t = (hour - path[i].h) / (path[i + 1].h - path[i].h);
        sp = { az: path[i].az + t * (path[i + 1].az - path[i].az), alt: path[i].alt + t * (path[i + 1].alt - path[i].alt) };
        break;
      }
    }
    if (!sp) return;

    var pos = azElevToPos(sp.az, sp.alt, sunArcRadius);
    var azIdx = Math.round(sp.az) % 360;
    var blocked = sp.alt < horizon[azIdx];
    var color = blocked ? 0xff6b6b : seasonColors[currentSeason];

    var sunSphere = new THREE.Mesh(new THREE.SphereGeometry(1.8, 16, 16), new THREE.MeshBasicMaterial({ color: color }));
    sunSphere.position.copy(pos);
    sunMarkerGroup.add(sunSphere);

    sunMarkerGroup.add(new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 1, 0), pos]),
      new THREE.LineBasicMaterial({ color: color, transparent: true, opacity: 0.4 })
    ));

    if (blocked) {
      var wallPos = azElevToPos(sp.az, horizon[azIdx]);
      var blockDot = new THREE.Mesh(new THREE.SphereGeometry(1, 12, 12), new THREE.MeshBasicMaterial({ color: 0xff6b6b }));
      blockDot.position.copy(wallPos);
      sunMarkerGroup.add(blockDot);
    }
  }

  drawSunArc('march');
  updateSunMarker(17.5);

  // ── UI ─────────────────────────────────────────────────────────────
  var infoDiv = document.createElement('div');
  infoDiv.className = 'viz-ui';
  infoDiv.innerHTML =
    '<div class="viz-controls">' +
    '<button class="viz-mode-btn active" data-season="march">Mars</button>' +
    '<button class="viz-mode-btn" data-season="summer">Ete (juin)</button>' +
    '<button class="viz-mode-btn" data-season="winter">Hiver (dec)</button>' +
    '</div>' +
    '<div class="viz-info">' +
    '<span class="viz-info-title">Masque d\'horizon (360°, mis en cache pour toute l\'annee)</span>' +
    '<span class="viz-info-desc viz-season-info">' + seasonLabels.march + '</span>' +
    '</div>';
  container.appendChild(infoDiv);

  container.querySelectorAll('.viz-mode-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      currentSeason = this.dataset.season;
      container.querySelectorAll('.viz-mode-btn').forEach(function (b) {
        b.classList.toggle('active', b.dataset.season === currentSeason);
      });
      drawSunArc(currentSeason);
      var path = sunPaths[currentSeason];
      // Reset slider range to match season
      var slider = document.getElementById('horizon-slider');
      if (slider) {
        slider.min = String(path[0].h);
        slider.max = String(path[path.length - 1].h);
        var mid = (path[0].h + path[path.length - 1].h) / 2;
        slider.value = String(mid);
        updateSunMarker(mid);
        var hh = Math.floor(mid);
        var mm = Math.round((mid - hh) * 60);
        var tl = document.getElementById('horizon-time');
        if (tl) tl.textContent = hh + 'h' + (mm < 10 ? '0' : '') + mm;
      }
    });
  });

  // ── Animation ──────────────────────────────────────────────────────
  (function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  })();

  var slider = document.getElementById('horizon-slider');
  var timeLabel = document.getElementById('horizon-time');
  if (slider) {
    slider.addEventListener('input', function () {
      var hour = parseFloat(this.value);
      var h = Math.floor(hour);
      var m = Math.round((hour - h) * 60);
      timeLabel.textContent = h + 'h' + (m < 10 ? '0' : '') + m;
      updateSunMarker(hour);
    });
  }

  window.addEventListener('resize', function () {
    var w = container.clientWidth;
    camera.aspect = w / HEIGHT;
    camera.updateProjectionMatrix();
    renderer.setSize(w, HEIGHT);
  });
})();
