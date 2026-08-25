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

Mais coller un autocollant « boosté à l'IA » sur le projet juste comme argument marketing, ça aurait été trop facile. Avant d'utiliser une scie sauteuse, c'est toujours bien de savoir se servior d'une scie à main.

J'ai donc commencé avec OpenCV et des règles écrites à la main. Pas de dataset, pas de modèle entraîné par mes soins. La seule entorse était RapidOCR, un lecteur de texte pré-entraîné utilisé pour le nom des merveilles. Pour tout le reste, je voulais d'abord voir jusqu'où iraient la géométrie, les couleurs et les images de référence.

## Premier essai : tout écrire à la main

La vision par ordinateur classique, c'est rassurant. On écrit soi-même les règles.

Un cercle assez rond et de la bonne taille ? Probablement une pièce. Une bande colorée en haut d'une carte ? On peut tenter d'en déduire sa couleur. Et, quand ça se trompe, on comprend généralement pourquoi.

Voilà ce qu'il faut lire sur une fin de partie : des merveilles, des cartes glissées à moitié dessous, des jetons, des pièces et plusieurs piles de cartes dont on ne voit souvent qu'une partie.

![Une fin de partie complète de 7 Wonders Duel sur une table en bois](/assets/img/7wd-vue-originale.jpg)

Sur ma table, avec une bonne lumière, les premiers résultats étaient franchement encourageants. Au bout d'une heure, il y avait déjà assez de formes qui tombaient dans les bonnes cases pour se dire qu'on avait plié le game et qu'on pouvait retourner siroter des blue lagoons sur la plage.

![La même photo, avec les détections du programme dessinées par-dessus](/assets/img/7wd-vue-annotee.jpg)

Sous le capot, c'était déjà une petite brocante d'algorithmes. Hough proposait les objets ronds. La colorimétrie triait les bannières et tentait de lire le métal des pièces. Des gabarits et des corrélations comparaient les chiffres des lauriers, les symboles des jetons et les guildes à leurs références. ORB recalait les illustrations des merveilles pour retrouver leur position et leur angle.

Chaque outil avait une question étroite. Aucun ne prétendait comprendre la partie.

Puis j'ai posé le jeu sur une serviette de plage, dehors, au soleil couchant.

![La même reconnaissance sur une serviette de plage, avec beaucoup de fausses détections](/assets/img/7wd-serviette.jpg)

Un symbole imprimé sur une carte était promu pièce. Un jeton de progrès était compté deux fois, comme pièce et comme laurier. La seule guilde, pourtant posée bien en évidence, passait sous le radar.

Le programme faisait pourtant exactement ce que je lui avais demandé. Le problème, c'est que la vraie vie ne ressemble pas toujours à la table de ma terrasse.

Je pouvais ajouter une règle pour la plage, une autre pour une table sombre, puis une troisième pour les photos prises de biais. J'aurais surtout obtenu un excellent détecteur de mes propres photos de test, mais qui serait incapable de généraliser à des cas qui n'auraient jamais été rencontrés auparavant.

Je n'ai pas remplacé toute la chaîne d'un coup. J'ai commencé par son maillon le plus fragile : les pièces. Hough continuait à proposer les cercles. Beaucoup. Beaucoup trop, et n'importe où. J'en ai profité pour étiqueter ces faux positifs comme des négatifs de pièces, et d'attribuer la dénomination des pièces à celles qui avaient été détectées à raison. Avec ça, j'avais suffisamment d'informations pour pouvoir entrainer un réseau de neurones ResNet18 pour remplacer la détection de pièces par colorimétrie. D'un coup, lorsque Hough me détectait un cercle, il m'a suffi de le passer dans ce classifieur Resnet18, et la lecture des valeurs est passée de **71 % à 91 %**.

Et quand des photos sur un tapis Berbère ont commencé à me saturer toute l'image avec des cercles Hough, parce qu'il confondait les longs poins du tapis avec la courbe d'un contour de pièces, c'est le moment où j'ai dû trouver un autre moyen de me proposer des candidats de pièces, et c'est comme ça que je me suis penché sur le modèle YOLO pour reprendre la localisation des pièces.

{s'assurer que c'est bien formulé, et soigner l'écriture : 
Les modèles sont entrés comme ça : un problème mesuré à la fois, sans jeter les morceaux classiques qui faisaient encore le travail, mais petit à petit, tantôt l'éclairage, tantôt la perspective de la photo, j'en suis venu à remplacer, un à un, presque tous les mécanismes que j'avais implémenté à la main par pure algorithmique et géométrie: identification des lautiers de points de victoire, identité des merveilles, localisation des cartes aux bannières de différentes couleurs, avec seulement deux types de modèles, j'ai pu remplacer toute une panoplie de techniques de computer vision de manière à les rendre plus résilientes aux conditions hostiles de la photographie.}

## Un coup tu m'vois, un coup tu m'vois pas

Un résultat me paraissait franchement incohérent.

Sur des photos rapprochées, les lecteurs de chiffres fonctionnaient bien. Sur les photos d'ensemble, les mêmes chiffres devenaient presque illisibles. Pourtant, la photo du téléphone était nette. En zoomant dedans, moi, je voyais parfaitement le numéro.

Le chiffre n'avait pas changé. Alors pourquoi le modèle y arrivait-il dans un cas et pas dans l'autre ?

Parce que le modèle ne recevait pas directement les 12 ou 48 mégapixels de la photo. L'image était ramenée à une taille fixe. Sur une vue d'ensemble, toute la table devait rentrer dans ce cadre. La carte devenait minuscule et son chiffre finissait sur une poignée de pixels.

Sur un gros plan, le même chiffre conservait beaucoup plus de détails. Il n'y avait donc pas le même nombre de pixels à analyser, même si les deux images paraissaient parfaitement nettes sur le téléphone.

![La photo complète est réduite pour la détection, puis la zone utile est redécoupée dans l'image originale afin de retrouver les détails](/assets/img/7-wonders-resolution-pipeline.png)

J'ai donc coupé le travail en deux. Un premier étage cherche **où** se trouve l'objet sur une version réduite de la scène. Au début, c'était Hough ou une règle géométrique ; plus tard, ce sera souvent YOLO. Ensuite, l'application retourne dans la photo originale et redécoupe cette zone en pleine résolution. Le second étage doit seulement décider **ce que** contient la vignette, avec un gabarit ou un classifieur selon le cas.

Ça retrouve les détails sacrifiés pendant le redimensionnement. Ça ne dit pas encore comment les lire.

## Des calques à ResNet

Récupérer les bons pixels ne voulait pas encore dire qu'il fallait entraîner un réseau. J'ai commencé par la méthode la plus simple : comparer chaque vignette à une image de référence.

Pour les chiffres des lauriers, je transformais le chiffre en silhouette, puis je cherchais le gabarit de 1 à 7 qui se superposait le mieux. Ce n'était pas parfait, mais ça fonctionnait immédiatement. Et comme le lecteur proposait déjà une valeur, je pouvais corriger ses annotations au lieu de tout saisir depuis zéro.

L'exemple le plus brutal est venu un peu plus tard avec les guildes, les cartes violettes. Dans une vraie partie, elles sont empilées et on ne voit souvent que leur bandeau supérieur. J'ai découpé ce bandeau et je l'ai comparé aux références.

Résultat : **18 %** de bonnes réponses.

Les images étaient assez nettes. Elles se ressemblaient simplement trop : une grande zone violette identique partout, avec un petit symbole qui change dans un coin. En comparant tous les pixels, le violet écrasait le seul détail utile.

J'aurais pu isoler le symbole, corriger la rotation, gérer la perspective et inventer encore trois seuils. J'ai préféré réutiliser la mécanique introduite pour les pièces et entraîner un classifieur sur les vignettes déjà cadrées.

Avec le *transfer learning*, je ne partais pas de zéro. Le ResNet18 avait déjà appris à reconnaître des bords, des formes et des textures sur plus d'un million d'images. Je lui apprenais seulement à associer ce vocabulaire visuel aux différentes guildes.

Sur les mêmes cas, le score est passé de **18 % à 91 %**.

À 18 contre 91, le débat était terminé.

Une fois ce classifieur en place, je l'ai essayé sur les lauriers. Le vieux matcher avait déjà préparé les annotations ; il ne restait qu'à relire et corriger ses propositions. Sur les mêmes 49 images, la précision est passée de **67,3 % à 95,9 %**.

Le template matching n'avait donc pas été une mauvaise idée. Il avait permis de démarrer sans dataset, de vérifier que le principe tenait debout et de préannoter la suite. Une fois les données disponibles, le classifieur faisait mieux et permettait de traiter plusieurs objets de la même manière : trouver la zone, reprendre les pixels dans la photo originale, puis décider.

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

Ma première solution utilisait ORB pour recaler la photo sur le scan de référence et retrouver les quatre coins exacts. Quand il répondait, le contour était excellent : **527 contours vérifiés, 527 corrects**. Mais il lui arrivait aussi de ne rien rendre, et chaque tentative coûtait environ **1,3 seconde par merveille** sur le téléphone.

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
