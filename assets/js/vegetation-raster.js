/**
 * Three.js visualization: Vegetation raster (swissSURFACE3D)
 * Shows a terrain grid with tree canopy elevation as a 3D heatmap.
 * A sun ray samples the canopy every 2m along its path.
 */
(function () {
  var container = document.getElementById('viz-vegetation');
  if (!container) return;

  var WIDTH = container.clientWidth;
  var HEIGHT = 450;

  var scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0b0c0e);
  scene.fog = new THREE.FogExp2(0x0b0c0e, 0.012);

  var camera = new THREE.PerspectiveCamera(50, WIDTH / HEIGHT, 0.1, 300);
  camera.position.set(35, 30, 40);
  camera.lookAt(0, 3, 0);

  var renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(WIDTH, HEIGHT);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  var controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.target.set(0, 3, 0);
  controls.maxPolarAngle = Math.PI / 2.1;
  controls.update();

  // Lights
  scene.add(new THREE.AmbientLight(0x334455, 0.5));
  var dirLight = new THREE.DirectionalLight(0xffe8c0, 1.2);
  dirLight.position.set(-20, 30, -10);
  scene.add(dirLight);

  // --- Generate synthetic terrain + canopy data ---
  var gridSize = 60; // 60x60 grid
  var cellSize = 0.5; // 0.5m resolution (like swissSURFACE3D)
  var gridOffset = -(gridSize * cellSize) / 2;

  // Ground elevation (gentle slope + noise)
  function groundHeight(x, z) {
    return 1.5 + Math.sin(x * 0.08) * 0.5 + Math.cos(z * 0.06) * 0.3;
  }

  // Tree canopy: clusters of trees at specific locations
  var trees = [
    { x: 8, z: 5, r: 5, h: 12 },
    { x: -5, z: -3, r: 4, h: 10 },
    { x: 3, z: -8, r: 3.5, h: 9 },
    { x: -8, z: 8, r: 4.5, h: 11 },
    { x: 12, z: -5, r: 3, h: 8 },
    { x: -3, z: 12, r: 3, h: 7 },
  ];

  function canopyHeight(wx, wz) {
    var maxH = 0;
    trees.forEach(function (t) {
      var dx = wx - t.x;
      var dz = wz - t.z;
      var dist = Math.sqrt(dx * dx + dz * dz);
      if (dist < t.r) {
        var f = 1 - (dist / t.r);
        var h = t.h * f * f * (3 - 2 * f); // smoothstep
        // Add some noise for organic look
        h += Math.sin(wx * 3.7 + wz * 2.1) * 0.5;
        h += Math.cos(wx * 1.3 - wz * 4.2) * 0.3;
        maxH = Math.max(maxH, h);
      }
    });
    return maxH;
  }

  function surfaceHeight(wx, wz) {
    return groundHeight(wx, wz) + canopyHeight(wx, wz);
  }

  // --- Build terrain mesh ---
  var geometry = new THREE.PlaneGeometry(
    gridSize * cellSize, gridSize * cellSize,
    gridSize - 1, gridSize - 1
  );
  geometry.rotateX(-Math.PI / 2);

  var positions = geometry.attributes.position;
  var colors = new Float32Array(positions.count * 3);

  for (var i = 0; i < positions.count; i++) {
    var wx = positions.getX(i);
    var wz = positions.getZ(i);
    var gh = groundHeight(wx, wz);
    var ch = canopyHeight(wx, wz);
    var totalH = gh + ch;

    positions.setY(i, totalH);

    // Color: ground = dark gray/brown, canopy = green gradient
    var r, g, b;
    if (ch < 0.5) {
      r = 0.12; g = 0.13; b = 0.10; // ground
    } else {
      var t = Math.min(ch / 12, 1);
      r = 0.1 + t * 0.05;
      g = 0.25 + t * 0.45;
      b = 0.1 + t * 0.1;
    }
    colors[i * 3] = r;
    colors[i * 3 + 1] = g;
    colors[i * 3 + 2] = b;
  }

  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.computeVertexNormals();

  var terrainMat = new THREE.MeshPhongMaterial({
    vertexColors: true,
    flatShading: true,
    side: THREE.DoubleSide,
  });
  var terrain = new THREE.Mesh(geometry, terrainMat);
  scene.add(terrain);

  // --- Sun ray with sample points ---
  var rayGroup = new THREE.Group();
  scene.add(rayGroup);

  function buildSunRay() {
    while (rayGroup.children.length) rayGroup.remove(rayGroup.children[0]);

    var sunDir = new THREE.Vector3(-0.5, 0.4, -0.3).normalize();
    var target = new THREE.Vector3(-2, surfaceHeight(-2, 2), 2); // point on ground

    // Ray line
    var rayStart = target.clone().add(sunDir.clone().multiplyScalar(40));
    var rayGeo = new THREE.BufferGeometry().setFromPoints([rayStart, target]);
    rayGroup.add(new THREE.Line(rayGeo, new THREE.LineBasicMaterial({ color: 0xffe066, transparent: true, opacity: 0.5 })));

    // Sun sphere
    var sunSphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 12, 12),
      new THREE.MeshBasicMaterial({ color: 0xffe066 })
    );
    sunSphere.position.copy(rayStart);
    rayGroup.add(sunSphere);

    // Sample points every 2m along the ray
    var sampleSpacing = 2;
    var rayDir = target.clone().sub(rayStart).normalize();
    var totalDist = rayStart.distanceTo(target);
    var blocked = false;

    for (var d = 0; d < totalDist; d += sampleSpacing) {
      var pt = rayStart.clone().add(rayDir.clone().multiplyScalar(d));
      var sh = surfaceHeight(pt.x, pt.z);

      // Is this sample point below the surface?
      var isBlocked = pt.y < sh && Math.abs(pt.x) < 15 && Math.abs(pt.z) < 15;
      if (isBlocked) blocked = true;

      var dotGeo = new THREE.SphereGeometry(0.15, 8, 8);
      var dotMat = new THREE.MeshBasicMaterial({
        color: isBlocked ? 0xff6b6b : 0xffe066,
        transparent: true,
        opacity: isBlocked ? 0.9 : 0.6,
      });
      var dot = new THREE.Mesh(dotGeo, dotMat);
      dot.position.copy(pt);
      rayGroup.add(dot);
    }

    // Target point
    var targetDot = new THREE.Mesh(
      new THREE.SphereGeometry(0.3, 12, 12),
      new THREE.MeshBasicMaterial({ color: blocked ? 0xff6b6b : 0x7effd4 })
    );
    targetDot.position.copy(target);
    rayGroup.add(targetDot);
  }

  buildSunRay();

  // --- Grid lines (subtle) ---
  var gridHelper = new THREE.GridHelper(gridSize * cellSize, 12, 0x1e2128, 0x1e2128);
  gridHelper.position.y = 0.5;
  scene.add(gridHelper);

  // --- Info overlay ---
  var infoHTML = '<div class="viz-info">';
  infoHTML += '<span class="viz-info-title">Modele de vegetation (swissSURFACE3D)</span>';
  infoHTML += '<span class="viz-info-desc">Raster GeoTIFF a 0.5m de resolution. Chaque pixel = elevation sol + arbres. Les points jaunes sont les echantillons bilineaires tous les 2m le long du rayon solaire. Rouge = rayon bloque par la canopee.</span>';
  infoHTML += '</div>';
  var infoDiv = document.createElement('div');
  infoDiv.className = 'viz-ui';
  infoDiv.innerHTML = infoHTML;
  container.appendChild(infoDiv);

  // --- Animation ---
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();

  // --- Resize ---
  window.addEventListener('resize', function () {
    var w = container.clientWidth;
    camera.aspect = w / HEIGHT;
    camera.updateProjectionMatrix();
    renderer.setSize(w, HEIGHT);
  });
})();
