/**
 * Canvas 2D visualization: Why CPU and GPU disagree on shadow edges
 * Shows the fundamental difference between:
 * - CPU: infinitely thin ray tests exact intersection with each triangle
 * - GPU: pixel-center sampling in a finite-resolution grid
 */
(function () {
  'use strict';
  var container = document.getElementById('viz-divergence');
  if (!container) return;

  var W = container.clientWidth;
  var H = 380;
  var dpr = Math.min(window.devicePixelRatio, 2);
  var canvas = document.createElement('canvas');
  canvas.width = W * dpr; canvas.height = H * dpr;
  canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
  container.appendChild(canvas);
  var ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  var panelW = Math.floor((W - 30) / 2);
  var panelLeft = 10;
  var panelRight = panelLeft + panelW + 10;
  var panelTop = 50;

  // Grid parameters (the shadow map pixels)
  var cellSize = Math.floor(Math.min(panelW / 12, (H - panelTop - 60) / 10));
  var gridCols = Math.floor(panelW / cellSize);
  var gridRows = Math.floor((H - panelTop - 60) / cellSize);

  // Building: a diagonal wall (the worst case for pixel sampling)
  // Defined as a line from (2,1) to (9,8) in grid coords
  var wallStart = { x: 2, y: 1 };
  var wallEnd = { x: 9, y: 8 };

  // Sun direction: rays come from top-left
  var sunDirX = 0.7;
  var sunDirY = 0.7;

  // A test point that sits right on the shadow edge
  var testPoint = { gx: 6.5, gy: 5.5 }; // in grid coords

  // Check if a point is on the shadow side of the wall
  function isInShadowExact(px, py) {
    // The wall casts a shadow to the bottom-right (away from sun)
    // Cross product of wall direction × point-to-wall tells which side
    var wallDx = wallEnd.x - wallStart.x;
    var wallDy = wallEnd.y - wallStart.y;
    var toPx = px - wallStart.x;
    var toPy = py - wallStart.y;
    var cross = wallDx * toPy - wallDy * toPx;
    return cross > 0; // right side of wall = shadow side
  }

  // For GPU: check pixel center
  function gpuShadow(cellX, cellY) {
    return isInShadowExact(cellX + 0.5, cellY + 0.5);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#0b0c0e';
    ctx.fillRect(0, 0, W, H);

    // Titles
    ctx.font = 'bold 13px IBM Plex Mono, monospace';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#7effd4';
    ctx.fillText('CPU : rayon exact', panelLeft + panelW / 2, 20);
    ctx.fillStyle = '#ffe066';
    ctx.fillText('GPU : echantillonnage pixel', panelRight + panelW / 2, 20);

    ctx.font = '10px IBM Plex Mono, monospace';
    ctx.fillStyle = '#666';
    ctx.fillText('Intersection geometrique precise', panelLeft + panelW / 2, 36);
    ctx.fillText('Le centre du pixel decide pour tout le pixel', panelRight + panelW / 2, 36);

    // ── LEFT PANEL: CPU exact ray-tracing ────────────────────────
    // Draw smooth shadow boundary (exact)
    ctx.save();
    ctx.beginPath();
    ctx.rect(panelLeft, panelTop, gridCols * cellSize, gridRows * cellSize);
    ctx.clip();

    // Shadow zone (right of wall)
    ctx.beginPath();
    ctx.moveTo(panelLeft + wallStart.x * cellSize, panelTop + wallStart.y * cellSize);
    ctx.lineTo(panelLeft + wallEnd.x * cellSize, panelTop + wallEnd.y * cellSize);
    ctx.lineTo(panelLeft + gridCols * cellSize, panelTop + gridRows * cellSize);
    ctx.lineTo(panelLeft + gridCols * cellSize, panelTop);
    ctx.lineTo(panelLeft + wallStart.x * cellSize, panelTop + wallStart.y * cellSize);
    ctx.closePath();
    ctx.fillStyle = 'rgba(255, 107, 107, 0.15)';
    ctx.fill();

    // Sun zone (left of wall)
    ctx.beginPath();
    ctx.moveTo(panelLeft + wallStart.x * cellSize, panelTop + wallStart.y * cellSize);
    ctx.lineTo(panelLeft + wallEnd.x * cellSize, panelTop + wallEnd.y * cellSize);
    ctx.lineTo(panelLeft, panelTop + gridRows * cellSize);
    ctx.lineTo(panelLeft, panelTop);
    ctx.lineTo(panelLeft + wallStart.x * cellSize, panelTop + wallStart.y * cellSize);
    ctx.closePath();
    ctx.fillStyle = 'rgba(126, 255, 212, 0.1)';
    ctx.fill();

    ctx.restore();

    // Wall line (exact, smooth)
    ctx.beginPath();
    ctx.moveTo(panelLeft + wallStart.x * cellSize, panelTop + wallStart.y * cellSize);
    ctx.lineTo(panelLeft + wallEnd.x * cellSize, panelTop + wallEnd.y * cellSize);
    ctx.strokeStyle = '#7effd4';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Grid (subtle)
    ctx.strokeStyle = '#1e2128';
    ctx.lineWidth = 0.5;
    for (var r = 0; r <= gridRows; r++) {
      ctx.beginPath();
      ctx.moveTo(panelLeft, panelTop + r * cellSize);
      ctx.lineTo(panelLeft + gridCols * cellSize, panelTop + r * cellSize);
      ctx.stroke();
    }
    for (var c = 0; c <= gridCols; c++) {
      ctx.beginPath();
      ctx.moveTo(panelLeft + c * cellSize, panelTop);
      ctx.lineTo(panelLeft + c * cellSize, panelTop + gridRows * cellSize);
      ctx.stroke();
    }

    // Test point with exact ray
    var tpx = panelLeft + testPoint.gx * cellSize;
    var tpy = panelTop + testPoint.gy * cellSize;
    var tpShadow = isInShadowExact(testPoint.gx, testPoint.gy);

    // Ray from test point toward sun
    ctx.beginPath();
    ctx.moveTo(tpx, tpy);
    var rayEndX = tpx - sunDirX * 80;
    var rayEndY = tpy - sunDirY * 80;
    ctx.lineTo(rayEndX, rayEndY);
    ctx.strokeStyle = tpShadow ? '#ff6b6b' : '#7effd4';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([3, 3]);
    ctx.stroke();
    ctx.setLineDash([]);

    // Intersection point on wall
    if (tpShadow) {
      var t = ((wallStart.x - testPoint.gx) * (wallEnd.y - wallStart.y) - (wallStart.y - testPoint.gy) * (wallEnd.x - wallStart.x)) /
              (sunDirX * (wallEnd.y - wallStart.y) - sunDirY * (wallEnd.x - wallStart.x));
      if (t > 0) {
        var hitX = panelLeft + (testPoint.gx - sunDirX * t) * cellSize;
        var hitY = panelTop + (testPoint.gy - sunDirY * t) * cellSize;
        ctx.beginPath();
        ctx.arc(hitX, hitY, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#ff6b6b';
        ctx.fill();
        ctx.font = '9px IBM Plex Mono, monospace';
        ctx.fillStyle = '#ff6b6b';
        ctx.textAlign = 'left';
        ctx.fillText('intersection', hitX + 6, hitY - 4);
      }
    }

    // Test point
    ctx.beginPath();
    ctx.arc(tpx, tpy, 5, 0, Math.PI * 2);
    ctx.fillStyle = tpShadow ? '#ff6b6b' : '#7effd4';
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.font = 'bold 10px IBM Plex Mono, monospace';
    ctx.fillStyle = tpShadow ? '#ff6b6b' : '#7effd4';
    ctx.textAlign = 'center';
    ctx.fillText(tpShadow ? 'OMBRE' : 'SOLEIL', tpx, tpy + 16);

    // Labels
    ctx.font = '9px IBM Plex Mono, monospace';
    ctx.fillStyle = '#7effd4';
    ctx.textAlign = 'left';
    ctx.fillText('mur du batiment', panelLeft + wallEnd.x * cellSize + 4, panelTop + wallEnd.y * cellSize - 4);

    // ── RIGHT PANEL: GPU pixel sampling ──────────────────────────
    // Each cell colored by its CENTER sampling
    for (var r = 0; r < gridRows; r++) {
      for (var c = 0; c < gridCols; c++) {
        var x = panelRight + c * cellSize;
        var y = panelTop + r * cellSize;
        var shadow = gpuShadow(c, r);

        ctx.fillStyle = shadow ? 'rgba(255, 107, 107, 0.2)' : 'rgba(126, 255, 212, 0.08)';
        ctx.fillRect(x, y, cellSize, cellSize);

        // Cell border
        ctx.strokeStyle = shadow ? 'rgba(255, 107, 107, 0.15)' : '#1a1d22';
        ctx.lineWidth = 0.5;
        ctx.strokeRect(x, y, cellSize, cellSize);

        // Center dot (what the GPU samples)
        ctx.beginPath();
        ctx.arc(x + cellSize / 2, y + cellSize / 2, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = shadow ? 'rgba(255, 107, 107, 0.4)' : 'rgba(126, 255, 212, 0.2)';
        ctx.fill();
      }
    }

    // Staircase shadow edge (the GPU approximation)
    ctx.strokeStyle = '#ffe066';
    ctx.lineWidth = 1.5;
    for (var c = 0; c < gridCols - 1; c++) {
      for (var r = 0; r < gridRows - 1; r++) {
        var here = gpuShadow(c, r);
        var right = gpuShadow(c + 1, r);
        var below = gpuShadow(c, r + 1);
        if (here !== right) {
          ctx.beginPath();
          ctx.moveTo(panelRight + (c + 1) * cellSize, panelTop + r * cellSize);
          ctx.lineTo(panelRight + (c + 1) * cellSize, panelTop + (r + 1) * cellSize);
          ctx.stroke();
        }
        if (here !== below) {
          ctx.beginPath();
          ctx.moveTo(panelRight + c * cellSize, panelTop + (r + 1) * cellSize);
          ctx.lineTo(panelRight + (c + 1) * cellSize, panelTop + (r + 1) * cellSize);
          ctx.stroke();
        }
      }
    }

    // Exact wall line overlaid (to show the approximation)
    ctx.beginPath();
    ctx.moveTo(panelRight + wallStart.x * cellSize, panelTop + wallStart.y * cellSize);
    ctx.lineTo(panelRight + wallEnd.x * cellSize, panelTop + wallEnd.y * cellSize);
    ctx.strokeStyle = 'rgba(126, 255, 212, 0.3)';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    ctx.stroke();
    ctx.setLineDash([]);

    // Test point on GPU side
    var gpuTpx = panelRight + testPoint.gx * cellSize;
    var gpuTpy = panelTop + testPoint.gy * cellSize;
    var gpuCell = gpuShadow(Math.floor(testPoint.gx), Math.floor(testPoint.gy));

    // Highlight the cell the point falls into
    var cellX = Math.floor(testPoint.gx);
    var cellY = Math.floor(testPoint.gy);
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.strokeRect(panelRight + cellX * cellSize, panelTop + cellY * cellSize, cellSize, cellSize);

    // Arrow from point to cell center
    var ccx = panelRight + (cellX + 0.5) * cellSize;
    var ccy = panelTop + (cellY + 0.5) * cellSize;
    ctx.beginPath();
    ctx.moveTo(gpuTpx, gpuTpy);
    ctx.lineTo(ccx, ccy);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Test point
    ctx.beginPath();
    ctx.arc(gpuTpx, gpuTpy, 5, 0, Math.PI * 2);
    ctx.fillStyle = gpuCell ? '#ff6b6b' : '#7effd4';
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.font = 'bold 10px IBM Plex Mono, monospace';
    ctx.fillStyle = gpuCell ? '#ff6b6b' : '#7effd4';
    ctx.textAlign = 'center';
    ctx.fillText(gpuCell ? 'OMBRE' : 'SOLEIL', gpuTpx, gpuTpy + 16);

    // Labels
    ctx.font = '9px IBM Plex Mono, monospace';
    ctx.fillStyle = '#ffe066';
    ctx.textAlign = 'left';
    ctx.fillText('bord d\'ombre pixelise', panelRight + 4, panelTop + gridRows * cellSize + 14);
    ctx.fillStyle = 'rgba(126, 255, 212, 0.5)';
    ctx.fillText('vrai bord (pointille)', panelRight + 4, panelTop + gridRows * cellSize + 28);

    // Highlight disagreement
    if (tpShadow !== gpuCell) {
      ctx.font = 'bold 12px IBM Plex Mono, monospace';
      ctx.fillStyle = '#ffe066';
      ctx.textAlign = 'center';
      ctx.fillText('⬆ DESACCORD : le point est sur le bord d\'ombre', W / 2, H - 8);
    } else {
      ctx.font = '11px IBM Plex Mono, monospace';
      ctx.fillStyle = '#666';
      ctx.textAlign = 'center';
      ctx.fillText('Les deux sont d\'accord sur ce point', W / 2, H - 8);
    }

    // Arrow between panels
    var arrowY = panelTop + gridRows * cellSize / 2;
    ctx.beginPath();
    ctx.moveTo(panelLeft + panelW + 2, arrowY);
    ctx.lineTo(panelRight - 2, arrowY);
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  draw();
})();
