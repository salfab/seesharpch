---
layout: post
title: "YOLO ou ResNet ? La question qu'il faut poser AVANT d'entraîner"
tags: [project, computer-vision, machine-learning, ai, board-games]
---

<!-- a3:intro -->
*Quatrième volet, après [« ça marche sur ma table »](/blog/preview/6e5a7cf3/7-wonders-duel-score-photo), [« généraliser sans casser »](/blog/preview/b2e84d15/7-wonders-generaliser) et [« le transfer learning »](/blog/preview/c7a0f6e2/7-wonders-transfer-learning).*

Mon scoreur confond des lauriers de victoire avec des pastilles de ressources imprimées sur les cartes. J'ai voulu régler ça en réentraînant mon détecteur avec plus de données : rejeté à la mesure. Puis avec des règles colorimétriques : falsifiées, trois fois. Le diagnostic final tenait en une phrase : à la résolution d'entrée du modèle, une pastille imprimée fait vingt pixels — **l'information nécessaire pour la distinguer d'un vrai laurier n'existe pas dans ce que le modèle voit**. Aucune quantité de données ne comble une information absente.

D'où l'idée suivante, évidente avec le recul : puisque l'information existe dans la photo d'origine (à pleine résolution, la pastille se distingue très bien), zoomons. Détectons d'abord les zones d'intérêt, puis passons un second modèle sur des crops haute résolution.

Et là, une question m'a arrêté net : ce second modèle, ce doit être **un YOLO ou un ResNet ?** J'utilisais les deux depuis des semaines sans savoir répondre. Il a fallu que je comprenne enfin comment chacun fonctionne — et la réponse s'est imposée d'elle-même.

## Le socle commun : des filtres qui s'empilent

Les deux sont des réseaux **convolutifs**. Le principe : l'image traverse des couches successives de « filtres » appris. Les premières couches détectent des choses élémentaires — un bord, un coin, une tache de couleur. Les suivantes combinent ces éléments en textures : du métal embossé, un tissage, du bois. Les suivantes en motifs : une couronne de laurier, un chiffre. Les dernières en concepts : « ceci est une pièce de 6 ».

Personne ne programme ces filtres. L'entraînement les règle tout seul, en corrigeant les erreurs du réseau sur des milliers d'exemples. C'est toute la magie — et toute la dépendance aux données.

## ResNet : « qu'est-ce que c'est ? »

Un ResNet est un **classifieur**. On lui donne UNE vignette de taille fixe, il rend UNE réponse : « pièce de 6 », « token stratégie », ou un vecteur d'empreinte qu'on compare à une bibliothèque. Le « Res » vient de ses raccourcis internes (*residual connections*) qui rendent l'entraînement de réseaux profonds stable — un détail d'ingénierie génial, mais un détail.

Son super-pouvoir, c'est le **transfer learning** : pré-entraîné sur des millions de photos généralistes, ses couches basses savent déjà *voir* — textures, reliefs, formes. On ne ré-entraîne que la décision finale. C'est exactement pour ça que mon lecteur de valeurs de pièces atteint 0,91 avec une poignée de parties : il n'apprend pas à voir, seulement à décider.

## YOLO : « où y a-t-il quoi ? »

Un YOLO est un **détecteur**. On lui donne la photo ENTIÈRE, il rend une LISTE de boîtes, chacune avec sa classe et sa confiance. Il découpe mentalement l'image en grille ; chaque case prédit « il y a un objet ici, sa boîte fait telle taille, c'est telle classe ». Le tout en une seule passe — *You Only Look Once*.

Mais ce pouvoir a un prix : en plus du « quoi », YOLO doit apprendre le **fond** — tout ce qui n'est PAS un objet. Il lui faut plus de données, et il est vulnérable à un poison sournois : un vrai objet présent sur une photo d'entraînement mais non étiqueté lui apprend activement que cet objet est du fond. Je l'ai payé pour le savoir.

## La réponse était dans la question

Revenons au chantier. Mes détecteurs trouvent déjà les boîtes candidates — y compris les pastilles fautives. La question posée sur chaque crop zoomé n'est donc pas « où sont les lauriers ? » (je le sais déjà), mais « **ce candidat est-il un vrai laurier ou une pastille imprimée ?** ». Un oui/non sur une vignette.

C'est la définition même du classifieur :

| | ResNet (classifieur) | YOLO sur crops (détecteur) |
|---|---|---|
| Question | « ce crop = vrai laurier ? » — la bonne | « où sont les lauriers ici ? » — déjà su |
| Données requises | Peu (transfer learning) | Beaucoup (ré-apprendre le fond à cette échelle) |
| Risque de poison | Aucun : un crop = un label | Élevé : étiquetage exhaustif obligatoire |
| Intégration | Étage de vérification après détection | Nouvelle passe de détection complète |

La règle générale que j'en retire, et qui me servira bien au-delà de ce projet : **choisis l'architecture d'après la question, pas d'après la mode.** Si tes boîtes existent déjà, tu as un problème de classification — prends un classifieur et le transfer learning t'offrira des résultats avec dix fois moins de données. Si tu dois trouver les objets, tu as un problème de détection — prends un détecteur, et budgète les données (et la discipline d'étiquetage) qui vont avec.

Le plus drôle ? J'avais la réponse sous les yeux depuis le début : mes deux plus beaux succès du projet suivaient déjà cette règle sans que je l'aie formulée. Le détecteur de pièces qui remplace Hough : un YOLO, parce qu'il fallait *trouver*. Le lecteur de valeurs à 0,91 : un ResNet sur crops, parce qu'il fallait *décider*.
