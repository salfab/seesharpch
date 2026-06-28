---
layout: post
title: "Le transfer learning a enfoncé un plafond que je croyais physique"
tags: [project, computer-vision, machine-learning, ai, board-games]
unlisted: true
permalink: /blog/preview/c7a0f6e2/7-wonders-transfer-learning
sitemap: false
---

<!-- a3:intro -->
*Troisième volet, après [« ça marche sur ma table »](/blog/preview/6e5a7cf3/7-wonders-duel-score-photo) et [« généraliser sans casser »](/blog/preview/b2e84d15/7-wonders-generaliser).*

J'avais écrit, noir sur blanc, dans mes propres notes : *plafond physique, circulez.* J'avais tort — et c'est une mesure qui me l'a mis sous le nez.

Le contexte : les pièces sont restées le maillon faible de mon scoreur. J'avais déjà [lâché du lest dans l'épisode précédent](/blog/preview/b2e84d15/7-wonders-generaliser) (une petite forêt pour séparer pièce et non-pièce), mais lire la **valeur** d'une pièce — 1, 3 ou 6 — reposait encore sur la couleur du métal. J'avais testé un modèle là-dessus : 0,72 contre 0,73 pour l'heuristique. Une égalité. La couleur du métal est confondue par la lumière, fin de l'histoire, on n'ira pas plus loin.

Sauf que je m'étais trompé d'arme.

<!-- a3:demi-faux -->
## Pourquoi mon raisonnement était à moitié faux

Ce plafond était réel — mais seulement pour les méthodes qui regardent la **couleur**. Or le vrai indice, le seul qui compte, était sous mon nez depuis le début : le **chiffre imprimé sur la pièce**. Je l'avais écarté d'un revers de main — « illisible à l'échelle du jeu ». Vrai pour un OCR ou un décalque de gabarit. Faux pour le bon outil. Et le bon outil, cette fois, c'était le *transfer learning*.

<!-- a3:explain -->
## Le transfer learning, en deux mots (non-techos bienvenus)

Entraîner un réseau de vision *à partir de rien* demande des dizaines de milliers d'images. Moi, j'ai 111 pièces étiquetées. Sans surprise, un réseau entraîné from scratch sur ces 111 images fait **0,47** — *pire* que l'heuristique. Il n'a pas de quoi apprendre, en partant de zéro, ce que c'est que « voir ».

Le transfer learning contourne ça avec une idée presque effrontée : on prend un réseau **déjà** entraîné sur des millions d'images génériques — il a appris, une fois pour toutes, les briques de base de la vision : contours, courbes, textures — et on réutilise ce savoir-voir. On ne ré-apprend qu'une fine couche tout au bout.

L'image que j'aime : pour qu'un **photographe professionnel** reconnaisse un nouveau type de pièce, on ne lui réexplique pas la lumière, les contours, les chiffres. Il sait déjà voir. On lui montre les trois modèles, et il généralise. Le réseau pré-entraîné, c'est ce photographe : on gèle son œil, on ne lui apprend que la décision « 1, 3 ou 6 ».

<!-- a3:resultat -->
## Le résultat — et la parano anti-triche

| Méthode | Exactitude | argent « 1 » | or « 3 » | cuivre « 6 » |
|---|---|---|---|---|
| heuristique couleur | 0,71 | 10/26 | 59/64 | 10/21 |
| réseau *from scratch* | 0,47 | — | — | — |
| **ResNet18 (transfer)** | **0,91** | 19/26 | 64/64 | 18/21 |

Le détail qui compte, c'est *comment* je l'ai mesuré. D'abord en laissant une photo de côté (0,94), puis en laissant une **partie entière** de côté (0,91). Pourquoi les deux ? Parce que plusieurs photos viennent de la même partie — même lumière, mêmes pièces. Cacher une seule photo, c'est risquer que le modèle ait déjà vu « cette pièce sous cette lumière » : une fuite déguisée en réussite. Cacher toute une partie, c'est la vraie mesure. Que le score ne tombe que de 0,94 à 0,91 me dit que ce n'est pas de la triche — et que le modèle corrige *pile* les angles morts de l'heuristique : l'argent que la lumière chaude désature, le cuivre. Les couches pré-entraînées **lisent vraiment le chiffre embossé** — celui que j'avais déclaré inatteignable.

> **Spoiler.** Depuis, en photographiant des pièces sous bien plus de conditions — lumières, fonds, ombres portées — ce 0,91 est monté à **0,98**. La morale (« plus de *vraies* données battent à peu près tout ») mérite son propre épisode.

<!-- a3:gpu -->
## Et le GPU dans tout ça ?

Entre-temps, la machine a hérité d'un GPU Intel Arc. Alors, est-ce qu'il a aidé ? Pour entraîner *ce* modèle : **non**. 111 images, ça s'entraîne en quelques minutes sur le processeur. Le facteur limitant n'a jamais été le calcul — c'est la *donnée*.

> **Re-spoiler.** Vrai sur 111 images. Devenu faux dès que le jeu a grossi : quand il a fallu ré-entraîner en boucle sur des milliers d'exemples — douze fois de suite, pour mesurer sans fuite — l'Arc s'est brusquement mis à servir. Le problème était passé de *data-bound* à *compute-bound* sans prévenir. Note à moi-même : reposer la question « ai-je besoin d'un GPU ? » à chaque changement d'échelle, pas une fois pour toutes.

Et un point qui me tient à cœur : entraîner et inférer sont **découplés**. On entraîne où c'est rapide (GPU ou non), on **exporte le modèle en ONNX** — un format neutre, les poids ne sont que des nombres — et on l'exécute en production via un petit moteur déjà présent pour l'OCR. Résultat : *toujours pas* de grosse pile d'entraînement dans le pipeline qui tourne. Le franchissement reste cantonné à l'atelier.

<!-- a3:morale -->
## La méthode est l'invariant, pas la ligne

La fameuse ligne « pas de modèle entraîné » a encore bougé, plus loin que jamais : d'une petite forêt sur des features faites main à un vrai réseau pré-entraîné. Mais la *méthode*, elle, n'a pas bronché : mesurer d'abord, traquer la fuite, ne franchir la ligne que quand les chiffres l'exigent. J'avais quand même écrit « plafond physique » noir sur blanc.

Le plus dur, dans un projet assisté par des modèles, ce n'est pas d'avoir des convictions. C'est d'accepter qu'une mesure les contredise — et de la remercier.

*Le prochain mur n'est plus de **lire** les pièces. C'est de les **voir** : les trouver dans une photo, sans en inventer dans les plis d'une serviette. Mais ça, c'est une autre histoire.*
