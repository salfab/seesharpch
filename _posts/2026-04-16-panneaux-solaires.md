---
layout: post
title: "Où poser mes panneaux solaires ? Mappy Hour au-delà des terrasses"
tags: [project, gis, solar, swisstopo]
header_image: /assets/img/mappy-hour.png
unlisted: true
permalink: /blog/preview/d7f3e156/panneaux-solaires
sitemap: false
---

Le calcul d'ensoleillement de Mappy Hour est conçu pour les terrasses de café. Mais les mêmes données — terrain SwissALTI3D, bâtiments SwissBUILDINGS3D, végétation SwissSURFACE3D — répondent à une autre question : **où poser des panneaux solaires ?**

Pour tester l'idée, j'ai pris un cas concret : une propriété au [Château Blanc à Gingins](https://map.geo.admin.ch/?lang=fr&center=2502875,1141000&z=9), dans le district de Nyon. Terrain vallonné, grands arbres, bâtiments historiques. Le genre d'endroit où l'ombre change radicalement entre hiver et été.

## La scène en 3D

Voici les 500 mètres autour du Château Blanc, modélisés avec les données SwissTopo réelles : terrain à 2 mètres de résolution, 129 bâtiments en mesh 3D, et la végétation (points verts = arbres > 3m). Les ombres bougent avec le soleil.

<div id="viz-gingins-3d" style="width: 100%; height: 500px; margin: 2rem 0; border-radius: 6px; overflow: hidden; background: var(--bg2, #13151a); border: 1px solid var(--border, #1e2128);"></div>

Changez la saison pour voir l'impact : en hiver, le soleil est bas et les ombres longues — les bâtiments et les arbres projettent des zones d'ombre massives. En été, le soleil monte haut et les zones d'ombre se réduisent drastiquement.

## Ce que ça change pour les panneaux solaires

Un panneau solaire ne se contente pas d'être "au soleil" — il a besoin d'un **nombre d'heures** d'ensoleillement direct, sur l'**année entière**. Une terrasse qui reçoit 3h de soleil l'été est parfaite pour un apéro. Un panneau solaire a besoin de 4-6h **en hiver aussi**, quand le rendement compte le plus.

Le moteur de calcul de Mappy Hour peut produire une **heatmap** d'heures d'ensoleillement par pixel, pour chaque jour de l'année. C'est exactement ce dont un installateur a besoin pour optimiser le placement.

## Et après ?

Le calcul existe déjà — c'est le même pipeline de [compute shaders](/blog/preview/b4e1f723/pourquoi-compute-shaders) qui tourne pour les terrasses. L'adapter aux toitures, c'est changer la question de "soleil oui/non à 17h" à "combien d'heures de soleil direct sur l'année". Les données sont les mêmes. La physique est la même. Seule la métrique change.

<!-- Three.js + OrbitControls from CDN -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>
<script src="/assets/js/gingins-scene.js"></script>
