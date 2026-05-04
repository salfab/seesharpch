---
layout: post
title: "Possession : un jeu de plateau conçu pendant mes vacances au Maroc"
tags: [project, game-design, ai, simulation]
---

Au lieu de lire un roman au bord de la piscine, j'ai conçu un jeu de plateau. *Possession* est un jeu semi-coopératif strictement à deux joueurs où chacun incarne un démon rival cherchant à corrompre l'âme d'un pape inspiré d'Alexandre VI. Le but n'est pas de réussir l'exorcisme. Le but est d'être le démon qui profite le mieux de son échec.

C'est ce déplacement qui m'intéressait dès le départ. Pas un duel frontal, pas une coop pure : une tension où il faut collaborer juste assez pour faire échouer l'exorcisme, et se saboter juste assez pour gagner seul.

## La boucle qui rend le jeu intéressant

Trois issues possibles, et c'est la seule chose qui compte :

```text
Pas assez de corruption → l'Exorcisme réussit, les deux démons perdent.
Trop de corruption mal répartie → l'autre démon gagne.
Volonté scellée et transgressée par le même démon → Fiat Tenebris, victoire immédiate.
```

L'âme du pape se découpe en cinq Domaines (Ambition, Désir, Foi, Peur, Volonté). On y dépose de la Corruption, on tente de prendre le contrôle, on scelle, on amplifie des Scandales en Infamies. À la fin, trois axes — Profondeur, Étendue, Ancrage — déterminent si l'âme est rompue.

Le reste n'est que de la plomberie thématique. Mais cette plomberie, il faut qu'elle équilibre.

## Les simulations font le travail que l'intuition ne peut pas faire

Avec autant d'interactions indirectes, l'équilibrage à la main est une illusion. Changer le coût d'une Transgression de 1 à 2 affecte le rythme économique, la vitesse de l'Ascendant, la fréquence de Fiat Tenebris, et la pertinence de sceller. Personne ne tient ça en tête honnêtement.

J'ai donc écrit des bots stratégiques — pas aléatoires, profilés — et je les ai fait jouer les uns contre les autres par dizaines de milliers de parties.

```text
- stratégie centrée sur Volonté
- accumulation d'Infamies
- propagation large de Scandales
- scellement rapide
- fissuration défensive
- Entrave systématique
- Ascendant pur
- agressive sur Fiat Tenebris
```

Une nuance pratique : tout simuler d'un coup explosait. Donc matrice de confrontation, une stratégie contre toutes les autres, on consolide après. Sans ça, timeouts et résultats ininterprétables.

C'est ce qui a permis d'attraper un blocage économique invisible à la lecture : dans certains états, un joueur n'avait plus aucune Corruption disponible et était condamné à passer ses tours. La correction — une action *Puiser dans l'Ombre* disponible **seulement** à 0 Corruption — est typiquement le genre de règle qu'on n'écrit pas en chambre. On l'écrit après que la simulation ait crié.

## Claude Code Cloud comme implémenteur, pas comme designer

Pour le prototype jouable, j'ai utilisé Claude Code Cloud. La leçon est exactement celle de [mon projet Vulkan](/blog/preview/c9d2a845/vulkan-rust-vibe-coding) : un LLM est un multiplicateur de vitesse, pas un substitut à la décision.

Mes prompts ressemblaient à ça :

```text
Ajoute l'action Puiser dans l'Ombre.

Condition : le joueur actif doit avoir 0 Corruption disponible.
Effet : il gagne 1 Corruption disponible.

L'action ne doit pas :
- modifier un Domaine
- donner de l'Ascendant
- consommer une exploitation
- déclencher une Transgression

Ajoute les tests correspondants.
```

Cahier des charges précis, contraintes explicites, critères d'acceptation, tests obligatoires. Plus le prompt est mou, plus la sortie l'est. C'est devenu une vérité brutale : la qualité du code généré est presque entièrement fonction de la précision du brief.

Ce que le LLM ne décide pas : quelle tension est intéressante, quelle règle est élégante, quelle ambiguïté doit être supprimée. Tout le reste — formaliser, tester, écrire — il le fait plus vite que moi.

## Le choix de stack qui m'a surpris

J'avais pré-tranché pour **Phaser + TypeScript**. Web natif, léger, parfait pour cartes/plateau 2D, déploiement trivial, c'est mon écosystème quotidien. Sur le papier, c'était la réponse.

J'ai pris **Godot**.

Pas par snobisme. Parce que pour un jeu de plateau avec scènes, états, transitions et UI structurée, l'éditeur visuel et l'arborescence de nodes économisent un temps fou que je passerais sinon à recréer une demi-VM de scènes en TypeScript. Unity ? Surdimensionné pour un 2D à deux joueurs. C'était soit Phaser (familier) soit Godot (mieux outillé pour ce cas précis). J'ai choisi le bon outil plutôt que l'outil confortable. Décision étonnamment difficile à prendre — le confort d'écosystème est un piège.

## Le détail technique qui m'a fait perdre une journée

Les templates de cartes ont une fenêtre centrale qui doit être transparente pour qu'on y compose les illustrations. Sauf que les images générées rendaient un damier opaque au lieu d'un vrai canal alpha.

Solution : générer les templates en **chroma key**. Fond de fenêtre en `#00FF00` pur, puis suppression au pipeline. Pas glamour, pas élégant, mais c'est ça qui rend les assets exploitables en production. C'est la moitié du travail sur un projet créatif assisté par IA : adapter le pipeline parce que les outils ne crachent jamais exactement ce que tu attends.

## Ce que je retiens

Un jeu se conçoit aujourd'hui en quelques semaines avec les bons outils. Les simulations remplacent l'intuition pour l'équilibrage. Le LLM remplace la fatigue pour l'implémentation. Mais aucun des deux ne remplace la décision.

La vraie tension du projet, ce n'était pas entre les deux démons. C'était entre la vitesse que l'IA permet et la rigueur qu'elle réclame pour produire autre chose qu'une bouillie générique.

J'ai conçu un jeu sur deux démons qui se sabotent mutuellement. Approprié, en y repensant.
