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

<!-- ============================================================
NOTES BRUTES (17.07) — à reformer avec Codex, mon tone of voice.
Cas concret pour illustrer le "budgète les données ET la discipline
d'étiquetage" du côté YOLO. À insérer/adapter, pas tel quel.
============================================================ -->

<!-- b1:cas-merveilles -->

## [BRUT] Le corollaire du côté YOLO : la discipline d'étiquetage vaut le modèle

Angle : on a dit « le YOLO, c'est trouver, et ça coûte des données + de la discipline d'étiquetage ». Le chantier des **merveilles** est la démonstration de ce corollaire — et de son poison.

Le décor. Une merveille rapporte des points **seulement si elle est construite** (une carte glissée dessous). Pour la scorer il faut donc la **trouver** dans la photo → problème de détection → YOLO. Mais mon wonder-YOLO était **auto-étiqueté par l'OCR** (le lecteur du nom de la carte). Il héritait des deux défauts de l'OCR :
- **boîtes « nom-seul »** : l'OCR cadre le texte imprimé, pas la carte entière → boîtes trop petites ;
- **merveilles ratées** : nom occulté ou trop petit → l'OCR ne lit pas → jamais étiquetée.

Et une merveille présente mais **non étiquetée** est le **poison** décrit plus haut : elle enseigne activement au détecteur que cette carte-là est du fond. Le détecteur apprend à *ne pas* voir ce qu'on veut qu'il voie.

La sortie : un **flywheel d'étiquetage humain-dans-la-boucle**, trois outils qui se relaient.
1. Une **revue HTML** : je passe le YOLO à confiance *basse* pour faire remonter même les détections faibles, je crope en pleine résolution, un classifieur ResNet propose l'identité, la page groupe tout **par merveille** avec un menu déroulant (corriger / faux positif / « boîte nom-seul »). En bas, **chaque photo avec ses boîtes dessinées** : si une merveille n'a pas de boîte, je coche → elle part à l'étiquetage manuel.
2. Un **étiqueteur cv2** où je **dessine** les merveilles ratées (la boîte pleine-carte, pas le nom). (Aparté UX que Codex peut garder ou couper : j'ai dû ajouter au fil de l'eau un réticule, un clic-pour-sélectionner-et-corriger, un rouge « rejetée » — le feedback qui manquait. L'outil d'annotation compte autant que le modèle.)
3. Une **fusion** qui réunit boîtes dessinées + détections validées, dédoublonne, et **impose 12 merveilles distinctes par dump**. Ce garde-fou est joli : si les 12 sont là une fois chacune, **aucun échange d'identité n'est possible** — un mauvais label forcerait un doublon + un manquant.

Le chiffre. Recall de détection en **held-out** (session tenue à part, jamais vue à l'entraînement), IoU≥0,5 :

| | avant | après le flywheel |
|---|---|---|
| recall détection (held-out) | **0,72** | **1,00** |

**+0,28**, sans toucher à l'architecture — juste des labels propres et complets. (mAP50 val 0,995.)

Honnêteté obligatoire, à garder dans l'article : (1) la validation est **petite** et proche du décor d'entraînement — le 1,00 dit « j'ai réparé le poison », pas « je généralise à toute photo du monde » ; (2) mon corpus **ne contient quasi pas de merveilles minuscules**, or c'est là que l'ancien modèle s'effondrait (recall ~0,03 sur les toutes petites) — ce régime-là n'est pas encore testé. Le gain est réel sur l'usage réel (gros plans de tableau), pas un chèque en blanc.

La morale, qui prolonge le billet : quand tu choisis un YOLO, tu ne signes pas que pour un modèle — tu signes pour **une dette d'étiquetage** et pour la **discipline** de ne jamais laisser un objet non annoté sur une image d'entraînement. Le classifieur, lui, n'a pas cette dette (un crop = un label, pas de fond à apprendre). C'est l'autre face de la même règle : l'architecture dicte non seulement *combien* de données, mais *quelle rigueur* dans leur étiquetage.

<!-- Fil vers le prochain billet possible : ce meilleur détecteur rapproche le combo YOLO(localise)+ResNet(identifie) du remplacement de l'OCR pour les merveilles — plus rapide, multilingue. Reste à mesurer le vrai tête-à-tête OCR vs YOLO+ResNet contre la vérité terrain manuelle. -->

<!-- b2:tete-a-tete -->

## [BRUT] Le duel : lire le NOM (OCR) vs reconnaître l'ART (YOLO+ResNet)

Angle (suite directe) : le meilleur détecteur en main, on peut enfin trancher la vraie question — pour **identifier** une merveille, faut-il **lire son nom** (OCR) ou **reconnaître son illustration** (un ResNet sur le crop) ? J'avais les deux voies depuis des semaines sans chiffre honnête pour choisir.

Le piège méthodologique que je veux raconter (parce qu'il m'a d'abord trompé). Mon premier réflexe : « la voie A trouve-t-elle la même chose que la voie B ? ». Mais si je prends l'OCR comme *référence*, je ne mesure que l'**accord**, jamais **qui a raison**. Il fallait un tiers : une **vérité terrain indépendante**. Je l'avais — mes étiquettes tracées à la main pendant le flywheel. On note alors les DEUX voies contre CETTE vérité.

Deuxième piège, plus sournois : la **précision** que j'ai d'abord lue était catastrophique (~0,45) pour les deux — et fausse. Beaucoup de mes photos sont des « dumps » où je n'avais étiqueté que 1–2 merveilles sur les 12 présentes. Donc les détections « en trop » n'étaient pas des erreurs : c'étaient de **vraies merveilles que mon étiquetage ne listait pas**. Leçon à mettre dans l'article : *une métrique de précision ne vaut que si ta vérité terrain est complète*. Sur les seules photos à étiquetage complet, la précision des deux voies remonte à 1,00.

Le chiffre, une fois le piège désamorcé (photos à vérité complète, 104 merveilles) :

| Voie d'identité | recall | precision |
|---|---|---|
| OCR (lire le nom) | **0,77** | 1,00 |
| YOLO + ResNet (reconnaître l'art) | **0,99** | 1,00 |

**Les deux sont également précises — aucune n'invente une merveille.** Toute la différence est ailleurs : l'OCR **échoue à lire**. Le cas extrême est presque comique : sur une photo de douze merveilles étalées, l'OCR en a lu **zéro** (noms stylisés, cartes de biais, reflets), là où la voie « art » en a reconnu onze. Lire un mot exige que le mot soit net, droit, dans la bonne langue ; reconnaître une image, non.

Le détail qui fait sourire et qui rassure : l'**unique** échec de la voie art, sur cette photo aux douze merveilles, n'était pas un échec de *vision* — la carte était parfaitement détectée — mais un classifieur à **0,49 pour un seuil à 0,50**. Un centième. La machine avait raison ; c'est mon garde-fou qui était trop strict d'un cheveu.

Morale, qui referme la boucle du billet : le choix « détecteur ou classifieur » n'était que la moitié de l'histoire. L'autre moitié, c'est **par quel canal l'information passe** — le texte ou l'image. Le texte est fragile (police, angle, langue, lumière) ; l'illustration est robuste. Pour un objet qui *porte son nom écrit*, la tentation est de lire ce nom ; la mesure dit que **reconnaître le dessin gagne**.

<!-- b3:tta-orb -->

## [BRUT] Un centième, une rotation, et la question « faut-il ORB ? »

Suite immédiate : ce cheveu de confiance (0,49 pour un seuil à 0,50) valait une enquête, parce qu'il posait une question d'architecture. On aurait pu croire qu'il fallait, avant le classifieur, **redresser la carte** — et pour ça, on a un outil : ORB, qui recale la carte photo sur son scan de référence et en donne les quatre coins exacts. Une belle idée de pipeline en trois temps : *trouver* (YOLO) → *redresser* (ORB) → *reconnaître* (ResNet).

Sauf qu'ORB coûte cher et casse (il échoue sur ~6 % des cartes — reflets, flou, petite carte). Avant de l'invoquer, j'ai mesuré *pourquoi* la confiance chutait. Deux causes : le **cadrage** (la boîte du détecteur, alignée sur les axes, embarque des coins de fond quand la carte est de biais) et surtout l'**orientation** (la carte était quasi tête-bêche). En reclassant la carte à ses **quatre orientations** et en gardant la lecture la plus nette, la confiance passe de 0,49 à **0,97**. Coût : quatre inférences de quelques millisecondes. **Sans ORB.**

La leçon d'archi, que je veux dans l'article : la tentation était d'ajouter une étape lourde et fragile (le recalage) pour une amélioration de *qualité d'image*. La mesure dit que le problème n'était pas la géométrie fine, juste **l'orientation** — et qu'une normalisation triviale la règle. On garde ORB là où **rien d'autre** ne fait le travail (décider si une merveille est *construite* — le classifieur dit *laquelle*, pas *si*), mais **hors du chemin d'identité**.

Et l'honnêteté du chiffre : ça monte le recall à **0,993**, pas à 1,0. Le dernier raté n'est pas une astuce ratée — c'est une carte réellement petite et occultée que le modèle ne reconnaît pas du tout (même pas dans son top-5). Les deux seuls ratés portaient sur *la même merveille* : c'est un signal de **donnée manquante** sur cette classe, pas un réglage à trouver. La dernière fraction de recall se paie en exemples, pas en ruses.

<!-- ============================================================ FIN NOTES BRUTES ============================================================ -->

<!-- ============================================================ FIN NOTES BRUTES ============================================================ -->
