/**
 * Three.js visualization: Building shadow modes comparison
 * Models the terrace of The Great Escape (Rue Madeleine 18, Lausanne)
 * with surrounding buildings rendered in 3 modes: Prism, Two-Level, Detailed Mesh
 */
(function () {
  const container = document.getElementById('viz-buildings');
  if (!container) return;

  const WIDTH = container.clientWidth;
  const HEIGHT = 500;

  // --- Scene setup ---
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0b0c0e);
  scene.fog = new THREE.FogExp2(0x0b0c0e, 0.006);

  const camera = new THREE.PerspectiveCamera(50, WIDTH / HEIGHT, 0.1, 500);
  camera.position.set(45, 55, 60);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(WIDTH, HEIGHT);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  // --- Orbit controls ---
  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.target.set(0, 5, 0);
  controls.maxPolarAngle = Math.PI / 2.1;
  controls.update();

  // --- Lights ---
  const ambient = new THREE.AmbientLight(0x334455, 0.6);
  scene.add(ambient);

  const sun = new THREE.DirectionalLight(0xffe8c0, 1.8);
  sun.position.set(-30, 40, -20); // afternoon sun from SW
  sun.castShadow = true;
  sun.shadow.mapSize.width = 2048;
  sun.shadow.mapSize.height = 2048;
  sun.shadow.camera.left = -60;
  sun.shadow.camera.right = 60;
  sun.shadow.camera.top = 60;
  sun.shadow.camera.bottom = -60;
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 120;
  sun.shadow.bias = -0.001;
  scene.add(sun);

  // --- Materials ---
  const matGround = new THREE.MeshLambertMaterial({ color: 0x1a1c22 });
  const matTerrace = new THREE.MeshLambertMaterial({ color: 0x7effd4, transparent: true, opacity: 0.5 });
  const matTerraceEdge = new THREE.LineBasicMaterial({ color: 0x7effd4 });
  const matBuilding = new THREE.MeshPhongMaterial({ color: 0x3a3e4a, flatShading: true });
  const matBuildingGreat = new THREE.MeshPhongMaterial({ color: 0x4a5568, flatShading: true });
  const matPrismGhost = new THREE.MeshPhongMaterial({ color: 0xff6b6b, transparent: true, opacity: 0.15, flatShading: true });
  const matPrismWire = new THREE.LineBasicMaterial({ color: 0xff6b6b, transparent: true, opacity: 0.5 });
  const matRoof = new THREE.MeshPhongMaterial({ color: 0x5a4a3a, flatShading: true });
  const matTransition = new THREE.MeshPhongMaterial({ color: 0xffaa44, transparent: true, opacity: 0.3, flatShading: true });

  // --- Ground plane ---
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(120, 120),
    matGround
  );
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  // --- Terrace (The Great Escape) ---
  const terraceGeo = new THREE.PlaneGeometry(8, 6);
  const terrace = new THREE.Mesh(terraceGeo, matTerrace);
  terrace.rotation.x = -Math.PI / 2;
  terrace.position.set(-4, 0.05, 2);
  terrace.receiveShadow = true;
  scene.add(terrace);

  // Terrace border
  const terraceEdgeGeo = new THREE.EdgesGeometry(new THREE.BoxGeometry(8, 0.05, 6));
  const terraceEdge = new THREE.LineSegments(terraceEdgeGeo, matTerraceEdge);
  terraceEdge.position.set(-4, 0.05, 2);
  scene.add(terraceEdge);

  // Terrace label
  addLabel('TERRASSE', -4, 0.15, 2);

  // --- Building data ---
  // Modeled loosely after the area around Rue Madeleine 18
  // The Great Escape building is an L-shape (key for prism vs mesh comparison)

  const buildings = [
    {
      name: 'great-escape',
      // L-shaped building: main body + wing
      detailed: [
        { x: 0, z: -2, w: 10, d: 12, h: 17 },  // main body
        { x: 5, z: 4, w: 5, d: 6, h: 15 },       // wing
      ],
      prism: { x: 0, z: 1, w: 15, d: 18, h: 17 }, // bounding box
      roof: { type: 'pitched', axis: 'x', rise: 2 },
      material: matBuildingGreat,
    },
    {
      name: 'across-street',
      // Building across Rue Madeleine (west side)
      detailed: [
        { x: -16, z: -4, w: 12, d: 16, h: 20 },
      ],
      prism: { x: -16, z: -4, w: 12, d: 16, h: 20 },
      roof: { type: 'pitched', axis: 'z', rise: 2.5 },
    },
    {
      name: 'north-block',
      // Building block to the north (toward Riponne)
      detailed: [
        { x: -6, z: -18, w: 18, d: 8, h: 22 },
        { x: 8, z: -16, w: 6, d: 5, h: 18 },
      ],
      prism: { x: -6, z: -18, w: 24, d: 10, h: 22 },
      roof: { type: 'flat' },
    },
    {
      name: 'south-neighbor',
      // Building to the south along Rue Madeleine
      detailed: [
        { x: -2, z: 14, w: 8, d: 10, h: 15 },
      ],
      prism: { x: -2, z: 14, w: 8, d: 10, h: 15 },
      roof: { type: 'pitched', axis: 'x', rise: 1.5 },
    },
    {
      name: 'far-west',
      // Taller building further west
      detailed: [
        { x: -32, z: -8, w: 10, d: 20, h: 25 },
      ],
      prism: { x: -32, z: -8, w: 10, d: 20, h: 25 },
      roof: { type: 'flat' },
    },
  ];

  // --- Building geometry builders ---

  function createBox(b, mat) {
    const geo = new THREE.BoxGeometry(b.w, b.h, b.d);
    const mesh = new THREE.Mesh(geo, mat || matBuilding);
    mesh.position.set(b.x + b.w / 2, b.h / 2, b.z + b.d / 2);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
  }

  function createPitchedRoof(b, roof, mat) {
    const shape = new THREE.Shape();
    const hw = (roof.axis === 'x' ? b.d : b.w) / 2;
    shape.moveTo(-hw, 0);
    shape.lineTo(0, roof.rise);
    shape.lineTo(hw, 0);
    shape.lineTo(-hw, 0);

    const length = roof.axis === 'x' ? b.w : b.d;
    const extrudeSettings = { depth: length, bevelEnabled: false };
    const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    const mesh = new THREE.Mesh(geo, mat || matRoof);

    if (roof.axis === 'x') {
      mesh.rotation.y = -Math.PI / 2;
      mesh.position.set(b.x, b.h, b.z + b.d / 2);
    } else {
      mesh.position.set(b.x + b.w / 2, b.h, b.z);
    }
    mesh.castShadow = true;
    return mesh;
  }

  function createPrismGhost(p) {
    const geo = new THREE.BoxGeometry(p.w, p.h, p.d);
    const mesh = new THREE.Mesh(geo, matPrismGhost);
    mesh.position.set(p.x + p.w / 2, p.h / 2, p.z + p.d / 2);

    const wire = new THREE.LineSegments(
      new THREE.EdgesGeometry(geo),
      matPrismWire
    );
    wire.position.copy(mesh.position);

    return { mesh, wire };
  }

  // --- Build scene groups for each mode ---
  const groups = {
    prism: new THREE.Group(),
    twoLevel: new THREE.Group(),
    detailed: new THREE.Group(),
  };

  buildings.forEach(function (b) {
    var mat = b.material || matBuilding;

    // PRISM mode: just bounding boxes, cast shadows
    var prismBox = createBox(b.prism, mat);
    groups.prism.add(prismBox);
    if (b.roof && b.roof.type === 'pitched') {
      groups.prism.add(createPitchedRoof(b.prism, b.roof, matRoof));
    }

    // DETAILED mode: actual shapes
    b.detailed.forEach(function (part) {
      var detailedBox = createBox(part, mat);
      groups.detailed.add(detailedBox);
    });
    if (b.roof && b.roof.type === 'pitched') {
      b.detailed.forEach(function (part) {
        groups.detailed.add(createPitchedRoof(part, b.roof, matRoof));
      });
    }

    // TWO-LEVEL mode: prism wireframe + detailed where it matters
    b.detailed.forEach(function (part) {
      var tlBox = createBox(part, mat);
      groups.twoLevel.add(tlBox);
    });
    if (b.roof && b.roof.type === 'pitched') {
      b.detailed.forEach(function (part) {
        groups.twoLevel.add(createPitchedRoof(part, b.roof, matRoof));
      });
    }
    // Show the prism ghost overlay for L-shaped buildings
    if (b.detailed.length > 1) {
      var ghost = createPrismGhost(b.prism);
      groups.twoLevel.add(ghost.mesh);
      groups.twoLevel.add(ghost.wire);
    }
  });

  // Add all groups but only show 'detailed' by default
  Object.keys(groups).forEach(function (key) {
    groups[key].visible = (key === 'detailed');
    scene.add(groups[key]);
  });

  // --- Label helper (CSS2D-like, but simpler with sprite) ---
  function addLabel(text, x, y, z) {
    var canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    var ctx = canvas.getContext('2d');
    ctx.font = 'bold 28px IBM Plex Mono, monospace';
    ctx.fillStyle = '#7effd4';
    ctx.textAlign = 'center';
    ctx.fillText(text, 128, 40);

    var tex = new THREE.CanvasTexture(canvas);
    var spriteMat = new THREE.SpriteMaterial({ map: tex, transparent: true });
    var sprite = new THREE.Sprite(spriteMat);
    sprite.position.set(x, y + 1.5, z);
    sprite.scale.set(10, 2.5, 1);
    scene.add(sprite);
  }

  // --- Sun ray visualization ---
  var sunRayGroup = new THREE.Group();
  scene.add(sunRayGroup);

  function updateSunRays() {
    while (sunRayGroup.children.length) sunRayGroup.remove(sunRayGroup.children[0]);

    var sunDir = sun.position.clone().normalize();
    var terraceCenter = new THREE.Vector3(-4, 0.1, 2);

    // Ray from sun toward terrace
    var rayStart = terraceCenter.clone().add(sunDir.clone().multiplyScalar(50));
    var rayGeo = new THREE.BufferGeometry().setFromPoints([rayStart, terraceCenter]);
    var rayMat = new THREE.LineBasicMaterial({ color: 0xffe066, transparent: true, opacity: 0.4 });
    sunRayGroup.add(new THREE.Line(rayGeo, rayMat));

    // Sun sphere
    var sunSphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.2, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xffe066 })
    );
    sunSphere.position.copy(rayStart);
    sunRayGroup.add(sunSphere);
  }
  updateSunRays();

  // --- Mode switching UI ---
  var currentMode = 'detailed';
  var modeInfo = {
    prism: {
      title: 'Mode Prisme',
      desc: "Chaque batiment = sa bounding box extrudee. Rapide mais imprecis : le batiment en L du Great Escape devient un rectangle plein, creant de fausses ombres sur la terrasse."
    },
    twoLevel: {
      title: 'Mode Two-Level',
      desc: "Le prisme (en rouge) filtre d'abord. Quand le soleil est proche du seuil d'ombre, le mesh detaille prend le relais (max 3 passes). Bon compromis vitesse/precision."
    },
    detailed: {
      title: 'Mode Detailed Mesh',
      desc: "Geometrie reelle : les formes en L, les toits pentus, tout est modelise. 32 passes de raffinement. Le plus precis, et le defaut actuel grace aux optimisations."
    }
  };

  function setMode(mode) {
    currentMode = mode;
    Object.keys(groups).forEach(function (key) {
      groups[key].visible = (key === mode);
    });

    // Update buttons
    var buttons = container.querySelectorAll('.viz-mode-btn');
    buttons.forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.mode === mode);
    });

    // Update info
    var info = container.querySelector('.viz-info');
    if (info) {
      info.querySelector('.viz-info-title').textContent = modeInfo[mode].title;
      info.querySelector('.viz-info-desc').textContent = modeInfo[mode].desc;
    }
  }

  // Build UI controls
  var uiHTML = '<div class="viz-controls">';
  uiHTML += '<button class="viz-mode-btn" data-mode="prism">Prisme</button>';
  uiHTML += '<button class="viz-mode-btn" data-mode="twoLevel">Two-Level</button>';
  uiHTML += '<button class="viz-mode-btn active" data-mode="detailed">Detailed Mesh</button>';
  uiHTML += '</div>';
  uiHTML += '<div class="viz-info">';
  uiHTML += '<span class="viz-info-title">' + modeInfo.detailed.title + '</span>';
  uiHTML += '<span class="viz-info-desc">' + modeInfo.detailed.desc + '</span>';
  uiHTML += '</div>';

  var uiDiv = document.createElement('div');
  uiDiv.className = 'viz-ui';
  uiDiv.innerHTML = uiHTML;
  container.appendChild(uiDiv);

  container.querySelectorAll('.viz-mode-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setMode(this.dataset.mode);
    });
  });

  // --- Sun time slider ---
  var sliderHTML = '<div class="viz-slider">';
  sliderHTML += '<label>Soleil : <span id="sun-time">15h00</span></label>';
  sliderHTML += '<input type="range" min="8" max="20" step="0.25" value="15" id="sun-slider">';
  sliderHTML += '</div>';
  var sliderDiv = document.createElement('div');
  sliderDiv.innerHTML = sliderHTML;
  container.appendChild(sliderDiv);

  var sunSlider = container.querySelector('#sun-slider');
  var sunTimeLabel = container.querySelector('#sun-time');

  function updateSunPosition(hour) {
    // Approximate sun position for Lausanne (46.5°N) in summer
    // Azimuth roughly: east at 6h, south at 12h, west at 18h
    var t = (hour - 12) / 6; // -1 at 6h, 0 at 12h, 1 at 18h
    var azimuth = t * Math.PI * 0.75; // sweep ~135 degrees
    var altitude = Math.cos(t * Math.PI * 0.6) * 0.8; // peak at noon

    var dist = 50;
    sun.position.set(
      -Math.sin(azimuth) * dist,
      Math.max(altitude, 0.1) * dist,
      -Math.cos(azimuth) * dist * 0.5
    );
    sun.position.y = Math.max(sun.position.y, 5);

    var h = Math.floor(hour);
    var m = Math.round((hour - h) * 60);
    sunTimeLabel.textContent = h + 'h' + (m < 10 ? '0' : '') + m;

    updateSunRays();
  }

  sunSlider.addEventListener('input', function () {
    updateSunPosition(parseFloat(this.value));
  });

  // --- Animation loop ---
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();

  // --- Resize handling ---
  window.addEventListener('resize', function () {
    var w = container.clientWidth;
    camera.aspect = w / HEIGHT;
    camera.updateProjectionMatrix();
    renderer.setSize(w, HEIGHT);
  });
})();
