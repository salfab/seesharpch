---
layout: post
title: "Optimiser un pipeline GPU depuis son téléphone"
date: 2026-05-09 08:41:07 +0200
tags: [project, gpu, performance, ai, optimization, methodology]
unlisted: true
permalink: /blog/preview/f2c9a371/optimiser-gpu-depuis-telephone
sitemap: false
---

Il fait beau dehors. Le soleil tape, c'est l'occasion ou jamais de faire le plein de vitamine D. Sauf qu'il y a ce pet project que je n'arrive pas à lâcher mentalement — un pipeline de précompute GPU avec un truc bizarre dans le pipelining asynchrone que j'aimerais bien comprendre. Le genre de problème qui te trotte dans la tête pendant que tu essaies de te détendre au parc.

Tiraillé entre les deux. Sortir au soleil ou avancer sur le projet. Classique.

Sauf qu'il y a une troisième option : la commande `/remote-control` de Claude Code. Tu la lances depuis ton poste, tu sors, et tu pilotes ton agent depuis ton téléphone. Pas de code à lire, pas d'écran 27" — juste un chat avec un LLM qui a accès à ton repo, qui peut lancer des benchmarks, lire des stack traces, et te restituer ses conclusions. Toi, tu es allongé dans l'herbe.

Et c'est là que ça devient intéressant. Parce que ce n'est pas du vibe coding. Et la différence mérite d'être nommée.

## Plusieurs ordres de magnitude

Le projet sur lequel je bosse calcule l'ensoleillement de villes entières au mètre carré. Le pipeline est lourd — du Vulkan, du Rust, des centaines de millions de calculs d'ombres bâtiments par tuile. Au début c'était plusieurs heures par région. Aujourd'hui c'est quelques minutes.

Plusieurs ordres de magnitude, donc. Et zéro ligne de Rust écrite par moi. Pas parce que je suis devenu fainéant — parce que j'ai changé de niveau d'intervention. Au lieu d'écrire du code, je drive une boucle d'optimisation.

## La boucle

Elle ressemble à ça :

**1. Mesurer.** Pas pour confirmer une intuition — pour cartographier où le temps part vraiment. Un bench bien instrumenté c'est rarement ce que tu attendais. Tu pensais que c'était le GPU ? C'est l'IPC. Tu pensais que c'était l'IPC ? C'est la décompression d'un fichier de cache que personne n'avait chronométré. Le premier bench est presque toujours une surprise.

**2. Comprendre la philosophie.** Pourquoi le système est-il construit comme ça ? Qu'est-ce qui est figé pour des raisons matérielles (un GPU avec une seule queue compute), pour des raisons logicielles (le runtime Node.js mono-thread sur l'event loop), ou pour des raisons purement historiques (une décision prise il y a six mois qui n'a jamais été remise en cause) ? Ces trois catégories ont une hiérarchie radicalement différente d'immobilité. Confondre les trois, c'est s'interdire des optimisations.

**3. Proposer le contre-pied.** *"OK, aujourd'hui on fait X. Mais si à la place on prenait l'angle inverse et qu'on faisait Y, qu'est-ce que ça donnerait ?"* C'est la question la plus rentable de toute la boucle. Pas un raffinement de X — un Y qui ressemble à rien de l'existant. Et tu lances le LLM dessus : code-le, mesure, montre-moi. La moitié du temps c'est pire. L'autre moitié, c'est un ordre de magnitude.

**4. Confronter.** Ton hypothèse contre la mesure. C'est là que tu apprends si ton modèle mental tient la route. Souvent il faut le rectifier — le LLM pointe un effet de bord, ou la mesure révèle un goulot que tu n'avais pas modélisé. C'est pas grave. Tu corriges, tu rebouches.

**5. Rinse and repeat.** Le bottleneck a bougé. Avant c'était la décompression, maintenant c'est l'écriture disque. Avant c'était l'IPC, maintenant c'est l'event loop saturé. Tu retournes au point 1.

## Ce que le LLM fait, ce que tu fais

Le LLM est très bon aux étapes 1 et 4 : implémenter un bench, lire les chiffres, proposer une explication plausible. Il est honnête aux étapes 2 et 5 : il te donne ce qu'il voit dans le code.

Là où il est faible, c'est à l'étape 3. Il a tendance à proposer des raffinements — accélérer X de 5%, paralléliser Y, ajouter un cache sur Z. Pas des contre-pieds. Il optimise *à l'intérieur du cadre existant*, parce que c'est ce qu'il a sous les yeux. Il ne va pas spontanément te dire *"et si on inversait l'ordre des deux boucles imbriquées et qu'on indexait par autre chose ?"* — parce que cette idée n'est nulle part dans le code.

C'est là que tu interviens. Tu n'as pas besoin de connaître Rust ni Vulkan. Tu as besoin de tenir un modèle mental du système suffisamment précis pour repérer un point de friction architectural, et suffisamment lâche pour imaginer un autre arrangement.

Le LLM fait l'exécution rapide d'idées que tu n'as plus à coder. Toi, tu fais les idées.

## Pourquoi ce n'est pas du vibe coding

Le vibe coding délègue la compréhension. Tu décris vaguement, le LLM génère, tu colles, tu pries. Ça marche pour des trucs neufs où l'architecture n'a pas encore d'inertie.

Sur un système optimisé sur plusieurs mois, l'inertie *est* la matière première. Ce qu'on cherche à débloquer, c'est précisément des invariants qui ont été acceptés sans être re-questionnés. Le LLM ne les remettra pas en cause spontanément — il les respecte parce qu'ils sont dans le code. Toi, tu peux. Mais seulement si on a construit une représentation du système indépendante du code.

Cette représentation, on ne peut pas la zapper. Au contraire : dans ce mode de travail, c'est tout ce que tu apportes.

## En pratique

**Raisonner en abstractions, pas en lignes.** Tu ne dis pas *"la ligne 486 de tel fichier"*, tu dis *"le moment où on filtre les éléments déjà calculés avant d'appeler le GPU"*. Si on garde le modèle en abstractions, on peut le manipuler depuis son téléphone, depuis un train, depuis sa chaise longue. Le code n'est qu'une projection.

**Lire les benchmarks comme des affirmations à réfuter.** Un chiffre qui confirme ton hypothèse mérite autant de méfiance qu'un chiffre qui l'infirme. Plus, même : un bon résultat coupe l'envie de creuser, et c'est souvent là que se cachent les artefacts de mesure (un setup non isolé, un cache chaud non purgé, un preflight non chronométré).

**Ne pas skipper les benchmarks, même quand c'est tentant.** Et c'est très tentant. Soit parce que ça coûte du temps de calcul (relancer un précompute de plusieurs minutes pour valider une optim de 3%, c'est rébarbatif), soit pour ce que j'appellerais la *token-guilt* — l'envie de pas embêter le LLM avec une session pénible d'instrumentation, de logs ajoutés un peu partout, de timestamps, de runs répétés pour stabiliser la mesure. Ça vaut le coup. À chaque fois. Une conclusion hâtive du LLM — même un modèle frontier à max effort — sera régulièrement infirmée par la mesure réelle. Et celles qui tiennent te donnent une assise pour la suite que tu n'auras jamais en raisonnant à vide.

**Poser systématiquement la question naïve.** *"Mais est-ce que ça n'existait pas déjà sous une autre forme ?"* — *"Pourquoi cette boucle est dans cet ordre ?"* — *"Qu'est-ce qui se passerait si on supprimait complètement cette étape ?"* Le LLM ne pose presque jamais ces questions tout seul. Toi si.

**Accepter les fausses pistes.** Une bonne moitié des hypothèses sont fausses. Ce n'est pas du temps perdu, c'est la nature du process. Ce qu'il faut éviter, c'est s'enfermer sur une fausse piste *parce que tu y as déjà investi du temps*. Si la mesure ne supporte pas l'idée, l'idée meurt. Tu reviens à l'étape 3, tu proposes autre chose.

---

Je ne sais toujours pas écrire du Rust. Je n'ai pas lu la plupart du code GPU en détail. Mais j'ai une représentation assez précise du système pour piloter cette boucle — du parc, du train, du canapé, sous le soleil.

Et c'est suffisant pour multiplier les performances par plusieurs ordres de magnitude. À condition de ne jamais confondre *"je comprends le système"* avec *"je fais confiance aux conclusions qu'on me présente sur le système"*.
