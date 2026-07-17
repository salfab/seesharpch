---
layout: post
title: "L'IA n'est pas magique : quand je l'utilise, quand je m'en passe (leçons d'un compteur de points)"
tags: [project, computer-vision, machine-learning, ai, board-games]
header_image: /assets/img/7-wonders-ai-pipeline-hero-v2.png
unlisted: true
permalink: /blog/preview/c84f21a7/7-wonders-un-seul
sitemap: false
---

L'« IA », c'est devenu le buzzword de la saison 2025-2026. On le colle sur tout, avec cette idée d'une boîte noire qui *comprend*. Nous, un peu moins.

C'était le moment de démystifier — pas en lisant, en construisant.

Votre mission, Jim, si vous l'acceptez : compter les points d'une partie de 7 Wonders Duel à partir d'une ou deux photos. Sans calculatrice, sans calcul mental et, si possible, avant que la bière tiédisse.

Mais coller un autocollant « boosté à l'IA » sur le projet aurait été un peu facile. J'ai commencé avec des règles écrites à la main. Ensuite, j'ai regardé où elles cassaient. Et seulement là, j'ai sorti un modèle.

## Premier essai : faire sans IA

La vision par ordinateur classique, c'est rassurant. On écrit soi-même les règles.

Un cercle assez rond et de la bonne taille ? Probablement une pièce. Une bande colorée en haut d'une carte ? On peut tenter d'en déduire sa couleur. Pas de dataset, pas d'entraînement et, quand ça se trompe, on comprend généralement pourquoi.

Voilà ce qu'il faut lire sur une fin de partie : des merveilles, des cartes glissées à moitié dessous, des jetons, des pièces et plusieurs piles de cartes dont on ne voit parfois presque plus que le haut.

![Une fin de partie de 7 Wonders Duel sur une table en bois](/assets/img/7-wonders-duel-score-photo.jpg)

Sur ma table, avec une bonne lumière, ça marchait très bien. Je repérais les cartes, je lisais leurs couleurs, je comptais les pièces. Là, tu te dis que t'as plié le game avec une POC d'une heure et qu'on peut retourner siroter des blue lagoons sur la plage.

![Un tableau de joueur avec les détections dessinées par-dessus](/assets/img/7wd-vue-annotee.jpg)

Puis j'ai posé le jeu sur une serviette de plage, dehors, au soleil couchant.

![La même reconnaissance sur une serviette de plage, avec beaucoup de fausses détections](/assets/img/7wd-serviette.jpg)

Des pièces apparaissaient dans l'herbe. Des jetons devenaient des pièces. Un bout de plateau obtenait une promotion surprise au rang de guilde.

Le programme faisait pourtant exactement ce que je lui avais demandé. Le problème, c'est que la vraie vie ne ressemble pas toujours à ma table de test.

Je pouvais ajouter une règle pour la plage, une autre pour une table sombre, puis une troisième pour les photos prises de biais. La recette idéale pour améliorer un cas et en casser deux autres.

J'ai donc mis de côté des parties réelles qui ne servent pas à l'entraînement. Elles permettent de vérifier qu'une modification améliore le résultat de bout en bout. Pour les lecteurs spécialisés, je réserve aussi des recadrages aux tests.

Ce n'est pas un benchmark académique. C'est juste ce qui m'évite de garder une idée parce qu'elle « a l'air meilleure » sur la photo qui l'a déclenchée.

## Pourquoi le même chiffre disparaît sur la photo complète

Un résultat me paraissait franchement incohérent.

Sur des photos rapprochées, les chiffres imprimés sur les cartes étaient bien reconnus. Sur les photos d'ensemble, les mêmes chiffres devenaient presque illisibles. Pourtant, la photo du téléphone était nette. En zoomant dedans, moi, je voyais parfaitement le numéro.

La carte n'avait pas changé. Alors pourquoi le lecteur y arrivait-il dans un cas et pas dans l'autre ?

Parce qu'un modèle ne reçoit pas directement les 12 ou 48 mégapixels de la photo originale. L'image est ramenée à une taille fixe. Sur une vue d'ensemble, toute la table doit rentrer dans ce cadre. Une carte devient petite et son chiffre finit sur une poignée de pixels.

Sur un gros plan, le même chiffre occupe beaucoup plus de place après redimensionnement. Le modèle ne voit donc pas réellement la même image.

![La photo complète est réduite pour la détection, puis la zone utile est redécoupée dans l'image originale afin de retrouver les détails](/assets/img/7-wonders-resolution-pipeline.png)

Cette observation a dicté le pipeline. Un détecteur de type YOLO cherche les objets sur une version réduite de la photo. Ensuite, chaque zone est redécoupée dans l'original. Un classifieur reçoit une petite vignette, mais avec la meilleure résolution disponible.

Le premier étage répond à « où ? ». Le second à « quoi ? ».

Cette séparation couvre presque tous les objets du jeu. Une pièce, un laurier ou une bannière peut être lu dans son cadre, puis oublié. Pas les merveilles.

Les merveilles posent une autre question. Une carte peut être glissée dessous, et c'est justement ce qui indique qu'elle est construite. Il ne suffit donc pas de savoir qu'une merveille se trouve « à peu près ici ». Il faut connaître l'emplacement exact de ses bords et son angle, puis regarder ce qui dépasse du bon côté.

J'ai testé la version simple : remplacer le recalage précis par la boîte du détecteur. Le verdict « construite ou non » a basculé dans **19 cas sur 50**. Sur une photo prise de biais, les dix merveilles construites sont devenues dix merveilles non construites.

Pour l'instant, les rôles sont bien séparés : YOLO propose la zone, l'OCR lit l'identité, puis le recalage ORB/RANSAC retrouve la pose exacte et le NCC vérifie qu'elle tient.

Une boîte suffit pour lire ce qui est dedans. Pour savoir ce qui est glissé dessous, il faut la géométrie.

## Commencer avec des calques

Une fois les objets recadrés, je n'ai toujours pas entraîné de réseau. J'ai commencé par les comparer à des images de référence.

Pour les merveilles, ça fonctionne plutôt bien. Elles sont grandes, généralement visibles en entier et assez faciles à recaler malgré la perspective. Pour les chiffres des lauriers, j'utilisais une variante : transformer le chiffre en silhouette, puis chercher le gabarit de 1 à 7 qui se superposait le mieux.

Ce lecteur n'était pas parfait, mais il fonctionnait tout de suite. Surtout, il pouvait préannoter mes images. Au lieu de saisir chaque valeur depuis zéro, je corrigeais une première proposition.

Ce n'était pas une fausse piste. C'était un bon échafaudage.

Puis je suis arrivé aux guildes.

Les guildes sont les cartes violettes. Dans une vraie partie, elles sont empilées et on ne voit souvent que leur bandeau supérieur. J'ai appliqué la même méthode : découper le bandeau, puis le comparer aux références.

Résultat : **18 %** de bonnes réponses.

La résolution n'était pas en cause. Les bandeaux se ressemblaient simplement trop : une grande zone violette identique partout, avec un petit symbole qui change dans un coin. La comparaison donnait du poids à tous les pixels. Le violet écrasait donc le seul détail intéressant.

J'aurais pu isoler le symbole, corriger la rotation, compenser la perspective et ajouter encore quelques rustines. À ce stade, j'aurais surtout écrit à la main ce qu'un classifieur pouvait apprendre à partir d'exemples.

J'ai entraîné un ResNet18 sur des vignettes déjà cadrées. Évalué en laissant chaque partie à son tour hors de l'entraînement, le score est passé de **18 % (16/88) à 91 % (80/88)**.

Ce n'est pas la preuve que l'IA gagne toujours. C'est juste le signe qu'ici, comparer des pixels répondait mal à la question.

## Réutiliser la même mécanique

Une fois ResNet18 en place pour les guildes, garder un lecteur différent pour chaque type d'objet avait de moins en moins de sens.

Le matcher de lauriers avait déjà fait le plus ingrat : amorcer les annotations. J'ai repris ses prédictions, je les ai vérifiées, puis j'ai entraîné un ResNet18 sur **243 recadrages** de chiffres de 1 à 7.

Les deux lecteurs ont été comparés sur le même jeu de test stratifié de **49 images** :

| Lecteur | Précision |
|---|---:|
| Gabarits par recouvrement IoU | **67,3 % — 33/49** |
| ResNet18 par *transfer learning* | **95,9 % — 47/49** |

La différence s'est aussi vue sur une vraie photo d'ensemble inclinée. L'ancien lecteur retrouvait neuf cartes pour un total de **22 points**. ResNet18 en lisait treize et arrivait à **44 points** : le total vérifié à la main.

Cette fois, le modèle n'était pas seulement plus pratique à maintenir. Il était nettement meilleur sur le même test.

Le matcher a quand même servi à fabriquer les données de son remplaçant. Une technique peut être utile sans finir dans la version de production.

Les pièces ont suivi le même chemin, avec une erreur différente au départ.

Pour distinguer les valeurs 1, 3 et 6, ma première version regardait surtout la couleur du métal. Ça marchait jusqu'au moment où une pièce dorée devenait brune ou qu'une argentée prenait un reflet jaune. Sur 111 pièces issues de cinq parties : **71 %**.

J'avais conclu que la photo était trop instable. En réalité, je regardais le mauvais indice.

La valeur est embossée sur la pièce. Le relief, les contours et les ombres changent avec l'angle, mais ils restent plus fiables que la couleur apparente. Avec la même recette de *transfer learning*, le score est passé à **91 %** en laissant chaque partie à son tour hors de l'entraînement.

Je n'ai pas appris à un réseau à voir depuis zéro. Un ResNet18 pré-entraîné sait déjà extraire des bords, des courbes et des textures. Je lui apprends seulement à associer ce vocabulaire visuel à « 1 », « 3 » ou « 6 ».

## Plus de données, parfois moins de résultats

Quand un modèle rate, le réflexe est de lui donner plus d'images. Encore faut-il qu'elles ressemblent au vrai problème.

Mon détecteur reconnaissait mal les cartes empilées. J'ai fabriqué des exemples avec des cartes bien étalées, faciles à annoter. Les résultats ont empiré : dans une vraie partie, les cartes ne sont justement jamais rangées comme ça.

J'ai refait les photos avec les cartes empilées par couleur, comme en fin de partie.

![Des cartes empilées par couleur, avec seulement leur bandeau supérieur visible](/assets/img/7wd-cartes-empilees.jpg)

Cette fois, le nombre de faux positifs a été divisé par deux. Sur une couleur que le détecteur ratait souvent, **sept photos** prises dans la bonne disposition ont fait passer le repérage de **71 % à 99 %**.

Pas sept mille. Sept.

L'expérience inverse a été encore plus claire. La classe « 7 » des lauriers ne comptait que onze exemples. J'ai tenté de compenser avec du sur-échantillonnage et des rotations synthétiques. La précision est passée de **0,96 à 0,78**.

Revert.

Le modèle confond encore parfois un « 7 » avec un « 3 ». Le vrai levier n'est pas une nouvelle pirouette dans le code. Ce sont de vrais « 7 » photographiés dans de nouvelles parties.

## Une ligne de code peut encore gagner

Introduire des modèles n'a pas rendu les règles classiques inutiles.

Le système proposait parfois un jeton sur une photo qui n'en contenait aucun. Les vrais dépassaient **93 %** de similarité ; les faux restaient sous **91 %**. Un seuil a suffi. Aucun nouvel entraînement.

Autre cas : certains jetons de progrès contiennent eux-mêmes une couronne de lauriers. Visuellement, c'est bien un laurier avec un chiffre. Le lecteur avait donc de bonnes raisons de l'accepter, puis de compter ses points deux fois.

La correction a été géométrique : si le centre du laurier tombe dans le disque d'un jeton déjà détecté, il appartient au jeton et je l'écarte.

L'apparence était ambiguë. La position ne l'était pas.

## Recommencer, mais pas de zéro

Le chantier actuel sur les merveilles rend cette boucle très concrète.

Au départ, l'OCR était le *low-hanging fruit*. Il savait lire un nom dès le premier jour, sans dataset et sans entraînement. Il était lent — plusieurs secondes par photo — et dépendait du texte imprimé, mais il permettait au reste du pipeline d'avancer. À ce moment-là, c'était largement suffisant.

Pendant qu'il faisait le travail, les photos vérifiées se sont accumulées : d'autres téléphones, d'autres lumières, d'autres angles. J'ai maintenant assez de matière pour tenter l'étape suivante : améliorer la détection des régions d'intérêt, puis reconnaître les merveilles avec un détecteur appris sans repasser par l'OCR.

L'essai est en cours. S'il tient face aux parties mises de côté, l'OCR pourra sortir du pipeline. Sinon, il restera. Le benchmark décidera.

Ce ne sera pas la preuve que l'OCR était un mauvais choix. Au contraire : il aura permis de démarrer sans données et de récolter celles qui rendent son remplacement possible.

L'annotation elle-même est assistée : le système actuel place ses boîtes et propose ses catégories. Je corrige ce qui est faux, j'ajoute ce qu'il a raté, puis seulement l'image rejoint les données d'entraînement. Le modèle prépare une proposition ; il ne valide pas sa propre réponse.

Un peu comme dans le jeu vidéo *Hades* : on y tente de s'échapper des Enfers. Quand on échoue — et ça arrive souvent — on repart du début. Mais pas tout à fait les mains vides : les ressources ramassées pendant le dernier *run* permettent de débloquer de petites améliorations permanentes. Chaque tentative prépare la suivante.

Le scoreur suit la même logique. Une photo ne change pas le modèle en direct. Une fois vérifiée, elle fournit de la matière pour entraîner, mesurer puis déployer la version suivante.

Chaque partie fournit le loot de la prochaine build.
