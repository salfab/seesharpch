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

J'ai donc commencé avec OpenCV et des règles écrites à la main. Pas de dataset, pas de modèle entraîné par mes soins. La seule entorse était RapidOCR, un lecteur de texte pré-entraîné utilisé pour le nom des merveilles. Pour tout le reste, je voulais d'abord voir jusqu'où iraient la géométrie, les couleurs et les images de référence.

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

Comme ça marchait, j'ai essayé d'en mettre partout. Évidemment.

J'ai même essayé cet appariement sur les faces des pièces, les chiffres des lauriers et les symboles des guildes. Pour les merveilles, une carte photographiée de biais se superposait mal à son scan. J'ai donc utilisé une technique de recalage d'images basée sur ORB.

Le principe de ORB, c'est de repérer des points caractéristiques sur l'image — un coin, un petit motif, une rupture de texture — puis de chercher sur l'image de référence ceux qui correspondent. S'il en trouve assez, il peut retrouver la position, l'angle et la perspective de la carte.

L'idée de départ restait la même : une image de référence, aucun entraînement. Sur mes premières photos, ça répondait assez souvent pour me donner envie d'insister. Les merveilles, surtout, offraient à ORB assez de détails pour retrouver leur contour environ neuf fois sur dix, avec une précision assez bluffante.

C'est cette réussite qui m'a convaincu que le POC tenait la route. Pour le reste, la facture arriverait un peu plus tard.

À côté de ça, la transformée de Hough cherchait les cercles et la colorimétrie triait les bannières ou tentait de lire la couleur des pièces. Sous le capot, c'était déjà une petite brocante d'algorithmes.

Chaque outil avait une question étroite. Aucun ne prétendait comprendre la partie.

Puis j'ai posé le jeu sur une serviette de plage, dehors, au soleil couchant.

![La même reconnaissance sur une serviette de plage, avec beaucoup de fausses détections](/assets/img/7wd-serviette.jpg)

Un symbole imprimé sur une carte était promu pièce. Un jeton de progrès était compté deux fois, comme pièce et comme laurier. La seule guilde, pourtant posée bien en évidence, passait sous le radar.

Le programme faisait pourtant exactement ce que je lui avais demandé. Le problème, c'est que la vraie vie ne ressemble pas toujours à la table de ma terrasse.

Je pouvais ajouter une règle pour la plage, une autre pour une table sombre, puis une troisième pour les photos prises de biais. J'aurais surtout obtenu un excellent détecteur de mes propres photos de test, incapable de généraliser aux cas que je n'avais pas encore rencontrés.

## Trouver et reconnaître des pièces

À ce stade, sans IA, les merveilles étaient relativement bien détectées, les couleurs des bannières semblaient être plutôt bien identifiables. Mais ce qui me donnait plus de fil à retordre, c'était de détecter les pièces.

{"C:\Users\fabio.salvalai\OneDrive - Swisscaution\Pictures\where is the money lebowski.jpg"}

**Où sont-elles ?** Hough parcourait la photo et proposait tous les cercles qui avaient l'air d'une pièce. **Combien valent-elles ?** Mes règles regardaient ensuite la couleur du métal pour choisir entre 1, 3 et 6.

Il y avait déjà un gros problème avec la première question : parmi les cercles proposés par Hough se glissaient des symboles de cartes, des plis de tissu et d'autres imposteurs.

À ce stade, j'avais encore assez peu de photos, et donc entraîner un modèle de détection, type YOLO pour remplacer la détection de cercles fournis par Hough semblait illusoire. À la place, j'ai construit une petite forêt aléatoire {ajouter un lien vers la description wikipedia des forêts aléatoires} — un modèle composé d'arbres de décision — qui apprenait à trier les trouvailles de Hough à partir de leur couleur, de leur texture et de leur taille, histoire de faire le ménage.

Le principe de cette forêt était tout simple : {décrire ce que la forêt faisait}

Sur une photo extérieure particulièrement chargée, les faux positifs sont passés de **22 à 1**. Pas parfait, mais ça écartait quand même beaucoup de faux positifs qui n'étaient pas des pièces, simplement parce que le cercle fournit par Hough ne ressemblait pas à une pièce selon ma forêt de décisions.

La valeur, elle, restait lue par colorimétrie. Sous une lumière chaude, une pièce argentée pouvait prendre des airs de pièce dorée. Cette lecture plafonnait à **71 %**.

{dans le paragraphe suivant : je ne comprends pas ce que veut dire "en partant de zéro" Qui fait ça, comment ça se fait, comment ça s'appelle ?. et le transfer learning, c'est quoi ? resnet ? }
J'avais **111 vignettes de pièces**, issues de cinq parties. Beaucoup trop peu pour apprendre à un réseau à voir en partant de zéro. C'est là que le *transfer learning* devient pratique.

L'analogie qui marche pour moi, c'est l'arrivée d'un nouveau collègue. Pour mémoriser son nom, ton cerveau n'a pas besoin de réapprendre ce qu'est un nez, une bouche ou une paire d'yeux. Il sait déjà reconnaître un visage. Il lui reste juste à coller un nom dessus.

ResNet18 partait avec le même avantage. Préentraîné sur ImageNet, son « œil » savait déjà extraire des contours, des courbes et des textures. Je n'ai réentraîné que la fin du réseau pour lui apprendre trois nouveaux noms : « pièce de 1 », « pièce de 3 » et « pièce de 6 ».

C'est un **classifieur** : on lui donne une vignette qui contient déjà une pièce et il lit sa valeur. Il ne cherche rien dans la photo complète. La précision est passée à **91 %**.

Ça réglait la seconde moitié du problème. La première était toujours confiée à Hough.

Puis une partie photographiée sur un tapis berbère a saturé l'image de cercles. La texture du tapis donnait à Hough beaucoup trop de candidats. ResNet pouvait très bien lire une pièce ; encore fallait-il qu'on lui en donne une.

Cette fois, c'est la localisation que j'ai remplacée. J'ai entraîné YOLO à partir de photos complètes sur lesquelles les pièces étaient entourées. YOLO est un **détecteur** : il reçoit toute la scène et renvoie les boîtes où il pense avoir trouvé une pièce. Il répond à « où ? ». ResNet reçoit ensuite chaque boîte découpée et répond à « quoi ? ».

Sur les pièces, le schéma était maintenant simple : YOLO les trouvait, ResNet lisait leur valeur. Les règles classiques n'avaient pas toutes disparu. Elles avaient cédé deux maillons précis, là où elles ne tenaient plus.

## Un coup tu m'vois, un coup tu m'vois pas

Cette architecture en deux étages allait aussi servir à lire les petits détails imprimés sur les cartes. Mais en l'appliquant aux chiffres, quelque chose ne collait pas.

Sur des photos rapprochées, le modèle lisait bien les chiffres. Sur les photos d'ensemble, les mêmes chiffres devenaient presque illisibles une fois toute la scène ramenée à la taille attendue par le modèle. Pourtant, la photo du téléphone était nette. En zoomant dedans, moi, je voyais parfaitement le numéro.

Le chiffre n'avait pas changé. Alors pourquoi le modèle y arrivait-il dans un cas et pas dans l'autre ?

Parce qu'il ne recevait pas directement les 12 ou 48 mégapixels de la photo. Pour localiser les objets, toute la table devait d'abord rentrer dans un cadre de taille fixe. Dans la première version, la vignette à lire venait de cette image déjà réduite. La carte était devenue minuscule et son chiffre finissait sur une poignée de pixels.

Sur un gros plan, le même chiffre conservait beaucoup plus de détails. Il n'y avait donc pas le même nombre de pixels à analyser, même si les deux images paraissaient parfaitement nettes sur le téléphone.

![La photo complète est réduite pour la détection, puis la zone utile est redécoupée dans l'image originale afin de retrouver les détails](/assets/img/7-wonders-resolution-pipeline.png)

J'ai donc fait travailler les deux étages à des résolutions différentes. Le détecteur cherche les objets sur une copie réduite de la photo complète. Une fois leurs coordonnées connues, l'application retourne dans le fichier original et y redécoupe chaque zone. Le classifieur reçoit ainsi un vrai zoom, avec les détails que la réduction avait fait disparaître.

## Quand une image de référence ne suffit plus

Revenir à la photo originale remettait les pixels à disposition. Ça ne les rendait pas forcément distinctifs.

Les guildes en ont donné la mesure la plus brutale. Dans une vraie partie, ces cartes violettes sont empilées et on ne voit souvent que leur bandeau supérieur. J'ai découpé ce bandeau et je l'ai comparé aux références.

Résultat : **18 %** de bonnes réponses.

ORB avait beaucoup de matière sur l'illustration d'une merveille. Ici, la grande zone violette était identique partout et seul un petit symbole changeait dans un coin. En comparant tous les pixels, le violet écrasait le seul détail utile.

Le même déséquilibre revenait sur les lauriers : presque toute la couronne était commune aux sept valeurs. Le chiffre qui portait la réponse pesait très peu face à tout ce qui était identique.

J'aurais pu isoler le symbole, corriger la rotation, gérer la perspective et inventer encore trois seuils. J'ai préféré reprendre la recette des pièces et adapter un autre ResNet18 préentraîné aux vignettes de guildes déjà cadrées.

Sur les mêmes cas, le score est passé de **18 % à 91 %**.

Restait le lecteur des lauriers. L'ancien comparait la silhouette du chiffre aux gabarits de 1 à 7. Il avait déjà préannoté les vignettes ; il ne restait qu'à relire et corriger ses propositions avant d'entraîner un classifieur dédié. Sur un même jeu de test de 49 lauriers, la précision est passée de **67,3 % à 95,9 %**.

À 67,3 contre 95,9, le classifieur est devenu le lecteur principal. Le template matching avait tout de même rempli son rôle : démarrer sans dataset et préparer les données de son remplaçant. Je pouvais maintenant réutiliser la même architecture sur plusieurs objets, au lieu de maintenir un lecteur différent pour chacun.

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
