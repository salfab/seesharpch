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

La rasterisation, c'est transformer un objet géométrique (un triangle, un polygone, une ligne) en pixels sur une grille régulière. Ton écran est une grille de pixels. Le GPU prend chaque triangle de la scène 3D, calcule quels pixels il couvre, et remplit ces pixels avec la bonne couleur.

C'est le principe fondamental du rendu 3D temps réel depuis les années 90. Pas besoin de suivre des rayons lumineux — on projette les triangles sur l'écran un par un, à une vitesse phénoménale. Un GPU moderne rasterise des milliards de triangles par seconde.

Le shadow mapping — la technique qu'utilise Three.js pour les ombres — est lui aussi de la rasterisation : on rend la scène une deuxième fois depuis le point de vue du soleil, et on stocke la profondeur de chaque pixel. Ensuite, pour chaque pixel de la vue normale, on vérifie s'il est "plus loin" que ce que le soleil voit. Si oui, il est dans l'ombre.

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

## Conclusion

La rasterisation est omniprésente dans Mappy Hour — pour le terrain, la végétation, l'horizon. Le seul calcul qui résiste, c'est les bâtiments : trop fins, trop verticaux, trop irréguliers pour une grille. Le GPU pourrait accélérer ce calcul via des compute shaders, mais le gain dépend du profiling réel. Et pour un service qui répond "soleil ou ombre ?" via une API REST, la réponse doit être un booléen exact, pas une image approximative.
