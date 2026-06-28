---
layout: post
title: "7 Wonders Duel : j'ai voulu qu'une photo compte les points à ma place"
tags: [project, computer-vision, opencv, board-games]
header_image: /assets/img/7-wonders-duel-score-photo.jpg
unlisted: true
permalink: /blog/preview/6e5a7cf3/7-wonders-duel-score-photo
sitemap: false
---

![Une fin de partie de 7 Wonders Duel posée sur une table en bois](/assets/img/7-wonders-duel-score-photo.jpg)

J'ai un problème avec les vacances : je n'arrive pas à les passer sans projet. [La dernière fois, j'en étais revenu avec un jeu de plateau conçu depuis mon téléphone](/blog/preview/e8b4f2a9/possession-jeu-de-plateau). Cette fois, en Espagne, j'avais bien pris un laptop — mais une machine sans GPU, le genre sur lequel entraîner un modèle relève du vœu pieux. Retenez ce détail. Pour le reste : une piscine, et beaucoup de parties de 7 Wonders Duel. Assez pour que le moment que je déteste revienne en boucle : la fin.

Parce qu'à la fin d'une partie de 7 Wonders Duel, il faut compter. Et compter, ici, ce n'est pas additionner deux colonnes. C'est cumuler **sept sources de points** qui n'ont rien en commun : les cartes civiles bleues, les sciences vertes, les merveilles, les jetons progrès, les guildes, la position du pion militaire, et les pièces — une tous les trois. À chaque fin de partie, le même petit inventaire fastidieux pendant que la bière tiédit.

Sur la plage, en rangeant les cartes, l'idée idiote est arrivée : *et si je prenais juste une photo, et qu'un programme me recrachait le score ?*

Cet article ne parle pas de l'algorithme. Il parle de ce que ça coûte, en pratique, de transformer « juste une photo » en un vrai chiffre.

## D'abord, j'ai viré l'IA

En 2026, « reconnaissance d'images » déclenche un réflexe automatique : un modèle. On annote, on entraîne, on déploie un réseau de neurones, et basta. J'ai fait exactement l'inverse, dès la première ligne.

Pas de LLM. Aucun modèle que *j'ai* entraîné — pas de dataset, pas d'étape d'entraînement. Que de la **vision par ordinateur à l'ancienne** : seuils de couleur, formes, corrélation de gabarits. OpenCV et du bon sens.

Une seule exception, et je l'assume : pour lire le *nom* imprimé des cartes, je m'appuie sur un **OCR pré-entraîné sur étagère** ([RapidOCR](https://github.com/RapidAI/RapidOCR), des modèles ONNX). C'est, techniquement, un réseau de neurones — le seul du projet. Mais c'est un modèle générique que je n'ai pas entraîné, pour une tâche générique : lire du texte. Tout le reste de la reconnaissance — lauriers, pièces, guildes, merveilles — n'a pas un seul neurone.

Trois raisons, et elles tiennent toujours :

- **Je n'ai pas de jeu de données.** Entraîner un détecteur demanderait des centaines de photos annotées. J'ai *quelques* photos de mes propres parties. Pas un dataset, des souvenirs de vacances.
- **Je veux savoir pourquoi ça rate.** Un seuil de couleur qui se trompe, je le corrige chirurgicalement. Un réseau qui se trompe est une boîte noire qui hausse les épaules.
- **Ça tourne en local, hors ligne, gratuitement.** Pas d'API, pas de GPU, pas de facture — le laptop sans carte graphique des vacances suffisait largement.

**« Et pourquoi pas YOLO, alors ? »** Parce qu'un YOLO sur étagère est entraîné sur des chats et des voitures : il ne connaît ni les lauriers, ni les guildes, ni une pièce qui vaut 3. Pour qu'il les voie, il faudrait l'entraîner — donc le dataset que je n'ai pas, et la boîte noire que je fuis. Et même alors, il me dirait *« carte, ici »*, pas *« 4 points »* : la lecture fine resterait à faire à la main. Autant la coder directement.

J'appelle ça « reconnaissance de score par IA » parce que ça sonne moderne. En vrai, c'est de la géométrie, de la couleur, et un seul OCR pré-entraîné qui sait lire. La seule « IA » du projet, je ne l'ai pas entraînée — et c'est précisément l'argument.

## « Une photo, c'est facile, non ? »

Non.

Une photo de table en bois, prise au téléphone, à main levée : reflets, perspective de travers, et surtout des cartes **empilées en colonnes** dont on ne voit que la tranche du haut. Pour un humain, évident. Pour de la vision classique, un terrain miné.

L'idée qui a tout débloqué est venue en regardant *vraiment* les photos : **je n'ai pas besoin d'identifier les cartes.** Sur une carte empilée, la bande visible porte déjà l'essentiel — le nombre de points dans une petite couronne de lauriers, les symboles de science, les boucliers. Alors je lis *ce signal-là*, pas l'identité de la carte. On arrête de demander « quelle carte est-ce ? » pour demander « combien de points cette tranche annonce-t-elle ? ».

Voilà ce que le programme « voit » au final :

![La même partie, avec les détections du programme dessinées par-dessus](/assets/img/7wd-vue-annotee.jpg)

<div class="tech-box" markdown="1">
<span class="tech-box-label">Encadré — technique pointue (non-techos : sautez sans remords, aucune blague ici)</span>

Reconnaître un plateau, ce n'est pas *un* algorithme mais quatre, un par question :

- **L'empreinte ([ORB](https://en.wikipedia.org/wiki/Oriented_FAST_and_rotated_BRIEF)).** Réduire une image à une poignée de points distinctifs, chacun résumé en une petite signature, puis retrouver les mêmes ailleurs. *Sert à* **poser** une merveille sur la photo — retrouver sa position et son angle, puisqu'on connaît déjà son scan de référence. Règle : *« où est cette carte, et sous quel angle ? »*
- **Le calque ([corrélation normalisée](https://fr.wikipedia.org/wiki/Corrélation_croisée)).** Superposer la référence sur la zone trouvée et mesurer si les pixels coïncident, quelle que soit la lumière. *Sert à* **vérifier** qu'une merveille posée est bien la bonne — l'empreinte seule se laisse berner. Règle : *« est-ce vraiment cette image ? »*
- **Le vote ([transformée de Hough](https://fr.wikipedia.org/wiki/Transformée_de_Hough)).** Chaque pixel de contour vote pour les cercles plausibles ; les pics l'emportent. *Sert à* compter **pièces et jetons**. Règle : *« combien de disques, et où ? »*
- **Le pochoir ([appariement de gabarits](https://en.wikipedia.org/wiki/Template_matching) sur une galerie de silhouettes).** Décalquer un chiffre en silhouette propre, puis regarder quel pochoir stocké il recouvre le mieux. *Sert à* lire la **valeur (1–7)** dans les lauriers, là où l'OCR s'effondre. Règle : *« quel chiffre est-ce ? »*

S'y ajoutent de simples **seuils de couleur** pour trier les cartes par type. Aucun de ces outils n'« apprend » quoi que ce soit : chaque seuil est écrit à la main, et c'est tout l'intérêt.

</div>

## Deux ou trois humiliations en chemin

Le projet est surtout une collection d'échecs assumés. Mes préférés :

**La carte qui aimantait les faux positifs.** Ma première approche appariait chaque tranche visible à une bibliothèque de cartes de référence, par descripteurs de points caractéristiques. Sur le papier, propre. En pratique, une référence générique — l'écurie, une carte brune banale — est devenue un *aimant à faux positifs* : une bande brune quelconque lui décrochait près de 200 « bonnes correspondances », là où un vrai appariement n'en dépassait jamais une poignée. L'algorithme ne reconnaissait pas une carte, il reconnaissait « du brun ». J'ai documenté l'échec et jeté l'approche. Un résultat négatif clairement établi, c'est un livrable, pas une honte.
**La meilleure idée n'était pas un algorithme.** Pour savoir si une merveille a été *construite* (une carte glissée dessous), j'ai empilé les heuristiques malignes, qui plafonnaient toutes. La solution était bête : *puisqu'on sait quelle merveille c'est, on a son scan de référence — recale-le sur la photo.* On superpose la référence à l'image, on obtient le contour exact, et le reste se déduit. Les meilleures avancées du projet ne sont jamais venues d'un calcul plus compliqué, mais d'un pas de côté.

À ce stade, ça marchait. Deux vraies parties scorées de bout en bout, catégorie par catégorie, jusqu'au vainqueur. J'étais content. J'aurais dû me méfier.

## Et puis j'ai posé le jeu sur une serviette

De retour, fier de mon pipeline, j'ai photographié une partie posée sur une **serviette de plage rayée**, sous une autre lumière. Et presque tout s'est effondré.

![La même reconnaissance, sur une serviette de plage : ça se passe beaucoup moins bien](/assets/img/7wd-serviette.jpg)

Des **pièces** détectées… dans l'herbe à côté de la serviette. Sept **guildes** repérées pour deux réelles — une bande militaire rouge, un dos de carte, un bout de plateau, tous promus « guilde ». Les deux **jetons** verts lus comme des pièces. Des symboles de coût en bois pris pour des lauriers. La seule survivante du carnage : la lecture du *nom* des merveilles, parce qu'elle lit le texte imprimé, pas la surface. Savoureux : cette unique rescapée, c'est justement la seule brique « IA » du projet — l'OCR pré-entraîné. Le générique généralise ; tout ce que j'avais réglé à la main, lui, supposait du bois.

La raison est gênante de simplicité : **tout mon pipeline supposait, quelque part, du bois.** Le fond uniforme qui valide une pièce, les bandes de couleur des guildes, le contraste des lauriers — tout était calé, sans que je le formule jamais, sur ma table. La serviette rayée n'est ni du bois uniforme ni un mur pâle, et le château de cartes des seuils s'écroule.

C'est exactement le prix annoncé de la vision classique sans entraînement. La question n'est plus *« est-ce que ça marche ? »* — c'est *« est-ce que ça généralise ? »*. Réponse honnête, aujourd'hui : pas encore. C'est tout le sujet de la suite, où il faudra apprendre à chaque détecteur que le monde n'est pas une planche de pin.

Morale provisoire : mon scoreur ne sait pas compter les points d'une partie de 7 Wonders Duel. Il sait compter les points **sur ma table**. Nuance subtile, que la serviette de plage s'est chargée de m'expliquer.
