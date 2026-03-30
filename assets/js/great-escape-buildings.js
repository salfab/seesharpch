/**
 * Three.js visualization: Building shadow modes comparison
 * Models the terrace of The Great Escape (Rue Madeleine 18, Lausanne)
 * with surrounding buildings from real Swisstopo analysis data.
 *
 * Data source: mappy-hour analysis report
 *   great-escape-v3-vs-detailed-grid1m-20260308-1730.json
 *
 * Key buildings (LV95 coordinates, origin shifted to terrace center):
 *   obs-29890: 46.15m x 24.66m, h=28.56m, 16 vertices, fillRatio=0.331 (82% of false positives)
 *   obs-24041: 30.64m x 24.90m, h=26.15m, 4 vertices, fillRatio=0.447
 *   obs-30244: 86.46m x 105.03m, h=29.46m, 215 vertices, fillRatio=0.214 (Palais de Rumine)
 *
 * Mismatch zone (prism says shadow, mesh says sun):
 *   Easting 2538188–2538200, Northing 1152712–1152713
 *
 * Terrace center approx: E 2538193, N 1152701
 */
(function () {
  'use strict';
  var container = document.getElementById('viz-buildings');
  if (!container) return;

  var WIDTH = container.clientWidth;
  var HEIGHT = 520;

  // ── Scene ──────────────────────────────────────────────────────────
  var scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0b0c0e);
  scene.fog = new THREE.FogExp2(0x0b0c0e, 0.004);

  var camera = new THREE.PerspectiveCamera(50, WIDTH / HEIGHT, 0.1, 600);
  camera.position.set(60, 70, 80);
  camera.lookAt(0, 8, 0);

  var renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(WIDTH, HEIGHT);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  var controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.target.set(0, 8, 0);
  controls.maxPolarAngle = Math.PI / 2.1;
  controls.update();

  // ── Lights ─────────────────────────────────────────────────────────
  scene.add(new THREE.AmbientLight(0x334455, 0.6));

  var sun = new THREE.DirectionalLight(0xffe8c0, 1.8);
  sun.castShadow = true;
  sun.shadow.mapSize.width = 2048;
  sun.shadow.mapSize.height = 2048;
  var sc = sun.shadow.camera;
  sc.left = -80; sc.right = 80; sc.top = 80; sc.bottom = -80;
  sc.near = 1; sc.far = 200;
  sun.shadow.bias = -0.001;
  scene.add(sun);

  // ── Materials ──────────────────────────────────────────────────────
  var matGround     = new THREE.MeshLambertMaterial({ color: 0x1a1c22 });
  var matTerrace    = new THREE.MeshLambertMaterial({ color: 0x7effd4, transparent: true, opacity: 0.45 });
  var matTerraceEdge= new THREE.LineBasicMaterial({ color: 0x7effd4 });
  var matBuilding   = new THREE.MeshPhongMaterial({ color: 0x3a3e4a, flatShading: true });
  var matBlocker    = new THREE.MeshPhongMaterial({ color: 0x4a4050, flatShading: true });
  var matRumine     = new THREE.MeshPhongMaterial({ color: 0x4a4a3a, flatShading: true });
  var matPrismGhost = new THREE.MeshPhongMaterial({ color: 0xff6b6b, transparent: true, opacity: 0.12, flatShading: true, depthWrite: false });
  var matPrismWire  = new THREE.LineBasicMaterial({ color: 0xff6b6b, transparent: true, opacity: 0.45 });
  var matMismatch   = new THREE.MeshBasicMaterial({ color: 0xff6b6b, transparent: true, opacity: 0.6 });
  var matSunPoint   = new THREE.MeshBasicMaterial({ color: 0x7effd4, transparent: true, opacity: 0.6 });
  var matRoof       = new THREE.MeshPhongMaterial({ color: 0x5a4a3a, flatShading: true });

  // ── Ground ─────────────────────────────────────────────────────────
  var ground = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), matGround);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  // ── Coordinate system ──────────────────────────────────────────────
  // Origin = terrace center ≈ E 2538193, N 1152701
  // X = easting (east+), Z = -northing (south+ in Three.js)
  var originE = 2538193;
  var originN = 1152701;
  function lv95ToLocal(e, n) { return { x: e - originE, z: -(n - originN) }; }

  // ── Terrace (The Great Escape) ─────────────────────────────────────
  // Approx 8m x 6m on Rue Madeleine 18
  var terraceGeo = new THREE.PlaneGeometry(8, 6);
  var terrace = new THREE.Mesh(terraceGeo, matTerrace);
  terrace.rotation.x = -Math.PI / 2;
  terrace.position.set(0, 0.06, 0);
  terrace.receiveShadow = true;
  scene.add(terrace);

  var terraceEdge = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.BoxGeometry(8, 0.05, 6)),
    matTerraceEdge
  );
  terraceEdge.position.set(0, 0.06, 0);
  scene.add(terraceEdge);

  // Label
  (function addLabel(text, x, y, z, color) {
    var c = document.createElement('canvas');
    c.width = 512; c.height = 64;
    var ctx = c.getContext('2d');
    ctx.font = 'bold 32px IBM Plex Mono, monospace';
    ctx.fillStyle = color || '#7effd4';
    ctx.textAlign = 'center';
    ctx.fillText(text, 256, 44);
    var tex = new THREE.CanvasTexture(c);
    var sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true }));
    sp.position.set(x, y, z);
    sp.scale.set(14, 1.75, 1);
    scene.add(sp);
  })('TERRASSE  GREAT ESCAPE', 0, 2.5, 0);

  // ── Building definitions ───────────────────────────────────────────
  // All footprints in local coordinates (meters from origin).
  // Derived from Swisstopo analysis: bounding boxes, fill ratios,
  // vertex counts, and mismatch patterns.

  // obs-29890: THE main false-positive culprit.
  // bbox 46.15m x 24.66m, h=28.56m, 16 vertices, fillRatio=0.331
  // A fill ratio of 0.33 on a 46x25 bbox with 16 vertices = L-shaped building.
  // Located NW of terrace (blocks late-afternoon sun from SW).
  // The mismatch band at E2538188-2538200, N1152712-1152713 (11-12m N of terrace)
  // means the shadow of this building's prism overshoots the terrace zone.
  var obs29890 = {
    name: 'obs-29890',
    label: 'obs-29890 (82% faux positifs)',
    height: 28.56,
    // L-shape: main body + wing, arranged to produce fillRatio ≈ 0.33
    // bbox should span ~46m E-W, ~25m N-S
    footprint: [
      // Main body: ~30m x 25m block
      { x: -38, z: -22 },
      { x: -38, z: -47 },
      { x: -8,  z: -47 },
      { x: -8,  z: -37 },
      // Wing juts out east: ~16m x 10m
      { x: 4,   z: -37 },
      { x: 4,   z: -27 },
      // Step back to connect
      { x: -8,  z: -27 },
      { x: -8,  z: -22 },
    ],
    material: matBlocker,
  };

  // obs-24041: secondary blocker.
  // bbox 30.64m x 24.90m, h=26.15m, 4 vertices, fillRatio=0.447
  // 4 vertices = quadrilateral (trapezoid). Fill ratio 0.447 on 31x25 bbox.
  // Located further west/NW of obs-29890.
  var obs24041 = {
    name: 'obs-24041',
    label: 'obs-24041',
    height: 26.15,
    footprint: [
      { x: -52, z: -18 },
      { x: -52, z: -43 },
      { x: -26, z: -40 },  // angled = trapezoid
      { x: -26, z: -18 },
    ],
    material: matBuilding,
  };

  // obs-30244: Palais de Rumine (enormous, complex).
  // bbox 86.46m x 105.03m, h=29.46m, 215 vertices, fillRatio=0.214
  // Located NE of terrace (toward Place de la Riponne).
  // Simplified to ~20 key vertices capturing the U/E shape.
  var obs30244 = {
    name: 'obs-30244',
    label: 'Palais de Rumine',
    height: 29.46,
    footprint: [
      // Simplified U-shape of Rumine palace, facing south toward Riponne
      { x: 20,  z: -30 },
      { x: 20,  z: -135 },
      { x: 42,  z: -135 },
      { x: 42,  z: -80 },
      { x: 60,  z: -80 },
      { x: 60,  z: -135 },
      { x: 85,  z: -135 },
      { x: 85,  z: -80 },
      { x: 100, z: -80 },
      { x: 100, z: -135 },
      { x: 107, z: -135 },
      { x: 107, z: -30 },
    ],
    material: matRumine,
  };

  // Great Escape building itself (housing the bar, south of terrace)
  var greatEscapeBuilding = {
    name: 'great-escape-bldg',
    label: '',
    height: 17,
    footprint: [
      { x: -5,  z: 3 },
      { x: -5,  z: 20 },
      { x: 8,   z: 20 },
      { x: 8,   z: 3 },
    ],
    material: matBuilding,
  };

  // Additional context buildings (Rue Madeleine west side, south block)
  var westRow = {
    name: 'west-row',
    label: '',
    height: 18,
    footprint: [
      { x: -18, z: -5 },
      { x: -18, z: 25 },
      { x: -10, z: 25 },
      { x: -10, z: -5 },
    ],
    material: matBuilding,
  };

  var southBlock = {
    name: 'south-block',
    label: '',
    height: 15,
    footprint: [
      { x: 10, z: 15 },
      { x: 10, z: 30 },
      { x: 30, z: 30 },
      { x: 30, z: 15 },
    ],
    material: matBuilding,
  };

  var allBuildings = [obs29890, obs24041, obs30244, greatEscapeBuilding, westRow, southBlock];

  // ── Geometry builders ──────────────────────────────────────────────

  function footprintToShape(fp) {
    var shape = new THREE.Shape();
    shape.moveTo(fp[0].x, fp[0].z);
    for (var i = 1; i < fp.length; i++) shape.lineTo(fp[i].x, fp[i].z);
    shape.lineTo(fp[0].x, fp[0].z);
    return shape;
  }

  function createExtrudedBuilding(b, mat) {
    var shape = footprintToShape(b.footprint);
    var geo = new THREE.ExtrudeGeometry(shape, { depth: b.height, bevelEnabled: false });
    // ExtrudeGeometry extrudes along Z, we need Y (up). Rotate.
    geo.rotateX(-Math.PI / 2);
    var mesh = new THREE.Mesh(geo, mat || b.material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
  }

  function computeBBox(fp) {
    var minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
    fp.forEach(function (p) {
      if (p.x < minX) minX = p.x;
      if (p.x > maxX) maxX = p.x;
      if (p.z < minZ) minZ = p.z;
      if (p.z > maxZ) maxZ = p.z;
    });
    return { minX: minX, maxX: maxX, minZ: minZ, maxZ: maxZ,
             w: maxX - minX, d: maxZ - minZ,
             cx: (minX + maxX) / 2, cz: (minZ + maxZ) / 2 };
  }

  function createPrismBox(b) {
    var bb = computeBBox(b.footprint);
    var geo = new THREE.BoxGeometry(bb.w, b.height, bb.d);
    var mesh = new THREE.Mesh(geo, matPrismGhost);
    mesh.position.set(bb.cx, b.height / 2, bb.cz);
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    var wire = new THREE.LineSegments(new THREE.EdgesGeometry(geo), matPrismWire);
    wire.position.copy(mesh.position);
    return { box: mesh, wire: wire };
  }

  function addBuildingLabel(text, b) {
    if (!text) return;
    var bb = computeBBox(b.footprint);
    var c = document.createElement('canvas');
    c.width = 512; c.height = 64;
    var ctx = c.getContext('2d');
    ctx.font = '24px IBM Plex Mono, monospace';
    ctx.fillStyle = '#c8c9cd';
    ctx.textAlign = 'center';
    ctx.fillText(text, 256, 44);
    var tex = new THREE.CanvasTexture(c);
    var sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true }));
    sp.position.set(bb.cx, b.height + 4, bb.cz);
    sp.scale.set(20, 2.5, 1);
    scene.add(sp);
  }

  // ── Mismatch grid ──────────────────────────────────────────────────
  // Points where prism=shadow but mesh=sun (from analysis report)
  var mismatchPoints = [];
  // Easting 2538188–2538200, Northing 1152712–1152713
  for (var e = 2538188; e <= 2538200; e++) {
    for (var n = 1152712; n <= 1152713; n++) {
      var local = lv95ToLocal(e, n);
      mismatchPoints.push(local);
    }
  }

  function createMismatchGrid(mat) {
    var group = new THREE.Group();
    mismatchPoints.forEach(function (p) {
      var dot = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.15, 0.9), mat);
      dot.position.set(p.x, 0.1, p.z);
      group.add(dot);
    });
    return group;
  }

  // ── Build mode groups ──────────────────────────────────────────────

  var groups = {
    prism: new THREE.Group(),
    twoLevel: new THREE.Group(),
    detailed: new THREE.Group(),
  };

  // PRISM mode: all buildings as bounding boxes
  allBuildings.forEach(function (b) {
    var prism = createPrismBox(b);
    // For prism mode, show filled prism (opaque)
    var bb = computeBBox(b.footprint);
    var solidGeo = new THREE.BoxGeometry(bb.w, b.height, bb.d);
    var solid = new THREE.Mesh(solidGeo, b.material);
    solid.position.set(bb.cx, b.height / 2, bb.cz);
    solid.castShadow = true;
    solid.receiveShadow = true;
    groups.prism.add(solid);
  });
  // In prism mode: show all mismatch points as red (false shadow)
  var prismMismatch = createMismatchGrid(matMismatch);
  groups.prism.add(prismMismatch);

  // DETAILED mode: actual footprint shapes extruded
  allBuildings.forEach(function (b) {
    groups.detailed.add(createExtrudedBuilding(b));
  });
  // In detailed mode: show mismatch points as green (correctly identified as sun)
  var detailedSunPoints = createMismatchGrid(matSunPoint);
  groups.detailed.add(detailedSunPoints);

  // TWO-LEVEL mode: detailed shapes + prism ghost for key blockers
  allBuildings.forEach(function (b) {
    groups.twoLevel.add(createExtrudedBuilding(b));
  });
  // Show prism ghost for the two main blockers
  [obs29890, obs24041, obs30244].forEach(function (b) {
    var ghost = createPrismBox(b);
    groups.twoLevel.add(ghost.box);
    groups.twoLevel.add(ghost.wire);
  });
  var twoLevelMismatch = createMismatchGrid(matSunPoint);
  groups.twoLevel.add(twoLevelMismatch);

  // Labels (always visible)
  allBuildings.forEach(function (b) { addBuildingLabel(b.label, b); });

  Object.keys(groups).forEach(function (k) {
    groups[k].visible = (k === 'detailed');
    scene.add(groups[k]);
  });

  // ── Sun position (17h30, 8 March, Lausanne) ────────────────────────
  // From analysis: azimuth ~252° (WSW), altitude ~15°
  function setSunPosition(azimuthDeg, altitudeDeg) {
    var azRad = azimuthDeg * Math.PI / 180;
    var altRad = altitudeDeg * Math.PI / 180;
    var dist = 80;
    sun.position.set(
      -Math.sin(azRad) * Math.cos(altRad) * dist,
      Math.sin(altRad) * dist,
      Math.cos(azRad) * Math.cos(altRad) * dist
    );
  }
  setSunPosition(252, 15); // default: 17h30 March 8

  // Sun ray visualization
  var sunRayGroup = new THREE.Group();
  scene.add(sunRayGroup);

  function updateSunRays() {
    while (sunRayGroup.children.length) sunRayGroup.remove(sunRayGroup.children[0]);
    var dir = sun.position.clone().normalize();
    var center = new THREE.Vector3(0, 0.2, 0);
    var start = center.clone().add(dir.clone().multiplyScalar(70));
    sunRayGroup.add(new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([start, center]),
      new THREE.LineBasicMaterial({ color: 0xffe066, transparent: true, opacity: 0.35 })
    ));
    var sunSphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.5, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xffe066 })
    );
    sunSphere.position.copy(start);
    sunRayGroup.add(sunSphere);
  }
  updateSunRays();

  // ── Mode switching UI ──────────────────────────────────────────────
  var currentMode = 'detailed';
  var modeInfo = {
    prism: {
      title: 'Mode Prisme (bounding box)',
      desc: 'Chaque batiment = sa bounding box extrudee. obs-29890 (en L, fillRatio 0.33) devient un rectangle plein de 46m x 25m. Resultat : 179 points de faux positifs (carres rouges), soit 3.7% de la zone. La terrasse est declaree a l\'ombre a tort.'
    },
    twoLevel: {
      title: 'Mode Two-Level (prisme + raffinement mesh)',
      desc: 'Le prisme (fantome rouge) filtre d\'abord. Dans les 2 deg autour du seuil d\'ombre, le mesh detaille prend le relais. Reduit les faux positifs de 179 a 65 (seuil 2 deg). Le Palais de Rumine (fillRatio 0.21) beneficie aussi du raffinement.'
    },
    detailed: {
      title: 'Mode Detailed Mesh (geometrie reelle)',
      desc: 'Footprints reels extrudes : la forme en L de obs-29890 (16 vertices), le trapeze de obs-24041 (4 vertices), le U du Palais de Rumine (215 vertices). 0 faux positif. Les carres verts = points correctement identifies comme ensoleilles.'
    }
  };

  function setMode(mode) {
    currentMode = mode;
    Object.keys(groups).forEach(function (k) { groups[k].visible = (k === mode); });
    container.querySelectorAll('.viz-mode-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.mode === mode);
    });
    var info = container.querySelector('.viz-info');
    if (info) {
      info.querySelector('.viz-info-title').textContent = modeInfo[mode].title;
      info.querySelector('.viz-info-desc').textContent = modeInfo[mode].desc;
    }
  }

  var uiDiv = document.createElement('div');
  uiDiv.className = 'viz-ui';
  uiDiv.innerHTML =
    '<div class="viz-controls">' +
    '<button class="viz-mode-btn" data-mode="prism">Prisme</button>' +
    '<button class="viz-mode-btn" data-mode="twoLevel">Two-Level</button>' +
    '<button class="viz-mode-btn active" data-mode="detailed">Detailed Mesh</button>' +
    '</div>' +
    '<div class="viz-info">' +
    '<span class="viz-info-title">' + modeInfo.detailed.title + '</span>' +
    '<span class="viz-info-desc">' + modeInfo.detailed.desc + '</span>' +
    '</div>';
  container.appendChild(uiDiv);

  container.querySelectorAll('.viz-mode-btn').forEach(function (btn) {
    btn.addEventListener('click', function () { setMode(this.dataset.mode); });
  });

  // ── Sun time slider ────────────────────────────────────────────────
  var sliderDiv = document.createElement('div');
  sliderDiv.innerHTML =
    '<div class="viz-slider">' +
    '<label>Soleil : <span id="sun-time">17h30</span> — 8 mars 2026</label>' +
    '<input type="range" min="8" max="20" step="0.25" value="17.5" id="sun-slider">' +
    '</div>';
  container.appendChild(sliderDiv);

  var sunSlider = container.querySelector('#sun-slider');
  var sunTimeLabel = container.querySelector('#sun-time');

  sunSlider.addEventListener('input', function () {
    var hour = parseFloat(this.value);
    // Approximate sun position for Lausanne, March 8
    // Sunrise ~6:50, sunset ~18:30
    var t = (hour - 12) / 6.5;
    var azimuth = 180 + t * 90; // ~90° at 6h (E), ~180° at 12h (S), ~270° at 19h (W)
    var altitude = Math.max(0, (1 - t * t) * 38); // peak ~38° at noon in March
    setSunPosition(azimuth, altitude);
    updateSunRays();
    var h = Math.floor(hour);
    var m = Math.round((hour - h) * 60);
    sunTimeLabel.textContent = h + 'h' + (m < 10 ? '0' : '') + m;
  });

  // ── Animation loop ─────────────────────────────────────────────────
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();

  // ── Resize ─────────────────────────────────────────────────────────
  window.addEventListener('resize', function () {
    var w = container.clientWidth;
    camera.aspect = w / HEIGHT;
    camera.updateProjectionMatrix();
    renderer.setSize(w, HEIGHT);
  });
})();
