---
layout: post
title: "Rasterisation, ray-tracing et GPU : pourquoi pas Three.js pour tout ?"
tags: [project, gis, performance, gpu, ray-tracing]
unlisted: true
permalink: /preview/f7a2c891/rasterisation-gpu
sitemap: false
---

En construisant les visualisations interactives de l'article précédent, une question s'est imposée : si Three.js peut rendre 225 bâtiments avec des ombres en temps réel sur un GPU grand public, pourquoi est-ce que Mappy Hour fait tout en CPU avec du code TypeScript ?

## Ce qu'est la rasterisation

La rasterisation, c'est transformer un objet géométrique (un triangle, un polygone, une ligne) en pixels sur une grille régulière. On parcourt la grille, et pour chaque cellule on demande : "est-ce que ce pixel est à l'intérieur du polygone ?" Si oui, on stocke une valeur — une hauteur, une couleur, une profondeur.

<div id="viz-rasterization" style="width: 100%; margin: 1.5rem 0; border-radius: 6px; overflow: hidden; background: var(--bg2); border: 1px solid var(--border);"></div>

C'est le principe fondamental du rendu 3D temps réel depuis les années 90. Ton écran est une grille de pixels. Le GPU prend chaque triangle de la scène, calcule quels pixels il couvre, et les remplit. Un GPU moderne rasterise des milliards de triangles par seconde. Pas besoin de suivre des rayons lumineux — on projette les triangles sur la grille un par un.

Le shadow mapping — la technique qu'utilise Three.js pour les ombres — est lui aussi de la rasterisation : on rend la scène une deuxième fois depuis le point de vue du soleil, et on stocke la profondeur de chaque pixel dans une texture. Ensuite, pour chaque pixel de la vue normale, on vérifie s'il est "plus loin" que ce que le soleil voit. Si oui, il est dans l'ombre.

## Ce qu'est le ray-tracing

Le ray-tracing fait l'inverse : au lieu de projeter des triangles sur une grille, on lance un **rayon** depuis un point dans une direction, et on cherche ce qu'il touche.

<div id="viz-raytracing" style="width: 100%; margin: 1.5rem 0; border-radius: 6px; overflow: hidden; background: var(--bg2); border: 1px solid var(--border);"></div>
<div style="text-align: center; margin: 0 0 1.5rem;">
  <label style="color: var(--text-body); font-family: var(--mono); font-size: 0.85rem;">Altitude du soleil : <span id="raytracing-alt">15°</span></label><br>
  <input type="range" min="2" max="45" step="1" value="15" id="raytracing-slider" style="width: 60%; max-width: 300px; margin-top: 0.5rem; accent-color: var(--accent);"
    oninput="document.getElementById('raytracing-alt').textContent=this.value+'°'">
</div>

La formule est simple : **P(t) = O + t × D**, où O est l'observateur, D la direction vers le soleil, et t la distance. On avance le long du rayon et on teste chaque obstacle. Si le rayon intersecte un triangle du mesh 3D d'un bâtiment avant d'atteindre le soleil, le point est à l'ombre. Sinon, il est au soleil.

Bougez le slider pour voir comment l'altitude du soleil change le résultat : un soleil bas (fin de journée) est bloqué par le bâtiment, un soleil haut (midi) passe au-dessus.

## Où on l'utilise déjà (et on ne s'en rendait pas compte)

Mappy Hour utilise en fait de la rasterisation pour **deux des trois couches** de calcul :

**Le terrain** — SwissALTI3D est une grille raster à 2 mètres de résolution. Chaque "pixel" stocke l'altitude du sol nu. Quand on veut connaître l'altitude à un point donné, on fait un simple lookup dans la grille : `grille[colonne][ligne]`. C'est de la rasterisation au sens propre — une donnée continue (le relief) discrétisée sur une grille régulière.

**La végétation** — swissSURFACE3D est une grille raster à 0.5m. Chaque pixel stocke l'altitude de la surface (sol + arbres + tout ce qui dépasse). Pour tester si un arbre bloque le soleil, on lance un rayon dans la direction du soleil et on échantillonne la grille tous les 2 mètres. Si un échantillon est au-dessus de la ligne de visée, c'est bloqué. C'est du ray marching sur une grille raster — un hybride entre ray-tracing et rasterisation.

**Le masque d'horizon** — le DEM Copernicus à 30m est aussi une grille raster. On la parcourt jusqu'à 120 km dans chaque direction pour construire le profil d'obstruction.

La seule couche qui n'est **pas** raster, ce sont les **bâtiments** : des polygones 3D (footprints extrudés, mesh triangulés) testés par intersection rayon-triangle. Pourquoi ? Parce que les murs des bâtiments sont verticaux et discontinus. Un mur de 30 mètres de haut sur 50 centimètres d'épaisseur serait invisible dans une grille raster à 2m — il tomberait entre les pixels.

## Pourquoi pas tout faire sur GPU alors ?

Three.js rend notre scène de 225 bâtiments à 60 fps. Mais ce qu'il fait est fondamentalement différent de ce que fait Mappy Hour :

| | **Three.js (GPU)** | **Mappy Hour (CPU)** |
|---|---|---|
| **Objectif** | "Ça a l'air juste" | "C'est juste" |
| **Ombres** | Shadow map (texture de résolution fixe) | Ray-tracing exact par bâtiment |
| **Précision** | ~1m (dépend de la shadow map) | Sub-métrique |
| **Terrain** | Pas de terrain au-delà de la scène | 120 km avec réfraction atmosphérique |
| **Végétation** | Non | Raster 0.5m le long du rayon |
| **Résultat** | Une image à regarder | Un booléen par point : soleil ou ombre |

Le GPU est optimisé pour rendre des images. Mappy Hour a besoin de répondre "oui" ou "non" pour des milliers de points à des centaines d'instants. Ce sont deux problèmes différents.

## Les pistes GPU réalistes

**WebGPU + Compute Shaders** — Le successeur de WebGL permet d'exécuter du code arbitraire sur le GPU, pas seulement du rendu. On pourrait porter le ray-tracing des bâtiments sur GPU : charger la grille spatiale 64m et les footprints dans des buffers GPU, lancer un compute shader par point de la grille, et récupérer le résultat. Le gain potentiel est massif — des milliers de rays en parallèle au lieu de les traiter séquentiellement.

**BVH (Bounding Volume Hierarchy)** — Au lieu de la grille 64m plate, un arbre de volumes englobants permettrait un ray-tracing plus efficace sur GPU. C'est ce que font les moteurs de jeu pour le ray-tracing hardware (RT cores des GPU NVIDIA/AMD).

**Le vrai bottleneck** — Avant de porter sur GPU, il faut regarder où le temps est passé. Les benchmarks de Mappy Hour montrent que le plus gros gain (45.8x) vient du partage de contexte par tuile, pas du ray-tracing lui-même. Optimiser la mauvaise chose ne sert à rien.

## Les limites pour "tout Lausanne en 3D"

Si on voulait rendre toute la ville en 3D interactive dans le navigateur :

- **93'000 bâtiments** = ~500k triangles (mesh détaillés). Un GPU moderne encaisse, mais il faut les charger. En JSON, c'est des centaines de mégaoctets. Il faudrait du glTF binaire ou des 3D Tiles (le format de Cesium/Google Earth).
- **Le terrain** sur 300 km² à 2m de résolution = 75 millions de points. Il faut du LOD (Level of Detail) — haute résolution près de la caméra, basse résolution au loin.
- **La végétation** à 0.5m sur la même zone = 1.2 milliard de pixels. Même problème, en pire.

C'est faisable — Google Earth le fait. Mais c'est un projet d'une tout autre échelle que Mappy Hour.

## Et si on rasterisait aussi les bâtiments ?

Puisque swissSURFACE3D inclut déjà les bâtiments (c'est un modèle de surface : sol + tout ce qui dépasse), pourquoi ne pas s'en servir pour **tout** ? On remplacerait les 93'000 obstacles vectoriels et leurs 8 étapes de filtrage par une simple boucle : avancer le long du rayon, lire la hauteur dans la grille, comparer. 200 lookups au lieu d'un pipeline complexe.

J'ai testé avec les vraies données swissSURFACE3D à 0.5m autour du Great Escape. Résultat d'un ray march vers le soleil (azimut 252°, altitude 9.1°, 17h30) :

```
d=0-8m   surface ≈ terrain (esplanade ouverte)  ✓
d=9m     surface=513.1m, rayon=510.1m  → BLOQUÉ  (coin de toit)
d=10m    surface retombe (espace entre bâtiments) → libre
d=15-20m terrain en pente, rien ne bloque        ✓
d=22m    surface=513.0m, rayon=512.2m  → BLOQUÉ  (bloc de bâtiments)
```

Le bloquer à 9m n'apparaît que sur **un seul pixel à 0.5m** — c'est probablement un coin de toit qui dépasse de quelques centimètres au-dessus de la ligne de visée. Le ray-tracing vectoriel de Mappy Hour sait que le rayon passe **à côté** de ce bâtiment grâce à un test géométrique exact. Le raster ne sait pas — il ne voit qu'une hauteur par pixel de 50cm, sans notion de "à côté".

C'est le compromis fondamental :

| | **Raster (swissSURFACE3D)** | **Vectoriel (mesh 3D)** |
|---|---|---|
| **Complexité** | ~200 lookups dans une grille | 8 étapes de filtrage + ray-triangle |
| **Données** | 1 fichier GeoTIFF | Index de 93k obstacles + DXF |
| **Précision** | ±0.5m (taille du pixel) | Sub-millimétrique |
| **Faux positifs** | Coins de toits, pixels ambigus | 0 (en mode detailed) |
| **Bâtiment en L** | Ne voit pas le vide intérieur | Le traverse correctement |
| **Performance** | Quasi-instantané (mémoire séquentielle) | Optimisé mais plus lent |

À midi (soleil à 38.5°), le rayon monte si vite que même le raster ne trouve rien qui bloque. Le problème n'apparaît qu'en fin de journée, quand le soleil rase et que chaque pixel compte.

La piste d'optimisation réaliste : un **mode hybride raster-first**. Lancer le ray march raster en premier (quasi-gratuit). Si le résultat est "pas bloqué", c'est définitif — pas besoin du vectoriel. Si c'est "bloqué", vérifier avec le ray-tracing vectoriel exact pour éliminer les faux positifs. Ça pourrait éliminer le vectoriel dans la majorité des cas (soleil haut, zones dégagées) tout en gardant la précision quand ça compte.

## Conclusion

La rasterisation est omniprésente dans Mappy Hour — pour le terrain, la végétation, l'horizon. Le seul calcul qui résiste, c'est les bâtiments : trop fins, trop verticaux, trop irréguliers pour une grille. Mais swissSURFACE3D offre un raccourci possible pour les cas simples. Le GPU pourrait accélérer le tout via des compute shaders, mais le gain dépend du profiling réel. Et pour un service qui répond "soleil ou ombre ?" via une API REST, la réponse doit être un booléen exact, pas une image approximative — le raster seul ne suffit pas.

<!-- Visualizations -->
<script src="/assets/js/explain-rasterization.js"></script>
<script src="/assets/js/explain-raytracing.js"></script>
