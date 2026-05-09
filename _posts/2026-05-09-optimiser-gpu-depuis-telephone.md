---
layout: post
title: "Optimiser un pipeline GPU depuis son téléphone"
date: 2026-05-09 08:41:07 +0200
tags: [project, gpu, performance, ai, optimization, methodology]
unlisted: true
permalink: /blog/preview/f2c9a371/optimiser-gpu-depuis-telephone
sitemap: false
---

Il y a quelques semaines, j'ai passé une bonne partie d'une soirée à optimiser un pipeline de précompute GPU depuis mon téléphone, allongé sur le canapé. Pas à regarder du code — à raisonner sur un pipeline asynchrone en échangeant avec Claude, en lisant des résultats de benchmarks, et en challengeant des conclusions qui me semblaient incorrectes.

Ce que j'ai appris : c'est très différent du vibe coding. Et la différence mérite d'être nommée.

## Ce qu'on construisait

[Mappy Hour](/blog/preview/...) calcule l'ensoleillement de zones urbaines : pour chaque mètre carré de Lausanne, Nyon, Genève, savoir combien d'heures de soleil direct il reçoit chaque jour de l'année. Le pipeline précompute fait ça en amont — des milliers de tuiles, 365 jours, via un backend Vulkan écrit en Rust.

Le cœur du pipeline : pour chaque tuile, calculer les positions du soleil manquantes, les envoyer au GPU en batch, récupérer les masques d'ombre, merger dans un fichier atlas. Le tout avec du pipelining pour que le GPU reste occupé pendant que Node.js prépare la tuile suivante.

C'est du code asynchrone imbriqué, avec des sémaphores, des drains de pipeline, des zones de changement de mesh GPU. Ce n'est pas le genre de truc qu'on optimise facilement sans le voir.

## Ce que le vibe coding n'est pas

Le vibe coding tel que le terme est généralement utilisé : vous décrivez ce que vous voulez, le LLM génère du code, vous collez, vous testez, vous recommencez. Ça marche très bien pour beaucoup de choses. Mais sur un pipeline asynchrone avec des contraintes GPU matérielles, ça a une limite évidente : le LLM peut générer du code structurellement correct qui repose sur une hypothèse fausse.

Et l'hypothèse fausse ne sera visible ni dans le code ni dans les tests unitaires — seulement dans les benchmarks, si vous savez quoi y chercher.

## Le cas concret

On travaillait sur une réorganisation du pipeline appelée "tile-first" : au lieu d'itérer jour par jour pour chaque tuile, on itère tuile par tuile — on calcule tous les 365 jours d'une tuile d'un coup, puis on passe à la suivante.

Claude m'a présenté les gains attendus, dont celui-ci : *moins de frames à envoyer au GPU, parce que beaucoup de positions solaires sont identiques d'un jour à l'autre — même azimut, même altitude, même bucket.*

Ça m'a arrêté. J'ai relu.

*"C'est pas pour ça qu'on a fait les atlas au lieu de travailler date par date ?"*

Parce que oui — depuis plusieurs mois, le pipeline day-first avait déjà un mécanisme `skipExisting` : avant d'envoyer un bucket au GPU, on vérifie s'il est déjà dans l'atlas sur disque. Si oui, on ne recalcule pas. La déduplication cross-jours existait déjà — pas sous la forme d'un union de positions par tuile, mais via le cache atlas.

Le "gain GPU" de tile-first n'était pas un gain GPU. C'était de l'I/O : au lieu de lire et merger l'atlas 365 fois par tuile (une fois par jour), on le fait une fois. Réel, mais d'un ordre de grandeur différent de ce qui avait été annoncé. Un benchmark comparatif l'a confirmé ensuite.

## Ce que ça demande comme état d'esprit

Pour attraper cette erreur sans voir le code, il faut avoir une image mentale assez précise du pipeline : qui lit quoi, quand, dans quel ordre. Pas le code ligne par ligne — le *modèle* de ce qui se passe.

Dans ce cas précis : savoir que `skipExisting` existe, savoir qu'il opère au niveau du bucket `(azimut, altitude)`, et savoir que ce bucket est la même unité que ce que le GPU reçoit. Trois niveaux d'abstraction à tenir simultanément, sans les voir écrits nulle part.

C'est ça la vraie difficulté du debugging via LLM sur des systèmes complexes. Pas de générer la bonne instruction. De garder un modèle mental cohérent du système pendant que le LLM vous présente des analyses, des chiffres, des hypothèses — et de savoir quand ce modèle contredit ce qu'on vous dit.

## Pourquoi c'est différent du vibe coding

Le vibe coding délègue la compréhension au LLM. Ce que je décris ici, c'est l'inverse : vous gardez la compréhension système, vous déléguez l'exécution et une partie de l'analyse. Le LLM est un très bon ingénieur junior qui code vite, écrit des benchmarks, lit des stack traces — mais qui peut vous présenter une conclusion plausible-et-fausse avec la même assurance qu'une vraie.

La valeur que vous apportez n'est pas de savoir coder. C'est de savoir *quand le modèle qui vous est présenté est en contradiction avec ce que vous savez du système*.

Et pour ça, on ne peut pas zapper la construction du modèle mental. Au contraire — dans ce mode de travail, le modèle mental est tout ce qu'on a.

## En pratique

Ce qui aide concrètement :

**Nommer les abstractions, pas les lignes.** Pas "la ligne 486 de atlas-tile-service.ts" — "le moment où on filtre les buckets déjà dans l'atlas avant d'appeler le GPU". Si vous gardez le modèle en termes d'abstractions, vous pouvez raisonner dessus sans le code sous les yeux.

**Poser la question bête.** *"Mais est-ce que ça n'existait pas déjà ?"* est souvent la meilleure question. Les LLMs ont tendance à présenter une optimisation comme nouvelle parce que le code qui la réalise est nouveau — même si la propriété du système était déjà vraie autrement.

**Lire les benchmarks comme des affirmations à réfuter, pas à confirmer.** Un chiffre qui confirme votre hypothèse mérite autant de scrutin qu'un chiffre qui l'infirme. Le benchmark zstd semblait montrer −19% de wall-time. Isolé correctement, avec le preflight séparé : −0.5%, dans le bruit. Le bottleneck avait simplement glissé.

**Accepter les fausses pistes documentées.** Une session entière a été perdue sur une "corruption d'atlas" à 36–94% de mismatches. Cause réelle : le script de vérification tournait en mode vulkan, ce qui rendait le golden CPU aveugle aux bâtiments. Pas de corruption. Le temps perdu n'était pas du temps gaspillé — c'est la nature du debugging, avec ou sans LLM. Mais il faut l'accepter plutôt que de continuer à creuser la mauvaise piste.

---

Je ne sais toujours pas écrire du Rust. Je n'ai pas lu la plupart du code GPU en détail. Mais j'ai une image assez précise de comment les tuiles passent dans le pipeline, de quand le GPU est idle, de ce que signifie un drain de pipeline.

C'est suffisant — à condition de ne pas confondre "je comprends le système" avec "je fais confiance aux conclusions qu'on me présente sur le système".
