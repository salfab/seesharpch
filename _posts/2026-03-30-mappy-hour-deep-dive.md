---
layout: post
title: "Comment j'ai ray-tracé toute une ville en temps réel"
tags: [project, gis, ray-tracing, performance, nextjs, swisstopo]
unlisted: true
permalink: /preview/b9519c9c/mappy-hour-deep-dive
sitemap: false
---

Cet article est la suite technique de [Mappy Hour](/mappy-hour). Si tu veux le pitch et le contexte, commence par là. Ici on parle maths, structures de données et benchmarks.

## Le problème de performance

Un rayon solaire, un point sur la carte, une question : le soleil est-il visible ? Simple. Sauf que Lausanne compte environ 50'000 bâtiments, un terrain alpin avec des dénivelés brutaux, et des arbres partout. Tester chaque obstacle pour chaque point de la grille, c'est 2.85 points par seconde. Inutilisable.

Il fallait passer de "techniquement correct" à "utilisable en temps réel". Spoiler : on a fini à 155.8 points par seconde. Un facteur 54.6x.

## Le corridor : ne tester que ce qui compte

Premier réflexe d'optimisation : pourquoi tester un bâtiment à 2 km à l'est quand le soleil vient du sud ?

Pour chaque rayon solaire, je construis un corridor — un rectangle englobant aligné sur les axes (AABB, pour "Axis-Aligned Bounding Box" : un rectangle toujours horizontal/vertical, jamais tourné, ce qui le rend extrêmement rapide à calculer). Ce rectangle entoure le rayon avec un padding qui inclut la demi-diagonale du plus gros bâtiment plus 64 mètres de marge. Tout bâtiment dont le centre est hors de ce rectangle est ignoré sans même un test d'intersection.

## La grille spatiale 64m

Le corridor réduit les candidats, mais il faut encore les trouver vite. J'ai découpé la ville en cellules de 64m x 64m. Chaque cellule maintient un index des bâtiments qui la touchent.

<div id="viz-corridor" style="width: 100%; margin: 2rem 0; border-radius: 6px; overflow: hidden; background: var(--bg2); border: 1px solid var(--border); position: relative;"></div>

La carte ci-dessus montre les 225 bâtiments réels (données SwissBUILDINGS3D) autour de la terrasse du Great Escape. Le rayon jaune pointe vers le soleil. Le corridor (rectangle en pointillé) délimite la zone de recherche. Les cellules de 64m surlignées sont les seules consultées dans la grille spatiale. Les bâtiments turquoise sont les candidats retenus — tout le reste est ignoré. Bougez le slider pour voir comment le nombre de candidats change avec la direction du soleil.

Sans grille : 962 obstacles testés par rayon. Avec grille : environ 1. Le corridor + la grille ensemble donnent un **speedup de 4.25x** (Lot A).

## Le contexte partagé par tuile

La carte est divisée en tuiles de 250m x 250m. Observation clé : deux points dans la même tuile voient essentiellement les mêmes bâtiments candidats et le même horizon.

Le contexte d'évaluation — bâtiments candidats, profil de terrain, masque d'horizon — est calculé une seule fois au centre de la tuile, puis réutilisé pour chaque point. **Speedup : 45.8x** (Lot B). C'est de loin l'optimisation la plus rentable.

## Le masque d'horizon

Pour chaque zone, je précalcule un masque d'horizon à 360 degrés : un tableau de 360 cases, une par degré d'azimut (l'angle de la boussole : 0° = nord, 90° = est, 180° = sud, 270° = ouest). Pour chaque direction, un rayon est lancé le long du sol jusqu'à 120 km. Tous les 250 mètres, on échantillonne l'altitude du terrain (DEM Copernicus à 30 m de résolution), on corrige pour la courbure terrestre et la réfraction atmosphérique, et on garde l'angle d'élévation maximal. Le résultat : un profil d'obstruction complet autour du point. Si le soleil est en-dessous de cet angle pour un azimut donné, il est masqué par le relief — et oui, le Jura français à 80 km projette des ombres sur Lausanne en fin de journée.

Pourquoi 360° alors que le soleil ne parcourt qu'un demi-cercle ? Parce que le masque est calculé **une seule fois** et mis en cache pour toute l'année. En hiver, le soleil reste bas au sud (~130° à ~230°). En été, il se lève au nord-est (~50°) et se couche au nord-ouest (~310°) — la course couvre presque les trois quarts du cercle. Basculez entre les deux saisons ci-dessous pour voir la différence.

<div id="viz-horizon" style="width: 100%; margin: 2rem 0; border-radius: 6px; overflow: hidden; background: var(--bg2); border: 1px solid var(--border); position: relative;"></div>
<div style="text-align: center; margin: 0.5rem 0 1.5rem;">
  <label style="color: var(--text-body); font-family: var(--mono); font-size: 0.85rem;">Heure : <span id="horizon-time">17h30</span></label><br>
  <input type="range" min="7.25" max="18.25" step="0.25" value="17.5" id="horizon-slider" style="width: 80%; max-width: 400px; margin-top: 0.5rem; accent-color: var(--accent);">
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

**Two-level** — Le prisme tourne en premier. Si le prisme dit "ombre", on regarde la marge : de combien de degrés le sommet du prisme dépasse-t-il le soleil ? Si la marge est faible (< 2°), c'est un cas douteux — on vérifie avec le mesh 3D. Si la marge est grande, on fait confiance au prisme sans vérifier. Le fantôme rouge montre la bounding box du prisme, le mesh détaillé corrige à l'intérieur.

**Detailed** — Mesh 3D complet, 32 passes de raffinement. Le plus précis, et le défaut actuel. Les optimisations du corridor et de la grille rendent ce mode viable en temps réel.

## Pourquoi le mode detailed a gagné

Le two-level a l'air d'un bon compromis, mais il garde des faux positifs. Le problème : quand un bâtiment a un fill ratio faible (le bâtiment en L ne remplit que 33% de sa bounding box), le prisme peut être **confiant et faux** en même temps. Le soleil passe dans le vide du L, mais le prisme voit un rectangle plein et dit "ombre avec 5° de marge". Comme la marge est au-dessus du seuil, le two-level ne vérifie jamais avec le mesh.

Concrètement, sur la zone du Great Escape à 17h30 :

| Seuil two-level | Vérifications mesh | Faux positifs restants |
|---|---|---|
| 0.25° | 22 / 4897 | 161 |
| 1° | 86 / 4897 | 114 |
| 2° | 169 / 4897 | 65 |
| 3° | 259 / 4897 | 38 |
| ∞ (= detailed) | 4897 / 4897 | **0** |

Même à 3° de seuil, il reste 38 faux positifs. Pour les éliminer tous, il faudrait monter le seuil tellement haut qu'on vérifierait presque tout avec le mesh — autant l'utiliser directement. Et les optimisations (grille spatiale, corridor, contexte partagé) ont rendu le mesh suffisamment rapide : le speedup du two-level par rapport au detailed n'est que de 1.02x à 1.07x. Pas assez pour justifier 38 terrasses déclarées à l'ombre à tort.

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
<script src="/assets/js/corridor-grid.js"></script>
