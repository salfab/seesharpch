/**
 * Canvas 2D visualization: Rasterization explained
 * Shows a polygon being converted to pixels on a grid,
 * then the shadow mapping principle.
 */
(function () {
  'use strict';
  var container = document.getElementById('viz-rasterization');
  if (!container) return;

  var W = container.clientWidth;
  var H = 360;
  var dpr = Math.min(window.devicePixelRatio, 2);
  var canvas = document.createElement('canvas');
  canvas.width = W * dpr; canvas.height = H * dpr;
  canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
  container.appendChild(canvas);
  var ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  // Grid parameters
  var gridLeft = 30;
  var gridTop = 30;
  var cellSize = 22;
  var cols = 14;
  var rows = 12;

  // Building polygon (in grid coordinates)
  var building = [
    { x: 2, y: 2 }, { x: 2, y: 10 }, { x: 6, y: 10 }, { x: 6, y: 7 },
    { x: 9, y: 7 }, { x: 9, y: 10 }, { x: 12, y: 10 }, { x: 12, y: 2 },
  ];

  // Which cells are "inside" the building polygon
  function pointInPolygon(px, py, poly) {
    var inside = false;
    for (var i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      var xi = poly[i].x, yi = poly[i].y;
      var xj = poly[j].x, yj = poly[j].y;
      if ((yi > py) !== (yj > py) && px < (xj - xi) * (py - yi) / (yj - yi) + xi) {
        inside = !inside;
      }
    }
    return inside;
  }

  var filledCells = [];
  for (var r = 0; r < rows; r++) {
    for (var c = 0; c < cols; c++) {
      if (pointInPolygon(c + 0.5, r + 0.5, building)) {
        filledCells.push({ c: c, r: r });
      }
    }
  }

  var animProgress = 0;
  var animating = true;
  var animStart = null;
  var animDuration = 2500; // ms to fill all cells

  function draw(progress) {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#0b0c0e';
    ctx.fillRect(0, 0, W, H);

    var visibleCells = Math.floor(progress * filledCells.length);

    // Grid
    ctx.strokeStyle = '#1e2128';
    ctx.lineWidth = 0.5;
    for (var r = 0; r <= rows; r++) {
      ctx.beginPath();
      ctx.moveTo(gridLeft, gridTop + r * cellSize);
      ctx.lineTo(gridLeft + cols * cellSize, gridTop + r * cellSize);
      ctx.stroke();
    }
    for (var c = 0; c <= cols; c++) {
      ctx.beginPath();
      ctx.moveTo(gridLeft + c * cellSize, gridTop);
      ctx.lineTo(gridLeft + c * cellSize, gridTop + rows * cellSize);
      ctx.stroke();
    }

    // Filled cells (rasterized)
    for (var i = 0; i < visibleCells && i < filledCells.length; i++) {
      var cell = filledCells[i];
      ctx.fillStyle = 'rgba(126, 255, 212, 0.3)';
      ctx.fillRect(gridLeft + cell.c * cellSize + 1, gridTop + cell.r * cellSize + 1, cellSize - 2, cellSize - 2);
    }

    // Building polygon outline
    ctx.beginPath();
    ctx.moveTo(gridLeft + building[0].x * cellSize, gridTop + building[0].y * cellSize);
    for (var i = 1; i < building.length; i++) {
      ctx.lineTo(gridLeft + building[i].x * cellSize, gridTop + building[i].y * cellSize);
    }
    ctx.closePath();
    ctx.strokeStyle = '#7effd4';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Right side: explanation
    var textX = gridLeft + cols * cellSize + 30;
    ctx.font = 'bold 14px IBM Plex Mono, monospace';
    ctx.fillStyle = '#f0f0f2';
    ctx.textAlign = 'left';
    ctx.fillText('Rasterisation', textX, gridTop + 20);

    ctx.font = '11px IBM Plex Mono, monospace';
    ctx.fillStyle = '#c8c9cd';
    var lines = [
      'Un polygone (le batiment en L)',
      'est converti en pixels sur',
      'une grille reguliere.',
      '',
      'Chaque cellule stocke une',
      'valeur : hauteur, elevation,',
      'couleur...',
      '',
      'Rapide a lire : un seul',
      'acces memoire par point.',
      '',
      visibleCells + ' / ' + filledCells.length + ' pixels remplis',
    ];
    lines.forEach(function (line, i) {
      ctx.fillText(line, textX, gridTop + 45 + i * 18);
    });

    // Labels
    ctx.font = '9px IBM Plex Mono, monospace';
    ctx.fillStyle = '#555';
    ctx.textAlign = 'center';
    for (var c = 0; c < cols; c += 2) {
      ctx.fillText(c + '', gridLeft + c * cellSize + cellSize / 2, gridTop - 5);
    }
    ctx.textAlign = 'right';
    for (var r = 0; r < rows; r += 2) {
      ctx.fillText(r + '', gridLeft - 5, gridTop + r * cellSize + cellSize / 2 + 3);
    }

    // Grid pixel label
    if (visibleCells > 0 && visibleCells <= filledCells.length) {
      var lastCell = filledCells[visibleCells - 1];
      ctx.fillStyle = '#7effd4';
      ctx.font = '9px IBM Plex Mono, monospace';
      ctx.textAlign = 'center';
      ctx.fillText('pixel', gridLeft + lastCell.c * cellSize + cellSize / 2, gridTop + lastCell.r * cellSize + cellSize / 2 + 3);
    }
  }

  function animate(ts) {
    if (!animStart) animStart = ts;
    var elapsed = ts - animStart;
    animProgress = Math.min(elapsed / animDuration, 1);
    draw(animProgress);
    if (animProgress < 1) {
      requestAnimationFrame(animate);
    } else {
      // Stay at full
      setTimeout(function () {
        animStart = null;
        animProgress = 0;
        requestAnimationFrame(animate);
      }, 2000);
    }
  }
  requestAnimationFrame(animate);
})();
