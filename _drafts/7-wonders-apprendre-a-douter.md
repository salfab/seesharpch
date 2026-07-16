---
layout: post
title: "J'ai arrêté de vouloir un modèle parfait ; je lui ai appris à douter"
tags: [project, computer-vision, machine-learning, ai, board-games]
unlisted: true
permalink: /blog/preview/9f3ac1d7/7-wonders-apprendre-a-douter
sitemap: false
---

<!-- a4:intro -->
*Quatrième volet, après [« ça marche sur ma table »](/blog/preview/6e5a7cf3/7-wonders-duel-score-photo), [« généraliser sans casser »](/blog/preview/b2e84d15/7-wonders-generaliser) et [« le transfer learning »](/blog/preview/c7a0f6e2/7-wonders-transfer-learning).*

Depuis le dernier épisode, mon scoreur de 7 Wonders Duel a fait un bond — mais pas celui que j'attendais. Je croyais que la suite serait une course à la précision : un détecteur un peu meilleur, un modèle un peu plus fin, jusqu'à ce que tout soit juste. Ce qui a vraiment changé la donne, c'est l'inverse : **j'ai arrêté de vouloir que le modèle ait toujours raison, et je lui ai appris à dire quand il n'est pas sûr.**

Et une deuxième chose, moins glorieuse mais plus utile : j'ai pris l'habitude de **mesurer avant de construire**. La plupart de mes bonnes idées meurent à la mesure. Tant mieux — elles mourraient plus tard, en production, et plus cher.

<!-- a4:faux-confiant -->
## Le pire bug n'est pas l'erreur, c'est l'erreur sûre d'elle

Un scoreur qui rate une carte et l'affiche en gris « à vérifier », ce n'est pas grave : on corrige d'un tap. Un scoreur qui lit **7** sur un laurier qui vaut **2**, et l'annonce fièrement dans le total, c'est un désastre silencieux — on ne le voit pas, on signe le score faux.

En analysant une partie, j'ai mesuré que **15 valeurs de lauriers sur 182 étaient lues faux, toutes à haute confiance**. Le motif était net : des inversions à 180° (2↔7, 6↔9, 1↔7). La cause : mon lecteur choisit **une** orientation de lecture pour toute la photo, alors que le tableau adverse est posé tête-bêche. Le tableau du perdant est lu à l'envers, en bloc.

J'ai essayé de *corriger* l'orientation. Trois fois. Trois échecs mesurés (un sosie à l'envers se lit avec autant d'aplomb qu'à l'endroit). Alors j'ai changé d'objectif : puisque je ne sais pas *corriger*, je vais au moins *douter*. Quand une autre orientation lit un chiffre **différent** avec une confiance comparable, la valeur est marquée **suspecte** — l'app la met en ambre et demande confirmation, au lieu de l'asséner.

Résultat : 100 % des inversions signalées, pour environ un demi-tap de confirmation en trop par photo. Le score faux confiant est devenu une question polie.

<!-- a4:doute -->
## Une architecture du doute

Ce petit basculement — *douter plutôt qu'inventer* — est devenu un principe. Le scoreur porte maintenant plusieurs sortes de doutes honnêtes :

- **une merveille dite « construite » mais dont aucune bannière de carte ne confirme le tuck** → « celle-ci, tu es sûr qu'elle est construite ? » ;
- **un laurier que le détecteur voit mais que le lecteur n'arrive pas à chiffrer** → proposé sans valeur, à remplir ;
- **une détection isolée, à contre-sens du reste du plateau** → signalée comme parasite probable, d'un tap on la retire.

Aucun de ces cas ne prétend avoir la réponse. Tous transforment une **erreur invisible** en **case à cocher visible**. Pour un outil qu'on utilise à deux au-dessus d'une vraie partie, c'est exactement le bon contrat : l'IA fait le gros du travail et me montre du doigt les trois endroits où mon œil vaut mieux que le sien.

<!-- a4:mesurer -->
## Mesurer avant de construire (ou : le cimetière des bonnes idées)

L'autre changement est méthodologique. Avant de coder un remède, je le **mesure** contre un jeu de parties réelles qui servent d'étalons. La règle est brutale : un candidat n'est promu que s'il gagne **sans rien casser** sur les parties déjà connues.

Ce filtre a tué beaucoup de mes idées, et j'en suis fier :

- corriger les faux lauriers avec plus de données d'entraînement → **aucun gain** (à la résolution du modèle, une pastille de ressource imprimée fait vingt pixels : l'information pour la distinguer d'un vrai laurier *n'existe pas* dans ce qu'il voit) ;
- séparer deux couleurs de cartes par une règle colorimétrique → **falsifié** (les distributions se chevauchent) ;
- baisser le seuil d'un détecteur pour rattraper les manqués → **mauvais marché** (les faux positifs quadruplent avant que le rappel ne bouge).

À chaque fois, la mesure m'a épargné d'embarquer une régression déguisée en progrès. Le corollaire réconfortant : quand un candidat **gagne** à la mesure, on le sait, et on le déploie sans trembler.

<!-- a4:dumps -->
## Quand la donnée, elle, paie vraiment

Justement, une idée a gagné — et c'était une idée de mon adversaire de jeu autant que de moi. Un détecteur lisait mal les couleurs de cartes empilées. Plutôt que bricoler, on a fabriqué de la donnée : des **paquets de cartes empilés par couleur, comme une vraie cité**, photographiés sur plusieurs surfaces et lumières.

Le détail qui fait tout : *empilé comme en jeu*, pas étalé à plat. Une tentative précédente avec des jetons étalés avait **dégradé** les résultats — mauvaise distribution. Empilé, on reproduit exactement le cas dur (la bannière qui dépasse à peine sous la carte du dessus). Le verdict, mesuré sur de vraies parties : rappel en hausse, couleurs en hausse, **faux positifs divisés par deux**. La donnée paie quand elle imite le réel, pas quand on en empile pour en empiler.

<!-- a4:signal -->
## Le plus beau correctif de la série

Mon préféré, parce qu'il ne coûte rien. Un détecteur de jetons se mettait à halluciner le même jeton partout — y compris sur des photos qui n'en contenaient aucun. Il voyait un rond dans l'art d'une carte, et lui collait l'identité la plus proche.

En mesurant, une frontière nette est apparue : les **vrais** jetons ressemblaient à leur référence à plus de 0,93 (une mesure de similarité) ; les faux, jamais au-dessus de 0,91. Un trou franc entre les deux. Le nombre qui servait à dire « c'est plutôt tel jeton » disait *aussi*, si on l'écoutait, « …mais ça ne ressemble à aucun jeton, donc ce n'en est pas un ». Il suffisait de poser le seuil dans le trou.

Zéro réentraînement, une ligne. Tous les fantômes ont disparu, aucun vrai jeton perdu. La leçon que je retiens : **le signal qui vous trompe est souvent celui qui peut vous sauver — encore faut-il le mesurer avant de le croire.**

<!-- a4:suite -->
## La suite

Il reste des murs — l'identité des guildes, par exemple, résiste encore (le symbole qui les distingue est minuscule dans une bande sinon identique ; les approches faciles y sont, une à une, tombées à la mesure). Mais l'état d'esprit a changé pour de bon : je ne cherche plus le modèle qui ne se trompe jamais. Je construis un scoreur qui **sait ce qu'il ne sait pas**, qui le dit, et qui ne promeut une amélioration que le jour où une mesure lui donne raison.

C'est moins spectaculaire qu'une démo parfaite. C'est beaucoup plus solide.
