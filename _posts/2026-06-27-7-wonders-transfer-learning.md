---
layout: post
title: "Le transfer learning a enfoncé un plafond que je croyais physique"
tags: [project, computer-vision, machine-learning, ai, board-games]
unlisted: true
permalink: /blog/preview/c7a0f6e2/7-wonders-transfer-learning
sitemap: false
---

*Troisième et dernier volet, après [« ça marche sur ma table »](/blog/preview/6e5a7cf3/7-wonders-duel-score-photo) et [« généraliser sans casser »](/blog/preview/b2e84d15/7-wonders-generaliser).*

Dans mon scoreur photo de *7 Wonders Duel*, les pièces sont le maillon faible. J'avais déjà [lâché du lest dans l'épisode précédent](/blog/preview/b2e84d15/7-wonders-generaliser) : une petite forêt aléatoire pour distinguer une pièce d'un faux positif. Mais lire la **dénomination** — 1, 3 ou 6 — restait une heuristique de couleur du métal.

J'avais mesuré, et conclu, que c'était un plafond : un modèle sur mes features à la main faisait 0,72 contre 0,73 pour l'heuristique. Une égalité. Couleur du métal confondue par la lumière, point final. « Plafond physique, circulez. »

J'avais tort. Et c'est la mesure qui l'a prouvé.

## Pourquoi mon raisonnement était à moitié faux

Ce plafond ne valait que pour les méthodes basées sur la **couleur**. Le vrai discriminant — le **chiffre imprimé sur la pièce** — était toujours là. Je l'avais écarté en le déclarant « illisible à l'échelle du jeu ». Vrai pour un OCR ou une corrélation de gabarit. Faux pour le bon outil. Et le bon outil, c'est le *transfer learning*.

## Le transfer learning, expliqué simplement

Entraîner un réseau de vision **à partir de zéro** demande des dizaines de milliers d'images. Moi, j'ai 111 pièces étiquetées. Sans surprise, un petit réseau entraîné from scratch sur ces 111 images fait **0,47** — pire que l'heuristique. Il n'a pas de quoi apprendre, en partant de rien, ce que c'est que « voir ».

Le transfer learning contourne ça. On prend un réseau **déjà entraîné** sur des millions d'images génériques — qui a donc appris les primitives visuelles réutilisables : contours, courbes, textures, formes — et on réutilise ce savoir-voir en ne ré-entraînant qu'une fine couche finale sur nos pièces.

L'analogie : pour qu'un photographe professionnel reconnaisse un nouveau type de pièce, on ne lui réapprend pas ce qu'est la lumière, un contour, un chiffre. Il sait déjà voir. On lui montre les trois modèles, il généralise. Le réseau pré-entraîné, c'est ce photographe : on gèle les couches profondes, on n'apprend que la décision finale « 1, 3 ou 6 ».

Concrètement : un ResNet18 pré-entraîné sur ImageNet, corps gelé, seuls le dernier bloc et une tête à trois sorties ré-entraînés sur les recadrages de pièces.

## Le résultat — et la précaution anti-fuite

| Méthode | Accuracy | argent « 1 » | or « 3 » | cuivre « 6 » |
|---|---|---|---|---|
| heuristique couleur | 0,71 | 10/26 | 59/64 | 10/21 |
| CNN from scratch | 0,47 | — | — | — |
| ResNet18 (transfer) | **0,91** | 19/26 | 64/64 | 18/21 |

Le détail qui compte : j'ai mesuré en *leave-one-photo-out* (0,94), puis en *leave-one-game-out* (0,91). Pourquoi les deux ? Parce que plusieurs photos viennent de la même partie — même lumière, mêmes pièces physiques. Laisser une *photo* de côté, c'est risquer que le modèle ait vu « cette pièce sous cette lumière » à l'entraînement : une fuite. Laisser une **partie entière** de côté mesure la vraie généralisation. Le score ne tombe que de 0,94 à 0,91 — c'est réel, pas de la triche. Et il corrige précisément les angles morts de l'heuristique : l'argent que la lumière chaude désature, le cuivre.

Les couches conv pré-entraînées **lisent réellement le chiffre embossé** — exactement le signal que j'avais déclaré inatteignable.

## Le GPU ne sert pas (encore)

Entre-temps, cette machine a gagné un GPU Intel Arc. Alors, est-ce qu'il aide ? Pour **entraîner** ce modèle : non. 111 images, ça s'entraîne en quelques minutes sur CPU. Le facteur limitant n'est pas le calcul, c'est la **donnée**. Là où l'Arc paiera, c'est à l'inférence : on entraîne hors-ligne, on exporte en ONNX, on exécute via onnxruntime — déjà une dépendance du projet pour l'OCR, donc toujours pas de torch dans le pipeline qui tourne. Le franchissement de l'entraînement ne fait pas entrer de lourdeur en prod.

## La méthode est l'invariant, pas la ligne

La ligne « pas de modèle entraîné » a encore bougé, plus loin cette fois : d'une petite forêt sur features à la main à un vrai CNN pré-entraîné. Mais la méthode, elle, n'a pas changé d'un iota : mesurer d'abord, vérifier l'absence de fuite, ne franchir la ligne que quand les chiffres l'exigent. J'avais même écrit « plafond physique » noir sur blanc.

Le plus dur, dans un projet assisté par modèles, ce n'est pas d'avoir des convictions. C'est d'accepter qu'une mesure les contredise.
