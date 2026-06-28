---
layout: post
title: "Généraliser sans casser : mon pipeline a tenu — sauf les pièces"
tags: [project, computer-vision, opencv, machine-learning, board-games]
unlisted: true
permalink: /blog/preview/b2e84d15/7-wonders-generaliser
sitemap: false
---

*Deuxième volet. Dans [le premier épisode](/blog/preview/6e5a7cf3/7-wonders-duel-score-photo), mon scoreur photo de 7 Wonders Duel marchait — jusqu'à ce que je pose le jeu sur une serviette de plage et que tout s'effondre.*

C'est là que le vrai travail commence : durcir chaque détecteur pour qu'il soit **invariant à la surface**, sans casser ce qui marchait déjà sur le bois.

## Des ancres de test, pas de la foi

Avant de toucher à quoi que ce soit, j'ai figé deux parties réelles — une sur bois, une sur serviette — en **ancres de test**. Les cibles pas encore atteintes sont des `xfail` qui passeront au vert au fil du durcissement. Règle absolue : tout correctif doit garder les deux ancres vertes. Plus tard j'en ai ajouté une troisième, la plus dure : une partie en extérieur, sur l'herbe, lumière chaude de fin de journée.

Sans ce garde-fou, « améliorer » sur une photo veut juste dire « casser sur une autre ». Avec, chaque commit est une dette ou un gain, jamais un pari.

## Les guildes, par contenu plutôt que par couleur de table

Le détecteur de guildes s'appuyait sur le « strip violacé » du bandeau. Fragile : sous une autre lumière, un dos de carte ou une bande militaire rouge passaient pour des guildes.

Je l'ai remplacé par le pattern qui avait sauvé les merveilles : le strip violet **propose** (rappel), le recalage de l'art de la guilde **vérifie** par corrélation (précision, NCC ≥ 0,5). Plus une porte de « cœur magenta » qui sépare une vraie bande de guilde (magenta carton) d'une bande brune sous lumière chaude et d'un dos de carte lavande qui se faisait passer pour un magistrat. Et la paire magistrats/marchands, que le recalage ne sait pas distinguer, est tranchée par la couleur de remplissage de l'icône.

Ces durcissements généralisent parce qu'ils s'ancrent sur le **contenu** — l'art, la géométrie recalée — pas sur la surface. Le « pas de modèle entraîné » tient. Toujours zéro neurone.

## Les pièces : le mur que le classique n'a pas franchi

Et puis il y a les pièces. Sur une surface variable, un pip de carte, une touffe d'herbe ou un pli de tissu est *métriquement identique* à une pièce : un disque rond de la bonne taille. J'ai essayé de couper les faux positifs en pur classique, et je l'ai mesuré — deux fois plutôt qu'une, parce que les pièges étaient instructifs.

- **NCC contre des gabarits** : ne sépare pas. Les vraies pièces scorent 0,03–0,31, les faux positifs 0,01–0,26. La médiane des faux positifs est *plus haute* que certaines vraies pièces.
- **Signature métallique / variance de teinte** : semblait parfaite sous lumière chaude… falsifiée par une photo en lumière froide, où l'argent lit une variance de 51 et le cuivre de 60. Le signal était confondu par l'éclairage, pas par pièce-vs-pas-pièce. Un piège de sur-apprentissage attrapé en vérifiant les photos froides.
- **Une règle codée à la main** : sur 669 candidats labellisés, la meilleure feature seule plafonne à 0,47 de précision, et combiner les portes existantes ne fait pas mieux. La frontière est non-linéaire.

## Le franchissement — au minimum

Aucune feature à la main ne sépare proprement. J'ai franchi la ligne « pas d'entraînement » — pour ce seul détecteur, et au strict minimum.

Pas un CNN sur pixels. Une **petite forêt aléatoire** — quelques kilo-octets, entraînée en secondes, sans GPU — sur les *mêmes features classiques*. Précision 0,80, recall 0,67 en *leave-one-photo-out* : le double de précision de la règle codée à la main. Je garde l'extraction de features explicable ; j'ajoute juste un combineur appris de la frontière non-linéaire.

Le reste tient en garde-fous. Mesure honnête : *leave-one-photo-out*, jamais *leave-one-crop-out* — les pièces d'une même photo sont corrélées, le vrai N c'est le nombre de photos. Borné : la forêt post-filtre les détections et se charge gracieusement (pas de modèle → le détecteur tourne comme avant). Et un outil de labeling humain-dans-la-boucle, avec *active learning* : l'outil affiche sa prédiction pour que je corrige ses erreurs en priorité.

## La ligne n'était pas un dogme

Voilà l'enseignement que je retiens. Le « pas de modèle entraîné » a tenu pour tout — sauf les pièces. Et c'est *parce que je l'ai mesuré* que j'ai su exactement où franchir la ligne, et avec quoi : le minimum d'apprentissage, sur des données que j'ai labellisées moi-même, borné pour ne jamais casser ce qui marchait.

La ligne n'a jamais été un principe moral. C'était une hypothèse, tenue tant que les mesures la portaient, déplacée d'un cran minimal quand elles ont cessé. La discipline, ce n'est pas de refuser le ML. C'est de refuser de le sortir avant que les chiffres ne l'exigent.

*Suite et fin : [le jour où le transfer learning a enfoncé un plafond que je croyais physique](/blog/preview/c7a0f6e2/7-wonders-transfer-learning).*
