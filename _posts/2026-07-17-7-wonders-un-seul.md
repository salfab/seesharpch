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

![Une fin de partie complète de 7 Wonders Duel sur une table en bois](/assets/img/7wd-vue-originale.jpg)

Sur ma table, avec une bonne lumière, ça marchait très bien. Je repérais les cartes, je lisais leurs couleurs, je comptais les pièces. Là, tu te dis que t'as plié le game avec une POC d'une heure et qu'on peut retourner siroter des blue lagoons sur la plage.

![La même photo, avec les détections du programme dessinées par-dessus](/assets/img/7wd-vue-annotee.jpg)

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

Dans ce cas précis, le modèle ne manquait pas de transformations inventées par le code. Il manquait de vrais exemples de la classe rare.

## Un bon score peut répondre à la mauvaise question

J'ai aussi réussi à me fabriquer un score excellent en posant la mauvaise question. J'ai fait vérifier 406 propositions du détecteur. Mon jeu d'annotations de référence est passé de **188 à 531 boîtes**. Il en retrouvait 528 : **99,4 %**. Champagne.

Sauf que **73,8 %** de ces boîtes avaient d'abord été proposées par ce même détecteur, puis confirmées à la main. Je mesurais surtout sa capacité à retrouver ses propres idées. Sur les 72 boîtes dessinées là où il n'avait rien proposé, il n'en retrouvait plus que 69 : **95,8 %**. Et les deux seules merveilles de moins de 80 pixels dans l'image reçue par le réseau ? Ratées toutes les deux.

Depuis, chaque annotation garde sa provenance. Le calcul était juste. L'étalon était biaisé. Deux petites merveilles ne suffisent pas pour réentraîner le modèle ; elles suffisent pour savoir quelles photos prendre ensuite.

## C'est la taille qui compte !

Je pensais avoir réglé le problème de résolution en revenant découper chaque objet dans la photo originale. C'était nécessaire, mais pas suffisant.

Sur une vue d'ensemble des deux cités, certains lauriers ne faisaient plus que **48 × 65 pixels**. Le lecteur se trompait alors sur des chiffres qu'il reconnaissait très bien dans des photos plus rapprochées — parfois même sur des images dont une version plus grande avait servi à l'entraîner.

J'ai repris exactement le même recadrage et fait varier un seul facteur. L'éclaircir empirait le résultat. Renforcer la netteté aussi. En revanche, un agrandissement bicubique ×3 faisait relire le « 1 » correctement, avec **0,99** de confiance.

L'agrandissement n'avait évidemment inventé aucun détail. Il avait remis les formes dans un ordre de grandeur familier pour le réseau.

J'ai donc ajouté au dataset des copies réduites à **45–70 %** de leur taille, sans retirer les originales. Le modèle apprenait désormais le même laurier de près et de loin. La photo difficile par cité est passée à **28/28** lectures correctes ; sur la vue d'ensemble, on est passé d'environ **30/39 à 35/39**.

J'ai essayé la même recette sur les guildes. Aucun progrès. Cette fois, le classifieur n'était pas coupable : la bannière violette était ratée en amont et la bande à lire était mal extraite. Deux nuits de GPU ne réparent pas le mauvais étage du pipeline.

Le recalage ORB — la méthode qui tente de retrouver précisément les quatre coins d'une merveille — a rencontré une variante du même problème. Ses descripteurs examinent des zones de taille fixe. Quand une merveille devient petite dans la photo, ses motifs ne sont plus à la même échelle que dans l'image de référence et le recalage abandonne.

Là encore, j'agrandis le recadrage ×2. Pas pour créer des détails, mais pour remettre les points caractéristiques à une taille qu'ORB connaît. Le recalage est passé de **0/8 à 8/8** sur la vue d'ensemble. Je ne déclenche ce second essai que si le premier échoue sur une petite boîte : inutile de secouer les cas qui fonctionnent déjà.

À ce stade, j'avais fini par résumer le problème un peu vite : quand un objet est trop petit, il faut l'agrandir.

La piste militaire s'est chargée de corriger la théorie.

Sur certaines photos, elle occupait presque toute la largeur de l'image. Le détecteur YOLO ne la renvoyait plus comme un seul objet, mais comme plusieurs boîtes emboîtées ou posées bout à bout. J'ai d'abord soupçonné les annotations. Le problème venait en fait d'une limite géométrique du détecteur : sur son image d'entrée de 1280 pixels, une prédiction ne pouvait pas tracer une boîte de plus de 1024 pixels de côté. La piste était tout simplement trop grande pour tenir dedans.

Le modèle ne découpait donc pas le plateau parce qu'il avait mal appris. Il faisait ce qu'il pouvait avec plusieurs boîtes, puisqu'aucune ne pouvait couvrir l'ensemble.

Cette fois, la solution a été de **dézoomer** : réduire la photo à 65 % et la placer au centre du canevas avec une marge autour. Sans réentraînement ni nouveau modèle, le détecteur est passé de deux boîtes à une seule. Elle ne couvrait jusque-là qu'environ **85 %** de la longueur annotée ; après dézoom, elle la couvrait entièrement, et aucun des **73 médaillons** du jeu de test ne restait dehors — contre 17 auparavant.

Il ne fallait pas pousser beaucoup plus loin. À 50 %, les grandes pistes tenaient toujours, mais trois petites devenaient à leur tour trop petites pour être détectées.

La fenêtre a donc deux bords. Pour les lauriers, il fallait zoomer sur leur contenant. Pour la piste militaire, il fallait dézoomer. La taille en pixels n'est pas un détail d'implémentation : elle fait partie de l'entrée.

## Une ligne de code peut encore gagner

Introduire des modèles n'a pas rendu les règles classiques inutiles.

Le système proposait parfois un jeton sur une photo qui n'en contenait aucun. Les vrais dépassaient **93 %** de similarité ; les faux restaient sous **91 %**. Un seuil a suffi. Aucun nouvel entraînement.

Certains jetons de progrès contiennent aussi une couronne de lauriers avec un chiffre. Le lecteur avait donc de bonnes raisons de la prendre pour celle d'une carte et de compter ses points deux fois.

La correction a été géométrique : si le centre du laurier tombe dans le disque d'un jeton déjà détecté, je l'écarte.

La distinction ne se faisait donc pas sur l'apparence, mais sur la position.

Ces deux corrections fonctionnaient parce qu'un seuil séparait proprement les bons cas des mauvais. Ce luxe n'est pas toujours disponible.

Sur une photo, le détecteur avait tracé deux cercles presque superposés sur la même pièce de 1. Le trésor valait 6 ; l'application annonçait 7. Il suffisait, en apparence, de fusionner les cercles trop proches. Sauf que le jeu autorise aussi de vraies piles de pièces.

Sur tout le corpus, les plages de distance relative des doublons et des piles légitimes se recouvraient. La comparaison des deux images ne les séparait pas davantage.

![À gauche, deux détections sur une seule pièce ; à droite, deux vraies pièces empilées avec presque le même écartement](/assets/img/7wd-doublon-vs-pile.jpg)

*À 0,77 contre 0,79, le seuil magique peut prendre sa journée.*

J'ai donc résisté à la tentation de « corriger » silencieusement. L'application marque la paire comme suspecte et demande une vérification. Ce drapeau a aussi sa date de péremption : le jour où plus aucun doublon ne le déclenchera sur les photos témoins, un test demandera de le retirer avant qu'il ne commence à embêter les vraies piles.

Automatiser n'oblige pas à faire semblant de savoir.

## L'OCR a préparé son propre remplacement

Restait l'identité des merveilles.

Au départ, j'ai pris le *low-hanging fruit* : lire leur nom avec un OCR, autrement dit un lecteur de texte. Ça fonctionnait dès le premier jour, sans dataset ni entraînement. C'était lent et dépendant de la langue, mais j'avais une réponse. Très bien pour démarrer.

L'OCR a aussi préannoté le premier lot d'images. Je corrigeais les noms, j'agrandissais les boîtes qui ne couvraient que le texte et j'ajoutais les merveilles ratées. La solution provisoire faisait le travail et me fabriquait déjà le dataset de sa remplaçante.

Avec assez d'exemples vérifiés, j'ai entraîné YOLO à trouver les merveilles entières, puis un ResNet à reconnaître leur illustration. Sur 104 merveilles annotées à la main, l'OCR en retrouvait **80**. La voie visuelle en retrouvait **103**, sans en inventer sur ce jeu de test.

La seule merveille ratée était presque à l'envers. Le détecteur l'avait bien trouvée, mais le classifieur donnait **0,49** de confiance pour un seuil fixé à **0,50**.

Avant de sortir un recalage géométrique plus lourd, j'ai essayé une TTA par rotation — *Test-Time Augmentation*, ou augmentation au moment de la prédiction. Je présente le même recadrage à ResNet dans quatre orientations : 0°, 90°, 180° et 270°. Je garde la réponse pour laquelle il est le plus sûr.

C'est le même modèle, sans nouvel entraînement : juste quatre façons de regarder la carte. La confiance est passée de **0,49 à 0,97**.

L'identification des merveilles est aussi beaucoup plus rapide. Modèles déjà chargés sur le CPU, la voie OCR prenait environ **20 secondes par photo**. YOLO et ResNet, rotations comprises à ce stade : **1,4 seconde**.

## La treizième merveille n'en est pas une

Ce premier jeu de test ne racontait pas toute l'histoire. Sur de vraies parties, le localisateur était moins sélectif : il proposait aussi des guildes, des cartes ordinaires, le plateau militaire, le livret de règles, un sachet de pièces et même un mouchoir.

![Exemples d'objets que le classifieur de merveilles était forcé de ranger parmi les douze merveilles](/assets/img/7wd-wonder-other-class.jpg)

*Douze noms de merveilles pour répondre à ça. Forcément, ResNet improvisait.*

Le classifieur ne connaissait que les douze merveilles du jeu. Il n'avait aucune réponse « rien de tout ça » et devait donc choisir la moins mauvaise. La Guilde des Bâtisseurs devenait ainsi Piraeus avec une confiance de **0,9938** — et huit points fantômes partaient chez le mauvais joueur.

J'ai évidemment pensé à relever le seuil de confiance. Un second entraînement, construit avec la même recette mais un autre tirage aléatoire, a calmé cette idée : devant une table vide, il choisissait une merveille avec une confiance de **1,0000**. Sur le plateau militaire, les deux modèles dépassaient **0,97**. Hors de ce qu'il a appris, le score de confiance n'est pas un détecteur de mensonge.

J'ai donc ajouté une treizième classe : **« autre »**, entraînée avec des intrus récoltés sur de vraies photos. Sur des images gardées hors entraînement, le nouveau modèle en a rejeté **63 sur 64**. Sur les vraies merveilles du même lot, il en a reconnu **90 sur 94**, contre **89 sur 94** pour le modèle à douze classes. Il avait appris à rejeter les intrus sans sacrifier les merveilles au passage.

Il n'avait pas appris une treizième merveille. Il avait enfin appris à répondre qu'il n'en voyait aucune.

## Une image plus claire n'est pas un reflet

Il restait deux merveilles que le classifieur lisait mal. Toutes les deux étaient noyées dans un reflet. Mon premier réflexe a été d'ajouter davantage de variations de luminosité.

En mesurant les images, le diagnostic a changé. Une carte sombre gardait des contrastes normaux. Le reflet, lui, ajoutait un voile et écrasait les détails.

Mon augmentation multipliait tous les pixels par le même nombre. Elle savait assombrir ou éclaircir une image, mais conservait son contraste relatif. Elle ne pouvait donc jamais fabriquer le défaut qu'elle était censée couvrir.

![Cinq versions d'une même merveille : assombrir ou éclaircir conserve le contraste relatif, tandis qu'un voile synthétique reproduit le reflet qui gêne réellement le modèle](/assets/img/7wd-wonder-glare-augmentation.jpg)

Avec un terme additif, j'ai enfin obtenu une image synthétique qui ressemblait au vrai reflet. Ça ne garantissait pas que le prochain modèle réussirait. Au moins, il verrait enfin le bon problème.

Le modèle avait vu des images plus claires. Il n'avait jamais vu une image voilée. Ce n'est pas la même chose.

## Trois avis valent mieux qu'un. En principe.

Le problème des reflets était au moins correctement posé. Restait une autre question, indépendante : la merveille avait-elle réellement été construite ?

Dans le jeu, une carte est alors glissée sous la merveille. Une fois celle-ci redressée dans son orientation de référence, la carte dépasse toujours à droite. Je pouvais donc découper une fine bande juste après ce bord et demander à un petit classifieur : « carte ou table ? »

Pour obtenir ce bord avec précision, j'utilisais un recalage ORB entre la photo et l'image de référence de la merveille. La méthode fonctionnait bien, mais pas toujours : sur **36 merveilles sur 378**, le recalage échouait. L'identité était correcte, mais sans les quatre coins exacts je ne pouvais même pas fabriquer la bande à classifier.

![Douze merveilles correctement reconnues, mais dont plusieurs n'ont pas pu être recalées par ORB](/assets/img/7wd-vote-orb-echec.jpg)

*Les noms sont bons. Le recalage précis, lui, a abandonné.*

J'ai essayé une solution moins délicate : sonder les quatre marges de la boîte trouvée par YOLO, sans chercher à deviner l'orientation. Ça récupérait **25 merveilles construites** abandonnées par l'ORB. En revanche, sur une table serrée, une marge pouvait attraper la carte voisine et conclure que la merveille était construite.

![La marge de Circus Maximus recouvre une merveille voisine et produit un faux positif](/assets/img/7wd-vote-yolo-voisin.jpg)

*Circus Maximus n'est pas construite. Sa marge a simplement regardé dans l'assiette de la voisine.*

Il restait un troisième indice : chercher le bandeau de la carte dans la zone où elle devrait dépasser. Très utile contre les voisines. Complètement aveugle si la carte est glissée face cachée.

![Des merveilles avec des cartes glissées face cachée, sans bandeau visible à détecter](/assets/img/7wd-vote-bandeau-face-cachee.jpg)

*La carte dépasse bien. Face cachée, elle ne montre juste aucun bandeau.*

Pris séparément, aucun des trois n'était infaillible. Leurs erreurs n'arrivaient simplement pas au même endroit. J'ai donc fait voter :

1. le classifieur sur la bande précisément recalée par ORB, quand ce recalage existe ;
2. le même classifieur sur les quatre marges de la boîte YOLO ;
3. la présence d'un bandeau de carte dans la zone attendue.

Deux voix l'emportent. Sur une carte face cachée, ORB et YOLO compensent l'absence de bandeau. Quand l'ORB attrape une voisine, la sonde YOLO et le bandeau peuvent le mettre en minorité.

J'avais donc bricolé une sorte de *Minority Report* pour merveilles en carton. Avec une différence importante : mes trois votants ne voient pas le futur et la majorité peut encore se tromper avec beaucoup d'assurance.

Sur les cas vérifiés jusqu'ici, l'ORB seul obtenait **82/83**. Le vote arrive à **83/83**. Ça corrige tous les échecs connus ; ça ne transforme pas trois systèmes imparfaits en vérité mathématique. Le prochain cas tordu aura toujours le droit de déposer une réclamation.

## Le sens d'une carte ne méritait pas son propre modèle

Le vote réglait les cas connus, mais le recalage ORB prenait environ **1,3 seconde par merveille** sur le téléphone. En travaillant sur une piste destinée à le remplacer un jour, j'ai essayé un détecteur qui rend directement une boîte orientée.

Il donne bien l'inclinaison de la carte, mais son angle vit sur 180°, pas sur 360°. Une carte à l'endroit et la même après un demi-tour forment exactement le même rectangle. Pour afficher son nom, ce n'est pas grave. Pour trouver son bord droit, ça change tout.

Ma première solution a été d'ajouter un petit modèle « à l'endroit ou à l'envers ». Sur 545 cartes vérifiées, il s'est trompé **23 fois**. Seulement 4,2 %, mais une erreur silencieuse : le pipeline allait inspecter le mauvais côté.

La TTA retrouvait le nom d'une carte retournée. Elle ne garantissait pas que la rotation gagnante indiquait son bord droit.

J'ai donc intégré le sens dans la réponse : chaque merveille possède désormais deux classes, une par orientation. **24 classes, plus « autre »**. Sur les images gardées hors entraînement, le résultat est passé à **205/205**.

Le détecteur orienté n'a pas encore remplacé ORB dans le vote. En revanche, ce détour a fait disparaître le modèle haut/bas, sa relecture à 180° et la TTA à quatre rotations du pipeline d'identification.

Je n'ai pas rendu le petit modèle plus fiable. Je l'ai supprimé.

## Le modèle n'a pas le droit de reconnaître la table

Le score de **83/83** mesurait le vote de bout en bout sur les cas connus. Sur un autre jeu de test, je devais maintenant choisir la version du classifieur qui lit réellement la bande dépassant sous une merveille.

J'avais bien sept parties dont le score complet avait été saisi. À côté, onze autres vraies parties avaient été annotées uniquement au niveau des merveilles. Certaines n'avaient pas de photo d'ensemble exploitable pour juger le score de bout en bout, mais leurs images suffisaient pour répondre à une question beaucoup plus locale : cette merveille est-elle construite ou simplement posée ?

J'ai gardé la partie du camping à l'écart comme juge externe. Il restait donc **124 merveilles réparties sur 17 parties** pour choisir le classifieur. C'était toujours trop peu pour jeter un tiers du corpus dans un jeu de test fixe.

J'aurais pu séparer les vignettes au hasard. Ça aurait surtout permis de tricher sans le vouloir : deux images de la même partie partagent la table, la lumière, le téléphone et parfois la même merveille sous un angle voisin. Le modèle pouvait reconnaître le décor et me laisser croire qu'il avait appris la carte glissée.

J'ai donc découpé les **parties**, pas les images, en six groupes. J'ai gardé le principe du *leave-one-game-out* — ne jamais mélanger une même partie entre l'entraînement et le test — mais avec une validation croisée groupée en six plis pour éviter dix-sept entraînements. Pour chaque pli, j'ai entraîné un modèle sur les cinq autres groupes, puis je lui ai fait juger uniquement les parties qu'il n'avait jamais vues. À la fin, chacune des 124 merveilles avait été testée une fois, toujours hors de sa partie d'origine.

L'ancien classifieur obtenait **120/124**. Le candidat, **124/124**.

Ces six modèles ne sont pas ceux qui partent dans l'application. Ils servent de juges : ils vérifient que la recette tient sur des parties qu'elle n'a jamais vues. Une fois cette recette validée, j'entraîne un septième modèle sur l'ensemble du corpus, sans garder de pli dehors. C'est lui que j'exporte et que l'application utilise sur les prochaines photos.

La validation croisée répond donc à « est-ce que cette recette généralise ? ». Le dernier entraînement récupère ensuite toutes les données disponibles pour fabriquer le modèle de production.

Trois des quatre cas récupérés venaient d'un réglage beaucoup moins glamour. J'entraînais jusque-là sur tout le corpus en un seul lot. Les poids du réseau n'étaient donc corrigés qu'une fois par époque : **150 mises à jour** en tout. Avec des mini-lots de 64 images, le même nombre d'époques en produit environ **1 500**. Dans l'expérience qui isolait ce seul réglage, le score est passé de **121/124 à 124/124**.

Ma première explication était que les mini-lots montraient davantage de variations au modèle. Elle sonnait bien. Elle était fausse.

J'ai suivi une image pendant tout l'entraînement : dans les deux cas, elle apparaissait 150 fois et recevait 150 transformations. Les mini-lots ne lui montraient donc pas plus de variantes. Ils évitaient surtout que tout le corpus partage la même transformation pendant une passe, et mettaient les poids à jour dix fois plus souvent.

La validation a coûté six entraînements. Corriger mon explication, une simple ligne de comptage. Le modèle n'était pas la seule chose à tester. Mes explications aussi.

## Les photos ratées sont les plus utiles

Il reste des cas durs : une merveille petite, à moitié cachée, mangée par un reflet. Le prochain gain viendra de photos de ce genre, pas d'un nouveau seuil.

La classe « autre » est née exactement comme ça : sur une photo de douze merveilles, le détecteur en avait proposé treize. J'ai marqué l'intruse ; au prochain entraînement, elle a rejoint les exemples de cette classe. L'application peut préparer l'annotation. Elle ne se corrige pas toute seule.

C'est un peu comme dans le jeu vidéo *Hades*, où le but est de s'échapper des Enfers. Quand une tentative échoue, on repart du début, mais certaines ressources récoltées pendant le *run* servent à débloquer de petites améliorations permanentes. Ici, une photo vérifiée devient l'une de ces ressources.

La prochaine version ne repartira donc pas tout à fait les mains vides.
