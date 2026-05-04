---
layout: post
title: "Rainbow tables pour les ombres : troquer de la puissance de calcul contre du stockage de masse"
tags: [project, gis, algorithms, gpu, caching]
header_image: /assets/img/rainbow-tables-atlas.png
unlisted: true
permalink: /blog/preview/a1c5d3e7/rainbow-tables-atlas
sitemap: false
---

Mappy Hour calcule l'ensoleillement de centaines de tuiles urbaines, minute par minute, toute l'année. Même avec [un shadow map GPU](/blog/preview/f7a2c891/rasterisation-gpu) et [des compute shaders](/blog/preview/b4e1f723/pourquoi-compute-shaders), le compute annuel reste un mur. À 15 minutes d'échantillonnage, une année fait 35 000 images par tuile. Sur 250 tuiles c'est 9 millions de frames à évaluer. Chaque frame demande au GPU de tester plusieurs dizaines de milliers de points. C'est cher.

Mais il y a une asymétrie qu'on peut exploiter. Le soleil repasse par les mêmes positions dans le ciel d'une année à l'autre — une trajectoire quasi-périodique qui dérive d'une poignée de minutes par an. À un **angle solaire** donné — un couple (azimut, altitude) — les ombres projetées sur une tuile sont strictement reproductibles : elles ne dépendent pas du calendrier, elles dépendent uniquement de la géométrie bâtiments + soleil.

Ça change radicalement la question à poser. Plutôt que « quelle est l'ombre le 18 avril 2026 à 08h15 ? », on peut demander « quelle est l'ombre pour un soleil qui pointe à azimut 90°, altitude 15° ? » — et stocker la réponse une fois pour toutes. Toutes les dates futures où le soleil repassera dans ce même coin de ciel réutiliseront la même réponse.

## L'analogie qui débloque le raisonnement

C'est exactement le principe des **rainbow tables** en cryptographie. Pour retrouver un mot de passe à partir de son hash, l'attaque naïve est de hasher chaque mot de passe candidat à la volée. Coûteux. L'attaque sophistiquée consiste à **pré-calculer** les hashs de milliards de mots de passe et à les stocker dans une structure indexée par hash. On troque du CPU contre du stockage, parce que l'espace des mots de passe probables est **beaucoup plus petit** que l'espace des hashs possibles — et surtout, les mêmes mots de passe reviennent partout.

Le parallèle avec les ombres solaires est direct. L'espace des entrées (positions du soleil vu depuis la Terre) est **petit et prévisible** : une orbite elliptique qui repasse aux mêmes angles chaque année. L'espace des sorties (ombres projetées sur une tuile) est grand — 25 000 points × 35 000 frames par an. Si on indexe les masques d'ombre par angle solaire au lieu d'indexer par date, on amortit le compute sur tous les futurs utilisateurs qui demanderont un heatmap pour cette tuile.

Première fois qu'on calcule un point de la trajectoire : coût GPU plein pot. Toutes les fois suivantes : un lookup disque.

## Le design : des seaux d'angles

Le soleil parcourt une trajectoire continue dans le ciel. Pour en faire une structure indexable, on découpe cet espace continu en **seaux** : une grille d'angles (azimut, altitude) à une résolution fixe. Chaque seau stocke le masque d'ombre que produirait un soleil placé au centre exact du seau. Quand on demande les ombres à un instant donné, on calcule l'angle solaire réel, on trouve le seau qui l'englobe, et on renvoie le masque stocké.

La résolution du seau est le paramètre qui contrôle tout le reste. Plus fine : plus de seaux à calculer et à stocker, mais chaque masque colle mieux à la position solaire réelle. Plus grossière : moins de stockage et de compute, mais on approxime davantage — un seul masque sert pour une petite plage d'angles.

C'est un trade-off classique espace ↔ temps ↔ précision. Intéressant, c'est combien on gagne sur chaque axe, et surtout où se situe le point d'équilibre.

## Le bench : trois résolutions sur une tuile urbaine

J'ai construit l'atlas à trois résolutions — 1°, 0.75°, 0.5° — pour la tuile du [Great Escape](https://map.geo.admin.ch/?lang=fr&center=2538125,1152625&z=10) à Lausanne : 250 mètres de côté, 25 656 points d'évaluation, densité bâtiments urbains élevée. Huit dates couvrant toute l'année (équinoxes, solstices, transitions intermédiaires) ont servi à peupler l'atlas. Chaque date étale le soleil sur sa trajectoire du jour, à 15 minutes d'intervalle entre 4h et 22h locales.

### Stockage

| Résolution | Taille fichier compressé | Δ vs 1° |
|---|---|---|
| 1°     | 1.73 MB | — |
| 0.75°  | 1.80 MB | +3.6 % |
| 0.5°   | 1.81 MB | +4.4 % |

Le stockage dépend du **nombre de seaux uniques visités**, pas directement de la finesse de la grille. Chaque résolution converge vers environ 400 seaux pour couvrir une année complète de trajectoires. Passer de 1° à 0.5° n'ajoute que 4 % de disque — contre-intuitif. On y revient.

### Temps de construction

| Résolution | Total (8 dates) | 1ʳᵉ date | Dates 2 à 8 (moyenne) |
|---|---|---|---|
| 1°     | 18.4 s | 4.4 s | 2.0 s/date |
| 0.75°  | 24.9 s¹ | 10.3 s | 2.1 s/date |
| 0.5°   | 19.9 s | 4.7 s | 2.2 s/date |

¹ Le run 0.75° inclut une recompilation Rust à froid (~5.7 s) sur la 1ʳᵉ date.

Là aussi, peu d'écart entre les résolutions. Le GPU calcule les masques à la vitesse du GPU : la maille du bucket ne change pas la cadence brute, elle change juste à quelle granularité on enregistre les résultats.

### Amortissement : la courbe qui raconte l'histoire

| Date | 1° | 0.75° | 0.5° |
|---|---|---|---|
| 2026-03-20 | 48 | 48 | 48 |
| 2026-04-18 | 102 (+54) | 102 (+54) | 102 (+54) |
| 2026-05-15 | 161 (+59) | 161 (+59) | 161 (+59) |
| 2026-06-21 | 223 (+62) | 223 (+62) | 223 (+62) |
| 2026-07-22 | 283 (+60) | 283 (+60) | 283 (+60) |
| 2026-09-22 | 308 (+25) | 323 (+40) | 329 (+46) |
| 2026-10-21 | 350 (+42) | 365 (+42) | 371 (+42) |
| 2026-12-21 | 383 (+33) | 398 (+33) | 404 (+33) |

Les cinq premières dates ajoutent strictement le même nombre de seaux quelle que soit la résolution. C'est un artefact géométrique intéressant. Avec un échantillonnage toutes les 15 minutes, deux frames consécutives sont séparées d'environ **3.75° d'azimut** — plus grand que la plus fine des mailles testées. Chaque nouveau frame tombe donc dans un seau **différent**, peu importe la résolution. Le bucketing ne compresse rien tant que les trajectoires de deux dates ne se recouvrent pas.

La divergence apparaît à la 6ᵉ date, en septembre. La trajectoire repasse sur une région déjà couverte en mars. À 1°, les seaux sont larges et les nouveaux frames retombent souvent dans des seaux existants (+25 seulement). À 0.5°, les seaux étant plus fins, il y a moins de collisions (+46).

Et c'est ça qui donne la promesse d'amortissement. Après huit dates bien choisies sur une année, on ajoute 33 nouveaux seaux à la 8ᵉ date au lieu de 48 à la première. La 9ᵉ date ajouterait probablement une poignée de seaux. La 10ᵉ : aucun. **L'atlas converge.**

### Précision : combien on paie en erreur ?

On compare le masque stocké dans l'atlas (calculé au centre du seau) au masque exact d'une frame réelle (calculé à l'angle solaire précis). L'indicateur est le pourcentage de points en désaccord entre les deux masques — un XOR, en termes de bits.

| Résolution | Erreur moyenne | Médiane | 95ᵉ percentile | Maximum |
|---|---|---|---|---|
| 1°      | 0.38 % | 0.36 % | 0.60 % | 0.92 % |
| 0.75°   | 0.33 % | 0.31 % | 0.55 % | 0.57 % |
| 0.5°    | 0.26 % | 0.27 % | 0.45 % | 0.65 % |

Tous les chiffres sont bien sous la barre du pourcent. Passer de 1° à 0.5° divise l'erreur moyenne par ~1.5, pour un surcoût disque de 4 %. Mais même la version la plus grossière garde un masque correct à 99.6 % en moyenne — sur les frames les pires, elle reste à 99.1 %. À ce niveau, le choix de résolution a peu d'importance pratique.

## Le cas des soleils rasants : où se cache l'erreur ?

L'erreur moyenne cache des cas limites. En regardant les 8 pires frames du 18 avril 2026, deux pics se détachent : le matin tôt et le soir tard, quand le soleil est très bas sur l'horizon. Plus précisément, les deux moments où l'angle rasant génère des ombres qui balaient la tuile à grande vitesse :

- **08:15** : soleil à l'est (azimut 90°), altitude 14.9°
- **18:45** : soleil à l'ouest (azimut 269°), altitude 16.1°

À ces instants, une ombre bâtiment peut traverser plusieurs mètres de terrain en quelques minutes. Le seau d'atlas — qui représente ~2.5 minutes de temps solaire à 1° de résolution — a nécessairement raté cette transition. Le désaccord entre l'atlas et la référence exacte se concentre aux **bords d'ombre** : les pixels qui viennent juste de passer du soleil à l'ombre, ou l'inverse.

J'ai donc fait le calcul exact des deux frames avec un ray-trace CPU détaillé (référence sans approximation), puis comparé point par point avec les trois atlas. Voici la répartition spatiale des désaccords sur la tuile réelle.

<div id="viz-grazing-disagreement" style="width: 100%; margin: 2rem 0; border-radius: 6px; overflow: hidden; background: var(--bg2, #13151a); border: 1px solid var(--border, #1e2128);"></div>

Quelques observations à tirer de la carte :

- En référence CPU, les deux instants sont très asymétriques. À 08:15 le soleil rase l'est et la tuile est à 97 % dans l'ombre — seuls 885 points (3.4 %) reçoivent encore du soleil direct, essentiellement les façades est et les points très élevés. À 18:45, le soleil décline à l'ouest et 2 704 points (10.5 %) sont encore éclairés. La quantité d'ombre à franchir est très différente.
- Les désaccords ne sont pas aléatoires. Ils forment des **liserés fins** le long des transitions ombre/lumière — les contours projetés des bâtiments. À l'intérieur d'une ombre stable, atlas et CPU donnent les mêmes bits ; la divergence vit sur les bords.
- Les deux signes de l'erreur apparaissent : dans certaines zones l'atlas sur-estime (bâtiment pas encore dans l'ombre alors que CPU dit qu'il y est), dans d'autres il sous-estime (bâtiment que l'atlas considère encore ombré alors que le soleil vient de dépasser). C'est la signature d'un échantillonnage trop grossier sur une transition rapide.
- Enfin, l'alignement peut jouer un tour curieux. À 18:45, la maille 0.75° tombe par hasard à 0.03° seulement du vrai angle solaire (268.85° vs centre de seau à 268.88°), alors que 0.5° s'en écarte de 0.14°. Résultat : **0.75° bat 0.5°** sur cet instant précis. Plus fin ≠ toujours mieux — ce qui compte, c'est la distance entre l'angle réel et le centre du seau qui l'accueille.

## Le bilan conceptuel

Sans atlas, stocker une année complète de masques d'ombre à 15 minutes pour 250 tuiles coûterait environ **27 GB**. Avec l'atlas à 1°, 400 seaux par tuile, 16 KB par seau : **1.6 GB**, soit **17 fois moins**. Et la perte de précision est en-dessous du demi-pourcent sur le masque final.

Mais le vrai gain n'est pas la compression. L'atlas est calculé **une seule fois** par tuile. Chaque utilisateur qui demande un heatmap pour une date future — le 30 avril 2027, le 4 août 2029, le 12 février 2031 — tape dans les seaux déjà peuplés. Le coût GPU initial est amorti sur toutes les dates futures, passées, et même les dates demandées plusieurs fois de suite pour comparer deux ajustements de calibration.

## Et accessoirement : plus besoin de GPU en production

Conséquence directe et pas anecdotique : **le service qui sert les heatmaps n'a plus besoin de GPU du tout**. Le GPU n'intervient qu'à la phase de construction de l'atlas, qui peut tourner une fois sur une machine dédiée — la mienne, un runner CI, n'importe quel poste équipé. Une fois les seaux écrits sur disque, servir une requête, c'est lire un fichier et faire un OR de bitmasks. Du CPU générique, voire du serverless.

Ça change la nature du déploiement. Pas de driver Vulkan à installer sur le serveur, pas d'instance GPU à louer à l'heure, pas de cauchemar de containerisation avec passthrough du device. Le runtime devient un boîtier banal qui sert des fichiers binaires. C'est l'autre vertu cachée du précalcul indexé : il **dépouille la prod** du matériel coûteux qui a servi à construire la donnée.

C'est l'essence du trade-off : on échange un calcul coûteux mais **répété** contre un stockage modeste et **partagé**. Si l'espace des entrées est petit et prévisible, et si les sorties sont réutilisables, alors le précalcul indexé devient le bon algorithme — qu'il s'agisse de casser un hash ou de projeter l'ombre d'un noyer sur une terrasse.

<!-- Leaflet + proj4 loaded by grazing-disagreement.js -->
<script src="/assets/js/grazing-disagreement.js"></script>
