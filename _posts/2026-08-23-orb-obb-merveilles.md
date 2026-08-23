---
layout: post
title: "ORB dessinait mieux. Je l'ai remplacé quand même."
tags: [project, computer-vision, machine-learning, performance, board-games]
header_image: /assets/img/7wd-vote-orb-echec.jpg
unlisted: true
permalink: /blog/preview/4d7a91c2/orb-obb-merveilles
sitemap: false
---

Dans [le scoreur de 7 Wonders Duel](/blog/preview/c84f21a7/7-wonders-un-seul), une merveille n'est construite que si une carte est glissée dessous. Une fois la merveille remise à l'endroit, cette carte dépasse par son bord droit.

Il me fallait donc répondre à une question très simple : **où est le bord droit ?**

La première réponse était excellente. Tellement excellente que je l'ai remplacée.

## ORB : précis, lent et parfois muet

J'avais le scan de référence de chaque merveille. Avec ORB, je pouvais chercher les mêmes points caractéristiques dans la photo, calculer une homographie et projeter les quatre coins de la carte.

Quand le recalage réussissait, le résultat était remarquable : **527 quadrilatères vérifiés, 527 corrects**. Pas une approximation rectangulaire. Le contour de la carte, avec sa perspective et ses coins dans le bon ordre.

Cet ordre comptait. Il désignait le bord droit, donc la fine bande dans laquelle un classifieur devait décider s'il voyait une carte ou la table.

Le problème tenait ailleurs : **1 334 ms par merveille**, soit presque un quart du pipeline sur le téléphone. Et, sur certains recadrages pourtant correctement identifiés, ORB ne produisait aucun quadrilatère.

ORB ne se trompait presque jamais. Il faisait plus gênant : il ne répondait pas.

## Demander directement une boîte orientée

Le détecteur YOLO que j'utilisais déjà rendait des boîtes alignées sur l'écran. Très bien pour dire où se trouve une carte, beaucoup moins pour savoir où est son bord droit lorsqu'elle est photographiée de biais.

YOLO-OBB ajoute précisément ce qui manquait : une boîte **orientée**. Il localise la merveille et donne son inclinaison dans la même passe. Plus besoin de retrouver les points du scan de référence carte par carte.

Sur **535 annotations manuelles**, son rappel atteignait **99,4 %**, contre **99,2 %** pour l'ancien détecteur à boîtes droites. Le contour restait un peu moins fin que celui d'ORB : l'écart médian était de **11,7 pixels**, et les merveilles construites ressortaient souvent légèrement plus larges parce que le détecteur avalait parfois un bout de la carte glissée dessous.

C'était un échange que j'étais prêt à faire. Un contour parfait qui n'arrive pas jusqu'au reste du pipeline reste moins utile qu'un contour légèrement plus lâche produit avec la détection.

Une fois l'OBB passé sur WebGPU, sa passe coûtait **412 ms par appel**. Et en utilisant son orientation pour ne lire chaque carte qu'une fois, l'étage merveilles est passé de **8,9 à 2,2 secondes**.

Évidemment, il restait un piège.

## Une boîte orientée ne sait pas où est sa tête

L'angle d'une boîte orientée vit sur 180°, pas sur 360°. Une carte à l'endroit et la même après un demi-tour forment exactement le même rectangle.

Pour localiser la merveille, aucun problème. Pour chercher une carte sous son bord droit, c'est plutôt contrariant : après un demi-tour, la droite est passée à gauche.

J'ai d'abord ajouté un petit modèle chargé de répondre « à l'endroit ou à l'envers ». Sur 545 cartes vérifiées, il s'est trompé **23 fois**. Seulement 4,2 %, mais toujours silencieusement : le pipeline inspectait ensuite le mauvais côté avec beaucoup de sérieux.

La TTA par rotation n'était pas une vraie réponse non plus. Présenter quatre rotations au classifieur permettait de retrouver le nom, pas de garantir que la rotation gagnante indiquait le bon bord.

J'ai fini par supprimer la question.

Le classifieur connaît maintenant chaque merveille dans les deux sens : douze identités à l'endroit, douze à l'envers, plus la classe « autre ». **24 + 1.** Il rend l'identité et l'orientation ensemble. Sur les images gardées hors entraînement, il a donné le bon sens **205 fois sur 205**.

Le petit modèle haut/bas, sa relecture de secours et les quatre rotations ont disparu. Le meilleur étage du pipeline est parfois celui qu'on n'exécute plus.

## Le vote a changé de participants

La décision « construite ou non » reste un vote à trois, parce que chaque indice a son angle mort :

1. le CNN de construction lit la bande rectifiée à droite du quadrilatère OBB ;
2. un ancien filet de sécurité sonde les marges de la boîte YOLO ;
3. le détecteur cherche le bandeau de la carte qui dépasse.

Le troisième votant ne voit rien lorsque la carte est glissée face cachée.

![Des merveilles construites avec une carte glissée face cachée, sans bandeau visible](/assets/img/7wd-vote-bandeau-face-cachee.jpg)

Le deuxième peut regarder un peu trop loin et attraper la voisine.

![La marge d'une merveille recouvre la carte voisine et produit un faux positif](/assets/img/7wd-vote-yolo-voisin.jpg)

Ce deuxième votant est d'ailleurs candidat à la retraite. Il avait été ajouté pour secourir les absences d'ORB. Sur le dernier test d'ablation, le CNN appliqué au bord OBB fait aussi bien que le vote complet. Je ne l'ai pas encore supprimé : lorsque presque toutes les variantes réussissent tous les cas connus, le test ne permet plus vraiment de les départager. [C'est un autre piège, celui du benchmark trop facile](/blog/preview/9b3e6f40/entrainer-sans-se-mentir).

ORB suit le même chemin. Il ne subsiste que dans l'ancien repli OCR ; le déploiement normal exige désormais OBB au démarrage et ne rebascule pas silencieusement sur ORB si le modèle manque.

Je suis donc passé d'un contour exact à une boîte légèrement moins précise, puis j'ai déplacé une partie de la précision dans les décisions prises autour. Le pipeline est plus rapide et ne bloque plus sa voie normale quand ORB refuse un recalage. Surtout, il pose moins de questions séparées.

La perfection locale avait de très beaux coins. Le produit, lui, avait surtout besoin qu'ils arrivent.
