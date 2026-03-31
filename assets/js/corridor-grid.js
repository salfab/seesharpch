/**
 * Canvas 2D visualization: Corridor + 64m spatial grid
 * Top-down view of buildings around the Great Escape terrace.
 * Shows how the corridor + grid culling reduces candidate obstacles.
 *
 * Data loaded from /assets/data/great-escape-buildings.json
 */
(function () {
  'use strict';
  var container = document.getElementById('viz-corridor');
  if (!container) return;

  fetch('/assets/data/great-escape-buildings.json')
    .then(function (r) { return r.json(); })
    .then(init)
    .catch(function (err) {
      container.innerHTML = '<p style="color:#ff6b6b;padding:2rem;">Erreur: ' + err.message + '</p>';
    });

  function init(buildings) {
    var W = container.clientWidth;
    var H = Math.min(W, 700);
    var canvas = document.createElement('canvas');
    var dpr = Math.min(window.devicePixelRatio, 2);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    container.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    var originE = 2538193;
    var originN = 1152701;

    // View: show ~500m around the terrace
    var viewSize = 500; // meters
    var scale = Math.min(W, H) / viewSize;
    var cx = W / 2;
    var cy = H / 2;

    function toScreen(e, n) {
      return {
        x: cx + (e - originE) * scale,
        y: cy - (n - originN) * scale // Y flipped (north = up)
      };
    }

    // Grid cell size
    var cellSize = 64;

    // Corridor params
    var maxDistance = 400; // meters (clipped to view)
    var maxHalfDiag = 0;
    buildings.forEach(function (b) {
      if (b.halfDiagonal > maxHalfDiag) maxHalfDiag = b.halfDiagonal;
    });
    var corridorPadding = maxHalfDiag + cellSize;

    // Build spatial grid (same logic as mappy-hour)
    var grid = {};
    buildings.forEach(function (b, idx) {
      var cMinX = Math.floor(b.minX / cellSize);
      var cMaxX = Math.floor(b.maxX / cellSize);
      var cMinY = Math.floor(b.minY / cellSize);
      var cMaxY = Math.floor(b.maxY / cellSize);
      for (var cy2 = cMinY; cy2 <= cMaxY; cy2++) {
        for (var cx2 = cMinX; cx2 <= cMaxX; cx2++) {
          var key = cx2 + ':' + cy2;
          if (!grid[key]) grid[key] = [];
          grid[key].push(idx);
        }
      }
    });

    // Current sun azimuth
    var currentAzimuth = 252;

    function computeCorridor(azDeg) {
      var azRad = azDeg * Math.PI / 180;
      var dirX = Math.sin(azRad);
      var dirY = Math.cos(azRad);
      // Perpendicular direction (for lateral distance)
      var perpX = -dirY;
      var perpY = dirX;

      var endE = originE + dirX * maxDistance;
      var endN = originN + dirY * maxDistance;

      // Corridor AABB (coarse, for grid cell lookup)
      var corrMinE = Math.min(originE, endE) - corridorPadding;
      var corrMaxE = Math.max(originE, endE) + corridorPadding;
      var corrMinN = Math.min(originN, endN) - corridorPadding;
      var corrMaxN = Math.max(originN, endN) + corridorPadding;

      // Grid cells in AABB
      var cellMinX = Math.floor(corrMinE / cellSize);
      var cellMaxX = Math.floor(corrMaxE / cellSize);
      var cellMinY = Math.floor(corrMinN / cellSize);
      var cellMaxY = Math.floor(corrMaxN / cellSize);

      // Collect candidates from grid, then filter properly
      var rawCandidates = new Set();
      for (var cy2 = cellMinY; cy2 <= cellMaxY; cy2++) {
        for (var cx2 = cellMinX; cx2 <= cellMaxX; cx2++) {
          var key = cx2 + ':' + cy2;
          if (grid[key]) {
            grid[key].forEach(function (idx) { rawCandidates.add(idx); });
          }
        }
      }

      // Filter: dot product (not behind) + lateral distance (within corridor width)
      var filtered = [];
      rawCandidates.forEach(function (idx) {
        var b = buildings[idx];
        var dx = b.centerX - originE;
        var dy = b.centerY - originN;
        // Along-ray distance
        var dot = dx * dirX + dy * dirY;
        if (dot < -b.halfDiagonal) return; // behind observer
        // Lateral distance to ray
        var lateral = Math.abs(dx * perpX + dy * perpY);
        if (lateral > corridorPadding + b.halfDiagonal) return; // too far from ray
        // Distance check
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > maxDistance + b.halfDiagonal) return;
        filtered.push(idx);
      });

      var candidateSet = new Set(filtered);

      // Determine which cells actually contain candidates (for highlighting)
      var activeCells = {};
      filtered.forEach(function (idx) {
        var b = buildings[idx];
        var cMinX2 = Math.floor(b.minX / cellSize);
        var cMaxX2 = Math.floor(b.maxX / cellSize);
        var cMinY2 = Math.floor(b.minY / cellSize);
        var cMaxY2 = Math.floor(b.maxY / cellSize);
        for (var cy3 = cMinY2; cy3 <= cMaxY2; cy3++) {
          for (var cx3 = cMinX2; cx3 <= cMaxX2; cx3++) {
            activeCells[cx3 + ':' + cy3] = true;
          }
        }
      });

      // Also highlight cells that the ray passes through
      var rayCells = {};
      for (var t = 0; t <= maxDistance; t += cellSize / 2) {
        var re = originE + dirX * t;
        var rn = originN + dirY * t;
        // Include cells within corridorPadding of the ray point
        var rcMinX = Math.floor((re - corridorPadding) / cellSize);
        var rcMaxX = Math.floor((re + corridorPadding) / cellSize);
        var rcMinY = Math.floor((rn - corridorPadding) / cellSize);
        var rcMaxY = Math.floor((rn + corridorPadding) / cellSize);
        for (var rcy = rcMinY; rcy <= rcMaxY; rcy++) {
          for (var rcx = rcMinX; rcx <= rcMaxX; rcx++) {
            // Check if cell center is within corridorPadding of the ray line
            var ccE = (rcx + 0.5) * cellSize;
            var ccN = (rcy + 0.5) * cellSize;
            var cdx = ccE - originE;
            var cdy = ccN - originN;
            var clat = Math.abs(cdx * perpX + cdy * perpY);
            if (clat <= corridorPadding + cellSize * 0.7) {
              rayCells[rcx + ':' + rcy] = true;
            }
          }
        }
      }

      return {
        dirX: dirX, dirY: dirY, perpX: perpX, perpY: perpY,
        endE: endE, endN: endN,
        minE: corrMinE, maxE: corrMaxE, minN: corrMinN, maxN: corrMaxN,
        activeCells: activeCells,
        rayCells: rayCells,
        candidateCount: filtered.length,
        candidateIndices: candidateSet,
        corridorPadding: corridorPadding,
      };
    }

    function draw(azDeg) {
      var corridor = computeCorridor(azDeg);
      ctx.clearRect(0, 0, W, H);

      // Background
      ctx.fillStyle = '#0b0c0e';
      ctx.fillRect(0, 0, W, H);

      // ── All 64m grid cells (subtle) ────────────────────────────────
      var viewMinE = originE - viewSize / 2;
      var viewMaxE = originE + viewSize / 2;
      var viewMinN = originN - viewSize / 2;
      var viewMaxN = originN + viewSize / 2;

      var gMinX = Math.floor(viewMinE / cellSize);
      var gMaxX = Math.floor(viewMaxE / cellSize);
      var gMinY = Math.floor(viewMinN / cellSize);
      var gMaxY = Math.floor(viewMaxN / cellSize);

      ctx.strokeStyle = '#1a1d22';
      ctx.lineWidth = 0.5;
      for (var gy = gMinY; gy <= gMaxY; gy++) {
        for (var gx = gMinX; gx <= gMaxX; gx++) {
          var tl = toScreen(gx * cellSize, (gy + 1) * cellSize);
          ctx.strokeRect(tl.x, tl.y, cellSize * scale, cellSize * scale);
        }
      }

      // ── Corridor strip (rotated, aligned to ray) ─────────────────
      var p0 = toScreen(originE, originN);
      var pEnd = toScreen(corridor.endE, corridor.endN);
      var padPx = corridor.corridorPadding * scale;
      var perpScreenX = -corridor.perpX * padPx;  // perp in screen is (perpE, -perpN) scaled
      var perpScreenY = corridor.perpY * padPx;

      ctx.beginPath();
      ctx.moveTo(p0.x + perpScreenX, p0.y + perpScreenY);
      ctx.lineTo(pEnd.x + perpScreenX, pEnd.y + perpScreenY);
      ctx.lineTo(pEnd.x - perpScreenX, pEnd.y - perpScreenY);
      ctx.lineTo(p0.x - perpScreenX, p0.y - perpScreenY);
      ctx.closePath();
      ctx.fillStyle = 'rgba(255, 224, 102, 0.04)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 224, 102, 0.25)';
      ctx.lineWidth = 1;
      ctx.setLineDash([6, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      // ── Corridor grid cells (only cells near the ray) ──────────────
      var rayCellKeys = Object.keys(corridor.rayCells);
      rayCellKeys.forEach(function (key) {
        var parts = key.split(':');
        var cellX = parseInt(parts[0]);
        var cellY = parseInt(parts[1]);
        var tl = toScreen(cellX * cellSize, (cellY + 1) * cellSize);
        ctx.fillStyle = 'rgba(255, 224, 102, 0.06)';
        ctx.fillRect(tl.x, tl.y, cellSize * scale, cellSize * scale);
        ctx.strokeStyle = 'rgba(255, 224, 102, 0.2)';
        ctx.lineWidth = 0.5;
        ctx.strokeRect(tl.x, tl.y, cellSize * scale, cellSize * scale);
      });

      // ── Buildings ──────────────────────────────────────────────────
      buildings.forEach(function (b, idx) {
        if (!b.footprint || b.footprint.length < 3) return;
        var inCorridor = corridor.candidateIndices.has(idx);

        ctx.beginPath();
        var p0 = toScreen(b.footprint[0].x, b.footprint[0].y);
        ctx.moveTo(p0.x, p0.y);
        for (var i = 1; i < b.footprint.length; i++) {
          var p = toScreen(b.footprint[i].x, b.footprint[i].y);
          ctx.lineTo(p.x, p.y);
        }
        ctx.closePath();

        if (inCorridor) {
          ctx.fillStyle = 'rgba(126, 255, 212, 0.35)';
          ctx.strokeStyle = 'rgba(126, 255, 212, 0.6)';
        } else {
          ctx.fillStyle = 'rgba(80, 85, 100, 0.4)';
          ctx.strokeStyle = 'rgba(80, 85, 100, 0.5)';
        }
        ctx.fill();
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      // ── Sun ray ────────────────────────────────────────────────────
      var p0 = toScreen(originE, originN);
      var p1 = toScreen(corridor.endE, corridor.endN);
      ctx.beginPath();
      ctx.moveTo(p0.x, p0.y);
      ctx.lineTo(p1.x, p1.y);
      ctx.strokeStyle = '#ffe066';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Sun circle at end
      ctx.beginPath();
      ctx.arc(p1.x, p1.y, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#ffe066';
      ctx.fill();

      // ── Observer (terrace) ─────────────────────────────────────────
      ctx.beginPath();
      ctx.arc(p0.x, p0.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#7effd4';
      ctx.fill();
      ctx.strokeStyle = '#7effd4';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // ── Compass ────────────────────────────────────────────────────
      ctx.font = '12px IBM Plex Mono, monospace';
      ctx.fillStyle = '#555';
      ctx.textAlign = 'center';
      ctx.fillText('N', cx, 16);
      ctx.fillText('S', cx, H - 6);
      ctx.fillText('E', W - 8, cy + 4);
      ctx.fillText('W', 12, cy + 4);

      // ── Legend ─────────────────────────────────────────────────────
      var ly = H - 80;
      ctx.font = '11px IBM Plex Mono, monospace';
      ctx.textAlign = 'left';

      ctx.fillStyle = '#ffe066';
      ctx.fillRect(12, ly, 16, 3);
      ctx.fillText('Rayon solaire (az ' + Math.round(azDeg) + '°)', 34, ly + 4);

      ly += 18;
      ctx.strokeStyle = 'rgba(255, 224, 102, 0.4)';
      ctx.setLineDash([4, 3]);
      ctx.strokeRect(12, ly - 5, 16, 10);
      ctx.setLineDash([]);
      ctx.fillStyle = '#ffe066';
      ctx.fillText('Corridor AABB (padding ' + Math.round(corridorPadding) + 'm)', 34, ly + 4);

      ly += 18;
      ctx.fillStyle = 'rgba(126, 255, 212, 0.5)';
      ctx.fillRect(12, ly - 4, 12, 8);
      ctx.fillStyle = '#7effd4';
      ctx.fillText(corridor.candidateCount + ' batiments candidats / ' + buildings.length + ' total', 34, ly + 4);

      ly += 18;
      ctx.fillStyle = 'rgba(255, 224, 102, 0.15)';
      ctx.fillRect(12, ly - 4, 12, 8);
      ctx.strokeStyle = 'rgba(255, 224, 102, 0.3)';
      ctx.strokeRect(12, ly - 4, 12, 8);
      ctx.fillStyle = '#ffe066';
      ctx.fillText(Object.keys(corridor.rayCells).length + ' cellules 64m dans le corridor', 34, ly + 4);

      ly += 18;
      ctx.fillStyle = 'rgba(80, 85, 100, 0.6)';
      ctx.fillRect(12, ly - 4, 12, 8);
      ctx.fillStyle = '#666';
      ctx.fillText((buildings.length - corridor.candidateCount) + ' batiments ignores (hors corridor)', 34, ly + 4);

      // ── Scale bar ──────────────────────────────────────────────────
      var scaleBarM = 100;
      var scaleBarPx = scaleBarM * scale;
      ctx.strokeStyle = '#555';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(W - 20 - scaleBarPx, H - 16);
      ctx.lineTo(W - 20, H - 16);
      ctx.stroke();
      ctx.fillStyle = '#555';
      ctx.textAlign = 'right';
      ctx.fillText(scaleBarM + 'm', W - 20, H - 22);
    }

    draw(currentAzimuth);

    // ── Azimuth slider ───────────────────────────────────────────────
    var sliderDiv = document.createElement('div');
    sliderDiv.className = 'viz-slider';
    sliderDiv.innerHTML =
      '<label>Direction du soleil : <span id="corridor-az">252°</span> (azimut)</label>' +
      '<input type="range" min="60" max="300" step="1" value="252" id="corridor-slider">';
    container.appendChild(sliderDiv);

    document.getElementById('corridor-slider').addEventListener('input', function () {
      currentAzimuth = parseFloat(this.value);
      document.getElementById('corridor-az').textContent = Math.round(currentAzimuth) + '°';
      draw(currentAzimuth);
    });

    window.addEventListener('resize', function () {
      W = container.clientWidth;
      H = Math.min(W, 700);
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + 'px';
      canvas.style.height = H + 'px';
      scale = Math.min(W, H) / viewSize;
      cx = W / 2;
      cy = H / 2;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      draw(currentAzimuth);
    });
  }
})();
