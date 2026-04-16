---
layout: post
title: "Comment j'ai ray-tracé toute une ville"
tags: [project, gis, ray-tracing, performance, nextjs, swisstopo]
header_image: /assets/img/raycasting.png
---

Cet article est la suite technique de [Mappy Hour](/mappy-hour). Si tu veux le pitch et le contexte, commence par là. Ici on parle maths, structures de données et benchmarks.

## Le problème de performance

Un rayon solaire, un point sur la carte, une question : le soleil est-il visible ? Simple. Sauf que Lausanne compte environ 50'000 bâtiments, un terrain alpin avec des dénivelés brutaux, et des arbres partout. Tester chaque obstacle pour chaque point de la grille, c'est 2.85 points par seconde. Inutilisable.

Il fallait passer de "techniquement correct" à "utilisable en temps réel". Spoiler : on a fini à 155.8 points par seconde. Un facteur 54.6x.

## Le corridor : ne tester que ce qui compte

Premier réflexe d'optimisation : pourquoi tester un bâtiment à 2 km à l'est quand le soleil vient du sud ?

Le filtrage se fait en trois étapes, de la plus grossière à la plus fine :

D'abord, **par cellule de 64m** :

1. **AABB** — Un rectangle englobant aligné sur les axes (AABB, pour "Axis-Aligned Bounding Box" : un rectangle toujours horizontal/vertical, jamais tourné, ce qui le rend extrêmement rapide à calculer) entoure le rayon avec un padding de 148m. Les cellules hors du rectangle sont éliminées.
2. **Dot product cellule** — La cellule est-elle derrière l'observateur ? Le produit scalaire (la position de la cellule projetée sur la direction du rayon) donne la réponse : si négatif, éliminée.
3. **Distance latérale cellule** — La cellule est-elle trop loin du rayon sur les côtés ? Même dans l'AABB, une cellule peut être à 100m du rayon. Éliminée.
4. **Altitude culling cellule** — Le bâtiment le plus haut de cette cellule est-il assez haut pour bloquer le soleil à cette distance ? Si le toit le plus haut est sous la ligne de visée, on saute **toute la cellule** d'un coup. Cette optimisation donne **39-54% d'amélioration** à elle seule.

Ensuite, **par bâtiment individuel** dans les cellules retenues :

5. **Dot product bâtiment** — Même test, mais sur le centre du bâtiment.
6. **Distance latérale bâtiment** — Le bâtiment est-il trop loin du rayon ? Un filtre plus serré que celui des cellules (demi-diagonale du bâtiment au lieu de la cellule).
7. **Altitude culling bâtiment** — Le toit de ce bâtiment spécifique est-il assez haut ?
8. **Ray-tracing** — Pour chaque candidat restant, on vérifie si le bâtiment **bloque réellement** le rayon. En mode prisme, c'est une comparaison d'angle. En mode mesh, une intersection rayon-triangle.

L'AABB est donc une enveloppe de recherche, pas un test de blocage — comme chercher dans un annuaire par code postal avant de vérifier l'adresse exacte. On pourrait le remplacer par un rectangle orienté le long du rayon (OBB), mais les benchmarks montrent que ça ne change rien : **1.02x de speedup**. Les bâtiments éliminés par un corridor plus serré ne déclenchent jamais le ray-tracing de toute façon.

## La grille spatiale 64m

Le corridor réduit les candidats, mais il faut encore les trouver vite. J'ai découpé la ville en cellules de 64m x 64m. Chaque cellule maintient un index des bâtiments qui la touchent.

<div id="viz-corridor" style="width: 100%; margin: 2rem 0; border-radius: 6px; overflow: hidden; background: var(--bg2); border: 1px solid var(--border); position: relative;"></div>

La carte ci-dessus montre les 225 bâtiments réels (données SwissBUILDINGS3D) autour de la terrasse du Great Escape. Chaque bâtiment est coloré selon l'étape qui l'élimine : gris foncé = hors AABB, orange = éliminé par le dot product (derrière l'observateur), turquoise = candidat retenu pour le ray-tracing. Bougez le slider pour voir comment le filtrage change avec la direction du soleil.

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

## Deux approches pour les bâtiments

Le ray-tracing des bâtiments a évolué en deux approches. La différence est plus facile à comprendre en la voyant. Voici les environs du Great Escape (Rue Madeleine 18, Lausanne) modélisés avec chacune :

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

**Detailed (mesh SwissTopo)** — Les vrais polyfaces 3D des fichiers DXF de SwissBUILDINGS3D, triangulés et testés par intersection rayon-triangle. Zéro faux positif. C'est le défaut actuel. Les optimisations du corridor et de la grille rendent ce mode viable.

## Pourquoi le mesh a gagné

Le prisme a un défaut structurel : quand un bâtiment a un fill ratio faible (le bâtiment en L ne remplit que 33% de sa bounding box), le soleil passe dans le vide du L, mais le prisme voit un rectangle plein et dit "ombre". Aucun seuil ne corrige ça — il faut le vrai mesh.

On aurait pu utiliser le prisme comme filtre éliminatoire rapide — si le prisme dit "pas d'ombre", inutile de tester le mesh. Mais en pratique, le gain est marginal (1.02x à 1.07x) parce que les optimisations du corridor et de la grille spatiale éliminent déjà 99% des candidats avant d'arriver au ray-tracing. Le prisme ne filtre que des miettes, et il laisse passer des faux positifs quand il est "confiant et faux".

Plutôt que de continuer à optimiser le ray-tracing triangles — presser les derniers pourcents d'un algorithme CPU déjà bien affûté — j'ai pris une direction complètement différente : **l'accélération matérielle**. Si le GPU peut rasteriser 907'000 triangles en quelques millisecondes pour afficher une image, pourquoi ne pas lui demander de faire la même chose pour produire une shadow map ? C'est [exactement ce qu'on a fait](/blog/preview/f7a2c891/rasterisation-gpu).

## Le pipeline de données

Le pipeline de données est détaillé dans [l'article d'introduction](/mappy-hour). En résumé : SwissALTI3D (terrain 2m), SwissBUILDINGS3D (bâtiments DXF), swissSURFACE3D (végétation 0.5m), DEM Copernicus (horizon transfrontalier 30m). Le tout ingéré et caché en tuiles de 250m.

L'ajout par rapport à l'article précédent, c'est la **végétation** : un ray-march le long du rayon solaire sur le raster swissSURFACE3D, échantillonné tous les 2 mètres. Si un échantillon dépasse la ligne de visée de plus de 4 mètres, c'est un arbre qui bloque.

<div id="viz-vegetation" style="width: 100%; margin: 2rem 0; border-radius: 6px; overflow: hidden; background: var(--bg2); border: 1px solid var(--border); position: relative;"></div>

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
