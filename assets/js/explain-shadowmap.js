/**
 * Canvas 2D visualization: Shadow mapping explained
 * Shows the two-pass process:
 * 1. Render scene from sun's POV → depth buffer
 * 2. For each point, compare its sun-distance to the depth buffer
 */
(function () {
  'use strict';
  var container = document.getElementById('viz-shadowmap');
  if (!container) return;

  var W = container.clientWidth;
  var H = 400;
  var dpr = Math.min(window.devicePixelRatio, 2);
  var canvas = document.createElement('canvas');
  canvas.width = W * dpr; canvas.height = H * dpr;
  canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
  canvas.style.cursor = 'crosshair';
  container.appendChild(canvas);
  var ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  // Scene layout (side view)
  var margin = 20;
  var sceneTop = 50;
  var sceneH = 180;
  var groundY = sceneTop + sceneH;
  var sceneLeft = margin + 10;
  var sceneRight = W - margin - 10;
  var sceneW = sceneRight - sceneLeft;

  // Sun position (top-left, looking down-right)
  var sunX = sceneLeft + 30;
  var sunY = sceneTop + 10;
  var sunAlt = 25; // degrees

  // Building (side view)
  var bldgLeft = sceneLeft + sceneW * 0.35;
  var bldgW = 40;
  var bldgH = 100;
  var bldgTop = groundY - bldgH;

  // Ground test points
  var testPoints = [];
  for (var x = sceneLeft + 20; x < sceneRight - 20; x += 18) {
    testPoints.push({ x: x, y: groundY });
  }

  // Depth buffer (1D, from sun's perspective)
  var depthBufY = groundY + 30;
  var depthBufH = 50;
  var depthBufW = sceneW - 40;
  var depthBufLeft = sceneLeft + 20;
  var depthPixels = 20;
  var depthCellW = depthBufW / depthPixels;

  var hoverPoint = null; // index into testPoints

  // Calculate if a point is in shadow
  // Simplified: sun rays come from top-left at sunAlt degrees
  function isInShadow(px, py) {
    // Trace ray from point toward sun direction
    var altRad = sunAlt * Math.PI / 180;
    // Sun is to the left and above. Ray goes up-left.
    var dx = -1; // left
    var dy = -Math.tan(altRad); // up

    // Check if ray hits building
    // Building spans bldgLeft to bldgLeft+bldgW, from groundY-bldgH to groundY
    // Parametric: point + t * (dx, dy)
    // Find t where x = bldgLeft+bldgW (right face of building)
    if (px > bldgLeft + bldgW) {
      var tRight = (bldgLeft + bldgW - px) / dx;
      if (tRight > 0) {
        var yAtRight = py + tRight * dy;
        if (yAtRight >= bldgTop && yAtRight <= groundY) return true;
      }
    }
    // Find t where x = bldgLeft (left face)
    if (px > bldgLeft && px <= bldgLeft + bldgW) {
      return true; // directly under building
    }
    // Check top face
    var tTop = (bldgTop - py) / dy;
    if (tTop > 0) {
      var xAtTop = px + tTop * dx;
      if (xAtTop >= bldgLeft && xAtTop <= bldgLeft + bldgW) return true;
    }
    return false;
  }

  // Calculate depth from sun for a column (what the sun "sees")
  function sunDepth(col) {
    // Sun looks from top-left. For each "column" of sun view,
    // the depth is the distance to the first object hit.
    var fracX = col / depthPixels;
    var targetX = depthBufLeft + fracX * depthBufW;
    // Simple: if column overlaps building, depth = distance to building top
    // Otherwise depth = distance to ground
    if (targetX >= bldgLeft && targetX <= bldgLeft + bldgW) {
      return { depth: 'short', hitY: bldgTop, label: 'toit' };
    }
    return { depth: 'long', hitY: groundY, label: 'sol' };
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#0b0c0e';
    ctx.fillRect(0, 0, W, H);

    // Title
    ctx.font = 'bold 13px IBM Plex Mono, monospace';
    ctx.fillStyle = '#ffe066';
    ctx.textAlign = 'center';
    ctx.fillText('Shadow mapping : comment la rasterisation calcule les ombres', W / 2, 22);

    ctx.font = '10px IBM Plex Mono, monospace';
    ctx.fillStyle = '#666';
    ctx.fillText('Vue de cote : le soleil regarde la scene et enregistre les distances', W / 2, 38);

    // Ground
    ctx.fillStyle = '#1e2128';
    ctx.fillRect(sceneLeft, groundY, sceneW, 8);

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
    ctx.arc(sunX, sunY, 14, 0, Math.PI * 2);
    ctx.fillStyle = '#ffe066';
    ctx.fill();
    ctx.font = '10px IBM Plex Mono, monospace';
    ctx.fillStyle = '#ffe066';
    ctx.textAlign = 'left';
    ctx.fillText('soleil', sunX + 20, sunY + 4);

    // Sun rays toward scene
    var altRad = sunAlt * Math.PI / 180;
    for (var i = 0; i < 8; i++) {
      var startX = sunX + 14;
      var startY = sunY + i * 3;
      var endX = startX + 300;
      var endY = startY + 300 * Math.tan(altRad) * 0.4;
      // Check if ray hits building
      ctx.beginPath();
      ctx.moveTo(startX, startY);

      var hitsBldg = endX > bldgLeft && startX < bldgLeft;
      if (hitsBldg) {
        var t = (bldgLeft - startX);
        var hitY = startY + t * Math.tan(altRad) * 0.4;
        if (hitY < groundY) {
          ctx.lineTo(bldgLeft, hitY);
          ctx.strokeStyle = 'rgba(255, 224, 102, 0.15)';
        } else {
          ctx.lineTo(endX, endY);
          ctx.strokeStyle = 'rgba(255, 224, 102, 0.08)';
        }
      } else {
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = 'rgba(255, 224, 102, 0.08)';
      }
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }

    // Shadow on ground (dark area behind building)
    var shadowStart = bldgLeft + bldgW;
    var shadowLen = bldgH / Math.tan(altRad * Math.PI / 180 * 3); // approximate
    shadowLen = Math.min(shadowLen, 120);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(shadowStart, groundY - 3, shadowLen, 6);
    ctx.font = '9px IBM Plex Mono, monospace';
    ctx.fillStyle = '#ff6b6b';
    ctx.textAlign = 'center';
    ctx.fillText('ombre', shadowStart + shadowLen / 2, groundY - 8);

    // Test points
    testPoints.forEach(function (pt, idx) {
      var shadow = isInShadow(pt.x, pt.y);
      var isHover = hoverPoint === idx;

      ctx.beginPath();
      ctx.arc(pt.x, pt.y - 3, isHover ? 5 : 3, 0, Math.PI * 2);
      ctx.fillStyle = shadow ? '#ff6b6b' : '#7effd4';
      ctx.fill();

      if (isHover) {
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Draw ray from this point toward sun
        ctx.beginPath();
        ctx.moveTo(pt.x, pt.y - 3);
        var rayEndX = pt.x - 200;
        var rayEndY = pt.y - 3 - 200 * Math.tan(altRad);
        // Check if blocked by building
        if (shadow && pt.x > bldgLeft + bldgW) {
          var tHit = (pt.x - bldgLeft - bldgW);
          var hitY = pt.y - 3 - tHit * Math.tan(altRad);
          ctx.lineTo(bldgLeft + bldgW, hitY);
          ctx.strokeStyle = '#ff6b6b';
          ctx.lineWidth = 1.5;
          ctx.stroke();
          // X mark at hit
          ctx.beginPath();
          ctx.moveTo(bldgLeft + bldgW - 4, hitY - 4);
          ctx.lineTo(bldgLeft + bldgW + 4, hitY + 4);
          ctx.moveTo(bldgLeft + bldgW + 4, hitY - 4);
          ctx.lineTo(bldgLeft + bldgW - 4, hitY + 4);
          ctx.strokeStyle = '#ff6b6b';
          ctx.lineWidth = 2;
          ctx.stroke();
        } else {
          ctx.lineTo(rayEndX, rayEndY);
          ctx.strokeStyle = 'rgba(126, 255, 212, 0.4)';
          ctx.lineWidth = 1;
          ctx.setLineDash([4, 4]);
          ctx.stroke();
          ctx.setLineDash([]);
        }

        // Label
        ctx.font = 'bold 11px IBM Plex Mono, monospace';
        ctx.textAlign = 'center';
        ctx.fillStyle = shadow ? '#ff6b6b' : '#7effd4';
        ctx.fillText(shadow ? 'OMBRE' : 'SOLEIL', pt.x, pt.y - 14);
      }
    });

    // ── Depth buffer ─────────────────────────────────────────────
    ctx.font = 'bold 11px IBM Plex Mono, monospace';
    ctx.fillStyle = '#ffe066';
    ctx.textAlign = 'left';
    ctx.fillText('Depth buffer (ce que le soleil "voit") :', depthBufLeft, depthBufY - 6);

    for (var i = 0; i < depthPixels; i++) {
      var sd = sunDepth(i);
      var x = depthBufLeft + i * depthCellW;
      var y = depthBufY;

      // Color by depth
      ctx.fillStyle = sd.depth === 'short' ? 'rgba(255, 224, 102, 0.3)' : 'rgba(60, 65, 80, 0.4)';
      ctx.fillRect(x, y, depthCellW - 1, depthBufH);
      ctx.strokeStyle = sd.depth === 'short' ? 'rgba(255, 224, 102, 0.4)' : '#1e2128';
      ctx.lineWidth = 0.5;
      ctx.strokeRect(x, y, depthCellW - 1, depthBufH);

      // Depth label
      ctx.font = '8px IBM Plex Mono, monospace';
      ctx.fillStyle = sd.depth === 'short' ? '#ffe066' : '#444';
      ctx.textAlign = 'center';
      ctx.fillText(sd.label, x + depthCellW / 2, y + depthBufH / 2 + 3);
    }

    // Depth buffer explanation
    ctx.font = '10px IBM Plex Mono, monospace';
    ctx.fillStyle = '#888';
    ctx.textAlign = 'left';
    ctx.fillText('Jaune = le soleil voit le toit en premier (distance courte)', depthBufLeft, depthBufY + depthBufH + 14);
    ctx.fillText('Gris = le soleil voit le sol (distance longue)', depthBufLeft, depthBufY + depthBufH + 28);
    ctx.fillText('Point au sol dont la distance > depth buffer → derriere un objet → ombre', depthBufLeft, depthBufY + depthBufH + 42);

    // Hover instruction
    if (hoverPoint === null) {
      ctx.font = '10px IBM Plex Mono, monospace';
      ctx.fillStyle = '#555';
      ctx.textAlign = 'center';
      ctx.fillText('Survolez un point au sol pour voir le test ombre/soleil', W / 2, groundY + 16);
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
    // Recalculate test points
    testPoints = [];
    for (var x = sceneLeft + 20; x < sceneRight - 20; x += 18) {
      testPoints.push({ x: x, y: groundY });
    }
    draw();
  });
})();
