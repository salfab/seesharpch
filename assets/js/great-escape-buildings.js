/**
 * Three.js visualization: Building shadow modes comparison
 * The Great Escape terrace (Rue Madeleine 18, Lausanne)
 * Using REAL Swisstopo SwissBUILDINGS3D data.
 *
 * Data loaded at runtime from:
 *   /assets/data/great-escape-buildings.json  (225 building obstacles with footprints)
 *   /assets/data/great-escape-meshes.json     (3 triangulated 3D meshes for key blockers)
 */
(function () {
  'use strict';
  var container = document.getElementById('viz-buildings');
  if (!container) return;

  var WIDTH = container.clientWidth;
  var HEIGHT = 520;
  var originE = 2538193;
  var originN = 1152701;

  function toLocal(e, n) { return { x: e - originE, z: -(n - originN) }; }

  function addLabel(scene, text, x, y, z, color) {
    var c = document.createElement('canvas');
    c.width = 512; c.height = 64;
    var ctx = c.getContext('2d');
    ctx.font = 'bold 24px IBM Plex Mono, monospace';
    ctx.fillStyle = color || '#c8c9cd';
    ctx.textAlign = 'center';
    ctx.fillText(text, 256, 44);
    var tex = new THREE.CanvasTexture(c);
    var sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true }));
    sp.position.set(x, y, z);
    sp.scale.set(18, 2.25, 1);
    scene.add(sp);
  }

  Promise.all([
    fetch('/assets/data/great-escape-buildings.json').then(function (r) { return r.json(); }),
    fetch('/assets/data/great-escape-meshes.json').then(function (r) { return r.json(); }),
  ]).then(function (data) {
    init(data[0], data[1]);
  }).catch(function (err) {
    container.innerHTML = '<p style="color:#ff6b6b;padding:2rem;">Erreur chargement: ' + err.message + '</p>';
  });

  function init(buildings, meshes) {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0b0c0e);
    scene.fog = new THREE.FogExp2(0x0b0c0e, 0.003);

    var camera = new THREE.PerspectiveCamera(50, WIDTH / HEIGHT, 0.1, 800);
    camera.position.set(80, 90, 100);
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

    scene.add(new THREE.AmbientLight(0x334455, 0.6));

    var sun = new THREE.DirectionalLight(0xffe8c0, 1.8);
    sun.castShadow = true;
    sun.shadow.mapSize.width = 2048;
    sun.shadow.mapSize.height = 2048;
    var sc = sun.shadow.camera;
    sc.left = -120; sc.right = 120; sc.top = 120; sc.bottom = -120;
    sc.near = 1; sc.far = 300;
    sun.shadow.bias = -0.001;
    scene.add(sun);

    // ── Materials ────────────────────────────────────────────────────
    var matGround      = new THREE.MeshLambertMaterial({ color: 0x1a1c22 });
    var matTerrace     = new THREE.MeshLambertMaterial({ color: 0x7effd4, transparent: true, opacity: 0.45 });
    var matTerraceEdge = new THREE.LineBasicMaterial({ color: 0x7effd4 });
    var matBuilding    = new THREE.MeshPhongMaterial({ color: 0x3a3e4a, flatShading: true });
    var matBlocker     = new THREE.MeshPhongMaterial({ color: 0x5a4050, flatShading: true });
    var matRumine      = new THREE.MeshPhongMaterial({ color: 0x5a5a3a, flatShading: true });
    var matMesh3D      = new THREE.MeshPhongMaterial({ color: 0x6a7a8a, flatShading: true, side: THREE.DoubleSide });
    var matPrismGhost  = new THREE.MeshPhongMaterial({ color: 0xff6b6b, transparent: true, opacity: 0.12, flatShading: true, depthWrite: false });
    var matPrismWire   = new THREE.LineBasicMaterial({ color: 0xff6b6b, transparent: true, opacity: 0.45 });
    var matMismatch    = new THREE.MeshBasicMaterial({ color: 0xff6b6b, transparent: true, opacity: 0.6 });
    var matSunPoint    = new THREE.MeshBasicMaterial({ color: 0x7effd4, transparent: true, opacity: 0.6 });

    // ── Ground + Terrace ─────────────────────────────────────────────
    var ground = new THREE.Mesh(new THREE.PlaneGeometry(300, 300), matGround);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    var terrace = new THREE.Mesh(new THREE.PlaneGeometry(8, 6), matTerrace);
    terrace.rotation.x = -Math.PI / 2;
    terrace.position.set(0, 0.06, 0);
    terrace.receiveShadow = true;
    scene.add(terrace);

    var te = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(8, 0.05, 6)), matTerraceEdge);
    te.position.set(0, 0.06, 0);
    scene.add(te);

    addLabel(scene, 'TERRASSE  GREAT ESCAPE', 0, 3, 0, '#7effd4');

    // ── Index meshes by ID ───────────────────────────────────────────
    var meshById = {};
    meshes.forEach(function (m) { meshById[m.obstacleId] = m; });

    // ── Identify key blockers ────────────────────────────────────────
    var blockerIds = { main: null, secondary: null, rumine: null };
    buildings.forEach(function (b) {
      var w = Math.round(b.maxX - b.minX);
      var d = Math.round(b.maxY - b.minY);
      if (w === 46 && d === 25 && b.height > 28) blockerIds.main = b.id;
      if (w === 31 && d === 25 && b.footprint && b.footprint.length === 4) blockerIds.secondary = b.id;
      if (w === 86 && d === 105) blockerIds.rumine = b.id;
    });

    // ── Geometry builders ────────────────────────────────────────────

    function createExtruded(b, mat) {
      if (!b.footprint || b.footprint.length < 3) return null;
      var shape = new THREE.Shape();
      var p0 = toLocal(b.footprint[0].x, b.footprint[0].y);
      shape.moveTo(p0.x, -p0.z);
      for (var i = 1; i < b.footprint.length; i++) {
        var p = toLocal(b.footprint[i].x, b.footprint[i].y);
        shape.lineTo(p.x, -p.z);
      }
      shape.lineTo(p0.x, -p0.z);
      var geo = new THREE.ExtrudeGeometry(shape, { depth: b.height, bevelEnabled: false });
      geo.rotateX(-Math.PI / 2);
      var mesh = new THREE.Mesh(geo, mat);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      return mesh;
    }

    function createPrism(b, mat) {
      var c1 = toLocal(b.minX, b.minY);
      var c2 = toLocal(b.maxX, b.maxY);
      var w = Math.abs(c2.x - c1.x);
      var d = Math.abs(c2.z - c1.z);
      var cx = (c1.x + c2.x) / 2;
      var cz = (c1.z + c2.z) / 2;
      var geo = new THREE.BoxGeometry(w, b.height, d);
      var box = new THREE.Mesh(geo, mat);
      box.position.set(cx, b.height / 2, cz);
      box.castShadow = true;
      box.receiveShadow = true;
      return box;
    }

    function createPrismGhostWire(b) {
      var c1 = toLocal(b.minX, b.minY);
      var c2 = toLocal(b.maxX, b.maxY);
      var w = Math.abs(c2.x - c1.x);
      var d = Math.abs(c2.z - c1.z);
      var cx = (c1.x + c2.x) / 2;
      var cz = (c1.z + c2.z) / 2;
      var geo = new THREE.BoxGeometry(w, b.height, d);
      var ghost = new THREE.Mesh(geo, matPrismGhost);
      ghost.position.set(cx, b.height / 2, cz);
      var wire = new THREE.LineSegments(new THREE.EdgesGeometry(geo), matPrismWire);
      wire.position.set(cx, b.height / 2, cz);
      return { ghost: ghost, wire: wire };
    }

    function createTriMesh(meshData, mat) {
      var positions = [];
      meshData.triangles.forEach(function (tri) {
        for (var i = 0; i < 3; i++) {
          var v = tri[i];
          var local = toLocal(v.x, v.y);
          positions.push(local.x, v.z, local.z);
        }
      });
      var geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geo.computeVertexNormals();
      var mesh = new THREE.Mesh(geo, mat);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      return mesh;
    }

    function createMismatchGrid(mat) {
      var group = new THREE.Group();
      for (var e = 2538188; e <= 2538200; e++) {
        for (var n = 1152712; n <= 1152713; n++) {
          var p = toLocal(e, n);
          var dot = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.15, 0.9), mat);
          dot.position.set(p.x, 0.1, p.z);
          group.add(dot);
        }
      }
      return group;
    }

    // ── Filter buildings ─────────────────────────────────────────────
    var nearBuildings = buildings.filter(function (b) {
      var dx = b.centerX - originE;
      var dy = b.centerY - originN;
      return Math.sqrt(dx * dx + dy * dy) < 120;
    });

    function getMat(b) {
      if (b.id === blockerIds.main) return matBlocker;
      if (b.id === blockerIds.rumine) return matRumine;
      return matBuilding;
    }

    // ── Build groups ─────────────────────────────────────────────────
    var groups = { prism: new THREE.Group(), twoLevel: new THREE.Group(), detailed: new THREE.Group() };

    nearBuildings.forEach(function (b) {
      var mat = getMat(b);

      // PRISM: bounding box
      groups.prism.add(createPrism(b, mat));

      // DETAILED: real mesh or extruded footprint
      if (meshById[b.id]) {
        groups.detailed.add(createTriMesh(meshById[b.id], matMesh3D));
      } else {
        var ext = createExtruded(b, mat);
        if (ext) groups.detailed.add(ext);
      }

      // TWO-LEVEL: detailed + ghost for blockers
      if (meshById[b.id]) {
        groups.twoLevel.add(createTriMesh(meshById[b.id], matMesh3D));
      } else {
        var ext2 = createExtruded(b, mat);
        if (ext2) groups.twoLevel.add(ext2);
      }
      if (b.id === blockerIds.main || b.id === blockerIds.secondary || b.id === blockerIds.rumine) {
        var gw = createPrismGhostWire(b);
        groups.twoLevel.add(gw.ghost);
        groups.twoLevel.add(gw.wire);
      }
    });

    groups.prism.add(createMismatchGrid(matMismatch));
    groups.detailed.add(createMismatchGrid(matSunPoint));
    groups.twoLevel.add(createMismatchGrid(matSunPoint));

    // Labels
    [blockerIds.main, blockerIds.secondary, blockerIds.rumine].forEach(function (id) {
      if (!id) return;
      var b = buildings.find(function (ob) { return ob.id === id; });
      if (!b) return;
      var c = toLocal(b.centerX, b.centerY);
      var label = id === blockerIds.rumine ? 'Palais de Rumine' :
                  id === blockerIds.main ? b.id + ' (82% faux positifs)' : b.id;
      addLabel(scene, label, c.x, b.height + 5, c.z, id === blockerIds.main ? '#ff6b6b' : '#c8c9cd');
    });

    Object.keys(groups).forEach(function (k) {
      groups[k].visible = (k === 'detailed');
      scene.add(groups[k]);
    });

    // ── Sun ──────────────────────────────────────────────────────────
    function setSunPosition(azDeg, altDeg) {
      var azRad = azDeg * Math.PI / 180;
      var altRad = altDeg * Math.PI / 180;
      var dist = 120;
      sun.position.set(
        -Math.sin(azRad) * Math.cos(altRad) * dist,
        Math.sin(altRad) * dist,
        Math.cos(azRad) * Math.cos(altRad) * dist
      );
    }
    setSunPosition(252, 15);

    var sunRayGroup = new THREE.Group();
    scene.add(sunRayGroup);
    function updateSunRays() {
      while (sunRayGroup.children.length) sunRayGroup.remove(sunRayGroup.children[0]);
      var dir = sun.position.clone().normalize();
      var center = new THREE.Vector3(0, 0.2, 0);
      var start = center.clone().add(dir.clone().multiplyScalar(100));
      sunRayGroup.add(new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([start, center]),
        new THREE.LineBasicMaterial({ color: 0xffe066, transparent: true, opacity: 0.35 })
      ));
      var ss = new THREE.Mesh(new THREE.SphereGeometry(2, 16, 16), new THREE.MeshBasicMaterial({ color: 0xffe066 }));
      ss.position.copy(start);
      sunRayGroup.add(ss);
    }
    updateSunRays();

    // ── Mode UI ──────────────────────────────────────────────────────
    var mainTriCount = meshById[blockerIds.main] ? meshById[blockerIds.main].triangles.length : '?';
    var rumineTriCount = meshById[blockerIds.rumine] ? meshById[blockerIds.rumine].triangles.length : '?';

    var modeInfo = {
      prism: {
        title: 'Mode Prisme (bounding box)',
        desc: nearBuildings.length + ' batiments reels. Chaque footprint = sa bounding box extrudee. Carres rouges = 26 points de faux positifs du rapport d\'analyse (prisme dit ombre, mesh dit soleil). Le bloqueur violet a un fill ratio de 0.33 : son prisme est 3x son vrai footprint.'
      },
      twoLevel: {
        title: 'Mode Two-Level (prisme + raffinement mesh)',
        desc: 'Fantomes rouges = bounding boxes des 3 bloqueurs. Les mesh 3D triangules (gris clair) prennent le relais dans la zone de transition (2 deg). Reduit les faux positifs de 179 a 65.'
      },
      detailed: {
        title: 'Mode Detailed Mesh (donnees Swisstopo reelles)',
        desc: 'Mesh 3D depuis DXF SwissBUILDINGS3D : ' + mainTriCount + ' triangles (bloqueur principal), ' + rumineTriCount + ' (Palais de Rumine). Autres batiments : footprints reels extrudes. Carres verts = points correctement identifies au soleil. 0 faux positif.'
      }
    };

    function setMode(mode) {
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

    var sliderDiv = document.createElement('div');
    sliderDiv.innerHTML =
      '<div class="viz-slider">' +
      '<label>Soleil : <span id="sun-time">17h30</span> — 8 mars 2026</label>' +
      '<input type="range" min="8" max="20" step="0.25" value="17.5" id="sun-slider">' +
      '</div>';
    container.appendChild(sliderDiv);
    container.querySelector('#sun-slider').addEventListener('input', function () {
      var hour = parseFloat(this.value);
      var t = (hour - 12) / 6.5;
      setSunPosition(180 + t * 90, Math.max(0, (1 - t * t) * 38));
      updateSunRays();
      var h = Math.floor(hour);
      var m = Math.round((hour - h) * 60);
      container.querySelector('#sun-time').textContent = h + 'h' + (m < 10 ? '0' : '') + m;
    });

    // ── Animate ──────────────────────────────────────────────────────
    (function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    })();

    window.addEventListener('resize', function () {
      var w = container.clientWidth;
      camera.aspect = w / HEIGHT;
      camera.updateProjectionMatrix();
      renderer.setSize(w, HEIGHT);
    });
  }
})();
