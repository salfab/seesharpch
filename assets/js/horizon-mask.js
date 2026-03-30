/**
 * Canvas visualization: Horizon mask (360° polar chart)
 * Shows the elevation angle per azimuth degree as seen from The Great Escape terrace.
 * Synthetic but realistic data for Lausanne (Jura to the NW, Alps to the SE, buildings nearby).
 */
(function () {
  var container = document.getElementById('viz-horizon');
  if (!container) return;

  var WIDTH = Math.min(container.clientWidth, 600);
  var HEIGHT = WIDTH;
  var canvas = document.createElement('canvas');
  canvas.width = WIDTH * 2;
  canvas.height = HEIGHT * 2;
  canvas.style.width = WIDTH + 'px';
  canvas.style.height = HEIGHT + 'px';
  container.appendChild(canvas);

  var ctx = canvas.getContext('2d');
  ctx.scale(2, 2);

  var cx = WIDTH / 2;
  var cy = HEIGHT / 2;
  var maxRadius = WIDTH / 2 - 40;
  var maxElevation = 35; // max degrees shown

  // --- Generate synthetic horizon data ---
  // 360 bins, one per degree of azimuth (0=North, 90=East, 180=South, 270=West)
  var horizon = [];
  for (var i = 0; i < 360; i++) {
    var elev = 2; // base: mostly flat urban horizon

    // Jura mountains (NW, roughly 290-340 degrees from Lausanne)
    if (i >= 280 && i <= 350) {
      var t = (i - 280) / 70;
      elev += 8 * Math.sin(t * Math.PI) + 2 * Math.sin(t * Math.PI * 3) + Math.random() * 0.5;
    }

    // Alps (SE to E, roughly 60-160 degrees)
    if (i >= 50 && i <= 170) {
      var t = (i - 50) / 120;
      elev += 12 * Math.sin(t * Math.PI) + 4 * Math.sin(t * Math.PI * 2.5) + 2 * Math.sin(t * Math.PI * 7) * Math.random();
    }

    // Nearby buildings (various directions, sharp spikes)
    // Building across street (W ~260°)
    if (i >= 255 && i <= 270) {
      var t = (i - 255) / 15;
      elev = Math.max(elev, 28 * Math.sin(t * Math.PI));
    }
    // North block (~350-10°)
    if (i >= 345 || i <= 15) {
      var a = i >= 345 ? i - 345 : i + 15;
      elev = Math.max(elev, 25 * Math.sin((a / 30) * Math.PI));
    }
    // South building (~175-195°)
    if (i >= 175 && i <= 195) {
      var t = (i - 175) / 20;
      elev = Math.max(elev, 20 * Math.sin(t * Math.PI));
    }

    horizon.push(Math.min(elev, maxElevation));
  }

  // --- Sun path for a summer day (approximate for Lausanne, June) ---
  var sunPath = [];
  for (var hour = 6; hour <= 21; hour += 0.5) {
    var t = (hour - 12) / 6;
    var azDeg = 90 + t * 135; // east to west sweep
    var altDeg = (1 - t * t) * 60; // parabolic altitude
    if (altDeg > 0) {
      sunPath.push({ hour: hour, az: azDeg, alt: altDeg });
    }
  }

  // --- Draw functions ---

  function elevToRadius(elev) {
    return (elev / maxElevation) * maxRadius;
  }

  function azToXY(azDeg, radius) {
    var rad = (azDeg - 90) * Math.PI / 180; // 0°=North=top
    return { x: cx + Math.cos(rad) * radius, y: cy + Math.sin(rad) * radius };
  }

  function draw(highlightHour) {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    // Background
    ctx.fillStyle = '#0b0c0e';
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    // Grid circles
    ctx.strokeStyle = '#1e2128';
    ctx.lineWidth = 0.5;
    for (var e = 5; e <= maxElevation; e += 5) {
      ctx.beginPath();
      ctx.arc(cx, cy, elevToRadius(e), 0, Math.PI * 2);
      ctx.stroke();

      // Label
      ctx.fillStyle = '#555';
      ctx.font = '10px IBM Plex Mono, monospace';
      ctx.fillText(e + '°', cx + 3, cy - elevToRadius(e) + 12);
    }

    // Cardinal directions
    ctx.fillStyle = '#777';
    ctx.font = 'bold 13px IBM Plex Mono, monospace';
    ctx.textAlign = 'center';
    ctx.fillText('N', cx, cy - maxRadius - 10);
    ctx.fillText('S', cx, cy + maxRadius + 18);
    ctx.fillText('E', cx + maxRadius + 16, cy + 5);
    ctx.fillText('W', cx - maxRadius - 16, cy + 5);

    // Direction lines
    ctx.strokeStyle = '#1e2128';
    ctx.lineWidth = 0.5;
    for (var d = 0; d < 360; d += 45) {
      var p = azToXY(d, maxRadius);
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    }

    // Horizon fill
    ctx.beginPath();
    for (var i = 0; i < 360; i++) {
      var p = azToXY(i, elevToRadius(horizon[i]));
      if (i === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    }
    ctx.closePath();
    ctx.fillStyle = 'rgba(126, 255, 212, 0.08)';
    ctx.fill();

    // Horizon line
    ctx.beginPath();
    for (var i = 0; i < 360; i++) {
      var p = azToXY(i, elevToRadius(horizon[i]));
      if (i === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    }
    ctx.closePath();
    ctx.strokeStyle = '#7effd4';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Label zones
    ctx.font = '10px IBM Plex Mono, monospace';
    ctx.textAlign = 'center';

    // Jura label
    var juraP = azToXY(315, elevToRadius(horizon[315]) + 18);
    ctx.fillStyle = '#7effd4';
    ctx.fillText('Jura', juraP.x, juraP.y);

    // Alps label
    var alpsP = azToXY(110, elevToRadius(horizon[110]) + 18);
    ctx.fillStyle = '#7effd4';
    ctx.fillText('Alpes', alpsP.x, alpsP.y);

    // Building labels
    var bldgP = azToXY(262, elevToRadius(horizon[262]) + 14);
    ctx.fillStyle = '#ff6b6b';
    ctx.font = '9px IBM Plex Mono, monospace';
    ctx.fillText('immeuble W', bldgP.x, bldgP.y);

    var bldgN = azToXY(0, elevToRadius(horizon[0]) + 14);
    ctx.fillText('bloc nord', bldgN.x, bldgN.y);

    // Sun path
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 224, 102, 0.5)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    sunPath.forEach(function (sp, idx) {
      // Clamp to our maxElevation for display
      var dispAlt = Math.min(sp.alt, maxElevation);
      var p = azToXY(sp.az, elevToRadius(dispAlt));
      if (idx === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    });
    ctx.stroke();
    ctx.setLineDash([]);

    // Sun position dot for highlighted hour
    if (highlightHour !== undefined) {
      var sp = sunPath.find(function (s) { return Math.abs(s.hour - highlightHour) < 0.3; });
      if (sp) {
        var dispAlt = Math.min(sp.alt, maxElevation);
        var p = azToXY(sp.az, elevToRadius(dispAlt));

        // Check if below horizon
        var azIdx = Math.round(sp.az) % 360;
        var blocked = sp.alt < horizon[azIdx];

        ctx.beginPath();
        ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = blocked ? '#ff6b6b' : '#ffe066';
        ctx.fill();
        ctx.strokeStyle = blocked ? '#ff6b6b' : '#ffe066';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Time label
        var h = Math.floor(highlightHour);
        var m = Math.round((highlightHour - h) * 60);
        ctx.fillStyle = blocked ? '#ff6b6b' : '#ffe066';
        ctx.font = 'bold 12px IBM Plex Mono, monospace';
        ctx.fillText(h + 'h' + (m < 10 ? '0' : '') + m, p.x, p.y - 12);

        if (blocked) {
          ctx.fillStyle = '#ff6b6b';
          ctx.font = '10px IBM Plex Mono, monospace';
          ctx.fillText('OMBRE', p.x, p.y + 18);
        }
      }
    }

    // Sun path hour markers
    ctx.fillStyle = 'rgba(255, 224, 102, 0.7)';
    ctx.font = '9px IBM Plex Mono, monospace';
    sunPath.forEach(function (sp) {
      if (sp.hour % 2 === 0) {
        var dispAlt = Math.min(sp.alt, maxElevation);
        var p = azToXY(sp.az, elevToRadius(dispAlt));
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillText(sp.hour + 'h', p.x + 8, p.y - 4);
      }
    });

    // Legend
    ctx.textAlign = 'left';
    ctx.font = '11px IBM Plex Mono, monospace';

    ctx.fillStyle = '#7effd4';
    ctx.fillRect(10, HEIGHT - 55, 12, 2);
    ctx.fillText('Masque d\'horizon', 28, HEIGHT - 50);

    ctx.fillStyle = '#ffe066';
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(10, HEIGHT - 35);
    ctx.lineTo(22, HEIGHT - 35);
    ctx.strokeStyle = '#ffe066';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillText('Trajectoire solaire (juin)', 28, HEIGHT - 31);

    ctx.fillStyle = '#ff6b6b';
    ctx.beginPath();
    ctx.arc(16, HEIGHT - 16, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillText('Soleil sous l\'horizon = ombre', 28, HEIGHT - 12);
  }

  draw(15);

  // --- Time slider interaction ---
  var slider = document.getElementById('horizon-slider');
  var timeLabel = document.getElementById('horizon-time');
  if (slider) {
    slider.addEventListener('input', function () {
      var hour = parseFloat(this.value);
      var h = Math.floor(hour);
      var m = Math.round((hour - h) * 60);
      timeLabel.textContent = h + 'h' + (m < 10 ? '0' : '') + m;
      draw(hour);
    });
  }
})();
