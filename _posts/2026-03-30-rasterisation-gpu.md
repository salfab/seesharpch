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

La rasterisation, c'est convertir un objet géométrique en **valeurs sur une grille régulière**. À gauche, un bâtiment décrit par ses coordonnées exactes (un polygone vectoriel). À droite, la même information stockée dans une grille : chaque cellule contient un nombre — ici, l'altitude (500m = sol, 525m = toit du bâtiment).

<div id="viz-rasterization" style="width: 100%; margin: 1.5rem 0; border-radius: 6px; overflow: hidden; background: var(--bg2); border: 1px solid var(--border);"></div>

L'avantage : pour connaître l'altitude à n'importe quel point, un seul accès mémoire suffit — `grille[ligne][colonne]`. Pas de calcul géométrique, pas de test "est-ce que ce point est à l'intérieur du polygone ?". Survolez la grille pour le voir en action.

L'inconvénient : les bords du bâtiment sont arrondis aux pixels. Un mur qui tombe entre deux cellules est soit dedans, soit dehors — pas de demi-mesure. Plus la grille est fine (0.5m au lieu de 2m), plus la perte est faible, mais plus la mémoire explose.

## Le shadow mapping : la rasterisation au service des ombres

OK, mais comment passer d'une "grille de hauteurs" à "ce point est-il à l'ombre" ? C'est le **shadow mapping**, la technique qu'utilisent Three.js et tous les jeux vidéo. Le principe en deux étapes :

1. **On rend la scène depuis le point de vue du soleil** — le résultat est un "depth buffer" : pour chaque pixel, la distance entre le soleil et le premier objet touché. Si le soleil voit un toit, la distance est courte. S'il voit le sol directement, la distance est longue.

2. **Pour chaque point au sol**, on calcule sa distance au soleil et on la compare au depth buffer. Si ma distance est plus grande que celle stockée dans le buffer → il y a un objet entre moi et le soleil → **ombre**. Sinon → **soleil**.

<div id="viz-shadowmap" style="width: 100%; margin: 1.5rem 0; border-radius: 6px; overflow: hidden; background: var(--bg2); border: 1px solid var(--border);"></div>

Survolez les points au sol pour voir le test en action : le rayon vers le soleil est-il bloqué par le bâtiment ? Le depth buffer en bas montre ce que le soleil "voit" — les pixels jaunes sont le toit (distance courte), les gris sont le sol (distance longue).

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

Avant de parler GPU, regardons où le temps est réellement passé. Le profiling d'une tuile de Lausanne (1248 points × 16 instants = 19'968 évaluations, mode detailed) :

| Phase | Temps | Part |
|---|---|---|
| **Bâtiments (ray-tracing)** | **39'758 ms** | **99.2%** |
| Végétation (ray march raster) | 78 ms | 0.2% |
| Terrain (horizon mask) | 32 ms | 0.1% |
| Position solaire (SunCalc) | 35 ms | 0.1% |
| Finalization | 133 ms | 0.3% |

Le ray-tracing des bâtiments, c'est **99.2% du temps**. Tout le reste est négligeable. C'est le seul levier qui compte.

## La cascade de court-circuits

Le code ne calcule pas bêtement les 144 instants. Pour chaque instant, une cascade de tests élimine le travail :

1. **Soleil sous l'horizon astronomique ?** → résultat immédiat : nuit. Coût : ~0.
2. **Soleil sous le masque d'horizon** (montagnes) ? → résultat : ombre terrain. Coût : un lookup dans le masque.
3. **Seulement si le soleil est visible** → évaluation bâtiments + végétation.

Sur une journée de mars (8h-20h, toutes les 15 minutes), environ **50 à 60 instants** déclenchent réellement le calcul bâtiments. Les instants de nuit, d'aube, et de crépuscule sont court-circuités.

## Pistes d'amélioration

### Ce qu'un GPU changerait concrètement

Remplacer le ray-tracing CPU des bâtiments par un shadow map GPU :

- **Actuellement** : 39.7 secondes par tuile (ray-tracing de 19'968 points)
- **Avec GPU** : ~60 shadow maps (un par instant "soleil visible") × ~1ms par rendu + 19'968 lookups = **~100ms au lieu de 40 secondes**
- **Gain estimé : ~400x** sur la couche bâtiments

Pour tout Lausanne (des centaines de tuiles) : le précalcul passerait de **plusieurs heures à quelques minutes**.

### Le changement architectural

Le bon côté : c'est un changement **ciblé**. Seul le module `buildingShadowEvaluator` dans `solar.ts` serait remplacé. Le reste du pipeline ne bouge pas :

- L'API REST : identique
- La cascade de court-circuits : identique
- Le terrain, la végétation, l'horizon : identiques (déjà en raster, rapides)
- Le cache par tuile : identique
- Les données (DXF, index) : identiques, converties en mesh GPU au chargement

Concrètement : charger les 93k bâtiments en buffers GPU au démarrage du serveur. Pour chaque instant, rendre un shadow map depuis la position du soleil. Pour chaque point, un lookup dans le depth buffer au lieu du ray-tracing vectoriel.

~200-400 lignes de code nouveau. Pas une réécriture.

### Avec ou sans GPU physique

Trois options :

1. **Serveur avec GPU** (ex: GPU NVIDIA sur un VPS) — le plus rapide, mais coûteux (~50-100€/mois)
2. **Headless WebGL** (`headless-gl` + Mesa software renderer) — pas de GPU physique, mais le shadow map tourne en CPU via Mesa. Potentiellement encore plus rapide que le ray-tracing vectoriel pour 93k bâtiments, sans matériel supplémentaire.
3. **Côté client** (WebGPU dans le navigateur) — déporte le calcul chez l'utilisateur. Pas de coût serveur, mais impossible pour le précalcul de cache.

La piste 2 est la plus pragmatique : aucun changement d'infrastructure, juste une dépendance npm (`headless-gl`).

### Piste alternative : hybride raster-first (sans GPU du tout)

Sans rien changer à l'infrastructure, utiliser swissSURFACE3D comme pré-filtre avant le ray-tracing :

1. Ray march sur la grille raster 0.5m (~200 lookups mémoire, quasi-gratuit)
2. Si "pas bloqué" → terminé
3. Si "bloqué" → vérifier avec le ray-tracing vectoriel

Le raster dirait "pas bloqué" dans la majorité des cas (soleil haut, zones dégagées). Le vectoriel ne serait invoqué que pour le soleil rasant et les coins de toits ambigus.

## Conclusion

Le profiling ne ment pas : le ray-tracing des bâtiments consomme 99.2% du temps de calcul. C'est le seul levier qui compte, et il y a au moins trois façons de l'attaquer — du plus simple (pré-filtre raster, zéro infra) au plus ambitieux (shadow map GPU, gain ~400x).

Le terrain, la végétation et l'horizon sont déjà en raster et ne coûtent rien. La cascade de court-circuits élimine les instants inutiles. Ce qui reste, c'est 50 shadow maps par jour pour 93k bâtiments — et ça, c'est exactement ce que les GPU font le mieux.

<!-- Visualizations -->
<script src="/assets/js/explain-rasterization.js"></script>
<script src="/assets/js/explain-shadowmap.js"></script>
<script src="/assets/js/explain-raytracing.js"></script>
