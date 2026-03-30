---
layout: post
title: "Comment j'ai ray-tracé toute une ville en temps réel"
tags: [project, gis, ray-tracing, performance, nextjs, swisstopo]
---

Cet article est la suite technique de [Mappy Hour](/mappy-hour). Si tu veux le pitch et le contexte, commence par là. Ici on parle maths, structures de données et benchmarks.

## Le problème de performance

Un rayon solaire, un point sur la carte, une question : le soleil est-il visible ? Simple. Sauf que Lausanne compte environ 50'000 bâtiments, un terrain alpin avec des dénivelés brutaux, et des arbres partout. Tester chaque obstacle pour chaque point de la grille, c'est 2.85 points par seconde. Inutilisable.

Il fallait passer de "techniquement correct" à "utilisable en temps réel". Spoiler : on a fini à 155.8 points par seconde. Un facteur 54.6x.

## Le corridor : ne tester que ce qui compte

Premier réflexe d'optimisation : pourquoi tester un bâtiment à 2 km à l'est quand le soleil vient du sud ?

Pour chaque rayon solaire, je construis un corridor — une bounding box alignée sur la direction du soleil. Le padding inclut la demi-diagonale du plus gros bâtiment plus 64 mètres de marge. Tout ce qui est hors du corridor est ignoré sans même un calcul de distance.

## La grille spatiale 64m

Le corridor réduit les candidats, mais il faut encore les trouver vite. J'ai découpé la ville en cellules de 64m x 64m. Chaque cellule maintient un index des bâtiments qui la touchent.

Sans grille : 962 obstacles testés par rayon. Avec grille : environ 1. Le corridor + la grille ensemble donnent un **speedup de 4.25x** (Lot A).

## Le contexte partagé par tuile

La carte est divisée en tuiles de 250m x 250m. Observation clé : deux points dans la même tuile voient essentiellement les mêmes bâtiments candidats et le même horizon.

Le contexte d'évaluation — bâtiments candidats, profil de terrain, masque d'horizon — est calculé une seule fois au centre de la tuile, puis réutilisé pour chaque point. **Speedup : 45.8x** (Lot B). C'est de loin l'optimisation la plus rentable.

## Le masque d'horizon

Pour chaque zone, je précalcule un masque d'horizon à 360 degrés : un bin par degré d'azimut, chaque bin stocke l'angle d'élévation maximal dans cette direction. Le raycast porte jusqu'à 120 km avec correction de réfraction atmosphérique — parce que oui, le Jura français projette des ombres sur Lausanne en fin de journée.

<div id="viz-horizon" style="width: 100%; max-width: 600px; margin: 2rem auto; display: flex; flex-direction: column; align-items: center;"></div>
<div style="text-align: center; margin: 0.5rem 0 1.5rem;">
  <label style="color: var(--text-body); font-family: var(--mono); font-size: 0.85rem;">Heure : <span id="horizon-time">15h00</span></label><br>
  <input type="range" min="6" max="20" step="0.5" value="15" id="horizon-slider" style="width: 80%; max-width: 400px; margin-top: 0.5rem; accent-color: var(--accent);">
</div>

Le diagramme polaire ci-dessus montre le masque d'horizon vu depuis la terrasse du Great Escape. Les pics en vert correspondent aux bâtiments proches (immeuble ouest, bloc nord) et aux reliefs lointains (Jura au nord-ouest, Alpes au sud-est). Quand le soleil (point jaune) passe sous la ligne verte, la terrasse est à l'ombre.

Les masques sont partagés de manière adaptative via des macro-cells de 2000m x 500m. En pratique, environ 20 tuiles partagent un même masque, et seulement 4 nécessitent un calcul local (Lot C).

## Trois modes de calcul pour les bâtiments

Le ray-tracing des bâtiments a évolué en trois itérations, chacune toujours disponible via `MAPPY_BUILDINGS_SHADOW_MODE`. La différence est plus facile à comprendre en la voyant. Voici les environs du Great Escape (Rue Madeleine 18, Lausanne) modélisés avec chacune des approches :

<div id="viz-buildings" style="width: 100%; margin: 2rem 0; border-radius: 6px; overflow: hidden; background: var(--bg2); border: 1px solid var(--border); position: relative;"></div>

<style>
.viz-ui { padding: 0.75rem 1rem; }
.viz-controls { display: flex; gap: 0.5rem; margin-bottom: 0.75rem; flex-wrap: wrap; }
.viz-mode-btn {
  background: var(--bg, #111316);
  color: var(--text-body, #c8c9cd);
  border: 1px solid var(--border, #1e2128);
  padding: 0.4rem 1rem;
  border-radius: 4px;
  font-family: var(--mono, 'IBM Plex Mono', monospace);
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.15s;
}
.viz-mode-btn:hover { border-color: var(--accent, #7effd4); color: var(--accent, #7effd4); }
.viz-mode-btn.active {
  background: var(--accent, #7effd4);
  color: var(--bg, #0b0c0e);
  border-color: var(--accent, #7effd4);
  font-weight: bold;
}
.viz-info { display: flex; flex-direction: column; gap: 0.25rem; }
.viz-info-title {
  font-family: var(--display, 'Syne', sans-serif);
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--text, #f0f0f2);
}
.viz-info-desc {
  font-family: var(--mono, 'IBM Plex Mono', monospace);
  font-size: 0.8rem;
  color: var(--text-body, #c8c9cd);
  line-height: 1.5;
}
.viz-slider {
  padding: 0.5rem 1rem 1rem;
  font-family: var(--mono, 'IBM Plex Mono', monospace);
  font-size: 0.8rem;
  color: var(--text-body, #c8c9cd);
}
.viz-slider input[type="range"] {
  width: 100%;
  margin-top: 0.4rem;
  accent-color: var(--accent, #7effd4);
}
</style>

**Prism** — Le footprint 2D extrudé en hauteur. Rapide, mais les toits complexes et les formes irrégulières génèrent des faux positifs. Le bâtiment en L du Great Escape ? Le prisme le voit comme un rectangle plein. Résultat : la terrasse est déclarée à l'ombre alors qu'elle ne l'est pas.

**Two-level** — Le prisme tourne en premier. Si le soleil est dans les 2 degrés autour du seuil d'ombre, on passe au mesh 3D pour vérification, avec max 3 passes de raffinement. Le fantôme rouge montre la bounding box du prisme, le mesh détaillé corrige à l'intérieur. Le meilleur compromis vitesse/précision.

**Detailed** — Mesh 3D complet, 32 passes de raffinement. Le plus précis, et le défaut actuel. Les optimisations du corridor et de la grille rendent ce mode viable en temps réel.

## Le pipeline de données

Avant de ray-tracer quoi que ce soit, il faut ingérer des téraoctets de données publiques suisses.

<div id="viz-vegetation" style="width: 100%; margin: 2rem 0; border-radius: 6px; overflow: hidden; background: var(--bg2); border: 1px solid var(--border); position: relative;"></div>

Le pipeline :

1. **Terrain** — SwissALTI3D (2m) via l'API STAC de Swisstopo + Copernicus DEM 30m pour l'horizon transfrontalier
2. **Bâtiments** — Fichiers DXF de SwissBUILDINGS3D, parsés pour extraire footprints, hauteurs et bounding boxes. Deduplication par footprint+hauteur identiques. Indexation dans la grille spatiale 64m
3. **Végétation** — swissSURFACE3D, raster GeoTIFF à 0.5m. Chaque pixel = élévation sol + arbres. Échantillonné par interpolation bilinéaire le long du rayon. La visualisation ci-dessus montre le principe : les points jaunes sont les échantillons le long du rayon solaire, les rouges indiquent une intersection avec la canopée.

Le tout est précalculé et caché en tuiles de 250m avec invalidation automatique.

## Les chiffres

| Optimisation | Speedup | Détail |
|---|---|---|
| Lot A : grille 64m + corridor | 4.25x | 962 → ~1 obstacle testé |
| Lot B : contexte partagé par tuile 250m | 45.8x | Calcul unique au centre |
| Lot C : horizon adaptatif par macro-cell | ~5x | 20 tuiles partagent, 4 locales |
| **Cumulé** | **54.6x** | 2.85 → 155.8 pts/sec |

## Ce qui n'a pas marché

Le prisme seul avait trop de faux positifs — des terrasses déclarées à l'ombre alors qu'elles ne l'étaient pas. Le mesh seul était trop lent — 30 secondes pour une tuile. L'horizon calculé par point individuel était redondant à 98%. Chaque optimisation est née d'un échec mesuré. Trial-and-error, mais avec des benchmarks.

Le plus efficace dans tout ça : mesurer d'abord, optimiser ensuite. Chaque lot a été isolé, benchmarké, et validé indépendamment. Pas de devinettes.

<!-- Three.js + OrbitControls from CDN -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>

<!-- Visualizations -->
<script src="/assets/js/great-escape-buildings.js"></script>
<script src="/assets/js/horizon-mask.js"></script>
<script src="/assets/js/vegetation-raster.js"></script>
