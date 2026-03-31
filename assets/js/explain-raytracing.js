/**
 * Canvas 2D visualization: Ray-tracing explained
 * Shows a ray from observer toward sun, testing intersection
 * with a building (triangle). Displays the math.
 */
(function () {
  'use strict';
  var container = document.getElementById('viz-raytracing');
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

  // Side view: left = observer, right = sun direction
  // Y axis = altitude, X axis = horizontal distance
  var margin = 40;
  var sceneW = W - margin * 2;
  var sceneH = H - margin * 2;
  var groundY = margin + sceneH * 0.75; // ground level

  // Scale: 1 pixel = ~1m
  var mPerPx = 0.5;

  // Observer
  var obsX = margin + 40;
  var obsY = groundY;

  // Building (side view: a rectangle)
  var bldgDist = 180; // px from observer
  var bldgX = obsX + bldgDist;
  var bldgW = 40; // px width
  var bldgH = 100; // px height (= ~50m)

  // Sun angle
  var sunAltDeg = 15;

  function draw(altDeg) {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#0b0c0e';
    ctx.fillRect(0, 0, W, H);

    var altRad = altDeg * Math.PI / 180;

    // Ground
    ctx.fillStyle = '#1a1c22';
    ctx.fillRect(margin, groundY, sceneW, sceneH * 0.25 + margin);

    ctx.strokeStyle = '#2a2d35';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(margin, groundY);
    ctx.lineTo(W - margin, groundY);
    ctx.stroke();

    // Building
    ctx.fillStyle = 'rgba(90, 95, 110, 0.7)';
    ctx.fillRect(bldgX, groundY - bldgH, bldgW, bldgH);
    ctx.strokeStyle = '#6a7080';
    ctx.lineWidth = 1;
    ctx.strokeRect(bldgX, groundY - bldgH, bldgW, bldgH);

    // Building label
    ctx.font = '10px IBM Plex Mono, monospace';
    ctx.fillStyle = '#888';
    ctx.textAlign = 'center';
    ctx.fillText('batiment', bldgX + bldgW / 2, groundY - bldgH - 8);
    ctx.fillText(Math.round(bldgH * mPerPx) + 'm', bldgX + bldgW + 15, groundY - bldgH / 2);

    // Observer
    ctx.beginPath();
    ctx.arc(obsX, obsY, 6, 0, Math.PI * 2);
    ctx.fillStyle = '#7effd4';
    ctx.fill();
    ctx.font = '10px IBM Plex Mono, monospace';
    ctx.fillStyle = '#7effd4';
    ctx.textAlign = 'center';
    ctx.fillText('observateur', obsX, obsY + 18);

    // Ray toward sun
    var rayLen = sceneW + 100;
    var rayEndX = obsX + rayLen;
    var rayEndY = obsY - Math.tan(altRad) * rayLen;

    // Check intersection with building front face
    // Building front face: x = bldgX, y from groundY to groundY - bldgH
    var tToFront = (bldgX - obsX); // horizontal distance
    var rayYAtFront = obsY - Math.tan(altRad) * tToFront;
    var hitsFront = rayYAtFront >= (groundY - bldgH) && rayYAtFront <= groundY;

    // Check intersection with building top face
    var tToTop = (obsY - (groundY - bldgH)) / Math.tan(altRad); // horizontal distance to top height
    var hitsTop = tToTop >= 0 && (obsX + tToTop) >= bldgX && (obsX + tToTop) <= bldgX + bldgW;

    var isBlocked = hitsFront || hitsTop;
    var hitX, hitY;
    if (hitsFront) {
      hitX = bldgX;
      hitY = rayYAtFront;
    } else if (hitsTop) {
      hitX = obsX + tToTop;
      hitY = groundY - bldgH;
    }

    // Draw ray
    if (isBlocked && hitX !== undefined) {
      // Ray to hit point
      ctx.beginPath();
      ctx.moveTo(obsX, obsY);
      ctx.lineTo(hitX, hitY);
      ctx.strokeStyle = '#ff6b6b';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Hit point
      ctx.beginPath();
      ctx.arc(hitX, hitY, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#ff6b6b';
      ctx.fill();

      // Blocked ray continuation (faded)
      ctx.beginPath();
      ctx.moveTo(hitX, hitY);
      ctx.lineTo(hitX + 100, hitY - Math.tan(altRad) * 100);
      ctx.strokeStyle = 'rgba(255, 107, 107, 0.15)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);
    } else {
      // Ray passes through
      ctx.beginPath();
      ctx.moveTo(obsX, obsY);
      ctx.lineTo(rayEndX, rayEndY);
      ctx.strokeStyle = '#ffe066';
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    // Sun symbol
    var sunX = Math.min(W - margin - 20, obsX + 350);
    var sunY = obsY - Math.tan(altRad) * (sunX - obsX);
    sunY = Math.max(margin + 15, sunY);
    ctx.beginPath();
    ctx.arc(sunX, sunY, 12, 0, Math.PI * 2);
    ctx.fillStyle = isBlocked ? 'rgba(255, 224, 102, 0.3)' : '#ffe066';
    ctx.fill();
    ctx.font = '10px IBM Plex Mono, monospace';
    ctx.fillStyle = '#ffe066';
    ctx.textAlign = 'left';
    ctx.fillText('soleil', sunX + 18, sunY + 4);

    // Altitude angle arc
    ctx.beginPath();
    ctx.arc(obsX, obsY, 35, -altRad, 0);
    ctx.strokeStyle = '#ffe066';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = '#ffe066';
    ctx.font = '10px IBM Plex Mono, monospace';
    ctx.textAlign = 'left';
    ctx.fillText(Math.round(altDeg) + '°', obsX + 40, obsY - 8);

    // Distance label
    ctx.fillStyle = '#555';
    ctx.font = '9px IBM Plex Mono, monospace';
    ctx.textAlign = 'center';
    ctx.fillText(Math.round(bldgDist * mPerPx) + 'm', obsX + bldgDist / 2, groundY + 14);
    ctx.beginPath();
    ctx.moveTo(obsX + 10, groundY + 7);
    ctx.lineTo(bldgX - 5, groundY + 7);
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 0.5;
    ctx.stroke();

    // Right side: formula + explanation
    var textX = bldgX + bldgW + 50;
    ctx.font = 'bold 14px IBM Plex Mono, monospace';
    ctx.fillStyle = '#f0f0f2';
    ctx.textAlign = 'left';
    ctx.fillText('Ray-tracing', textX, margin + 20);

    ctx.font = '11px IBM Plex Mono, monospace';
    ctx.fillStyle = '#c8c9cd';

    var lines;
    if (isBlocked) {
      lines = [
        'Le rayon part de l\'observateur',
        'vers le soleil (altitude ' + Math.round(altDeg) + '°).',
        '',
        'Il intersecte le batiment',
        'a ' + Math.round((hitX - obsX) * mPerPx) + 'm de distance.',
        '',
        'Resultat : OMBRE',
        '',
        'Formule d\'intersection :',
        '',
        'P(t) = O + t × D',
        '',
        'O = position observateur',
        'D = direction du rayon',
        't = distance le long du rayon',
        '',
        'On cherche t tel que P(t)',
        'traverse un triangle du mesh.',
      ];
    } else {
      lines = [
        'Le rayon part de l\'observateur',
        'vers le soleil (altitude ' + Math.round(altDeg) + '°).',
        '',
        'Il passe AU-DESSUS du',
        'batiment sans intersection.',
        '',
        'Resultat : SOLEIL',
        '',
        'Formule du rayon :',
        '',
        'P(t) = O + t × D',
        '',
        'O = position observateur',
        'D = (sin(az)·cos(alt),',
        '     cos(az)·cos(alt),',
        '     sin(alt))',
        't = distance le long du rayon',
      ];
    }
    lines.forEach(function (line, i) {
      if (line.startsWith('P(t)') || line.startsWith('O =') || line.startsWith('D =') || line.startsWith('t =')) {
        ctx.fillStyle = '#ffe066';
      } else if (line === 'Resultat : OMBRE') {
        ctx.fillStyle = '#ff6b6b';
        ctx.font = 'bold 11px IBM Plex Mono, monospace';
      } else if (line === 'Resultat : SOLEIL') {
        ctx.fillStyle = '#7effd4';
        ctx.font = 'bold 11px IBM Plex Mono, monospace';
      } else {
        ctx.fillStyle = '#c8c9cd';
        ctx.font = '11px IBM Plex Mono, monospace';
      }
      ctx.fillText(line, textX, margin + 45 + i * 17);
    });
  }

  draw(sunAltDeg);

  // Slider
  var slider = document.getElementById('raytracing-slider');
  if (slider) {
    slider.addEventListener('input', function () {
      sunAltDeg = parseFloat(this.value);
      draw(sunAltDeg);
    });
  }
})();
