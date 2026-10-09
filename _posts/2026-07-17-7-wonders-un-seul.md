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

Votre mission, Jim, si vous l'acceptez : compter les points d'une partie de 7 Wonders Duel à partir d'une ou deux photos. Sans calculatrice, sans calcul mental et, si possible, avant que la bière ne tiédisse.

Mais coller un autocollant « boosté à l'IA » sur le projet juste comme argument marketing, ça aurait été trop facile. Avant d'utiliser une scie sauteuse, c'est toujours bien de savoir se servir d'une scie à main.

J'ai donc commencé avec OpenCV et des règles écrites à la main. Pas de dataset, pas de modèle entraîné par mes soins. La seule entorse était RapidOCR, un lecteur de texte pré-entraîné utilisé pour le nom des merveilles. Pour tout le reste, je voulais d'abord voir jusqu'où iraient la géométrie, les couleurs et des algorithmes de vision, tels que la détection de cercles (Hough), la comparaison de templates ({template matching}) ou le recalage de texture par détection de bords (ORB).

## Anatomie d'une partie de 7 Wonders Duel
{écrire un petit chapitre, photos à l'appui pour montrer à quoi ressemble une partie, et les choses que l'on devra réussir à "lire" sur une photo. parler des différents éléments de jeu aussi pour que les futures références soient claiures quand on parle de guildes, de merveille, de lauriers de victoire, de jetons, etc.}

## Premier essai : tout écrire à la main

La vision par ordinateur classique, c'est rassurant. On écrit soi-même les règles.

Un cercle assez rond et de la bonne taille ? Probablement une pièce. Une bande colorée en haut d'une carte ? On peut tenter d'en déduire sa couleur. Et, quand ça se trompe, on comprend généralement pourquoi.

Voilà ce qu'il faut lire sur une fin de partie : des merveilles, des cartes glissées à moitié dessous, des jetons, des pièces et plusieurs piles de cartes dont on ne voit souvent qu'une partie.

![Une fin de partie complète de 7 Wonders Duel sur une table en bois](/assets/img/7wd-vue-originale.jpg)

Sur ma table, avec une bonne lumière, les premiers résultats étaient franchement encourageants. Au bout d'une heure, il y avait déjà assez de formes qui tombaient dans les bonnes cases pour se dire qu'on avait plié le game et qu'on pouvait retourner siroter des blue lagoons sur la plage.

![La même photo, avec les détections du programme dessinées par-dessus](/assets/img/7wd-vue-annotee.jpg)

## Une image de référence, et c'était parti

Le vrai coup d'accélérateur des premières heures n'est pas venu d'un modèle entraîné. Il est venu des images de référence.

Pour essayer de reconnaître un nouvel objet, il me fallait une image propre de cet objet. C'est tout. Pas des centaines de photos à annoter, pas d'entraînement à lancer. Une référence suffisait pour tester l'idée en quelques minutes.

La version la plus directe s'appelle l'**appariement de gabarits**, ou *template matching*. Je comparais la zone photographiée à une référence — parfois les pixels, parfois la silhouette — et je gardais celle qui obtenait le meilleur score.

Encore faut-il que l'image à deviner soit orientée de la même manière que l'image de référence pour comparer un template, mais quand on fait un jeu de société sur une terrasse, on pose rarement ses cartes bien alignées sur du papier millimétré. Pareil pour la prise de vue de la photo :  une carte photographiée de biais se superposait mal à son scan. J'ai donc utilisé une technique de recalage d'images basée sur **ORB**.

Le principe de ORB, c'est de repérer des points caractéristiques sur l'image — un coin, un petit motif, une rupture de texture — puis de chercher sur l'image de référence ceux qui correspondent. S'il en trouve assez, il peut retrouver la position, l'angle et la perspective de la carte.

L'idée de départ restait la même : une image de référence, aucun entraînement. Sur mes premières photos, ça répondait assez souvent pour me donner envie d'insister. Les merveilles, surtout, offraient à ORB assez de détails pour retrouver leur contour environ neuf fois sur dix, avec une précision assez bluffante.

C'est cette réussite qui m'a convaincu que le POC tenait la route. Pour le reste, la facture arriverait un peu plus tard.

À côté de ça, la transformée de Hough cherchait les cercles et la colorimétrie triait les bannières ou tentait de lire la couleur des pièces. On n'interprétait pas encore tous les éléments du jeu, mais suffisamment pour vous coller un sourire satisfait sur le visage. Sous le capot, c'était déjà une petite brocante d'algorithmes.

Chaque outil avait une question étroite. Aucun ne prétendait comprendre la partie.

Puis j'ai posé le jeu sur une serviette de plage, dehors, au soleil couchant.

![La même reconnaissance sur une serviette de plage, avec beaucoup de fausses détections](/assets/img/7wd-serviette.jpg)

Un symbole imprimé sur une carte était promu pièce. Un jeton de progrès était compté deux fois, comme pièce et comme laurier. La seule guilde, pourtant posée bien en évidence, saffaichait sur le radar.

Le programme faisait pourtant exactement ce que je lui avais demandé. Le problème, c'est que la vraie vie ne ressemble pas toujours à la table de ma terrasse.

Je pouvais ajouter une règle pour la plage, une autre pour une table sombre, puis une troisième pour les photos prises de biais. En faisant ça, j'aurais surtout obtenu un excellent détecteur de mes propres photos de test, mais incapable de généraliser aux cas que je n'avais pas encore rencontrés.

## Quand le template matching ne te fait pas gagner le match

Comme le template matching marchait super bien pour des merveilles, j'ai essayé d'en mettre partout. Évidemment.

Mais en essayant d'appliquer la même approche sur les pièces ou les symboles de guildes, j'ai vite vu que ce n'est pas parce que le seul outil qu'on a à disposition est un marteau qu'il faut considérer que tout problème est un clou.

Pour les bannières de guildes, les retrouver était relativement facile : il suffisait par colorimétrie de récupérer les bandes violettes, mais il fallait encore reconnaitre de _quelle_ guilde il s'agissait. Et difficulté supplémentaire: on ne peut compter que sur sa bannière, sur l'image de la carte car les guildes sont empilées sur la table de jeu, contrairement aux merveilles. De fait, lui appliquer une comparaison de template avec une image de référence s'est avéré inexploitable : beaucoup trop de pixels violets communs pour trop peu de pixels différenciants - le pictograme d'effet de la carte.

Et pour les pièces, comme elle sont circulaires, bonne chance pour les remettre droites et comparer les pixels.

## Trouver et reconnaître des pièces

À ce stade, les merveilles étaient à peu près sous contrôle et les bannières se laissaient trier par couleur. Les pièces, elles, me donnaient encore du fil à retordre.

![Le Dude, trempé et empoigné, sous la légende « Where is the money, Lebowski? »](/assets/img/7wd-where-is-the-money-lebowski.jpg)

*Au moins, la première question était posée.*

Le problème en cachait en fait deux. **Où sont-elles ?** Hough parcourait la photo et proposait tous les cercles qui avaient l'air d'une pièce. **Combien valent-elles ?** Mes règles regardaient ensuite la couleur de la pièce pour choisir entre 1, 3 et 6.

Hough ratissait pourtant bien trop large. Parmi ses cercles se glissaient des symboles de cartes, des plis de tissu et d'autres imposteurs.

Lorsque l'on entraine un modèle de vision comme par exemple YOLO, le prérequis est d'avoir des centaines de photos à partir desquelles apprendre. C'est ça qu'on appelle l'entrainement. À ce stade, je n'avais que quelques parties photographiées, mais largement pas encore assez pour entrainer un détecteur YOLO. En revanche, Hough avait déjà produit des centaines de cercles que je pouvais étiqueter « pièce » ou « intrus ». C'était suffisant pour entraîner un filtre beaucoup plus léger : une petite [forêt d'arbres décisionnels](https://fr.wikipedia.org/wiki/For%C3%AAt_d%27arbres_d%C3%A9cisionnels).

Le principe: chaque arbre pose une suite de petites questions apprises : la couleur ressemble-t-elle à du métal imprimé sur du carton ? Le disque est-il texturé ? Sa taille est-elle cohérente avec les autres cercles ? Leurs votes donnaient une probabilité que le candidat soit une vraie pièce. Si la confiance était en dessous de 20 %, on l'écarte.

La forêt ne trouvait pas de nouvelles pièces et ne lisait pas encore leur valeur. Elle faisait seulement le tri dans ce que Hough lui donnait. Sur une photo extérieure particulièrement chargée, les faux positifs sont passés de **22 à 1**.

Ça avançait sur le « où ». Pour le « combien », je dépendais toujours de la colorimétrie. Sous une lumière chaude, une pièce argentée pouvait prendre des airs de pièce dorée. Cette lecture plafonnait à **71 %** de succès.

{je n'ai plus le contexte : qu'est-ce que c'est ce petit réseau dont on parle ? qu'est-ce que j'ai essayé d'utiliser, et pourquoi ça fail?}
J'ai d'abord essayé le chemin le plus direct : un petit réseau dont tous les paramètres partaient au hasard. C'est cela, entraîner un modèle *from scratch*. Avec mes **111 vignettes de pièces**, issues de cinq parties, il devait apprendre en même temps les bases de la vision et la différence entre 1, 3 et 6. Il a obtenu **47 %** de bonnes réponses. Moins bien que ma règle sur la couleur.

Le *transfer learning* prend le problème dans l'autre sens. Ce n'est pas un type de réseau, mais une manière de l'entraîner : on reprend un réseau qui a déjà appris à voir sur un grand corpus d'images, puis on l'adapte à une nouvelle tâche.

L'analogie qui marche pour moi, c'est l'arrivée d'un nouveau collègue. Pour mémoriser son nom, ton cerveau n'a pas besoin de réapprendre ce qu'est un nez, une bouche ou une paire d'yeux. Il sait déjà reconnaître un visage. Il lui reste juste à coller un nom dessus.

Dans mon cas, le réseau s'appelle ResNet18. ResNet18, c'est l'architecture ; le *transfer learning*, la manière dont je l'ai réutilisée. Préentraîné sur ImageNet, son « œil » savait déjà extraire des contours, des courbes et des textures. J'ai gardé cette base et réentraîné la fin du réseau pour lui faire donner trois réponses : « pièce de 1 », « pièce de 3 » et « pièce de 6 ».

C'est un **classifieur** : son but n'est pas de retrouver une pièce sur une image complète. Pour ça, on continue à utiliser Hough. Le classifieur est là pour nous dire la valeur de la pièce: on lui donne une vignette qui contient déjà une pièce et il lit sa valeur. Son taux de bonnes réponses est monté à **91 %**.

Ça réglait la seconde moitié du problème. La première était toujours confiée à Hough.

... Jusqu'au jour où j'ai photographié une partie sur un tapis berbère, où Hough a saturé l'image de cercles. La texture du tapis donnait à Hough beaucoup trop de candidats, même avec le filtrage de la forêt d'arbres décisionnels. ResNet pouvait très bien lire une pièce ; encore fallait-il qu'on lui en donne une.

Entre-temps, j'avais accumulé assez de photos complètes et annotées pour remplacer enfin la localisation. J'ai entraîné YOLO sur des scènes où chaque pièce était entourée.

YOLO est un **détecteur** : il reçoit toute la photo et renvoie les boîtes où il pense avoir trouvé une pièce. Il répond à « où ? ». ResNet reçoit ensuite chaque boîte découpée et répond à « quoi ? ».

Sur les pièces, le schéma était maintenant simple : YOLO les trouvait, ResNet lisait leur valeur. Les règles classiques n'avaient pas toutes disparu. Elles avaient cédé deux maillons précis, là où elles ne tenaient plus.

## Quand une image de référence ne suffit plus

Les pièces bénéficiaient donc dès maintenant d'un modèle dédié pour en connaître la dénomination. Pour les merveilles, pas besoin : ORB continuait à bien faire le job grâce à leur grand format, et leur illustration riche. Reste à voir quoi utiliser pour les symboles affichés sur les bannières de cartes: lauriers de points de victoire, symboles de science, et icônes de guilde sur les cartes violettes.

Les guildes, j'en parlais tout à l'heure, peinaient cruellement sur le templace matching. Dans une vraie partie, ces cartes violettes sont empilées et on ne voit souvent que leur bandeau supérieur. L'illustration n'est donc plus visible. J'ai découpé ce bandeau et je l'ai comparé aux références.

Résultat : **18 %** de bonnes réponses.

ORB avait beaucoup de matière sur l'illustration d'une merveille. Ici, la grande zone violette était identique partout et seul un petit symbole changeait dans un coin. En comparant tous les pixels, le violet écrasait le seul détail utile.

Le même déséquilibre revenait sur les lauriers : presque toute la couronne était commune aux sept valeurs. Le chiffre qui portait la réponse pesait très peu face à tout ce qui était identique.

J'aurais pu isoler le symbole, corriger la rotation, gérer la perspective et inventer encore trois seuils. J'ai préféré reprendre la recette des pièces et adapter un autre ResNet18 préentraîné aux vignettes de guildes déjà cadrées.

Sur les mêmes cas, le score est passé de **18 % à 91 %**.

Restait le lecteur des lauriers. J'avais en place une approche sans IA qui comparait la silhouette du chiffre aux templates de 1 à 7. Sur sa base, j'avais donc des vignettes déjà préannotées ; il ne restait qu'à relire et corriger ses propositions avant d'entraîner un classifieur dédié. Sur un même jeu de test de 49 lauriers, la précision est passée de **67,3 % à 95,9 %**.

Avec ce score, le classifieur est devenu le lecteur principal. Le template matching avait tout de même rempli son rôle : démarrer sans dataset et préparer les données de son remplaçant. Je pouvais maintenant réutiliser la même architecture sur plusieurs objets, au lieu de maintenir un lecteur différent pour chacun.

## Et si on arrêtait de nager à contre-courant ?

À ce stade, notre boîte à outils contient déjà deux outils d'IA qui ont fait leur apparition pour résoudre principalement deux problèmes très précis :

- Les variations d'éclairages font énormément varier la colorimétrie des pièces de monnaie (Localisation des pièces de monnaie via YOLO).
- Le template matching nécessite plus d'information que ce que le plateau de jeu peut nous offrir. (ResNet)

Reste que les couleurs des bannières peuvent elles aussi beaucoup varier selon le régime d'éclairage de la partie (Soleil au zenith, avec des reflets, soleil rasant, partie à l'ombre ou en intérieur, etc.)

La solution, on l'a déjà : généraliser aux bannières - et à terme, probablement à tous les éléments de jeu - l'approche en deux étages que l'on utilise déjà pour les pièces.

- YOLO pour la localisation (ou le _recall_, comme on dit dans le milieu)
- ResNet18 pour la classification des boîtes détectées par YOLO

Après tout, le modèle porte assez bien son nom : _allez, YOLO, on le met partout !_



Cette architecture en deux étages me donnait l'impression de nager dans le sens du courant. Non seulement l'approche s'inscrivait dans le direct prolongement de ce que j'avais commencé à faire sans IA (détection par géométrie puis classification par template matching) mais c'était également l'approche préférée par la communauté: apparemment, tout le monde s'accorde à dire que YOLO est bon pour le recall, mais pas idéal pour localiser des boîtes directement classifiées.

Mais est-ce que les légendes urbaines sont suffisamment satisfaisantes pour nous ? 
Il fallait en avoir le coeur net.

## Un coup tu m'vois, un coup tu m'vois pas

{remanier la transition}

Elle allait donc aussi servir à localiser et lire d'autes petits détails imprimés sur les cartes. Mais en l'appliquant aux lauriers, quelque chose ne collait pas.

Sur des photos rapprochées, le modèle YOLO localisait bien les lauriers. Sur les photos d'ensemble, les mêmes lauriers devenaient difficiles à localiser. Pourtant, la photo du téléphone était nette. En zoomant dedans, moi, je voyais parfaitement le laurier et sa valeur en points.

Pour pousser le vice, j'ai pris une photographie d'ensemble qui affichait un laurier bien net, et où pourtant  YOLO ne le localirait pas. J'ai ensuite rogné l'image autour de ce laurier pour ne conserver qu'un 10e des pixels de l'image originale, et là, magie ! YOLO se met à localier le laurier en question avec brio. Alors pourquoi le modèle y arrivait-il dans un cas et pas dans l'autre ?

Un peu de lecture, et la vérité se fait cristalline : Un modèle YOLO ne reçoit pas directement les 12 ou 48 mégapixels de la photo qu'on lui fournit. Pour localiser les objets, toute la photo doit d'abord rentrer dans un cadre de taille fixe qui dépend de la version de YOLO que l'on utilise. Et donc forcément, si la photo est trop grande, elle est redimensionnée avant d'être fournie au modèle.

Par conséquent, dans une photo trop grande, la carte était devenue minuscule après redimensionnement, et son laurier finissait sur une poignée de pixels. Sur un gros plan, le même laurier conservait beaucoup plus de détails. Il n'y avait donc pas le même nombre de pixels à analyser, même si les deux images paraissaient parfaitement nettes sur le téléphone.

... Et puis il y avait un autre problème : dans d'autres cas, même si les lauriers étaient bien détectés par YOLO, sa valeur en points pouvait être mal lue par le classifieur ResNet18. En regardant ce que recevait le classifieur, on voit que même à l'oeil, il était difficile de reconnaitre les chiffres tant ils étaient flous. Et c'est finalement évident : si la boîte de détection de YOLO est directement donnée au classifieur, celui-ci va recevoir une version downscaled de l'image originale.

![La photo complète est réduite pour la détection, puis la zone utile est redécoupée dans l'image originale afin de retrouver les détails](/assets/img/7-wonders-resolution-pipeline.png)

J'ai donc fait travailler les deux étages à des résolutions différentes. Le détecteur cherche les objets sur une copie réduite de la photo complète. Une fois leurs coordonnées connues, l'application retourne dans le fichier original et y redécoupe chaque zone. Le classifieur reçoit ainsi un vrai zoom, avec les détails que la réduction avait fait disparaître.

## Mes jolies cartes ne ressemblaient à aucune partie

Quand un modèle rate, le réflexe est de lui donner plus d'images. Encore faut-il qu'elles ressemblent au vrai problème.

Mon détecteur reconnaissait mal les cartes empilées. J'ai fabriqué des exemples avec des cartes bien étalées, propres et faciles à annoter. Les résultats ont empiré. Dans une vraie partie, les cartes ne sont justement jamais rangées comme ça.

J'ai refait les photos avec les cartes empilées par couleur, comme en fin de partie.

![Des cartes empilées par couleur, avec seulement leur bandeau supérieur visible](/assets/img/7wd-cartes-empilees-redressees.jpg)

Sept photos prises dans la bonne disposition ont fait passer le repérage d'une couleur de **71 % à 99 %**.

Ce n'est pas une preuve que sept photos suffisent toujours. C'est juste qu'elles montraient enfin le problème réel. Les précédentes étaient plus jolies. Le modèle, lui, s'en fichait.

## C'est la taille qui compte !

Je pensais avoir réglé le problème de résolution en revenant découper chaque objet dans la photo originale. C'était nécessaire, mais pas suffisant.

Sur une vue d'ensemble des deux cités, certains lauriers ne faisaient plus que **48 × 65 pixels**. Le lecteur se trompait alors sur des chiffres qu'il reconnaissait très bien dans des photos plus rapprochées.

J'ai repris exactement le même recadrage et fait varier un seul facteur. L'éclaircir empirait le résultat. Renforcer la netteté aussi. En revanche, un agrandissement bicubique ×3 faisait relire le « 1 » correctement, avec **0,99** de confiance.

L'agrandissement n'avait inventé aucun détail. Il avait seulement remis les formes dans un ordre de grandeur familier pour le réseau.

J'ai donc ajouté au dataset des copies réduites à **45–70 %** de leur taille, sans retirer les originales. Le modèle apprenait désormais le même laurier de près et de loin. Sur la vue d'ensemble la plus difficile, on est passé d'environ **30/39 à 35/39** lectures correctes.

La piste militaire a posé le problème inverse. Sur certaines photos, elle occupait presque toute l'image.

Or YOLO ne peut pas dessiner une boîte de taille arbitraire. Depuis chaque point de sa grille, il prédit jusqu'où la boîte doit s'étendre vers les quatre bords, mais cette distance est bornée. Avec notre entrée de 1280 pixels, une boîte plafonnait à environ 1024 pixels de côté.

Quand la piste dépassait ce plafond, aucune prédiction ne pouvait l'englober d'un seul coup. Le détecteur faisait donc ce qu'il pouvait : plusieurs boîtes, chacune sur un morceau de piste. Les pistes tronquées et les grappes de détections étaient en fait les deux symptômes du même problème.

La solution a été de placer l'image réduite dans le cadre d'entrée, avec de la marge autour. Pas pour récupérer davantage d'information : simplement pour faire rentrer la piste dans la fenêtre de taille que YOLO savait décrire.

Mais un dézoom fixe créait aussitôt le problème opposé : les petites pistes devenaient trop petites. L'application choisit maintenant son cadrage d'après la taille des bandeaux déjà repérés dans la photo. Une vue serrée est davantage réduite ; une vue lointaine conserve plus de pixels. Sur le corpus actuel, les pistes tronquées sont passées de **11 sur 65 à 1 sur 65**, sans perdre un seul des **66 plateaux**.

La fenêtre a donc deux bords. Pour les lauriers, il fallait grossir l'objet. Pour la piste militaire, il fallait parfois lui faire de la place. La taille en pixels n'est pas un détail d'implémentation : elle fait partie de l'entrée.

Les expériences de taille, de lumière et de données synthétiques racontent toutes la même chose : une augmentation n'aide que si elle sait réellement fabriquer le défaut. C'est [le sujet d'un deuxième approfondissement](/blog/preview/e2c8a517/augmentations-images).

## Une ligne de code peut encore gagner

Introduire des modèles n'a pas rendu les règles classiques inutiles.

Le système proposait parfois un jeton sur une photo qui n'en contenait aucun. Les vrais dépassaient **93 %** de similarité ; les faux restaient sous **91 %**. Un seuil a suffi. Aucun nouvel entraînement.

Certains jetons de progrès contiennent aussi une couronne de lauriers avec un chiffre. Le lecteur avait donc de bonnes raisons de la prendre pour celle d'une carte et de compter ses points deux fois.

La correction a été géométrique : si le centre du laurier tombe dans le disque d'un jeton déjà détecté, je l'écarte. La distinction ne se faisait pas sur l'apparence, mais sur la position.

Ces deux corrections fonctionnaient parce qu'un seuil séparait proprement les bons cas des mauvais. Ce luxe n'est pas toujours disponible.

Sur une photo, le détecteur avait tracé deux cercles presque superposés sur la même pièce de 1. Le trésor valait 6 ; l'application annonçait 7. Il suffisait, en apparence, de fusionner les cercles trop proches. Sauf que le jeu autorise aussi de vraies piles de pièces.

![À gauche, deux détections sur une seule pièce ; à droite, deux vraies pièces empilées avec presque le même écartement](/assets/img/7wd-doublon-vs-pile.jpg)

*À 0,77 contre 0,79, le seuil magique peut prendre sa journée.*

J'ai résisté à la tentation de « corriger » silencieusement. L'application marque la paire comme suspecte et demande une vérification.

Automatiser n'oblige pas à faire semblant de savoir.

## L'OCR a préparé son propre remplacement

Restait l'identité des merveilles.

Au départ, j'ai pris le *low-hanging fruit* : lire leur nom avec un OCR, autrement dit un lecteur de texte. Ça fonctionnait dès le premier jour, sans dataset ni entraînement. C'était lent et dépendant de la langue, mais j'avais une réponse. Très bien pour démarrer.

L'OCR a aussi préannoté le premier lot d'images. Je corrigeais les noms, j'agrandissais les boîtes qui ne couvraient que le texte et j'ajoutais les merveilles ratées. La solution provisoire faisait le travail et me fabriquait déjà le dataset de sa remplaçante.

Avec assez d'exemples vérifiés, j'ai entraîné YOLO à trouver les merveilles entières, puis un ResNet à reconnaître leur illustration. Sur 104 merveilles annotées à la main, l'OCR en retrouvait **80**. La voie visuelle en retrouvait **103**.

Une merveille bien localisée restait juste sous le seuil, à **0,49** de confiance. À ce moment-là, une TTA par rotation — *Test-Time Augmentation* — a suffi : je présentais la même vignette à 0°, 90°, 180° et 270°, puis je gardais la réponse la plus sûre. La confiance est passée à **0,97**.

C'était une bonne rustine et une étape utile pour comprendre le problème. Ce n'est plus le chemin principal aujourd'hui : l'orientation est désormais apprise avec l'identité, un peu plus loin dans l'histoire.

Le gain de temps justifiait déjà le remplacement. Modèles chargés sur le CPU, la voie OCR prenait environ **20 secondes par photo**. La première voie visuelle descendait à **1,4 seconde**. L'OCR n'a pas disparu : il reste un repli si le pipeline visuel ne renvoie rien.

## Apprendre à répondre « aucune »

Ce premier jeu de test ne racontait pas toute l'histoire. Sur de vraies parties, le localisateur proposait aussi des guildes, des cartes ordinaires, le plateau militaire, le livret de règles, un sachet de pièces et même un mouchoir.

![Exemples d'objets que le classifieur de merveilles était forcé de ranger parmi les douze merveilles](/assets/img/7wd-wonder-other-class.jpg)

*Douze noms de merveilles pour répondre à ça. Forcément, ResNet improvisait.*

Le classifieur ne connaissait que les douze merveilles du jeu. Il devait donc choisir la moins mauvaise, même devant un objet qui n'en était pas une. La Guilde des Bâtisseurs devenait ainsi Piraeus avec une confiance de **0,9938** — et huit points fantômes partaient chez le mauvais joueur.

Relever le seuil n'a pas réglé le problème. Devant une table vide, un autre entraînement choisissait une merveille avec une confiance de **1,0000**. Hors de ce qu'il a appris, le score de confiance n'est pas un détecteur de mensonge.

J'ai donc ajouté une classe **« autre »**, nourrie avec les intrus récoltés sur de vraies photos. La fameuse treizième merveille détectée sur une image qui n'en contenait que douze n'était pas une boîte à corriger puis à oublier : c'était un négatif difficile à conserver pour l'entraînement suivant.

Sur le premier test indépendant, le nouveau modèle rejetait **63 intrus sur 64**, tout en reconnaissant un peu mieux les vraies merveilles. Le résultat important n'était pas le seuil exact : c'était d'avoir enfin posé une question à laquelle « aucune » était une réponse possible.

Il n'avait pas appris une nouvelle merveille. Il avait enfin appris à répondre qu'il n'en voyait aucune.

## Un contour parfait qui n'arrive pas ne sert à rien

Reconnaître une merveille ne suffit pas. Pour savoir si elle a été construite, il faut repérer la carte glissée dessous. Une fois la merveille remise à l'endroit, cette carte dépasse sur son bord droit.

C'est là que le recalage ORB du début servait encore : à partir du scan de référence, il retrouvait les quatre coins exacts de la merveille. Quand il répondait, le contour était excellent : **527 contours vérifiés, 527 corrects**. Mais il lui arrivait aussi de ne rien rendre, et chaque tentative coûtait environ **1,3 seconde par merveille** sur le téléphone.

![Ancien pipeline : plusieurs merveilles sont bien identifiées, mais le recalage ORB ne produit aucun contour exploitable](/assets/img/7wd-vote-orb-echec.jpg)

*Les noms sont bons. L'ancien recalage précis, lui, a abandonné.*

J'ai fini par remplacer ce recalage par un détecteur OBB, qui renvoie directement une boîte orientée. Son contour est un peu moins chirurgical : c'est un rectangle, pas la projection exacte d'une carte en perspective. Sur **535 annotations manuelles**, son rappel atteint **99,4 %**, contre **99,2 %** pour l'ancien détecteur à boîtes droites. Et contrairement à ORB, l'orientation arrive dans la même passe que la détection.

Il restait une ambiguïté à 180°. Plutôt que d'ajouter durablement un modèle chargé de dire où se trouve le haut, j'ai fusionné l'identité et l'orientation : douze merveilles dans les deux sens, plus la classe « autre ». **24 + 1.**

Le chemin normal exige maintenant OBB. ORB ne subsiste que dans l'ancien repli OCR ; l'application ne bascule pas silencieusement dessus si le nouveau modèle manque.

Le détour complet — ORB, OBB, l'ambiguïté à 180° et le passage à 24 + 1 classes — est raconté dans [« ORB dessinait mieux. Je l'ai remplacé quand même. »](/blog/preview/4d7a91c2/orb-obb-merveilles). Dans le produit, l'alternative un peu moins précise sur les contours a gagné parce qu'elle répond plus souvent, beaucoup plus vite, et a permis de supprimer plusieurs étages.

## *Minority Report* réduit ses effectifs

Pour décider si une merveille est construite, l'application ne fait toujours pas confiance à un seul indice. Trois approches votent :

1. le CNN de construction regarde la bande rectifiée à droite du contour OBB ;
2. un ancien filet de sécurité sonde les quatre marges de la boîte YOLO ;
3. le détecteur cherche le bandeau de la carte qui dépasse.

Chacun a son angle mort. La sonde de boîte peut attraper la carte voisine.

![La marge d'une merveille recouvre une carte voisine et produit un faux positif](/assets/img/7wd-vote-yolo-voisin.jpg)

Le bandeau, lui, ne voit rien quand la carte est glissée face cachée.

![Des merveilles construites avec une carte glissée face cachée, sans bandeau visible](/assets/img/7wd-vote-bandeau-face-cachee.jpg)

À l'époque d'ORB, ce vote compensait les moments où le recalage précis ne répondait pas. OBB a depuis changé l'équilibre : dans le chemin nominal, le premier votant ne dépend plus du succès d'ORB.

Le second votant est donc candidat à la retraite. Sur les cas connus, le CNN appliqué au bord OBB fait aussi bien sans lui. Je le garde encore parce que le test est devenu trop facile pour départager proprement les variantes, et parce qu'il reste utile si l'identité de la merveille échoue.

Le vote reste donc à trois pour le moment. Ça couvre tous les angles morts connus ; ça ne rend pas la majorité infaillible. Le prochain corpus dira si le second votant apporte encore quelque chose ou s'il ne fait que raconter l'histoire du pipeline.

## Le modèle n'a pas le droit de reconnaître la table

Pour choisir ce classifieur, je ne pouvais pas mélanger au hasard toutes les vignettes. Deux photos d'une même partie partagent la table, la lumière, le téléphone et parfois la même merveille sous un angle voisin. Le modèle aurait pu reconnaître le décor et me laisser croire qu'il avait compris la carte glissée.

J'ai donc séparé les **parties**, jamais les images. Dix-sept parties fournissaient assez de merveilles pour ce test local, même si seules sept permettaient de juger le score complet. Elles ont été réparties en six plis : à chaque entraînement, un groupe entier restait dehors. Une fois la recette validée, un dernier modèle récupérait toutes les images disponibles pour être livré dans l'application.

Le détail — provenance des annotations, validation groupée, mini-lots et ablations — est dans [« Entraîner sans se mentir : le benchmark aussi peut tricher »](/blog/preview/9b3e6f40/entrainer-sans-se-mentir).

## Les photos ratées sont les plus utiles

Il reste des cas durs : une merveille petite, à moitié cachée, mangée par un reflet. Le prochain gain viendra de photos de ce genre, pas d'un nouveau seuil choisi au hasard.

La classe « autre » est née exactement comme ça : sur une photo de douze merveilles, le détecteur en avait proposé treize. J'ai marqué l'intruse. Au prochain entraînement, elle a rejoint les exemples négatifs. L'application peut préparer l'annotation ; elle ne se corrige pas toute seule.

C'est un peu comme dans le jeu vidéo *Hades*, où le but est de s'échapper des Enfers. Quand une tentative échoue, on repart du début, mais certaines ressources récoltées pendant le *run* servent à débloquer de petites améliorations permanentes. Ici, une photo vérifiée devient l'une de ces ressources.

La prochaine version ne repartira donc pas tout à fait les mains vides.
