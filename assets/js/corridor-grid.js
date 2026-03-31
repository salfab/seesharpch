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

    // Build spatial grid + cellMaxZ (same logic as mappy-hour)
    var grid = {};       // key → [building indices]
    var cellMaxZ = {};   // key → max roof altitude in this cell
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
          if (!cellMaxZ[key] || b.maxZ > cellMaxZ[key]) {
            cellMaxZ[key] = b.maxZ;
          }
        }
      }
    });

    // Observer elevation (esplanade ~508.6m)
    var observerElevation = 508.6;

    // Sun altitude table (March 8, SunCalc)
    var sunTable = [
      {h:7.25,az:99,alt:1.5},{h:8,az:107.3,alt:9.1},{h:9,az:119.2,alt:18.5},
      {h:10,az:132.6,alt:26.9},{h:11,az:148.2,alt:33.5},{h:12,az:165.9,alt:37.6},
      {h:12.75,az:180.1,alt:38.5},{h:14,az:203.4,alt:35.9},{h:15,az:220.1,alt:30.5},
      {h:16,az:234.5,alt:22.9},{h:17,az:247.1,alt:13.9},{h:17.5,az:252.9,alt:9.1},
      {h:18,az:258.5,alt:4.1},{h:18.25,az:261.3,alt:1.5}
    ];

    function azimuthToAltitude(azDeg) {
      // Find the altitude for a given azimuth from the sun table
      for (var i = 0; i < sunTable.length - 1; i++) {
        if (azDeg >= sunTable[i].az && azDeg <= sunTable[i + 1].az) {
          var t = (azDeg - sunTable[i].az) / (sunTable[i + 1].az - sunTable[i].az);
          return sunTable[i].alt + t * (sunTable[i + 1].alt - sunTable[i].alt);
        }
      }
      return 15; // fallback
    }

    // Current sun azimuth
    var currentAzimuth = 252;

    function computeCorridor(azDeg) {
      var azRad = azDeg * Math.PI / 180;
      var dirX = Math.sin(azRad);
      var dirY = Math.cos(azRad);
      var sunAltDeg = azimuthToAltitude(azDeg);
      var solarAltTan = Math.tan(sunAltDeg * Math.PI / 180);
      var cellHalfDiag = Math.sqrt(2) * cellSize / 2;

      var endE = originE + dirX * maxDistance;
      var endN = originN + dirY * maxDistance;

      // Corridor AABB
      var corrMinE = Math.min(originE, endE) - corridorPadding;
      var corrMaxE = Math.max(originE, endE) + corridorPadding;
      var corrMinN = Math.min(originN, endN) - corridorPadding;
      var corrMaxN = Math.max(originN, endN) + corridorPadding;

      var cellMinX = Math.floor(corrMinE / cellSize);
      var cellMaxX = Math.floor(corrMaxE / cellSize);
      var cellMinY = Math.floor(corrMinN / cellSize);
      var cellMaxY = Math.floor(corrMaxN / cellSize);

      // Per-cell classification
      var corridorCells = [];       // all cells in AABB
      var altitudeCulledCells = {}; // cells skipped by altitude culling
      var rawCandidates = new Set();

      for (var cy2 = cellMinY; cy2 <= cellMaxY; cy2++) {
        for (var cx2 = cellMinX; cx2 <= cellMaxX; cx2++) {
          var key = cx2 + ':' + cy2;
          corridorCells.push({ cx: cx2, cy: cy2 });

          // Altitude culling: is the tallest building in this cell
          // high enough to block the sun at this distance?
          if (cellMaxZ[key] !== undefined && sunAltDeg > 0) {
            var cellCenterE = (cx2 + 0.5) * cellSize;
            var cellCenterN = (cy2 + 0.5) * cellSize;
            var cdx = cellCenterE - originE;
            var cdy = cellCenterN - originN;
            var cellDot = cdx * dirX + cdy * dirY;
            var minRayDist = Math.max(0, cellDot - cellHalfDiag);
            var requiredTop = observerElevation + minRayDist * solarAltTan;
            if (cellMaxZ[key] < requiredTop) {
              altitudeCulledCells[key] = true;
              continue; // skip this cell entirely
            }
          }

          if (grid[key]) {
            grid[key].forEach(function (idx) { rawCandidates.add(idx); });
          }
        }
      }

      // Classify buildings
      var dotEliminated = new Set();
      var filtered = [];
      rawCandidates.forEach(function (idx) {
        var b = buildings[idx];
        var dx = b.centerX - originE;
        var dy = b.centerY - originN;
        var dot = dx * dirX + dy * dirY;
        if (dot < -b.halfDiagonal) { dotEliminated.add(idx); return; }
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > maxDistance + b.halfDiagonal) { dotEliminated.add(idx); return; }
        filtered.push(idx);
      });

      return {
        dirX: dirX, dirY: dirY,
        endE: endE, endN: endN,
        sunAltDeg: sunAltDeg,
        minE: corrMinE, maxE: corrMaxE, minN: corrMinN, maxN: corrMaxN,
        corridorCells: corridorCells,
        altitudeCulledCells: altitudeCulledCells,
        candidateCount: filtered.length,
        candidateIndices: new Set(filtered),
        inAABB: rawCandidates,
        dotEliminated: dotEliminated,
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

      // ── Corridor AABB (axis-aligned bounding box) ─────────────────
      var cTL = toScreen(corridor.minE, corridor.maxN);
      var cBR = toScreen(corridor.maxE, corridor.minN);
      ctx.fillStyle = 'rgba(255, 224, 102, 0.04)';
      ctx.fillRect(cTL.x, cTL.y, cBR.x - cTL.x, cBR.y - cTL.y);
      ctx.strokeStyle = 'rgba(255, 224, 102, 0.25)';
      ctx.lineWidth = 1;
      ctx.setLineDash([6, 4]);
      ctx.strokeRect(cTL.x, cTL.y, cBR.x - cTL.x, cBR.y - cTL.y);
      ctx.setLineDash([]);

      // ── Grid cells inside the AABB ─────────────────────────────────
      var altCulledCount = 0;
      corridor.corridorCells.forEach(function (cell) {
        var key = cell.cx + ':' + cell.cy;
        var tl = toScreen(cell.cx * cellSize, (cell.cy + 1) * cellSize);
        var isCulled = corridor.altitudeCulledCells[key];
        if (isCulled) {
          altCulledCount++;
          // Altitude-culled: buildings too low → purple/magenta
          ctx.fillStyle = 'rgba(180, 100, 220, 0.1)';
          ctx.fillRect(tl.x, tl.y, cellSize * scale, cellSize * scale);
          ctx.strokeStyle = 'rgba(180, 100, 220, 0.25)';
        } else {
          ctx.fillStyle = 'rgba(255, 224, 102, 0.06)';
          ctx.fillRect(tl.x, tl.y, cellSize * scale, cellSize * scale);
          ctx.strokeStyle = 'rgba(255, 224, 102, 0.2)';
        }
        ctx.lineWidth = 0.5;
        ctx.strokeRect(tl.x, tl.y, cellSize * scale, cellSize * scale);
      });

      // ── Buildings (colored by filter stage) ─────────────────────────
      // Three categories:
      // - Dark gray: hors AABB (not even in the corridor rectangle)
      // - Orange: in AABB but eliminated by dot product (behind observer / too far)
      // - Turquoise: passed all filters → candidate for ray-tracing
      buildings.forEach(function (b, idx) {
        if (!b.footprint || b.footprint.length < 3) return;

        ctx.beginPath();
        var fp0 = toScreen(b.footprint[0].x, b.footprint[0].y);
        ctx.moveTo(fp0.x, fp0.y);
        for (var i = 1; i < b.footprint.length; i++) {
          var fp = toScreen(b.footprint[i].x, b.footprint[i].y);
          ctx.lineTo(fp.x, fp.y);
        }
        ctx.closePath();

        if (corridor.candidateIndices.has(idx)) {
          // Stage 2: candidate for ray-tracing
          ctx.fillStyle = 'rgba(126, 255, 212, 0.35)';
          ctx.strokeStyle = 'rgba(126, 255, 212, 0.6)';
        } else if (corridor.dotEliminated.has(idx)) {
          // Stage 1: in AABB but eliminated by dot product
          ctx.fillStyle = 'rgba(255, 160, 60, 0.3)';
          ctx.strokeStyle = 'rgba(255, 160, 60, 0.5)';
        } else if (corridor.inAABB.has(idx)) {
          // In AABB cells but eliminated by distance
          ctx.fillStyle = 'rgba(255, 160, 60, 0.2)';
          ctx.strokeStyle = 'rgba(255, 160, 60, 0.35)';
        } else {
          // Stage 0: hors AABB (not tested at all)
          ctx.fillStyle = 'rgba(60, 65, 80, 0.3)';
          ctx.strokeStyle = 'rgba(60, 65, 80, 0.4)';
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
      var ly = H - 120;
      ctx.font = '11px IBM Plex Mono, monospace';
      ctx.textAlign = 'left';

      ctx.fillStyle = '#ffe066';
      ctx.fillRect(12, ly, 16, 3);
      ctx.fillText('Rayon solaire (az ' + Math.round(azDeg) + '°, alt ' + Math.round(corridor.sunAltDeg) + '°)', 34, ly + 4);

      ly += 18;
      ctx.strokeStyle = 'rgba(255, 224, 102, 0.4)';
      ctx.setLineDash([4, 3]);
      ctx.strokeRect(12, ly - 5, 16, 10);
      ctx.setLineDash([]);
      ctx.fillStyle = '#ffe066';
      ctx.fillText('Corridor AABB (padding ' + Math.round(corridorPadding) + 'm)', 34, ly + 4);

      var outsideAABB = buildings.length - corridor.inAABB.size;

      ly += 18;
      ctx.fillStyle = 'rgba(126, 255, 212, 0.5)';
      ctx.fillRect(12, ly - 4, 12, 8);
      ctx.fillStyle = '#7effd4';
      ctx.fillText(corridor.candidateCount + ' candidats (ray-tracing)', 34, ly + 4);

      ly += 18;
      ctx.fillStyle = 'rgba(255, 160, 60, 0.5)';
      ctx.fillRect(12, ly - 4, 12, 8);
      ctx.fillStyle = '#ffa03c';
      ctx.fillText(corridor.dotEliminated.size + ' dans AABB, elimines par dot product', 34, ly + 4);

      ly += 18;
      ctx.fillStyle = 'rgba(255, 224, 102, 0.15)';
      ctx.fillRect(12, ly - 4, 12, 8);
      ctx.strokeStyle = 'rgba(255, 224, 102, 0.3)';
      ctx.strokeRect(12, ly - 4, 12, 8);
      ctx.fillStyle = '#ffe066';
      ctx.fillText((corridor.corridorCells.length - altCulledCount) + ' cellules actives / ' + corridor.corridorCells.length + ' dans l\'AABB', 34, ly + 4);

      ly += 18;
      ctx.fillStyle = 'rgba(180, 100, 220, 0.4)';
      ctx.fillRect(12, ly - 4, 12, 8);
      ctx.fillStyle = '#b464dc';
      ctx.fillText(altCulledCount + ' cellules eliminees (batiments trop bas pour le soleil)', 34, ly + 4);

      ly += 18;
      ctx.fillStyle = 'rgba(60, 65, 80, 0.5)';
      ctx.fillRect(12, ly - 4, 12, 8);
      ctx.fillStyle = '#555';
      ctx.fillText(outsideAABB + ' hors AABB (jamais testes)', 34, ly + 4);

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
