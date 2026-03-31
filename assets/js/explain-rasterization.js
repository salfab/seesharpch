/**
 * Canvas 2D visualization: Rasterization explained
 * Side-by-side: exact polygon vs pixelized grid with height values.
 * Interactive hover to show instant grid lookup.
 */
(function () {
  'use strict';
  var container = document.getElementById('viz-rasterization');
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

  // Layout: two panels side by side
  var panelW = Math.floor((W - 30) / 2);
  var panelLeft = 10;
  var panelRight = panelLeft + panelW + 10;
  var panelTop = 55;
  var panelH = H - panelTop - 45;

  // Grid: 2m resolution over 30m x 24m area
  var cellSize = Math.floor(Math.min(panelW / 15, panelH / 12));
  var cols = Math.floor(panelW / cellSize);
  var rows = Math.floor(panelH / cellSize);
  var resolution = 2; // meters per cell

  // Building: a simple rectangle 16m x 10m, height 25m
  // In grid coords: 8 x 5 cells, placed at (3, 2)
  var bldg = { gx: 3, gy: 2, gw: 8, gh: 5, height: 25, label: 'batiment (25m)' };

  // Ground elevation: 500m everywhere
  var groundElev = 500;

  // Build the raster grid (what swissSURFACE3D would contain)
  var raster = [];
  for (var r = 0; r < rows; r++) {
    for (var c = 0; c < cols; c++) {
      var isInside = c >= bldg.gx && c < bldg.gx + bldg.gw &&
                     r >= bldg.gy && r < bldg.gy + bldg.gh;
      raster.push(isInside ? groundElev + bldg.height : groundElev);
    }
  }

  // Edge cells: partially inside the building
  // At real resolution, edges are ambiguous — the pixel center might be in or out
  // Mark edge cells for visualization
  function isEdge(c, r) {
    var inside = c >= bldg.gx && c < bldg.gx + bldg.gw &&
                 r >= bldg.gy && r < bldg.gy + bldg.gh;
    var hasOutsideNeighbor = false;
    [[-1,0],[1,0],[0,-1],[0,1]].forEach(function(d) {
      var nc = c + d[0], nr = r + d[1];
      var nInside = nc >= bldg.gx && nc < bldg.gx + bldg.gw &&
                    nr >= bldg.gy && nr < bldg.gy + bldg.gh;
      if (!nInside) hasOutsideNeighbor = true;
    });
    return inside && hasOutsideNeighbor;
  }

  var hoverCell = null; // { c, r } of hovered cell

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#0b0c0e';
    ctx.fillRect(0, 0, W, H);

    // ── Panel titles ─────────────────────────────────────────────
    ctx.font = 'bold 13px IBM Plex Mono, monospace';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#7effd4';
    ctx.fillText('Geometrie exacte (vectoriel)', panelLeft + panelW / 2, 20);
    ctx.fillStyle = '#ffe066';
    ctx.fillText('Grille raster (' + resolution + 'm / pixel)', panelRight + panelW / 2, 20);

    ctx.font = '10px IBM Plex Mono, monospace';
    ctx.fillStyle = '#666';
    ctx.fillText('Forme precise, calcul couteux', panelLeft + panelW / 2, 36);
    ctx.fillText('Approximation, lecture instantanee', panelRight + panelW / 2, 36);

    // ── LEFT PANEL: exact polygon ────────────────────────────────
    // Grid (subtle)
    ctx.strokeStyle = '#1a1d22';
    ctx.lineWidth = 0.5;
    for (var r = 0; r <= rows; r++) {
      ctx.beginPath();
      ctx.moveTo(panelLeft, panelTop + r * cellSize);
      ctx.lineTo(panelLeft + cols * cellSize, panelTop + r * cellSize);
      ctx.stroke();
    }
    for (var c = 0; c <= cols; c++) {
      ctx.beginPath();
      ctx.moveTo(panelLeft + c * cellSize, panelTop);
      ctx.lineTo(panelLeft + c * cellSize, panelTop + rows * cellSize);
      ctx.stroke();
    }

    // Building polygon (exact)
    var bx = panelLeft + bldg.gx * cellSize;
    var by = panelTop + bldg.gy * cellSize;
    var bw = bldg.gw * cellSize;
    var bh = bldg.gh * cellSize;
    ctx.fillStyle = 'rgba(126, 255, 212, 0.25)';
    ctx.fillRect(bx, by, bw, bh);
    ctx.strokeStyle = '#7effd4';
    ctx.lineWidth = 2;
    ctx.strokeRect(bx, by, bw, bh);

    // Building label
    ctx.font = '10px IBM Plex Mono, monospace';
    ctx.fillStyle = '#7effd4';
    ctx.textAlign = 'center';
    ctx.fillText(bldg.label, bx + bw / 2, by - 6);

    // Hover highlight on left panel
    if (hoverCell) {
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(panelLeft + hoverCell.c * cellSize, panelTop + hoverCell.r * cellSize, cellSize, cellSize);
    }

    // ── RIGHT PANEL: raster grid ─────────────────────────────────
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
        var x = panelRight + c * cellSize;
        var y = panelTop + r * cellSize;
        var val = raster[r * cols + c];
        var isBuilding = val > groundElev;
        var edge = isEdge(c, r);

        // Cell fill
        if (isBuilding) {
          ctx.fillStyle = edge ? 'rgba(255, 224, 102, 0.35)' : 'rgba(255, 224, 102, 0.2)';
        } else {
          ctx.fillStyle = 'rgba(40, 45, 55, 0.4)';
        }
        ctx.fillRect(x, y, cellSize, cellSize);

        // Cell border
        ctx.strokeStyle = isBuilding ? 'rgba(255, 224, 102, 0.3)' : '#1a1d22';
        ctx.lineWidth = 0.5;
        ctx.strokeRect(x, y, cellSize, cellSize);

        // Height value (show on larger cells)
        if (cellSize >= 20) {
          ctx.font = '8px IBM Plex Mono, monospace';
          ctx.fillStyle = isBuilding ? '#ffe066' : '#444';
          ctx.textAlign = 'center';
          ctx.fillText(val + '', x + cellSize / 2, y + cellSize / 2 + 3);
        }
      }
    }

    // Edge cells label
    ctx.font = '9px IBM Plex Mono, monospace';
    ctx.fillStyle = '#ffe066';
    ctx.textAlign = 'left';
    var edgeY = panelTop + (bldg.gy + bldg.gh) * cellSize + 14;
    ctx.fillText('Bords = approximation (pixel entier)', panelRight + 4, edgeY);

    // Hover highlight on right panel
    if (hoverCell) {
      var hx = panelRight + hoverCell.c * cellSize;
      var hy = panelTop + hoverCell.r * cellSize;
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.strokeRect(hx, hy, cellSize, cellSize);

      var hVal = raster[hoverCell.r * cols + hoverCell.c];

      // Lookup result box
      ctx.fillStyle = 'rgba(15, 16, 20, 0.9)';
      ctx.fillRect(panelRight, H - 40, panelW, 35);
      ctx.font = 'bold 12px IBM Plex Mono, monospace';
      ctx.fillStyle = hVal > groundElev ? '#ffe066' : '#888';
      ctx.textAlign = 'left';
      ctx.fillText(
        'grille[' + hoverCell.r + '][' + hoverCell.c + '] = ' + hVal + 'm' +
        (hVal > groundElev ? '  (toit)' : '  (sol)'),
        panelRight + 8, H - 20
      );
      ctx.font = '10px IBM Plex Mono, monospace';
      ctx.fillStyle = '#555';
      ctx.textAlign = 'right';
      ctx.fillText('1 acces memoire', panelRight + panelW - 8, H - 20);

      // Also highlight on left panel with lookup crosshair
      var lx = panelLeft + (hoverCell.c + 0.5) * cellSize;
      var ly = panelTop + (hoverCell.r + 0.5) * cellSize;
      ctx.beginPath();
      ctx.moveTo(lx - 6, ly); ctx.lineTo(lx + 6, ly);
      ctx.moveTo(lx, ly - 6); ctx.lineTo(lx, ly + 6);
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Arrow between panels
    var arrowY = panelTop + panelH / 2;
    var arrowX = panelLeft + panelW + 5;
    ctx.beginPath();
    ctx.moveTo(arrowX - 2, arrowY);
    ctx.lineTo(arrowX + 8, arrowY);
    ctx.lineTo(arrowX + 5, arrowY - 3);
    ctx.moveTo(arrowX + 8, arrowY);
    ctx.lineTo(arrowX + 5, arrowY + 3);
    ctx.strokeStyle = '#555';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Bottom instruction
    if (!hoverCell) {
      ctx.font = '10px IBM Plex Mono, monospace';
      ctx.fillStyle = '#555';
      ctx.textAlign = 'center';
      ctx.fillText('Survolez la grille pour voir le lookup instantane', W / 2, H - 10);
    }
  }

  draw();

  // Mouse interaction (hover on right panel)
  canvas.addEventListener('mousemove', function (e) {
    var rect = canvas.getBoundingClientRect();
    var mx = (e.clientX - rect.left);
    var my = (e.clientY - rect.top);

    // Check if over right panel
    var gc = Math.floor((mx - panelRight) / cellSize);
    var gr = Math.floor((my - panelTop) / cellSize);

    if (gc >= 0 && gc < cols && gr >= 0 && gr < rows && mx >= panelRight) {
      hoverCell = { c: gc, r: gr };
    } else {
      // Also check left panel
      gc = Math.floor((mx - panelLeft) / cellSize);
      gr = Math.floor((my - panelTop) / cellSize);
      if (gc >= 0 && gc < cols && gr >= 0 && gr < rows && mx < panelRight) {
        hoverCell = { c: gc, r: gr };
      } else {
        hoverCell = null;
      }
    }
    draw();
  });

  canvas.addEventListener('mouseleave', function () {
    hoverCell = null;
    draw();
  });

  window.addEventListener('resize', function () {
    W = container.clientWidth;
    panelW = Math.floor((W - 30) / 2);
    panelRight = panelLeft + panelW + 10;
    cellSize = Math.floor(Math.min(panelW / 15, panelH / 12));
    cols = Math.floor(panelW / cellSize);
    rows = Math.floor(panelH / cellSize);
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = W + 'px';
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    draw();
  });
})();
