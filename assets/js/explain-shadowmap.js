/**
 * Canvas 2D visualization: Shadow mapping explained
 * Shows the two-pass process with DISTANCES (not labels):
 * 1. Sun looks at scene → stores distance to first object per pixel
 * 2. Each ground point: compare MY distance to sun vs stored distance
 *    Same distance = I'm what the sun sees = soleil
 *    Greater distance = something is closer to sun than me = ombre
 */
(function () {
  'use strict';
  var container = document.getElementById('viz-shadowmap');
  if (!container) return;

  var W = container.clientWidth;
  var H = 420;
  var dpr = Math.min(window.devicePixelRatio, 2);
  var canvas = document.createElement('canvas');
  canvas.width = W * dpr; canvas.height = H * dpr;
  canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
  canvas.style.cursor = 'crosshair';
  container.appendChild(canvas);
  var ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  var margin = 20;
  var sceneTop = 50;
  var sceneH = 170;
  var groundY = sceneTop + sceneH;
  var sceneLeft = margin + 10;
  var sceneRight = W - margin - 10;
  var sceneW = sceneRight - sceneLeft;

  // Sun position
  var sunAlt = 25;
  var sunDist = 250; // "distance" to sun (conceptual)
  var altRad = sunAlt * Math.PI / 180;

  // Sun visual position (top-left)
  var sunVizX = sceneLeft + 50;
  var sunVizY = sceneTop - 5;

  // Building
  var bldgLeft = sceneLeft + sceneW * 0.35;
  var bldgW = 40;
  var bldgH = 100;
  var bldgTop = groundY - bldgH;

  // Depth buffer layout
  var depthBufY = groundY + 40;
  var depthBufH = 55;
  var depthPixels = 20;
  var depthBufLeft = sceneLeft + 20;
  var depthBufW = sceneW - 40;
  var depthCellW = depthBufW / depthPixels;

  // Calculate distance from sun to first object hit, per depth pixel
  // Sun rays come from top-left at sunAlt degrees
  function calcSunDepth(col) {
    var fracX = (col + 0.5) / depthPixels;
    var targetX = depthBufLeft + fracX * depthBufW;

    // Does the sun ray through this column hit the building?
    if (targetX >= bldgLeft && targetX <= bldgLeft + bldgW) {
      // Hits the roof → short distance
      return { dist: 85, hitY: bldgTop, isBuilding: true };
    }
    // Hits the ground → longer distance
    return { dist: 200, hitY: groundY, isBuilding: false };
  }

  // For a ground point, calculate its distance to the sun
  function pointSunDist(px) {
    // Simplified: distance depends on horizontal position
    // Points behind the building are farther because the sun is to the left
    return 200; // all ground points are at ~200 distance from sun
  }

  // Test points along the ground
  var testPoints = [];
  for (var x = sceneLeft + 20; x < sceneRight - 20; x += 16) {
    testPoints.push({ x: x, y: groundY });
  }

  function isInShadow(px) {
    if (px > bldgLeft + bldgW) {
      // Right of building: check if sun ray is blocked
      var tRight = (px - bldgLeft - bldgW);
      var rayY = groundY - tRight * Math.tan(altRad);
      return rayY >= bldgTop; // ray would hit building going back toward sun
    }
    if (px >= bldgLeft && px <= bldgLeft + bldgW) {
      return true; // under building
    }
    return false;
  }

  var hoverPoint = null;

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#0b0c0e';
    ctx.fillRect(0, 0, W, H);

    // Title
    ctx.font = 'bold 13px IBM Plex Mono, monospace';
    ctx.fillStyle = '#ffe066';
    ctx.textAlign = 'center';
    ctx.fillText('Shadow mapping : la comparaison de distances', W / 2, 20);
    ctx.font = '10px IBM Plex Mono, monospace';
    ctx.fillStyle = '#666';
    ctx.fillText('Le soleil enregistre la distance au premier objet touche. Chaque point compare SA distance.', W / 2, 36);

    // Ground
    ctx.fillStyle = '#1e2128';
    ctx.fillRect(sceneLeft, groundY, sceneW, 6);

    // Building
    ctx.fillStyle = 'rgba(90, 95, 110, 0.7)';
    ctx.fillRect(bldgLeft, bldgTop, bldgW, bldgH);
    ctx.strokeStyle = '#6a7080';
    ctx.lineWidth = 1;
    ctx.strokeRect(bldgLeft, bldgTop, bldgW, bldgH);
    ctx.font = '10px IBM Plex Mono, monospace';
    ctx.fillStyle = '#888';
    ctx.textAlign = 'center';
    ctx.fillText('batiment', bldgLeft + bldgW / 2, bldgTop - 6);

    // Sun
    ctx.beginPath();
    ctx.arc(sunVizX, sunVizY, 14, 0, Math.PI * 2);
    ctx.fillStyle = '#ffe066';
    ctx.fill();
    ctx.font = '10px IBM Plex Mono, monospace';
    ctx.fillStyle = '#ffe066';
    ctx.textAlign = 'left';
    ctx.fillText('soleil', sunVizX + 20, sunVizY + 4);

    // Sun rays (subtle)
    for (var i = 0; i < 6; i++) {
      ctx.beginPath();
      ctx.moveTo(sunVizX + 14, sunVizY + i * 5);
      ctx.lineTo(sunVizX + 14 + 300, sunVizY + i * 5 + 300 * Math.tan(altRad) * 0.4);
      ctx.strokeStyle = 'rgba(255, 224, 102, 0.06)';
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }

    // Shadow zone on ground
    var shadowStart = bldgLeft + bldgW;
    var shadowEnd = shadowStart + bldgH / Math.tan(altRad);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.fillRect(shadowStart, groundY - 2, shadowEnd - shadowStart, 4);

    // Test points
    testPoints.forEach(function (pt, idx) {
      var shadow = isInShadow(pt.x);
      var isHover = hoverPoint === idx;
      var r = isHover ? 5 : 3;

      ctx.beginPath();
      ctx.arc(pt.x, pt.y - 3, r, 0, Math.PI * 2);
      ctx.fillStyle = shadow ? '#ff6b6b' : '#7effd4';
      ctx.fill();
      if (isHover) {
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      if (isHover) {
        // Draw line from point toward sun
        var myDist = pointSunDist(pt.x);

        if (shadow && pt.x > bldgLeft + bldgW) {
          // Blocked: line to building face
          var hitX = bldgLeft + bldgW;
          var hitY = groundY - 3 - (pt.x - hitX) * Math.tan(altRad);
          ctx.beginPath();
          ctx.moveTo(pt.x, pt.y - 3);
          ctx.lineTo(hitX, hitY);
          ctx.strokeStyle = '#ff6b6b';
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // X at hit
          ctx.beginPath();
          ctx.moveTo(hitX - 4, hitY - 4); ctx.lineTo(hitX + 4, hitY + 4);
          ctx.moveTo(hitX + 4, hitY - 4); ctx.lineTo(hitX - 4, hitY + 4);
          ctx.strokeStyle = '#ff6b6b';
          ctx.lineWidth = 2;
          ctx.stroke();
        } else if (!shadow) {
          // Not blocked: line toward sun
          ctx.beginPath();
          ctx.moveTo(pt.x, pt.y - 3);
          ctx.lineTo(pt.x - 150, pt.y - 3 - 150 * Math.tan(altRad));
          ctx.strokeStyle = 'rgba(126, 255, 212, 0.3)';
          ctx.lineWidth = 1;
          ctx.setLineDash([4, 4]);
          ctx.stroke();
          ctx.setLineDash([]);
        }

        // Find which depth buffer column this point maps to
        var depthCol = Math.floor((pt.x - depthBufLeft) / depthCellW);
        depthCol = Math.max(0, Math.min(depthPixels - 1, depthCol));
        var storedDepth = calcSunDepth(depthCol);

        // Highlight the depth buffer column
        var colX = depthBufLeft + depthCol * depthCellW;
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.strokeRect(colX, depthBufY, depthCellW - 1, depthBufH);

        // Comparison box
        var boxY = depthBufY + depthBufH + 16;
        ctx.fillStyle = 'rgba(15, 16, 20, 0.95)';
        ctx.fillRect(margin, boxY, W - margin * 2, 52);

        ctx.font = '11px IBM Plex Mono, monospace';
        ctx.textAlign = 'left';

        // Line 1: stored distance
        ctx.fillStyle = '#ffe066';
        ctx.fillText('Depth buffer[' + depthCol + '] = ' + storedDepth.dist + 'm', margin + 10, boxY + 16);
        ctx.fillStyle = '#666';
        ctx.fillText('(distance soleil → ' + (storedDepth.isBuilding ? 'toit' : 'sol') + ')', margin + 250, boxY + 16);

        // Line 2: my distance
        ctx.fillStyle = shadow ? '#ff6b6b' : '#7effd4';
        ctx.fillText('Ma distance au soleil = ' + myDist + 'm', margin + 10, boxY + 34);

        // Line 3: comparison
        if (shadow) {
          ctx.fillStyle = '#ff6b6b';
          ctx.fillText(myDist + ' > ' + storedDepth.dist + '  →  quelque chose est plus pres du soleil que moi  →  OMBRE', margin + 10, boxY + 48);
        } else {
          ctx.fillStyle = '#7effd4';
          ctx.fillText(myDist + ' ≈ ' + storedDepth.dist + '  →  je suis le premier objet que le soleil voit  →  SOLEIL', margin + 10, boxY + 48);
        }
      }
    });

    // ── Depth buffer ─────────────────────────────────────────────
    ctx.font = 'bold 11px IBM Plex Mono, monospace';
    ctx.fillStyle = '#ffe066';
    ctx.textAlign = 'left';
    ctx.fillText('Depth buffer (distance soleil → premier objet) :', depthBufLeft, depthBufY - 6);

    for (var i = 0; i < depthPixels; i++) {
      var sd = calcSunDepth(i);
      var x = depthBufLeft + i * depthCellW;

      ctx.fillStyle = sd.isBuilding ? 'rgba(255, 224, 102, 0.25)' : 'rgba(60, 65, 80, 0.4)';
      ctx.fillRect(x, depthBufY, depthCellW - 1, depthBufH);
      ctx.strokeStyle = sd.isBuilding ? 'rgba(255, 224, 102, 0.3)' : '#1e2128';
      ctx.lineWidth = 0.5;
      ctx.strokeRect(x, depthBufY, depthCellW - 1, depthBufH);

      // Distance value
      ctx.font = '9px IBM Plex Mono, monospace';
      ctx.fillStyle = sd.isBuilding ? '#ffe066' : '#555';
      ctx.textAlign = 'center';
      ctx.fillText(sd.dist + 'm', x + depthCellW / 2, depthBufY + depthBufH / 2 + 3);
    }

    if (hoverPoint === null) {
      ctx.font = '10px IBM Plex Mono, monospace';
      ctx.fillStyle = '#555';
      ctx.textAlign = 'center';
      ctx.fillText('Survolez un point pour voir la comparaison de distances', W / 2, groundY + 16);
    }
  }

  draw();

  canvas.addEventListener('mousemove', function (e) {
    var rect = canvas.getBoundingClientRect();
    var mx = e.clientX - rect.left;
    var my = e.clientY - rect.top;
    hoverPoint = null;
    var bestDist = 25;
    testPoints.forEach(function (pt, idx) {
      var d = Math.sqrt(Math.pow(mx - pt.x, 2) + Math.pow(my - (pt.y - 3), 2));
      if (d < bestDist) { bestDist = d; hoverPoint = idx; }
    });
    draw();
  });

  canvas.addEventListener('mouseleave', function () {
    hoverPoint = null;
    draw();
  });

  window.addEventListener('resize', function () {
    W = container.clientWidth;
    sceneRight = W - margin - 10;
    sceneW = sceneRight - sceneLeft;
    depthBufW = sceneW - 40;
    depthCellW = depthBufW / depthPixels;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = W + 'px';
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    testPoints = [];
    for (var x = sceneLeft + 20; x < sceneRight - 20; x += 16) {
      testPoints.push({ x: x, y: groundY });
    }
    draw();
  });
})();
