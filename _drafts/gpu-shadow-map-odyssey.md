---
layout: post
title: "Du ray-tracing CPU au shadow map GPU : odyss\u00e9e d'une optimisation 91x"
tags: [project, gis, performance, gpu, shadow-mapping, optimization]
unlisted: true
permalink: /preview/a3b7d912/gpu-shadow-odyssey
sitemap: false
---

Le profiling de Mappy Hour montrait un chiffre brutal : **99.2% du temps** de calcul d'une tuile d'ensoleillement partait dans le ray-tracing des b\u00e2timents. 39.7 secondes sur 40, pour 19'968 intersections rayon-triangle. Le reste -- terrain, v\u00e9g\u00e9tation, position solaire -- prenait 0.3 seconde.

Voici l'histoire de comment on a r\u00e9duit ces 39.7 secondes \u00e0 0.4 seconde.

## Le profiling initial

La tuile `e2538000_n1152250_s250` couvre un carr\u00e9 de 250 m autour de la terrasse du Great Escape \u00e0 Lausanne. 2'497 points de grille \u00e0 5 m, dont 1'248 en ext\u00e9rieur (les autres sont \u00e0 l'int\u00e9rieur de b\u00e2timents). Pour chaque point, 16 instants solaires entre 8h et 12h, toutes les 15 minutes.

Pour chaque couple point-instant, le CPU lance un rayon dans la direction du soleil et teste l'intersection avec les footprints de tous les b\u00e2timents dans un rayon de 2'500 m. La grille spatiale 64 m \u00e9lague les candidats, mais il reste des centaines de tests polygone-rayon par \u00e9valuation.

**R\u00e9sultat** : 1'795 \u00b5s par \u00e9valuation. 19'968 \u00e9valuations. 35.8 secondes.

## Tentative 1 : Three.js dans un navigateur headless (1.3x)

Premi\u00e8re id\u00e9e : rendre la sc\u00e8ne en Three.js via Playwright, utiliser le shadow map WebGL int\u00e9gr\u00e9, et lire le r\u00e9sultat.

Le probl\u00e8me : Three.js rendait bien les ombres visuellement, mais pour r\u00e9cup\u00e9rer le r\u00e9sultat par point, on utilisait `Raycaster` -- qui fait du ray-tracing **c\u00f4t\u00e9 CPU en JavaScript**. Le GPU rendait le shadow map en 2.6 s, mais le raycaster prenait 25.4 s pour tester les 19'968 points un par un.

**R\u00e9sultat** : 28.2 s total. 1.3x de speedup. 30% de mismatches avec le CPU. Inutile.

## Tentative 2 : headless-gl + depth buffer (54x)

Deuxi\u00e8me approche : cr\u00e9er un contexte WebGL offscreen avec `headless-gl`, rendre les b\u00e2timents comme des primes extrud\u00e9s, \u00e9crire `gl_FragCoord.z` dans un RGBA (WebGL1 n'a pas de depth texture readback), et lire le buffer avec `readPixels`.

Pour chaque instant solaire :
1. Construire la matrice vue+projection orthographique depuis la position du soleil
2. Rendre les 12'562 b\u00e2timents (247'508 triangles)
3. `readPixels` \u2192 depth buffer en m\u00e9moire JavaScript

Pour chaque point : projeter dans l'espace clip de la light, lire la profondeur stock\u00e9e au pixel correspondant, comparer.

**R\u00e9sultat** : 0.4 s total. **54x de speedup.** 76.5% de pr\u00e9cision.

Le 23.5% de mismatches venait d'un probl\u00e8me de g\u00e9om\u00e9trie : les prismes extrud\u00e9s (footprint \u00e0 hauteur fixe) ne correspondent pas aux vrais toits en pente des b\u00e2timents.

## Tentative 3 : vrais mesh DXF (71x mais r\u00e9gression)

SwissBUILDINGS3D fournit des polyfaces 3D dans des fichiers DXF -- les vrais mod\u00e8les architecturaux avec toits en pente, lucarnes, d\u00e9crochements. On a \u00e9crit un parser DXF qui extrait les triangles et les charge dans le GPU.

907'159 triangles au lieu de 247'508. Plus pr\u00e9cis g\u00e9om\u00e9triquement, mais la pr\u00e9cision du shadow map a **baiss\u00e9** : 64.4% de match (vs 76.5% avec les prismes).

La cause : le shadow map couvrait la bounding box compl\u00e8te des b\u00e2timents (5 km \u00d7 4 km) \u00e0 1.6 m/pixel. Les bords d'ombre \u00e9taient flous.

## Tentative 4 : tight frustum + bias fix (93%, 55x)

Deux corrections :

1. **Tight frustum** : au lieu d'un rayon sph\u00e9rique englobant, projeter les 8 coins de la scene bbox dans l'espace lumi\u00e8re et calculer l'AABB minimale. La projection ortho ne gaspille plus de pixels sur du vide.

2. **Bias r\u00e9duit** : le shadow bias (0.003) \u00e9tait plus grand que la diff\u00e9rence de profondeur r\u00e9elle entre le b\u00e2timent et le point observateur (0.0015). R\u00e9duit \u00e0 0.0002.

**R\u00e9sultat** : 64.4% \u2192 **92.9%** de pr\u00e9cision. Le b\u00e2timent `obs-23565` qui causait 98% des mismatches est enfin d\u00e9tect\u00e9.

## Tentative 5 : frustum directionnel + PCF (93.4%, 80x)

Optimisations fines :
- **Extension directionnelle** : le frustum s'\u00e9tend uniquement vers le soleil (o\u00f9 sont les bloqueurs), pas dans toutes les directions
- **Smart 2\u00d72 PCF** : au lieu d'un pixel, on \u00e9chantillonne le quad 2\u00d72 qui encadre la position sub-pixel du point

**R\u00e9sultat** : 93.4% de pr\u00e9cision, **80x de speedup**.

## Tentative 6 : cascaded shadow maps (93.5%, 34x)

Deux cascades : un shadow map haute r\u00e9solution pour les bloqueurs proches (tuile \u00b1 200 m), un deuxi\u00e8me pour les bloqueurs distants.

**R\u00e9sultat** : 93.5% -- gain marginal (+0.1pp) pour un co\u00fbt de 2x en temps de rendu. Les mismatches restants ne sont pas un probl\u00e8me de r\u00e9solution -- ce sont des divergences g\u00e9om\u00e9triques entre le ray-tracing exact et la rasterisation.

## Int\u00e9gration dans l'API

Le backend GPU est activ\u00e9 par un feature flag : `MAPPY_BUILDINGS_SHADOW_MODE=gpu-raster`. L'\u00e9valuateur GPU est wrap\u00e9 dans le m\u00eame callback que le CPU, transparent pour les routes API et le pipeline de precompute.

Un point cl\u00e9 : `prepareSunPosition()` est d\u00e9dupliqu\u00e9 \u00e0 0.1\u00b0 pr\u00e8s. Dans une tuile de 250 m, la position du soleil varie de ~0.005\u00b0 entre les points -- n\u00e9gligeable. R\u00e9sultat : 16 renders par tuile (un par instant), pas 19'968.

Le backend GPU est cr\u00e9\u00e9 une seule fois et cach\u00e9 au niveau du module Node.js -- les 15 secondes de chargement DXF ne sont pay\u00e9es qu'au premier appel.

La r\u00e9ponse API inclut `model.buildingsShadowMethod: "gpu-raster-v1"` pour que le client sache quel algorithme a \u00e9t\u00e9 utilis\u00e9. Si le GPU n'est pas disponible, le fallback CPU est automatique et la m\u00e9thode indique `"gpu-raster-fallback-cpu"`.

## Le plot twist : le goulot a boug\u00e9

Avec les b\u00e2timents \u00e0 0.4 s au lieu de 39.7 s, le profiling d'une tuile montre un nouveau paysage :

| Phase | Avant GPU | Apr\u00e8s GPU | % du total |
|---|---|---|---|
| Masque d'horizon terrain | 15.2 s | 15.2 s | **36%** |
| Chargement sources | 2.1 s | 2.1 s | 5% |
| Pr\u00e9paration points | 0.04 s | 0.04 s | 0.1% |
| \u00c9valuation (b\u00e2timents + veg) | 39.7 s | 25.0 s | **59%** |
| **Total** | **57 s** | **42 s** | |

Le masque d'horizon -- un raycast \u00e0 120 km dans 360 directions sur le DEM Copernicus 30 m -- est devenu le premier candidat \u00e0 l'optimisation. La v\u00e9g\u00e9tation (ray marching sur le raster swissSURFACE3D) domine dans l'\u00e9valuation restante.

## Ce qu'on a appris

1. **Profiler avant d'optimiser.** Le 99.2% initial \u00e9tait dans les b\u00e2timents -- mais apr\u00e8s le fix, c'est l'horizon qui domine. L'optimisation d\u00e9place les goulots, elle ne les \u00e9limine pas.

2. **Le pattern render-once/lookup-many est puissant.** Le GPU ne rend qu'une fois par instant solaire (30 ms). Les 19'968 lookups prennent 4 ms au total. Le co\u00fbt marginal par point est quasi nul.

3. **La pr\u00e9cision a un plafond.** \u00c0 93%, les 7% de diff\u00e9rence sont des bords d'ombre o\u00f9 CPU et GPU donnent des r\u00e9ponses diff\u00e9rentes mais \u00e9galement valides. Pousser au-del\u00e0 (cascaded shadow maps) co\u00fbte cher pour peu de gain.

4. **Le software rendering suffit.** headless-gl utilise SwiftShader (pas de GPU physique), et c'est assez rapide. Le gain vient de l'algorithme, pas du hardware.

5. **Le cache module-level est critique.** Sans caching du backend GPU, chaque tuile rechargeait 907'000 triangles depuis les DXF (15 s). Avec le singleton, c'est pay\u00e9 une seule fois.

## Prochaines \u00e9tapes

- **Pr\u00e9calcul des masques d'horizon** pour toute la r\u00e9gion Lausanne en batch offline, au lieu du raycast \u00e0 la vol\u00e9e
- **Masque r\u00e9gional unique** -- Lausanne est dans une cuvette, l'horizon montagneux est quasi identique sur 2 km
- **Streaming progressif** des tuiles calcul\u00e9es vers le client, avec ETA en temps r\u00e9el
