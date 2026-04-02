---
layout: post
title: "Rasterisation, ray-tracing et GPU : pourquoi pas Three.js pour tout ?"
tags: [project, gis, performance, gpu, ray-tracing]
---

En construisant les visualisations interactives de l'article précédent, une question s'est imposée : si Three.js peut rendre 225 bâtiments avec des ombres en temps réel sur un GPU grand public, pourquoi est-ce que Mappy Hour fait tout en CPU avec du code TypeScript ?

## Comment Mappy Hour calcule l'ensoleillement

Mappy Hour utilise trois couches de données pour déterminer si un point est au soleil :

**Le terrain** — SwissALTI3D, une grille de 2 mètres de résolution. Chaque cellule stocke l'altitude du sol nu. Pour connaître l'altitude à un point : `grille[ligne][colonne]`. Un seul accès mémoire, pas de calcul.

**La végétation** — swissSURFACE3D, une grille de 0.5m. On lance un rayon vers le soleil et on échantillonne la grille tous les 2 mètres. Si un échantillon est au-dessus de la ligne de visée → un arbre bloque le soleil.

**Les bâtiments** — la seule couche qui n'est pas une grille. Ce sont des polygones 3D (les vrais modèles architecturaux de Swisstopo), testés par intersection rayon-triangle. Pourquoi pas une grille ? Parce qu'un mur de 30 mètres de haut sur 50 centimètres d'épaisseur serait invisible dans une grille à 2m — il tomberait entre les pixels.

Le profiling montre que les deux premières couches (terrain + végétation) prennent **0.3% du temps**. Les bâtiments prennent **99.2%**. C'est le seul levier qui compte.

## Deux façons de calculer les ombres

Pour comprendre comment accélérer le calcul des bâtiments, il faut comprendre deux techniques fondamentales.

### La rasterisation

La rasterisation, c'est convertir un objet géométrique en **valeurs sur une grille régulière**. À gauche, un bâtiment décrit par ses coordonnées exactes. À droite, la même information stockée dans une grille : chaque cellule contient l'altitude (500m = sol, 525m = toit).

<div id="viz-rasterization" style="width: 100%; margin: 1.5rem 0; border-radius: 6px; overflow: hidden; background: var(--bg2); border: 1px solid var(--border);"></div>

L'avantage : lire une valeur, c'est un seul accès mémoire — `grille[ligne][colonne]`. Pas de calcul géométrique. Survolez la grille pour le voir en action.

L'inconvénient : les bords sont arrondis aux pixels. Plus la grille est fine, plus c'est précis, mais plus la mémoire explose.

### Le shadow mapping

Le **shadow mapping** utilise la rasterisation pour calculer les ombres. Le principe en deux étapes :

1. **On rend la scène depuis le point de vue du soleil** — le soleil "regarde" les bâtiments à travers un **frustum** (le volume en forme de pyramide tronquée qui délimite son champ de vision). Tout ce qui est dans le frustum est rendu. Le résultat est un "depth buffer" : pour chaque pixel, la distance entre le soleil et le premier objet touché.

2. **Pour chaque point au sol**, on calcule sa distance au soleil et on la compare au depth buffer. Si ma distance est plus grande que celle stockée → il y a un objet plus proche du soleil que moi → **ombre**. Sinon → **soleil**.

Le depth buffer doit être recalculé pour chaque position du soleil — le frustum change à chaque instant puisque le soleil se déplace.

<div id="viz-shadowmap" style="width: 100%; margin: 1.5rem 0; border-radius: 6px; overflow: hidden; background: var(--bg2); border: 1px solid var(--border);"></div>

Survolez les points au sol pour voir la comparaison en action. Le depth buffer stocke **85m** (le toit, distance courte) ou **200m** (le sol, distance longue). On compare toujours des **distances au soleil** — la même unité, le même référentiel.

Un détail qui a l'air anodin mais qui peut tout casser : le **bias** (décalage). Le toit d'un bâtiment est à la fois la surface rendue dans le depth buffer ET un point qu'on veut tester. Sa distance au soleil devrait être exactement égale à la valeur stockée. En pratique, les arrondis font que la distance calculée est parfois un poil plus grande — et le toit se déclare à l'ombre de lui-même. C'est le **shadow acne** : des zébrures sur chaque surface. Le bias ajoute un petit décalage de tolérance. Trop petit → zébrures. Trop grand → les ombres décollent du pied des bâtiments.

### Le ray-tracing

Le ray-tracing fait l'inverse : au lieu de projeter des triangles sur une grille, on lance un **rayon** depuis un point vers le soleil, et on cherche ce qu'il touche.

<div id="viz-raytracing" style="width: 100%; margin: 1.5rem 0; border-radius: 6px; overflow: hidden; background: var(--bg2); border: 1px solid var(--border);"></div>
<div style="text-align: center; margin: 0 0 1.5rem;">
  <label style="color: var(--text-body); font-family: var(--mono); font-size: 0.85rem;">Altitude du soleil : <span id="raytracing-alt">15°</span></label><br>
  <input type="range" min="2" max="45" step="1" value="15" id="raytracing-slider" style="width: 60%; max-width: 300px; margin-top: 0.5rem; accent-color: var(--accent);"
    oninput="document.getElementById('raytracing-alt').textContent=this.value+'°'">
</div>

La formule : **P(t) = O + t × D**, où O est l'observateur, D la direction vers le soleil, et t la distance. Si le rayon intersecte un triangle de mesh 3D avant d'atteindre le soleil → ombre. Sinon → soleil. Bougez le slider pour voir : un soleil bas est bloqué, un soleil haut passe au-dessus.

C'est ce que fait Mappy Hour pour les bâtiments — et c'est ce qui prend 99.2% du temps.

## Le backend GPU shadow map

J'ai remplacé le ray-tracing CPU des bâtiments par un shadow map GPU. Même interface, interchangeable : le reste du pipeline (terrain, végétation, horizon, cache) ne change pas. Un switch au démarrage du serveur choisit le backend.

Quatre itérations sur un ThinkPad X1 avec Intel Arc 140V (GPU intégré) :

| Version | Approche | Speedup | Erreur | Problème |
|---|---|---|---|---|
| v2 | Bâtiments simplifiés (prismes) | 54x | 23.5% | Géométrie trop simple → ombres manquantes |
| v3 | Vrais mesh 3D Swisstopo (907k triangles) | 71x | 35.6% | Frustum mal calibré → bâtiments hors champ |
| v4 | Frustum resserré + bias corrigé | 54x | 7% | Cas limites aux bords de tuile |
| **v5** | **Frustum directionnel** | **80x** | **6.6%** | Divergence géométrique irréductible |

Le résultat à l'échelle :

| | **CPU (8 workers)** | **GPU Intel Arc 140V** |
|---|---|---|
| 1 tuile, 1 journée | 1.4 min | 1.1 s |
| **Tout Lausanne, 1 journée** | **1h 20min** | **8 min** |

J'ai testé les **cascaded shadow maps** (plusieurs shadow maps à des résolutions différentes par tranche de distance) pour réduire les 6.6%. Résultat : +0.1% de précision pour -57% de speedup. Le problème n'est pas la résolution.

## Pourquoi 6.6% de divergence et pas 0%

La divergence est **géométrique**, pas une question de résolution ou de configuration. Les deux méthodes répondent à la même question avec des outils fondamentalement différents :

<div id="viz-divergence" style="width: 100%; margin: 1.5rem 0; border-radius: 6px; overflow: hidden; background: var(--bg2); border: 1px solid var(--border);"></div>

À gauche, le **CPU** lance un rayon infiniment fin. Le rayon touche ou ne touche pas le mur — c'est un test géométrique exact, sub-millimétrique. Le bord d'ombre est une ligne nette.

À droite, le **GPU** découpe l'espace en pixels. Pour chaque pixel, il teste le **centre**. Si le centre est dans l'ombre → tout le pixel est dans l'ombre. Le bord d'ombre devient un **escalier**.

Quand un point tombe pile sur le bord — à l'intérieur d'un pixel dont le centre est de l'autre côté — les deux méthodes donnent des résultats différents. Ni l'un ni l'autre n'a "tort". Le CPU dit "le rayon touche le mur à 0.3mm du bord". Le GPU dit "le centre du pixel est à 4cm de l'autre côté". Les deux sont corrects dans leur cadre.

## L'architecture

L'interface `BuildingShadowBackend` a deux méthodes :

- `prepareSunPosition(azimuth, altitude)` — GPU : rend le shadow map. CPU : rien.
- `evaluate(query)` — GPU : lookup depth buffer. CPU : ray-tracing.

Une factory choisit le backend au démarrage. Le jour où on voudra un microservice GPU dédié, on remplacera l'implémentation derrière la même interface.

Pour le shadow map, on rend 907'000 triangles dans un depth buffer 60 fois par jour — pas Cyberpunk 2077. L'API GPU n'a pas besoin d'être complexe :

| | **Vulkan** | **wgpu** | **headless-gl** |
|---|---|---|---|
| Setup pour un triangle | ~1000 lignes | ~100 lignes | ~50 lignes |
| Gestion mémoire GPU | Manuelle | Automatique | Automatique |
| Multi-plateforme | Linux/Windows | Partout (Vulkan+Metal+DX12) | Partout (OpenGL) |
| Performance | 100% | ~95-98% | ~80% |

Vulkan donne le contrôle total mais c'est de l'artillerie lourde pour un cas d'usage simple. wgpu offre 95% de la puissance pour 10% de la complexité. headless-gl (utilisé dans le benchmark) est le plus simple mais peut tomber en software rendering.

## Conclusion

Le ray-tracing des bâtiments consommait 99.2% du temps de calcul. Le shadow map GPU le divise par 80 — même sur un GPU intégré Intel. Tout Lausanne passe de 1h 20min à 8 minutes.

Le terrain, la végétation et l'horizon étaient déjà en raster et ne coûtaient rien. La cascade de court-circuits éliminait déjà les instants inutiles. Ce qui restait, c'était 50 shadow maps par jour pour 93k bâtiments — et ça, c'est exactement ce que les GPU font le mieux.

<!-- Visualizations -->
<script src="/assets/js/explain-rasterization.js"></script>
<script src="/assets/js/explain-shadowmap.js"></script>
<script src="/assets/js/explain-raytracing.js"></script>
<script src="/assets/js/explain-divergence.js"></script>
