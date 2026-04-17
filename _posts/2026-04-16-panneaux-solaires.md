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

En précalculant chaque point de la parcelle toutes les 15 minutes, du 1er janvier au 31 décembre, on obtient une **heatmap annuelle** : les heures d'ensoleillement direct par pixel, pour toute l'année.

<div id="viz-gingins-heatmap" style="width: 100%; margin: 2rem 0; border-radius: 6px; overflow: hidden; background: var(--bg2, #13151a); border: 1px solid var(--border, #1e2128);"></div>

L'échelle est étalée entre le 2ᵉ et le 98ᵉ percentile des heures observées sur la tuile — les zones jaunes sont les mieux exposées (soleil direct presque en permanence quand il est au-dessus de l'horizon), les zones violettes subissent des ombres récurrentes tout au long de l'année. Note : le chiffre brut (4000+ heures) est un potentiel **géométrique** — il suppose un ciel dégagé en permanence. La météo suisse ramène le réel à 1500-1700 heures effectives.

## L'ombre d'un arbre vs l'ombre d'un bâtiment

Le moteur de calcul distingue nativement ce qui bloque le soleil : bâtiment, terrain, ou végétation. Un bâtiment, c'est permanent. Un arbre, ça se taille ou ça se coupe. Cliquez sur **"Heures perdues (arbres)"** dans la carte ci-dessus pour voir exactement combien d'heures la végétation retire à chaque pixel.

Sur une propriété comme celle-ci, certains points perdent jusqu'à 400h/an à cause des arbres — soit près d'un quart du potentiel solaire. La question "faut-il couper ce noyer ?" devient mesurable : on peut comparer la version avec et sans arbres au même coût de calcul, parce que les deux métriques sont produites dans le même dispatch GPU.

## Et après ?

Le calcul existe déjà — c'est le même pipeline de [compute shaders](/blog/preview/b4e1f723/pourquoi-compute-shaders) qui tourne pour les terrasses. L'adapter aux toitures, c'est changer la question de "soleil oui/non à 17h" à "combien d'heures de soleil direct sur l'année". Les données sont les mêmes. La physique est la même. Seule la métrique change.

<!-- Three.js + OrbitControls from CDN -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>
<script src="/assets/js/gingins-scene.js"></script>
<script src="/assets/js/gingins-heatmap.js"></script>
