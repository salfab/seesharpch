/**
 * Three.js visualization: Horizon mask explained
 *
 * Shows how the horizon mask works:
 * - Observer at center (Great Escape terrace)
 * - 360 rays cast outward along the ground
 * - Each ray samples terrain elevation every 250m up to 120km
 * - The max elevation angle per azimuth forms the "mask"
 * - Rendered as a 3D wall/ridge around the observer
 * - Sun path arc overlaid — when sun dips below the ridge = shadow
 *
 * Data: synthetic but calibrated for Lausanne
 *   (Jura NW 8-12°, Alps SE 10-18°, buildings as sharp spikes)
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
  camera.position.set(0, 60, 100);
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

  // ── Horizon mask data (360 bins) ───────────────────────────────────
  // Synthetic but calibrated for Lausanne:
  // - Jura (NW, ~290-340°): gentle ridge 6-10°
  // - Alps (SE-E, ~60-160°): higher ridge 8-16°
  // - South (~170-210°): low, open toward Lac Léman ~2-3°
  // - Buildings: sharp spikes at specific azimuths
  var horizon = [];
  for (var i = 0; i < 360; i++) {
    var elev = 1.5 + Math.sin(i * 0.017) * 0.3; // base urban horizon

    // Jura (NW)
    if (i >= 280 && i <= 350) {
      var t = (i - 280) / 70;
      elev += 7 * Math.sin(t * Math.PI) + 2 * Math.sin(t * Math.PI * 3.2) + Math.sin(t * Math.PI * 7) * 0.8;
    }

    // Alps (SE to E)
    if (i >= 40 && i <= 165) {
      var t = (i - 40) / 125;
      elev += 14 * Math.sin(t * Math.PI) + 3 * Math.sin(t * Math.PI * 2.7) + 2 * Math.sin(t * Math.PI * 6.3);
    }

    // Lac Léman gap (S-SW, ~190-240°): lower horizon
    if (i >= 190 && i <= 240) {
      var t = (i - 190) / 50;
      elev = Math.max(0.8, elev - 3 * Math.sin(t * Math.PI));
    }

    // Building spikes (sharp, narrow)
    // obs-29918 (main blocker, ~NW of terrace, az ~310°)
    if (i >= 306 && i <= 314) {
      var t = (i - 306) / 8;
      elev = Math.max(elev, 28 * Math.sin(t * Math.PI));
    }
    // Palais de Rumine (NE, az ~20-40°)
    if (i >= 18 && i <= 42) {
      var t = (i - 18) / 24;
      elev = Math.max(elev, 22 * Math.sin(t * Math.PI));
    }
    // Building south (~185°)
    if (i >= 180 && i <= 190) {
      var t = (i - 180) / 10;
      elev = Math.max(elev, 18 * Math.sin(t * Math.PI));
    }

    horizon.push(Math.max(elev, 0));
  }

  // ── Sun path (March 8, 2026, SunCalc data) ────────────────────────
  var sunPath = [
    {h:7.25,az:99,alt:1.5},{h:8,az:107.3,alt:9.1},{h:9,az:119.2,alt:18.5},
    {h:10,az:132.6,alt:26.9},{h:11,az:148.2,alt:33.5},{h:12,az:165.9,alt:37.6},
    {h:12.75,az:180.1,alt:38.5},{h:14,az:203.4,alt:35.9},{h:15,az:220.1,alt:30.5},
    {h:16,az:234.5,alt:22.9},{h:17,az:247.1,alt:13.9},{h:17.5,az:252.9,alt:9.1},
    {h:18,az:258.5,alt:4.1},{h:18.25,az:261.3,alt:1.5}
  ];

  // ── Geometry parameters ────────────────────────────────────────────
  // The mask is rendered as a wall at a fixed display radius.
  // Elevation angle → wall height. We exaggerate for readability.
  var displayRadius = 50; // meters from center in scene
  var elevScale = 1.8;    // degrees → scene units

  function azToRad(azDeg) { return (azDeg - 90) * Math.PI / 180; } // 0°=N → -Z in scene

  function azElevToPos(azDeg, elevDeg, radius) {
    var r = radius || displayRadius;
    var rad = azToRad(azDeg);
    return new THREE.Vector3(
      Math.cos(rad) * r,
      elevDeg * elevScale,
      -Math.sin(rad) * r
    );
  }

  // ── Ground disk ────────────────────────────────────────────────────
  var groundGeo = new THREE.CircleGeometry(displayRadius + 5, 64);
  groundGeo.rotateX(-Math.PI / 2);
  var groundMat = new THREE.MeshLambertMaterial({ color: 0x2a2d35 });
  scene.add(new THREE.Mesh(groundGeo, groundMat));

  // ── Observer marker ────────────────────────────────────────────────
  var obs = new THREE.Mesh(
    new THREE.CylinderGeometry(0.8, 0.8, 2, 16),
    new THREE.MeshPhongMaterial({ color: 0x7effd4 })
  );
  obs.position.set(0, 1, 0);
  scene.add(obs);

  // ── Horizon mask wall ──────────────────────────────────────────────
  // Build as a triangle strip: for each azimuth, bottom vertex (ground) + top vertex (elevation)
  var wallPositions = [];
  var wallColors = [];
  var wallIndices = [];

  for (var i = 0; i <= 360; i++) {
    var az = i % 360;
    var elev = horizon[az];
    var rad = azToRad(az);
    var x = Math.cos(rad) * displayRadius;
    var z = -Math.sin(rad) * displayRadius;

    // Bottom vertex
    wallPositions.push(x, 0, z);
    // Top vertex
    wallPositions.push(x, elev * elevScale, z);

    // Color based on what's causing the obstruction
    var r, g, b;
    if (elev > 15) {
      // Building spike — red/orange
      r = 1.0; g = 0.42; b = 0.42;
    } else if ((az >= 280 && az <= 350) || (az >= 40 && az <= 165)) {
      // Mountain range — teal
      r = 0.5; g = 0.8; b = 0.7;
    } else {
      // Urban/flat horizon — gray
      r = 0.3; g = 0.32; b = 0.36;
    }
    wallColors.push(r, g, b);
    wallColors.push(r, g, b);

    if (i > 0) {
      var base = (i - 1) * 2;
      // Two triangles per segment
      wallIndices.push(base, base + 1, base + 2);
      wallIndices.push(base + 1, base + 3, base + 2);
    }
  }

  var wallGeo = new THREE.BufferGeometry();
  wallGeo.setAttribute('position', new THREE.Float32BufferAttribute(wallPositions, 3));
  wallGeo.setAttribute('color', new THREE.Float32BufferAttribute(wallColors, 3));
  wallGeo.setIndex(wallIndices);
  wallGeo.computeVertexNormals();

  var wallMat = new THREE.MeshPhongMaterial({
    vertexColors: true,
    flatShading: true,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.85,
  });
  scene.add(new THREE.Mesh(wallGeo, wallMat));

  // ── Horizon outline (top edge) ─────────────────────────────────────
  var outlinePoints = [];
  for (var i = 0; i <= 360; i++) {
    var az = i % 360;
    outlinePoints.push(azElevToPos(az, horizon[az]));
  }
  var outlineGeo = new THREE.BufferGeometry().setFromPoints(outlinePoints);
  scene.add(new THREE.Line(outlineGeo, new THREE.LineBasicMaterial({ color: 0x7effd4, linewidth: 2 })));

  // ── Azimuth labels ─────────────────────────────────────────────────
  var labels = [
    { az: 0, text: 'N' }, { az: 90, text: 'E' },
    { az: 180, text: 'S' }, { az: 270, text: 'W' },
    { az: 315, text: 'Jura' }, { az: 110, text: 'Alpes' },
    { az: 215, text: 'Lac' },
  ];

  labels.forEach(function (l) {
    var c = document.createElement('canvas');
    c.width = 128; c.height = 48;
    var ctx = c.getContext('2d');
    ctx.font = 'bold 28px IBM Plex Mono, monospace';
    ctx.fillStyle = l.text.length <= 1 ? '#888' : '#7effd4';
    ctx.textAlign = 'center';
    ctx.fillText(l.text, 64, 34);
    var tex = new THREE.CanvasTexture(c);
    var sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true }));
    var pos = azElevToPos(l.az, 0, displayRadius + 8);
    sp.position.set(pos.x, l.text.length <= 1 ? 2 : (horizon[l.az] || 5) * elevScale + 5, pos.z);
    sp.scale.set(8, 3, 1);
    scene.add(sp);
  });

  // ── Sample rays (show a few to illustrate the method) ──────────────
  var sampleAzimuths = [0, 45, 90, 135, 180, 225, 270, 315];
  var rayMat = new THREE.LineBasicMaterial({ color: 0x333840, transparent: true, opacity: 0.3 });

  sampleAzimuths.forEach(function (az) {
    var rad = azToRad(az);
    var points = [new THREE.Vector3(0, 0.5, 0)];
    // Show sampling points along the ray
    for (var d = 5; d <= displayRadius; d += 5) {
      var x = Math.cos(rad) * d;
      var z = -Math.sin(rad) * d;
      // Interpolate horizon height along the ray for visualization
      var t = d / displayRadius;
      var h = horizon[az] * t * t * elevScale; // quadratic rise toward horizon
      points.push(new THREE.Vector3(x, h * 0.3, z));
    }
    points.push(azElevToPos(az, horizon[az]));
    scene.add(new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(points),
      rayMat
    ));

    // Sampling dots along the ray
    for (var d = 10; d <= displayRadius; d += 10) {
      var x = Math.cos(rad) * d;
      var z = -Math.sin(rad) * d;
      var dot = new THREE.Mesh(
        new THREE.SphereGeometry(0.3, 6, 6),
        new THREE.MeshBasicMaterial({ color: 0x556677 })
      );
      dot.position.set(x, 0.3, z);
      scene.add(dot);
    }
  });

  // ── Sun path arc ───────────────────────────────────────────────────
  var sunArcPoints = [];
  sunPath.forEach(function (sp) {
    sunArcPoints.push(azElevToPos(sp.az, sp.alt, displayRadius - 2));
  });
  scene.add(new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(sunArcPoints),
    new THREE.LineBasicMaterial({ color: 0xffe066 })
  ));

  // Sun position markers
  var sunGroup = new THREE.Group();
  scene.add(sunGroup);
  var currentHour = 17.5;

  function updateSunMarker(hour) {
    while (sunGroup.children.length) sunGroup.remove(sunGroup.children[0]);

    // Interpolate sun position
    var sp = null;
    for (var i = 0; i < sunPath.length - 1; i++) {
      if (hour >= sunPath[i].h && hour <= sunPath[i + 1].h) {
        var t = (hour - sunPath[i].h) / (sunPath[i + 1].h - sunPath[i].h);
        sp = {
          az: sunPath[i].az + t * (sunPath[i + 1].az - sunPath[i].az),
          alt: sunPath[i].alt + t * (sunPath[i + 1].alt - sunPath[i].alt),
        };
        break;
      }
    }
    if (!sp) return;

    var pos = azElevToPos(sp.az, sp.alt, displayRadius - 2);

    // Check if below horizon
    var azIdx = Math.round(sp.az) % 360;
    var blocked = sp.alt < horizon[azIdx];

    var sunSphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.5, 16, 16),
      new THREE.MeshBasicMaterial({ color: blocked ? 0xff6b6b : 0xffe066 })
    );
    sunSphere.position.copy(pos);
    sunGroup.add(sunSphere);

    // Line from observer to sun
    var lineMat = new THREE.LineBasicMaterial({
      color: blocked ? 0xff6b6b : 0xffe066,
      transparent: true,
      opacity: 0.4,
    });
    sunGroup.add(new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 1, 0), pos]),
      lineMat
    ));

    // If blocked, show the wall point that blocks
    if (blocked) {
      var wallPos = azElevToPos(sp.az, horizon[azIdx]);
      var blockDot = new THREE.Mesh(
        new THREE.SphereGeometry(1, 12, 12),
        new THREE.MeshBasicMaterial({ color: 0xff6b6b })
      );
      blockDot.position.copy(wallPos);
      sunGroup.add(blockDot);
    }
  }

  updateSunMarker(currentHour);

  // Hour markers on sun arc
  sunPath.forEach(function (sp) {
    if (sp.h % 1 === 0 && sp.h >= 8 && sp.h <= 18) {
      var pos = azElevToPos(sp.az, sp.alt, displayRadius - 2);
      var c = document.createElement('canvas');
      c.width = 64; c.height = 32;
      var ctx = c.getContext('2d');
      ctx.font = '18px IBM Plex Mono, monospace';
      ctx.fillStyle = '#ffe066';
      ctx.textAlign = 'center';
      ctx.fillText(sp.h + 'h', 32, 22);
      var tex = new THREE.CanvasTexture(c);
      var label = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true }));
      label.position.set(pos.x, pos.y + 3, pos.z);
      label.scale.set(5, 2.5, 1);
      scene.add(label);
    }
  });

  // ── UI ─────────────────────────────────────────────────────────────
  var infoDiv = document.createElement('div');
  infoDiv.className = 'viz-ui';
  infoDiv.innerHTML =
    '<div class="viz-info">' +
    '<span class="viz-info-title">Masque d\'horizon (360 deg)</span>' +
    '<span class="viz-info-desc">Pour chaque degre d\'azimut, un rayon est lance le long du sol jusqu\'a 120 km. Tous les 250 m, on echantillonne l\'altitude du terrain (DEM Copernicus 30 m) et on corrige pour la courbure terrestre et la refraction atmospherique. L\'angle d\'elevation max forme le masque (mur vert). Quand le soleil (jaune) passe sous le masque, la terrasse est a l\'ombre (rouge).</span>' +
    '</div>';
  container.appendChild(infoDiv);

  // ── Animate ────────────────────────────────────────────────────────
  (function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  })();

  // ── Slider interaction ─────────────────────────────────────────────
  var slider = document.getElementById('horizon-slider');
  var timeLabel = document.getElementById('horizon-time');
  if (slider) {
    slider.min = '7.25';
    slider.max = '18.25';
    slider.step = '0.25';
    slider.value = '17.5';
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
