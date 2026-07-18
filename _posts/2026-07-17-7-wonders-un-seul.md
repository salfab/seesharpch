---
layout: post
title: "7 Wonders Duel : un scoreur inutilement complexe, assisté par l'IA et donc indispensable"
tags: [project, computer-vision, machine-learning, ai, board-games]
header_image: /assets/img/7-wonders-ai-pipeline-hero-v3.png
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

J'ai donc mis de côté des parties réelles qui ne servent jamais à l'entraînement. Avant de garder une modification, je la passe sur ces mêmes photos. Ce n'est pas un benchmark académique. C'est juste ce qui m'évite de choisir une idée parce qu'elle « a l'air meilleure » sur le cas qui l'a déclenchée.

## Pourquoi le même chiffre disparaît sur la photo complète

Un résultat me paraissait franchement incohérent.

Sur des photos rapprochées, mes premières tentatives lisaient bien les chiffres imprimés sur les cartes. Sur les photos d'ensemble, les mêmes chiffres devenaient presque illisibles. Pourtant, la photo du téléphone était nette. En zoomant dedans, moi, je voyais parfaitement le numéro.

La carte n'avait pas changé. Alors pourquoi le modèle y arrivait-il dans un cas et pas dans l'autre ?

Parce que le modèle ne recevait pas directement les 12 ou 48 mégapixels de la photo. L'image était ramenée à une taille fixe. Sur une vue d'ensemble, toute la table devait rentrer dans ce cadre. La carte devenait minuscule et son chiffre finissait sur une poignée de pixels.

Sur un gros plan, le même chiffre conservait beaucoup plus de détails. Il n'y avait donc pas le même nombre de pixels à analyser, même si les deux images paraissaient parfaitement nettes sur le téléphone.

![La photo complète est réduite pour la détection, puis la zone utile est redécoupée dans l'image originale afin de retrouver les détails](/assets/img/7-wonders-resolution-pipeline.png)

J'ai donc coupé le travail en deux. Un premier étage cherche **où** se trouve l'objet sur une version réduite de la scène. Ensuite, l'application retourne dans la photo originale et redécoupe cette zone en pleine résolution. Le second étage doit seulement décider **ce que** contient la vignette.

Ça retrouve les détails sacrifiés pendant le redimensionnement. Ça ne dit pas encore comment les lire.

## Commencer avec des calques

J'ai commencé par la méthode la plus simple : comparer chaque vignette à une image de référence.

Pour les chiffres des lauriers, je transformais le chiffre en silhouette, puis je cherchais le gabarit de 1 à 7 qui se superposait le mieux. Ce n'était pas parfait, mais ça fonctionnait immédiatement. Et comme le lecteur proposait déjà une valeur, je pouvais corriger ses annotations au lieu de tout saisir depuis zéro.

Puis je suis arrivé aux guildes, les cartes violettes. Dans une vraie partie, elles sont empilées et on ne voit souvent que leur bandeau supérieur. J'ai découpé ce bandeau et je l'ai comparé aux références.

Résultat : **18 %** de bonnes réponses.

Les images étaient assez nettes. Elles se ressemblaient simplement trop : une grande zone violette identique partout, avec un petit symbole qui change dans un coin. En comparant tous les pixels, le violet écrasait le seul détail utile.

J'aurais pu isoler le symbole, corriger la rotation, gérer la perspective et inventer encore trois seuils. J'ai préféré entraîner un classifieur sur les vignettes déjà cadrées.

Avec le *transfer learning*, je ne partais pas de zéro. Le ResNet18 avait déjà appris à reconnaître des bords, des formes et des textures sur des millions d'images. Je lui apprenais seulement à associer ce vocabulaire visuel aux différentes guildes.

Sur les mêmes cas, le score est passé de **18 % à 91 %**.

À 18 contre 91, le débat était terminé.

## Une seule mécanique pour lire les vignettes

Une fois le classifieur en place pour les guildes, je l'ai essayé sur les chiffres des lauriers. Le vieux matcher avait déjà préannoté les images ; il ne restait qu'à relire et corriger ses propositions.

J'ai évalué les deux méthodes sur les mêmes 49 images :

| Lecteur | Précision |
|---|---:|
| Gabarits par recouvrement | **67,3 % — 33/49** |
| ResNet18 | **95,9 % — 47/49** |

Sur une vraie photo inclinée, l'ancien lecteur ne retrouvait que neuf cartes et totalisait **22 points**. ResNet18 lisait les treize et arrivait aux **44 points** vérifiés à la main.

Les pièces ont suivi. Ma première version distinguait les valeurs 1, 3 et 6 d'après la couleur du métal. Une lumière chaude suffisait à transformer une pièce dorée en pièce brune. Résultat : **71 %**.

Le vrai indice était embossé dessus depuis le début : le chiffre. Avec la même recette de *transfer learning*, le score est monté à **91 %**.

Deux problèmes différents, mais désormais la même mécanique : trouver la zone, reprendre les pixels dans la photo originale, puis laisser un petit classifieur spécialisé décider. Moins de code particulier, et surtout de meilleurs résultats.

## De bonnes données, pas juste plus de données

Quand un modèle rate, le réflexe est de lui donner plus d'images. Encore faut-il qu'elles ressemblent au vrai problème.

Mon détecteur reconnaissait mal les cartes empilées. J'ai fabriqué des exemples avec des cartes bien étalées, propres et faciles à annoter. Les résultats ont empiré. Dans une vraie partie, les cartes ne sont justement jamais rangées comme ça.

J'ai refait les photos avec les cartes empilées par couleur, comme en fin de partie.

![Des cartes empilées par couleur, avec seulement leur bandeau supérieur visible](/assets/img/7wd-cartes-empilees-redressees.jpg)

Sept photos prises dans la bonne disposition ont fait passer le repérage d'une couleur de **71 % à 99 %**.

J'ai aussi essayé de compenser une classe rare avec du sur-échantillonnage et des rotations synthétiques. La précision est passée de **0,96 à 0,78**.

J'ai annulé l'expérience.

Le modèle ne manquait pas de transformations inventées par le code. Il manquait de vraies photos prises dans les conditions où il devait travailler.

## Une ligne de code peut encore gagner

Introduire des modèles n'a pas rendu les règles classiques inutiles.

Le système proposait parfois un jeton sur une photo qui n'en contenait aucun. Les vrais dépassaient **93 %** de similarité ; les faux restaient sous **91 %**. Un seuil a suffi. Aucun nouvel entraînement.

Certains jetons de progrès contiennent aussi une couronne de lauriers avec un chiffre. Le lecteur avait donc de bonnes raisons de la prendre pour celle d'une carte et de compter ses points deux fois.

La correction a été géométrique : si le centre du laurier tombe dans le disque d'un jeton déjà détecté, je l'écarte.

La distinction ne se faisait donc pas sur l'apparence, mais sur la position.

## L'OCR a préparé son propre remplacement

Restait l'identité des merveilles.

Au départ, j'ai pris le *low-hanging fruit* : lire leur nom avec un OCR, autrement dit un lecteur de texte. Ça fonctionnait dès le premier jour, sans dataset ni entraînement. C'était lent et dépendant de la langue, mais j'avais une réponse. Très bien pour démarrer.

L'OCR a aussi préannoté le premier lot d'images. Je corrigeais les noms, j'agrandissais les boîtes qui ne couvraient que le texte et j'ajoutais les merveilles ratées. La solution provisoire faisait le travail et me fabriquait déjà le dataset de sa remplaçante.

Avec assez d'exemples vérifiés, j'ai entraîné YOLO à trouver les merveilles entières, puis un ResNet à reconnaître leur illustration. Sur 104 merveilles annotées à la main, l'OCR en retrouvait **80**. La voie visuelle en retrouvait **103**, sans en inventer sur ce jeu de test.

La seule merveille ratée était presque à l'envers. Le détecteur l'avait bien trouvée, mais le classifieur donnait **0,49** de confiance pour un seuil fixé à **0,50**.

Avant de sortir un recalage géométrique plus lourd, j'ai essayé une TTA par rotation — *Test-Time Augmentation*, ou augmentation au moment de la prédiction. Je présente le même recadrage à ResNet dans quatre orientations : 0°, 90°, 180° et 270°. Je garde la réponse pour laquelle il est le plus sûr.

C'est le même modèle, sans nouvel entraînement : juste quatre façons de regarder la carte. La confiance est passée de **0,49 à 0,97**.

Le nouveau chemin est aussi beaucoup plus rapide. Modèles déjà chargés sur le CPU, l'OCR prenait environ **20 secondes par photo**. YOLO et ResNet, rotations comprises : **1,4 seconde**.

## Ce que les modèles n'ont pas remplacé

L'identité était réglée. Pas la géométrie.

Une merveille ne rapporte ses points que si elle est construite, donc si une carte est glissée dessous. ResNet sait dire **laquelle**. Il ne sait pas retrouver précisément ses quatre bords pour regarder ce qui dépasse. Quand j'ai remplacé ce recalage par la simple boîte de YOLO, le verdict « construite ou non » a changé dans **19 cas sur 50**.

Sur la photo la plus inclinée, les dix merveilles pourtant construites sont ainsi devenues dix merveilles non construites.

J'ai donc gardé le recalage géométrique là où il apporte une information irremplaçable. Il n'a simplement plus besoin de participer à l'identification.

## Les photos ratées sont les plus utiles

Il reste des cas durs : une merveille petite, à moitié cachée, mangée par un reflet. Le prochain gain viendra de photos de ce genre, pas d'un nouveau seuil.

L'application peut justement récolter ces conditions réelles. Mais elle n'apprend pas toute seule : chaque image doit être vérifiée avant de rejoindre le prochain entraînement. Sur une photo de douze merveilles, le détecteur en a par exemple proposé treize. En marquant l'intruse comme *hard negative* — un faux positif explicite — elle devient un exemple de ce que le modèle doit apprendre à ignorer.

C'est un peu comme dans le jeu vidéo *Hades*, où le but est de s'échapper des Enfers. Quand une tentative échoue, on repart du début, mais certaines ressources récoltées pendant le *run* servent à débloquer de petites améliorations permanentes. Ici, une photo vérifiée devient l'une de ces ressources.

La prochaine version ne repartira donc pas tout à fait les mains vides.
