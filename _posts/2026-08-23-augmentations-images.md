---
layout: post
title: "Mon modèle avait vu du sombre. Pas des reflets."
tags: [project, computer-vision, machine-learning, data-augmentation, board-games]
header_image: /assets/img/7wd-wonder-glare-augmentation.jpg
unlisted: true
permalink: /blog/preview/e2c8a517/augmentations-images
sitemap: false
---

*Un détour technique du [scoreur inutilement complexe de 7 Wonders Duel](/blog/preview/c84f21a7/7-wonders-un-seul), consacré aux jours où « plus de données » n'était pas une réponse suffisante.*

La *data augmentation* a un côté rassurant. On prend vingt photos, on les tourne, on les assombrit, on ajoute un peu de bruit et, soudain, le modèle en a vu des milliers. Sur l'écran, ça ressemble à de la diversité.

Le problème, c'est qu'une transformation ne fabrique que ce qu'on lui a demandé. Si le défaut réel n'existe pas dans son vocabulaire, on peut faire chauffer le GPU toute la nuit : le modèle ne l'aura toujours jamais vu.

Mon scoreur de 7 Wonders Duel m'a appris ça plusieurs fois. Avec, heureusement, des résultats assez contradictoires pour éviter d'en tirer une règle trop confortable.

## Le cas où le synthétique a vraiment gagné

Un jeton Agriculture, posé dans une ombre, n'était plus détecté. Confiance : **0,00**. En éclaircissant la photo à la main, il revenait. Pour une fois, le diagnostic semblait simple : le modèle manquait de jetons sombres.

YOLO appliquait déjà une variation aléatoire de luminosité, `hsv_v=0,4`. J'ai essayé de pousser le curseur. À `0,5`, le résultat dépendait de la graine. À `0,9`, plus rien ne tenait debout. `0,6` récupérait Agriculture à **0,46**, mais faisait disparaître trois autres jetons : le rappel tombait à **50/53**.

Un jeton récupéré, trois autres perdus. Mauvais échange.

J'ai donc repris les vingt photos annotées et créé deux copies assombries de chacune, à ×0,45 et ×0,30. Les originales restaient dans le dataset. Le sombre n'était plus la queue rare d'une transformation aléatoire : il devenait une seconde base permanente autour de laquelle le jitter pouvait varier.

Copies sombres plus `hsv_v=0,6` : Agriculture est passé de **0,00 à 0,73**, avec un rappel de **53/53**. Zéro nouvelle photo.

Le synthétique avait marché parce que le défaut était bien défini, reproductible et réellement fabriqué par la transformation.

## La même recette ne sauve pas les pièces

La même semaine, une pièce argentée disparaissait sur une table en verre gris. J'ai naturellement pensé refaire le coup des jetons.

Les variations de luminosité n'ont rien récupéré. Renforcer localement le contraste en sauvait deux ou trois, mais faisait passer les faux positifs de **4 à 15**. Puis j'ai photographié la même table le matin, sous une lumière diffuse : environ **20 pièces sur 20** détectées.

Le problème n'était ni la table ni une image trop sombre. C'était la lumière dure de l'après-midi et ses reflets. Mes photos existantes ne contenaient pas ce régime-là. Les assombrir ne pouvait pas l'inventer.

Cette fois, il fallait de vraies photos sous lumière réfléchie — ou un guidage de prise de vue. Le synthétique ne remplace la donnée que lorsqu'on sait réellement synthétiser ce qui manque.

## Pour les lauriers, le problème était la taille

Sur une vue d'ensemble, un laurier de **48 × 65 pixels** était lu « 2 » avec 0,94 de confiance. Le même recadrage agrandi trois fois redevenait un « 1 » à **0,99**. L'éclaircir empirait la lecture. Renforcer la netteté aussi.

Le réseau ne manquait pas de lumière. Il n'avait presque jamais vu ce chiffre aussi petit.

J'ai ajouté à chaque recadrage une copie dont la résolution source était réduite à **45–70 %**, sans retirer l'original. Le modèle voyait désormais le même laurier de près et de loin. Une photo difficile est passée à **28/28** lectures correctes ; sur la vue d'ensemble, environ **30/39** sont devenues **35/39**.

Même mécanique que pour les jetons sombres : conserver le régime normal, puis ajouter durablement le régime précis qui manquait.

## Une image plus claire n'est pas un reflet

Deux merveilles résistaient encore. Toutes les deux étaient couvertes d'un reflet. Mon augmentation savait déjà éclaircir les images, mais ce n'était pas la bonne opération.

Multiplier les pixels par un facteur change la luminosité et le contraste dans la même proportion. Un reflet ajoute plutôt un voile : la moyenne monte pendant que les détails s'écrasent. En chiffres, le rapport contraste/luminosité d'une merveille ordinaire tournait autour de **0,299**. La carte voilée tombait à **0,135**. Une simple multiplication ne pouvait jamais atteindre ce régime.

Avec une transformation additive, `0,6 × image + 0,30`, la copie synthétique est descendue à **0,133**. Pour la première fois, l'augmentation ressemblait vraiment à la photo qui posait problème.

Ça ne garantissait pas que le prochain entraînement réussirait. Au moins, il allait enfin voir le défaut que j'essayais de corriger.

## Plus de variations peut faire moins bien

La classe « 7 » des lauriers ne comptait que onze exemples. J'ai essayé de l'aider avec du sur-échantillonnage et des rotations ciblées. La précision est passée de **0,96 à 0,78**.

Annulé.

Forcer la classe rare avait déplacé toute la distribution et perturbé des chiffres qui fonctionnaient déjà. Le manque n'était pas « davantage de transformations ». C'étaient de vrais 7 dans de nouvelles parties.

J'ai aussi appliqué les copies basse résolution aux guildes et au classifieur chargé de décider si une merveille était construite. Les validations étaient excellentes. Sur la photo qui avait déclenché le chantier : **zéro progrès**.

Le classifieur n'était pas fautif. Pour les guildes, la bannière violette était mal détectée en amont. Pour les merveilles, la bande donnée au modèle était mal extraite. J'avais entraîné la bonne technique sur le mauvais étage du pipeline.

Une augmentation utile doit donc passer trois questions : est-ce qu'elle reproduit réellement le défaut, est-ce que ce défaut manque aux données, et est-ce bien ce modèle qui le provoque ?

Sinon, on n'augmente pas la robustesse. On augmente surtout la facture d'électricité.
