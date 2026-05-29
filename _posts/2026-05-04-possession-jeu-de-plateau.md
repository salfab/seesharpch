---
layout: post
title: "Possession : un jeu de plateau conçu entièrement depuis mon téléphone"
tags: [project, game-design, ai, simulation]
header_image: /assets/img/possession-jeu-de-plateau.png
unlisted: true
permalink: /blog/preview/e8b4f2a9/possession-jeu-de-plateau
sitemap: false
---

Trois semaines hors de chez moi, pas de laptop dans la valise, juste un téléphone. La règle implicite des vacances : tu ne codes pas. Sauf que j'avais une idée en tête depuis longtemps — un jeu de plateau sombre, à deux joueurs, où la coopération et la rivalité tirent dans des directions opposées. Et il s'avère qu'avec un écran de 6 pouces, un clavier virtuel et un LLM correctement briefé, on peut concevoir, équilibrer et prototyper un jeu entier sans jamais ouvrir un IDE.

Le résultat s'appelle *Possession*. C'est un jeu semi-coopératif strictement à deux joueurs où chacun incarne un démon rival cherchant à corrompre l'âme d'Alexandre VI — le vrai, pape de 1492 à 1503, Borgia de son état, accessoirement père de plusieurs enfants reconnus, soupçonné d'empoisonnements politiques, et globalement le genre de souverain pontife dont les mœurs ont rendu service à la cause protestante quelques décennies plus tard. Bref, une cible de choix pour des démons.

Cet article ne parle pas du jeu lui-même. Il parle de ce que ça veut dire, en 2026, de fabriquer un projet créatif complet depuis un terminal mobile.

## L'IA comme partenaire de design, pas comme oracle

La première phase, c'est de la conversation. Pas du code, pas des règles : du dialogue. Je décris la tension que je veux. L'IA propose dix variantes. J'en élimine huit, j'en croise deux, je raffine. Encore. Encore. Le LLM accélère brutalement la vitesse à laquelle on explore l'espace des règles possibles — ce qui prendrait des semaines de carnet et de groupes de test prend quelques heures de prompts.

Ce que le LLM ne fait jamais : décider. Il ne sait pas ce qui est élégant, ce qui est tendu, ce qui est ennuyeux. Il génère, je tranche. Inverser ces rôles produit instantanément une bouillie générique.

## Les simulations font le travail que l'intuition ne peut pas faire

Un jeu avec autant d'interactions indirectes ne s'équilibre pas à la main. Changer un seul coût se propage à toute l'économie, à la vitesse de fin de partie, à la pertinence de plusieurs actions. Personne ne tient ça en tête honnêtement.

J'ai donc fait écrire — toujours par prompt, toujours depuis le téléphone — un harness de simulation qui fait jouer des bots stratégiques profilés (pas aléatoires) les uns contre les autres par dizaines de milliers de parties. Approche par matrice de confrontation : une stratégie contre toutes les autres, on consolide après. Sans ça, timeouts garantis et résultats ininterprétables.

C'est cette boucle qui a attrapé les vrais problèmes — un blocage économique latent qu'aucune lecture ne révélait, des stratégies dominantes invisibles à l'œil nu. Les corrections sont écrites après que la simulation ait crié, pas avant.

## Claude Code Cloud comme implémenteur

Pour passer du prototype textuel au jeu jouable, j'ai utilisé **Claude Code Cloud**. C'est l'outil qui m'a permis de tout faire depuis le téléphone : pas d'environnement local à maintenir, pas de chaîne de build à porter sur Android, juste une session distante qui exécute, teste et commit.

La leçon est la même que sur [mon projet Vulkan](/blog/preview/c9d2a845/vulkan-rust-vibe-coding) : la qualité du code généré est presque entièrement fonction de la précision du brief. Mes prompts d'implémentation ressemblent à un ticket Jira écrit par quelqu'un qui a trop de rigueur :

```text
Ajoute cette action.

Condition : <précondition exacte>
Effet : <effet exact>

L'action ne doit pas :
- <interaction interdite 1>
- <interaction interdite 2>
- <interaction interdite 3>

Ajoute les tests correspondants.
```

Cahier des charges précis, contraintes explicites, critères d'acceptation, tests obligatoires. Plus le prompt est mou, plus la sortie l'est.

## Le choix de stack qui m'a surpris

J'avais pré-tranché pour **Phaser + TypeScript**. Web natif, léger, parfait pour du 2D, déploiement trivial, c'est mon écosystème quotidien. Sur le papier, c'était la réponse.

J'ai pris **Godot**.

Pas par snobisme. Parce que pour un jeu avec scènes, états, transitions et UI structurée, l'éditeur visuel et l'arborescence de nodes économisent un temps fou que je passerais sinon à recréer une demi-VM de scènes en TypeScript. Unity ? Surdimensionné pour un 2D à deux joueurs. C'était soit Phaser (familier) soit Godot (mieux outillé pour ce cas précis). J'ai choisi le bon outil plutôt que l'outil confortable — décision étonnamment difficile à prendre. Le confort d'écosystème est un piège.

## Le détail technique qui m'a fait perdre une journée

Les templates de cartes ont une fenêtre centrale qui doit être transparente pour qu'on y compose les illustrations. Sauf que les images générées rendaient un damier opaque au lieu d'un vrai canal alpha.

Solution : générer les templates en **chroma key**. Fond de fenêtre en `#00FF00` pur, suppression au pipeline. Pas glamour, pas élégant, mais c'est ça qui rend les assets exploitables. C'est la moitié du travail sur un projet créatif assisté par IA : adapter le pipeline parce que les outils ne crachent jamais exactement ce que tu attends.

## Ce que je retiens

La pile d'outils que j'ai utilisée tient sur une main : un LLM pour le design et l'implémentation, Claude Code Cloud pour exécuter sans environnement local, un harness de simulation maison pour l'équilibrage, et Godot pour le prototype jouable. Tout depuis un téléphone, pas une seule ligne tapée sur un clavier physique.

Ce n'est pas un exploit, c'est un constat. La barrière à l'entrée d'un projet créatif technique n'est plus le matériel, ni l'environnement de dev, ni même les compétences spécifiques. C'est la rigueur du brief que tu sais formuler.

J'ai conçu un jeu sur deux démons qui se sabotent mutuellement. Approprié, en y repensant.
