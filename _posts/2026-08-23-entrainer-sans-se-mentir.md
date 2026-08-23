---
layout: post
title: "Entraîner sans se mentir : le benchmark aussi peut tricher"
tags: [project, computer-vision, machine-learning, testing, methodology, board-games]
header_image: /assets/img/7wd-wonder-other-class.jpg
unlisted: true
permalink: /blog/preview/9b3e6f40/entrainer-sans-se-mentir
sitemap: false
---

Sur [mon scoreur inutilement complexe de 7 Wonders Duel](/blog/preview/c84f21a7/7-wonders-un-seul), j'ai fini par obtenir **99,4 %** de rappel sur les merveilles. Assez pour sabrer le champagne et passer au problème suivant.

Heureusement, j'ai regardé d'où venaient les annotations. Le modèle repassait surtout un examen dont il avait lui-même dicté une bonne partie des questions.

## 99,4 %, champagne

Au départ, mon jeu de référence contenait 188 boîtes dessinées autour des merveilles. J'ai ensuite fait tourner le détecteur sur davantage de photos, vérifié ses 406 propositions, corrigé les cadres et ajouté ce qu'il avait raté. La vérité terrain est passée à **531 boîtes**.

Le détecteur en retrouvait 528. Donc **528/531 : 99,4 %**.

Le calcul était juste. La conclusion, beaucoup moins.

Parmi ces boîtes de référence, **73,8 % avaient d'abord été proposées par ce même détecteur**, puis confirmées à la main. C'est une très bonne façon d'annoter vite. C'est une moins bonne façon de construire un juge indépendant : le dataset contenait surtout les objets que le modèle savait déjà proposer.

J'ai donc isolé les 72 boîtes dessinées là où il n'avait rien vu. Il en retrouvait 69, soit **95,8 %**. Toujours bon, mais surtout beaucoup plus instructif. Les deux seules merveilles de moins de 80 pixels dans l'image donnée au réseau étaient ratées toutes les deux.

Ce n'était plus « il manque trois boîtes ». C'était « il manque les petites boîtes ». Enfin un problème sur lequel agir.

## Une annotation a aussi une provenance

Depuis, chaque annotation garde son origine : proposée par le modèle, récupérée par OCR ou dessinée sans aucune aide. La boîte finale peut être identique ; son pouvoir de preuve ne l'est pas.

Je continue évidemment à préannoter : redessiner chaque rectangle transformerait vite ce hobby en emploi administratif non rémunéré. Mais la proposition ne devient une vérité qu'après relecture, et sa provenance ne disparaît pas après validation.

Quand le détecteur invente une treizième merveille sur une photo qui n'en contient que douze, effacer la boîte nettoie seulement l'écran. La conserver comme **négatif difficile** apprend au prochain modèle que cet objet précis n'est pas une merveille. Une erreur non versée dans les données est condamnée à revenir demander des nouvelles.

## Ne jamais couper une partie en deux

Le deuxième piège était plus discret.

Les photos d'une même partie partagent la table, la lumière, le téléphone et parfois la même carte sous un angle voisin. Les mélanger entre entraînement et validation permet au modèle d'apprendre le décor le lundi et d'être félicité pour l'avoir reconnu le mardi.

J'ai donc séparé les **parties**, jamais les images.

Après avoir gardé la partie du camping comme juge externe, il me restait **124 merveilles réparties sur 17 parties**. Trop peu pour condamner un tiers du corpus à ne jamais servir à l'entraînement. J'ai regroupé ces parties en **six plis**.

À chaque tour, j'entraîne sur cinq groupes et je teste sur le sixième. Une partie reste toujours entière d'un côté de la barrière. Après six entraînements, chacune des 124 merveilles a été jugée exactement une fois, sans que le modèle ait vu sa partie.

L'ancien classifieur obtenait **120/124**. Le candidat, **124/124**.

Ces six modèles ne sont jamais livrés. Ils valident la recette ; j'en entraîne ensuite un septième sur toutes les images disponibles. La validation demande « est-ce que ça généralise ? ». Le dernier entraînement répond « alors pourquoi jeter des données ? ».

## Les mini-lots n'ont pas montré plus d'images

Le réglage qui a récupéré trois des quatre cas était presque vexant : la taille des lots.

J'entraînais sur tout le corpus d'un coup. Une époque, une correction des poids. Sur 150 époques : **150 mises à jour**.

En paquets de 64, une époque déclenche environ dix corrections. Toujours 150 passages sur chaque image, mais environ **1 500 mises à jour**. En ne changeant que ce réglage, le score est passé de **121/124 à 124/124**.

Ma première explication était que les mini-lots montraient davantage de variations au modèle. Elle sonnait bien. Elle était fausse.

Une image apparaissait 150 fois dans les deux cas, avec 150 transformations. Les mini-lots ne lui offraient pas plus d'expériences ; ils évitaient surtout d'attendre la fin du corpus pour corriger le tir. J'ai eu besoin d'une ligne de comptage pour falsifier une explication que j'avais déjà commencé à trouver élégante.

## Quand 67/67 ne permet plus de décider

Une **ablation**, c'est retirer un composant, rejouer exactement le même test et regarder ce qu'il apportait réellement. J'en ai fait une sur le vote qui décide si une merveille est construite.

Un de ses votants, `tuck_box`, sonde les quatre marges de la carte. Il pèse **44,8 Mo** et coûte quatre inférences par merveille. Depuis que le détecteur orienté fournit directement un quadrilatère fiable, sa raison d'être historique a largement disparu.

| Configuration | Score |
|---|---:|
| Vote complet en production | **67/67** |
| CNN sur le quadrilatère seul | **67/67** |
| CNN + bandeau, sans `tuck_box` | **62/67** |
| `tuck_box` seul | **61/67** |

Dans les six désaccords entre le CNN et `tuck_box`, le CNN avait raison six fois. La conclusion paraît évidente : supprimer `tuck_box`.

Je ne l'ai pas fait.

Un juge où presque tout fait 67/67 est **saturé**. Il prouve qu'aucune variante ne casse les cas connus ; il ne distingue plus celle qui résistera au prochain cas tordu. Et `tuck_box` reste le seul votant appris lorsque l'identité de la merveille échoue, tout en couvrant des cartes qui dépassent d'un autre côté que celui attendu.

Son retrait a donc un déclencheur explicite : quand le harnais dépassera ses sept parties, je rejouerai l'ablation sur le corpus élargi. S'il reste inutile ou nuisible, il sortira du vote. En attendant, **67/67 contre 67/67 signifie « je ne sais pas »**, pas « les deux systèmes sont équivalents ».

Le modèle n'avait pas triché avec ses 99,4 %. Il avait répondu exactement à la question. C'est moi qui avais écrit un examen trop facile.
