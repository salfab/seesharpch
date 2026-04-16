/**
 * Gingins Château Blanc — 3D scene with terrain, buildings, vegetation shadows.
 * Toggle: winter / equinox / summer. Slider: hour of day.
 */
(function () {
  var container = document.getElementById('viz-gingins-3d');
  if (!container) return;

  // ── Config ──────────────────────────────────────────────
  var ORIGIN_E = 2502875, ORIGIN_N = 1141000, ORIGIN_ALT = 564;
  var SCENE_SIZE = 500; // meters

  // Season presets: { label, date month (0-based), day }
  var SEASONS = {
    winter:  { label: 'Solstice hiver (21 déc)', month: 11, day: 21 },
    equinox: { label: 'Équinoxe (20 mars)', month: 2, day: 20 },
    summer:  { label: 'Solstice été (21 juin)', month: 5, day: 21 }
  };

  // ── Three.js setup ─────────────────────────────────────
  var scene = new THREE.Scene();
  scene.background = new THREE.Color(0x1a1e24);

  var aspect = container.clientWidth / Math.max(container.clientHeight, 300);
  var camera = new THREE.PerspectiveCamera(50, aspect, 1, 2000);
  camera.position.set(150, 120, 200);
  camera.lookAt(0, 0, 0);

  var renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, Math.max(container.clientHeight, 400));
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  container.appendChild(renderer.domElement);

  var controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.maxPolarAngle = Math.PI / 2.1;
  controls.target.set(0, 5, 0);

  // ── Ambient + hemisphere ───────────────────────────────
  scene.add(new THREE.AmbientLight(0x667788, 0.6));
  var hemiLight = new THREE.HemisphereLight(0xaaccee, 0x556644, 0.5);
  scene.add(hemiLight);

  // ── Sun (directional light with shadows) ───────────────
  var sunLight = new THREE.DirectionalLight(0xfff4e0, 1.5);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.width = 2048;
  sunLight.shadow.mapSize.height = 2048;
  var d = SCENE_SIZE / 2;
  sunLight.shadow.camera.left = -d;
  sunLight.shadow.camera.right = d;
  sunLight.shadow.camera.top = d;
  sunLight.shadow.camera.bottom = -d;
  sunLight.shadow.camera.near = 1;
  sunLight.shadow.camera.far = 1000;
  sunLight.shadow.bias = -0.001;
  scene.add(sunLight);
  scene.add(sunLight.target);

  // ── Helpers ────────────────────────────────────────────
  function lv95ToScene(e, n, alt) {
    return new THREE.Vector3(e - ORIGIN_E, alt - ORIGIN_ALT, -(n - ORIGIN_N));
  }

  // SunCalc-lite: compute sun azimuth + altitude for a date/hour at Gingins
  function getSunPosition(date) {
    var lat = 46.4133 * Math.PI / 180;
    var lng = 6.1754 * Math.PI / 180;
    // Julian date
    var JD = date.getTime() / 86400000 + 2440587.5;
    var n = JD - 2451545.0;
    var L = (280.460 + 0.9856474 * n) % 360;
    var g = (357.528 + 0.9856003 * n) % 360;
    var gRad = g * Math.PI / 180;
    var lambda = (L + 1.915 * Math.sin(gRad) + 0.020 * Math.sin(2 * gRad)) * Math.PI / 180;
    var epsilon = 23.439 * Math.PI / 180 - 0.0000004 * n * Math.PI / 180;
    var sinDec = Math.sin(epsilon) * Math.sin(lambda);
    var dec = Math.asin(sinDec);
    var RA = Math.atan2(Math.cos(epsilon) * Math.sin(lambda), Math.cos(lambda));
    // Hour angle
    var GMST = (280.46061837 + 360.98564736629 * (JD - 2451545.0)) % 360;
    var LST = (GMST + lng * 180 / Math.PI) * Math.PI / 180;
    var HA = LST - RA;
    // Altitude
    var sinAlt = Math.sin(lat) * Math.sin(dec) + Math.cos(lat) * Math.cos(dec) * Math.cos(HA);
    var altitude = Math.asin(sinAlt);
    // Azimuth
    var cosAz = (Math.sin(dec) - Math.sin(lat) * sinAlt) / (Math.cos(lat) * Math.cos(altitude));
    cosAz = Math.max(-1, Math.min(1, cosAz));
    var azimuth = Math.acos(cosAz);
    if (Math.sin(HA) > 0) azimuth = 2 * Math.PI - azimuth;
    return { azimuthRad: azimuth, altitudeRad: altitude, altitudeDeg: altitude * 180 / Math.PI };
  }

  function updateSun(season, hour) {
    var s = SEASONS[season];
    var date = new Date(2026, s.month, s.day, Math.floor(hour), (hour % 1) * 60, 0);
    var sun = getSunPosition(date);
    var dist = 300;
    if (sun.altitudeDeg < 0) {
      sunLight.intensity = 0;
      return sun;
    }
    sunLight.intensity = 1.2 + 0.3 * Math.sin(sun.altitudeRad);
    var sx = Math.sin(sun.azimuthRad) * Math.cos(sun.altitudeRad) * dist;
    var sy = Math.sin(sun.altitudeRad) * dist;
    var sz = -Math.cos(sun.azimuthRad) * Math.cos(sun.altitudeRad) * dist;
    sunLight.position.set(sx, sy, sz);
    sunLight.target.position.set(0, 0, 0);
    return sun;
  }

  // ── Load data ─────────────────────────────────────────
  var terrainMesh, buildingsMesh, vegMesh;
  var loadCount = 0;
  var totalLoads = 3;

  function checkReady() {
    loadCount++;
    if (loadCount >= totalLoads) {
      updateSun(currentSeason, currentHour);
      animate();
    }
  }

  // Terrain
  fetch('/assets/data/gingins-terrain.json').then(function (r) { return r.json(); }).then(function (data) {
    var w = data.width, h = data.height;
    var geo = new THREE.PlaneGeometry(
      data.maxX - data.minX, data.maxY - data.minY, w - 1, h - 1
    );
    var pos = geo.attributes.position;
    for (var i = 0; i < pos.count; i++) {
      var col = i % w;
      var row = Math.floor(i / w);
      var elev = data.elevations[row * w + col];
      // PlaneGeometry is XY, we rotate it to XZ. Set Z = elevation for now.
      pos.setZ(i, elev - ORIGIN_ALT);
    }
    geo.rotateX(-Math.PI / 2);
    geo.computeVertexNormals();
    var mat = new THREE.MeshStandardMaterial({
      color: 0x3a5a3a, roughness: 0.9, metalness: 0.0, flatShading: false
    });
    terrainMesh = new THREE.Mesh(geo, mat);
    terrainMesh.receiveShadow = true;
    terrainMesh.position.set(0, 0, 0);
    scene.add(terrainMesh);
    checkReady();
  });

  // Buildings
  fetch('/assets/data/gingins-buildings.json').then(function (r) { return r.json(); }).then(function (data) {
    var geo = new THREE.BufferGeometry();
    var verts = new Float32Array(data.vertexCount * 3);
    for (var i = 0; i < data.vertexCount; i++) {
      var e = data.vertices[i * 3 + 0];
      var n = data.vertices[i * 3 + 1];
      var a = data.vertices[i * 3 + 2];
      var p = lv95ToScene(e, n, a);
      verts[i * 3] = p.x;
      verts[i * 3 + 1] = p.y;
      verts[i * 3 + 2] = p.z;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(verts, 3));
    geo.setIndex(new THREE.BufferAttribute(new Uint32Array(data.indices), 1));
    geo.computeVertexNormals();
    var mat = new THREE.MeshStandardMaterial({
      color: 0x8a8a7a, roughness: 0.7, metalness: 0.1, flatShading: true
    });
    buildingsMesh = new THREE.Mesh(geo, mat);
    buildingsMesh.castShadow = true;
    buildingsMesh.receiveShadow = true;
    scene.add(buildingsMesh);
    checkReady();
  });

  // Vegetation: render swissSURFACE3D as a semi-transparent canopy mesh
  // above the terrain. Where surface > terrain + 3m = vegetation canopy.
  // Where surface ≈ terrain = bare ground (invisible, terrain already shown).
  fetch('/assets/data/gingins-vegetation.json').then(function (r) { return r.json(); }).then(function (surface) {
    // Full 0.5m resolution surface mesh
    var sw = surface.width, sh = surface.height;
    var geo = new THREE.PlaneGeometry(
      surface.maxX - surface.minX, surface.maxY - surface.minY, sw - 1, sh - 1
    );
    var pos = geo.attributes.position;
    var colors = new Float32Array(pos.count * 4); // RGBA
    for (var i = 0; i < pos.count; i++) {
      var col = i % sw;
      var row = Math.floor(i / sw);
      var surfElev = surface.surface[row * sw + col];
      pos.setZ(i, surfElev - ORIGIN_ALT);
      // Color: green + opaque where canopy, invisible elsewhere
      // We approximate terrain from surrounding surface minimum (not perfect
      // but avoids loading terrain twice)
      colors[i * 4 + 0] = 0.18; // R
      colors[i * 4 + 1] = 0.42; // G
      colors[i * 4 + 2] = 0.18; // B
      colors[i * 4 + 3] = 1.0;  // A (will be modulated by material opacity)
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 4));
    geo.rotateX(-Math.PI / 2);
    geo.computeVertexNormals();

    var mat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      color: 0x3a7a3a,
      roughness: 0.85,
      metalness: 0.0,
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    vegMesh = new THREE.Mesh(geo, mat);
    vegMesh.castShadow = true;
    vegMesh.receiveShadow = true;
    scene.add(vegMesh);
    checkReady();
  });

  // ── UI ─────────────────────────────────────────────────
  var currentSeason = 'equinox';
  var currentHour = 12;

  var uiDiv = document.createElement('div');
  uiDiv.style.cssText = 'padding: 0.75rem 1rem; font-family: var(--mono, monospace); font-size: 0.8rem; color: var(--text-body, #c8c9cd);';

  // Season buttons
  var btnRow = document.createElement('div');
  btnRow.style.cssText = 'display: flex; gap: 0.5rem; margin-bottom: 0.75rem; flex-wrap: wrap;';
  var seasonBtns = {};
  Object.keys(SEASONS).forEach(function (key) {
    var btn = document.createElement('button');
    btn.textContent = SEASONS[key].label;
    btn.dataset.season = key;
    btn.style.cssText = 'background: var(--bg, #111316); color: var(--text-body, #c8c9cd); border: 1px solid var(--border, #1e2128); padding: 0.4rem 0.8rem; border-radius: 4px; font-family: inherit; font-size: 0.75rem; cursor: pointer; transition: all 0.15s;';
    btn.onclick = function () {
      currentSeason = key;
      updateUI();
    };
    seasonBtns[key] = btn;
    btnRow.appendChild(btn);
  });
  uiDiv.appendChild(btnRow);

  // Hour slider
  var sliderRow = document.createElement('div');
  sliderRow.style.cssText = 'display: flex; align-items: center; gap: 0.75rem;';
  var hourLabel = document.createElement('span');
  hourLabel.style.minWidth = '3.5rem';
  var slider = document.createElement('input');
  slider.type = 'range';
  slider.min = '5';
  slider.max = '21';
  slider.step = '0.25';
  slider.value = '12';
  slider.style.cssText = 'flex: 1; accent-color: var(--accent, #7effd4);';
  slider.oninput = function () {
    currentHour = parseFloat(slider.value);
    updateUI();
  };
  var infoLabel = document.createElement('span');
  infoLabel.style.cssText = 'font-size: 0.7rem; color: var(--muted-dim, #5c6070); min-width: 6rem; text-align: right;';
  sliderRow.appendChild(hourLabel);
  sliderRow.appendChild(slider);
  sliderRow.appendChild(infoLabel);
  uiDiv.appendChild(sliderRow);

  container.insertBefore(uiDiv, container.firstChild);

  function updateUI() {
    Object.keys(seasonBtns).forEach(function (k) {
      var active = k === currentSeason;
      seasonBtns[k].style.background = active ? 'var(--accent, #7effd4)' : 'var(--bg, #111316)';
      seasonBtns[k].style.color = active ? 'var(--bg, #0b0c0e)' : 'var(--text-body, #c8c9cd)';
      seasonBtns[k].style.fontWeight = active ? 'bold' : 'normal';
      seasonBtns[k].style.borderColor = active ? 'var(--accent, #7effd4)' : 'var(--border, #1e2128)';
    });
    var h = Math.floor(currentHour);
    var m = Math.round((currentHour % 1) * 60);
    hourLabel.textContent = (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m;
    var sun = updateSun(currentSeason, currentHour);
    infoLabel.textContent = sun.altitudeDeg > 0
      ? 'alt ' + sun.altitudeDeg.toFixed(1) + '\u00b0'
      : 'sous l\u2019horizon';
  }
  updateUI();

  // ── Animate ────────────────────────────────────────────
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }

  // Resize
  window.addEventListener('resize', function () {
    var w = container.clientWidth;
    var h = Math.max(container.clientHeight, 400);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });
})();
