---
layout: post
title: "Généraliser sans casser : le monde n'est pas une planche de pin"
tags: [project, computer-vision, opencv, machine-learning, board-games]
unlisted: true
permalink: /blog/preview/b2e84d15/7-wonders-generaliser
sitemap: false
---

<!-- a2:intro -->
*Deuxième volet. Dans [le premier épisode](/blog/preview/6e5a7cf3/7-wonders-duel-score-photo), j'étais rentré de vacances fier comme un paon avec un scoreur photo qui marchait — puis j'ai posé le jeu sur une serviette de plage rayée et je l'ai regardé s'effondrer en direct.*

Le diagnostic, le lendemain, était humiliant de simplicité : **tout mon pipeline supposait, quelque part, du bois.** Le fond uni qui valide une pièce, les bandes colorées des guildes, le contraste des lauriers — chaque détecteur avait été réglé, sans que je le formule jamais, sur les veines chaudes de ma table de cuisine. La serviette n'était ni du bois, ni un mur pâle. Le château de seuils s'est écroulé d'un bloc.

La question n'était plus « est-ce que ça marche ? » mais « est-ce que ça *généralise* ? ». Et généraliser, ça voulait dire un truc pénible : reprendre chaque détecteur, un par un, et lui apprendre que le monde n'est pas une planche de pin.

<!-- a2:anchres -->
## D'abord, me méfier de moi-même

La première chose que j'ai codée n'était pas un détecteur : c'était un garde-fou contre mes propres illusions. J'ai figé **deux parties réelles** — une sur bois, une sur serviette — comme juges de paix. Les cibles pas encore atteintes deviennent des tests en échec *assumé* (`xfail`) ; règle absolue : **aucun correctif n'a le droit de faire rougir une ancre.** J'en ai vite ajouté une troisième, la plus méchante : une partie en extérieur, sur l'herbe, sous une lumière orange de fin de journée.

Sans ce filet, « améliorer » sur une photo veut juste dire « casser » sur une autre — et tu ne le sais jamais. Avec, chaque commit devient une dette ou un gain. Plus jamais un pari.

<!-- a2:guildes -->
## Les guildes : une victoire (trop) facile

Mon détecteur de guildes reconnaissait une bande violette. Naïf : sous une autre lumière, un dos de carte ou une bande militaire rouge se faisaient promouvoir « guilde » sans sourciller.

La parade, je l'avais déjà inventée pour les merveilles : la bande violette **propose**, et le recalage de l'*art* de la guilde **vérifie** (on superpose la référence, on corrèle les pixels). Plus un garde-fou de teinte qui distingue le vrai carton magenta d'un dos de carte lavande qui jouait au magistrat. Ça généralise parce que ça s'ancre sur le **contenu** — le dessin de la carte — pas sur la couleur de la table. Toujours zéro neurone.

Une victoire propre. Elle m'a bercé dans l'idée que le reste suivrait. Le reste n'a pas suivi.

<!-- a2:coins -->
## Et puis il y a les pièces

Mon ennemi juré. La pièce est l'objet le plus cruel qui soit pour de la vision classique : sur une surface variable, un pip de carte, une touffe d'herbe ou un pli de tissu est *métriquement une pièce* — un disque rond, de la bonne taille. Distinguer l'un de l'autre sans tricher, j'ai essayé. Et je l'ai mesuré — deux fois, parce que les pièges étaient trop instructifs pour les garder pour moi.

<div class="tech-box" markdown="1">
<span class="tech-box-label">Encadré — trois échecs honnêtes (non-techos : sautez, vous ne ratez qu'une humiliation)</span>

- **Corrélation contre des gabarits de pièces.** Ne sépare rien : vraies pièces 0,03–0,31, faux positifs 0,01–0,26 — la *médiane* des faux positifs est plus haute que certaines vraies pièces.
- **Signature métallique (variance de teinte).** Semblait parfaite sous lumière chaude… jusqu'à ce qu'une photo en lumière froide la pulvérise (l'argent y lit une variance de 51 contre ~1,5 attendu). Le signal mesurait l'éclairage, pas la pièce. Un piège de sur-apprentissage, attrapé en vérifiant les photos froides au lieu de me féliciter.
- **Une simple règle écrite à la main.** Sur 669 candidats étiquetés, la meilleure caractéristique seule plafonne à 0,47 de précision, et combiner les portes existantes ne fait pas mieux. La frontière entre pièce et non-pièce est *non-linéaire* — pas un seuil à régler.

</div>

Trois angles, trois murs. À un moment, s'acharner devient de l'orgueil.

<!-- a2:franchissement -->
## J'ai cédé — mais au minimum syndical

Aucune caractéristique faite main ne sépare proprement. Alors j'ai franchi ma propre ligne — « aucun modèle entraîné » — pour ce **seul** détecteur, et au strict minimum.

Pas un gros réseau sur les pixels. Une **petite forêt aléatoire** — quelques kilo-octets, entraînée en secondes, sans GPU — sur *exactement les mêmes* caractéristiques classiques. Précision 0,80, rappel 0,67 : le double de précision de la règle à la main. Je garde l'extraction de features, lisible ; j'ajoute juste un *combineur appris* de la frontière tordue. Mesuré honnêtement — en laissant une *photo* entière de côté à chaque fois, jamais un crop isolé (les pièces d'une même photo partagent la lumière, ce ne sont pas des exemples indépendants). Borné : la forêt ne fait que filtrer après coup, et disparaît proprement si le modèle est absent.

> **Spoiler honnête.** Cette petite forêt avait deux vices que je n'ai découverts que plus tard : chez quiconque n'avait pas installé une certaine dépendance, elle **ne tournait même pas** — un *no-op* silencieux — et un vrai réseau a fini par la remplacer entièrement. Mais n'anticipons pas : ce sont les humiliations d'un prochain épisode.

<!-- a2:morale -->
## La ligne n'était pas un dogme

Voilà ce que je retiens. Le « pas de modèle entraîné » a tenu pour *tout* — sauf les pièces. Et c'est précisément *parce que je l'ai mesuré* que j'ai su où franchir la ligne, et avec quoi : le minimum d'apprentissage, sur des données que j'ai étiquetées moi-même, borné pour ne jamais casser ce qui marchait déjà.

La ligne n'a jamais été une question de morale. C'était une *hypothèse*, tenue tant que les chiffres la portaient, déplacée d'un cran quand ils ont cessé. La discipline, ce n'est pas de refuser le ML par principe. C'est de refuser de le dégainer **avant que les mesures ne l'exigent**.

*Suite et fin : [le jour où le transfer learning a enfoncé un plafond que je croyais physique](/blog/preview/c7a0f6e2/7-wonders-transfer-learning).*
