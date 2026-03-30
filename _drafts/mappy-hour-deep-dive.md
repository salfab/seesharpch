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

<!-- TODO: Image 1 — Le corridor. Vue de dessus : un rayon solaire avec un rectangle
(AABB) autour, padding = maxHalfDiagonal + 64m. Seules les cellules de grille qui
intersectent le corridor sont testées. Cellules ignorées en grisé. -->

Pour chaque rayon solaire, je construis un corridor — une bounding box alignée sur la direction du soleil. Le padding inclut la demi-diagonale du plus gros bâtiment plus 64 mètres de marge. Tout ce qui est hors du corridor est ignoré sans même un calcul de distance.

## La grille spatiale 64m

Le corridor réduit les candidats, mais il faut encore les trouver vite. J'ai découpé la ville en cellules de 64m x 64m. Chaque cellule maintient un index des bâtiments qui la touchent.

<!-- TODO: Image 2 — La grille 64m. Vue de dessus d'un quartier divisé en cellules.
Chaque cellule contient des indices vers les bâtiments qui la touchent.
Sans grille : 962 obstacles testés. Avec grille : ~1. -->

Sans grille : 962 obstacles testés par rayon. Avec grille : environ 1. Le corridor + la grille ensemble donnent un **speedup de 4.25x** (Lot A).

## Le contexte partagé par tuile

La carte est divisée en tuiles de 250m x 250m. Observation clé : deux points dans la même tuile voient essentiellement les mêmes bâtiments candidats et le même horizon.

<!-- TODO: Image 3 — Le centre de tuile 250m. Une tuile avec son point central.
Le contexte d'évaluation (bâtiments candidats, horizon, terrain) est calculé une seule
fois pour ce point, puis partagé pour tous les points de la tuile. -->

Le contexte d'évaluation — bâtiments candidats, profil de terrain, masque d'horizon — est calculé une seule fois au centre de la tuile, puis réutilisé pour chaque point. **Speedup : 45.8x** (Lot B). C'est de loin l'optimisation la plus rentable.

## Le masque d'horizon

Pour chaque zone, je précalcule un masque d'horizon à 360 degrés : un bin par degré d'azimut, chaque bin stocke l'angle d'élévation maximal dans cette direction. Le raycast porte jusqu'à 120 km avec correction de réfraction atmosphérique — parce que oui, le Jura français projette des ombres sur Lausanne en fin de journée.

<!-- TODO: Image 4 — Le masque d'horizon. Visualisation polaire : 360 bins,
chaque bin = angle d'élévation max. Le Jura qui projette des ombres sur Lausanne. -->

Les masques sont partagés de manière adaptative via des macro-cells de 2000m x 500m. En pratique, environ 20 tuiles partagent un même masque, et seulement 4 nécessitent un calcul local (Lot C).

## Trois modes de calcul pour les bâtiments

Le ray-tracing des bâtiments a évolué en trois itérations, chacune toujours disponible via `MAPPY_BUILDINGS_SHADOW_MODE` :

<!-- TODO: Image 5 — Un bâtiment après ingestion. DXF parsé → footprint 2D simplifié
(polygon) + hauteur + bounding box. Mesh 3D brut vs prisme simplifié vs données
stockées (footprint[], height, centerX/Y, halfDiagonal). -->

**Prism** — Le footprint 2D extrudé en hauteur. Rapide, mais les toits complexes et les formes irrégulières génèrent des faux positifs. Un immeuble en L ? Le prisme le voit comme un rectangle plein.

**Two-level** — Le prisme tourne en premier. Si le soleil est dans les 2 degrés autour du seuil d'ombre, on passe au mesh 3D pour vérification, avec max 3 passes de raffinement. Le meilleur compromis vitesse/précision.

**Detailed** — Mesh 3D complet, 32 passes de raffinement. Le plus précis, et le défaut actuel. Les optimisations du corridor et de la grille rendent ce mode viable en temps réel.

## Le pipeline de données

Avant de ray-tracer quoi que ce soit, il faut ingérer des téraoctets de données publiques suisses.

<!-- TODO: Image 6 — Le modèle de végétation (raster). GeoTIFF à 0.5m de résolution.
Heatmap d'élévation avec les arbres qui ressortent. Échantillonné par interpolation
bilinéaire tous les 2m le long du rayon solaire. -->

Le pipeline :

1. **Terrain** — SwissALTI3D (2m) via l'API STAC de Swisstopo + Copernicus DEM 30m pour l'horizon transfrontalier
2. **Bâtiments** — Fichiers DXF de SwissBUILDINGS3D, parsés pour extraire footprints, hauteurs et bounding boxes. Deduplication par footprint+hauteur identiques. Indexation dans la grille spatiale 64m
3. **Végétation** — swissSURFACE3D, raster GeoTIFF à 0.5m. Chaque pixel = élévation sol + arbres. Échantillonné par interpolation bilinéaire le long du rayon

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
