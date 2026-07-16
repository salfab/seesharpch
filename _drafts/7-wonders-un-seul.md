---
layout: post
title: "L'IA n'est pas magique : quand je l'utilise, quand je m'en passe (leçons d'un compteur de points)"
tags: [project, computer-vision, machine-learning, ai, board-games]
unlisted: true
permalink: /blog/preview/7wd1article/7-wonders-un-seul
sitemap: false
---

<!-- s1:intro -->
L'« IA », c'est devenu le buzzword de la saison 2025-2026. On le colle sur tout, et il sous-entend une boîte noire qui *comprend*, mais nous, on ne comprend pas vraiment comment ça marche. De toute évidence, l'IA va prendre de plus en plus de place dans nos vies... C'était le moment de démystifier — pas en lisant, en construisant.

Votre mission, Jim, si vous l'acceptez : automatiser le comptage de points au jeu de plateau « 7 Wonders Duel » à partir d'une ou deux photos, sans sortir la calculatrice ni être bon en calcul mental.

Mais pour vraiment être honnête dans la démarche, coller un autocollant « boosté à l'IA » aurait été contre-productif. Du coup l'idée est la suivante : partir d'un traitement vision purement algorithmique, voir jusqu'où on peut aller, admettre quand ça bloque, comprendre pourquoi, et trouver quel outil sortir de la trousse pour régler chaque problème concret.

<!-- s2:vision-pure -->
## Premier outil : la vision « pure », des règles qu'on écrit soi-même

On commence par le plus simple et le plus transparent : la vision par ordinateur classique, celle d'avant la mode des réseaux de neurones. On écrit des règles géométriques à la main. *Un cercle assez rond et de la bonne taille ? Une pièce. Une bande colorée en haut d'une carte ? Sa couleur.* Pas de données, pas d'entraînement, pas de mystère — et surtout, quand ça se trompe, je peux tracer exactement pourquoi.

Pour situer, voilà à quoi ressemble ce qu'on doit lire : une fin de partie de 7 Wonders Duel. Des merveilles (les grandes cartes illustrées), des cartes glissées à moitié dessous, des jetons ronds, des pièces. Tout ce petit monde, il va falloir le compter.

![Une fin de partie de 7 Wonders Duel sur une table en bois : quatre merveilles, des jetons ronds, des pièces, et des cartes à moitié glissées sous les merveilles](/assets/img/7-wonders-duel-score-photo.jpg)

Et sur ma table, en bonne lumière, ça marche très bien. On repère les cartes, on lit leurs couleurs, on compte les pièces. Là, tu te dis que t'as plié le game avec une POC de 1 heure, et qu'on peut retourner siroter des blue lagoons sur la plage...

![Un tableau de joueur complet avec les détections du programme dessinées par-dessus : merveilles construites, cartes empilées par couleur, lauriers, pièces et jeton, chacun entouré et étiqueté](/assets/img/7wd-vue-annotee.jpg)

Puis on photographie une partie sur une serviette de plage, dehors, au soleil couchant — et tout s'effondre. Les pièces se confondent avec l'herbe, des reflets deviennent des cartes.

![La même reconnaissance sur une serviette de plage rayée, au soleil couchant : les détections partent dans tous les sens](/assets/img/7wd-serviette.jpg) Voilà le défaut de cet outil : il fait *exactement* ce qu'on lui a dit, donc il est fragile dès que le monde s'écarte du décor prévu. Sa force reste imbattable: c'est déterministe, transparent, gratuit, pas besoin de centaines de parties photographiées — mais à une condition : que le signal soit géométrique et l'environnement maîtrisé. Sur une table en bois, oui. Dans la vraie vie, non.

Premier constat de terrain, donc : la règle écrite à la main a un plafond, et on vient de le toucher. On repose l'outil, et on regarde ce qu'il y a d'autre dans la trousse.

<!-- s2b:resolution -->
## Petit détour utile : un modèle ne voit pas ta photo comme toi

Un truc qu'on oublie vite : le réseau ne regarde pas ta belle photo de 12 mégapixels. Avant même de commencer, il la **ravale** à une petite taille fixe — un carré, genre 1280 pixels de côté pour « où sont les choses », et pour la brique qui décide « c'est quoi », une vignette encore plus petite, redimensionnée sans même respecter les proportions. Autrement dit : une bouillie carrée qui ne ressemble pas du tout à ce que, toi, tu vois. Un petit détail imprimé — une pastille de deux millimètres sur une carte — se retrouve écrasé sur une poignée de pixels. Illisible.

D'où l'astuce qui structure tout le projet : on fait en **deux temps**. D'abord on cherche *où* sont les objets sur la version ravalée — pour repérer un emplacement, pas besoin de détail. Ensuite, chaque objet repéré, on retourne le lire dans la photo **d'origine**, en pleine résolution. Et là, c'est quasi gratuit : un objet tout seul, une fois découpé, c'est une toute petite image. On a le beurre (une vue d'ensemble légère) et l'argent du beurre (le détail net, mais seulement là où il sert).

<!-- s3:faut-il -->
## Deuxième réflexe : faut-il *vraiment* sortir un modèle ?

Avant même de parler d'IA, trois questions ont suffi à trancher, dans l'ordre :

1. **L'information est-elle seulement là ?** Si le détail qui distingue A de B n'existe pas dans ce que la machine voit — trop petit, trop caché — *aucun* modèle ne le fera apparaître. Exemple vécu : certaines pastilles imprimées sur les cartes se font passer pour des points de victoire. À la taille où le détecteur travaille, elles se réduisent à une vingtaine de pixels ; et même en allant les relire en pleine résolution, le détail qui sépare une vraie source de points d'une simple décoration reste trop ténu. J'ai voulu régler ça « avec de l'IA ». La mesure a dit non, et elle avait raison. Démystification n°1, la plus importante : **l'IA n'invente pas un signal absent.** Si l'info n'est pas dans l'image, aucun outil ne la fera surgir.
2. **La règle est-elle écrivable, dans un décor maîtrisé ?** Alors on reste sur la vision pure du premier chapitre : moins chère, explicable, sans données. Pas besoin d'un réseau pour compter des cercles bien nets sur fond uni.
3. **Faut-il reconnaître ou décider à partir d'exemples réels et variés ?** Là seulement, oui, un modèle appris — *à condition* d'avoir, ou de pouvoir fabriquer, les données.

Et une intuition qui recoupe tout le reste, celle que je retiens le plus : **le contenu bat la surface.** Ce qui tient au contenu de la carte — le nom imprimé, le symbole dessiné — est apprenable et robuste. Ce qui tient à la surface — une couleur sur une table changeante — est fragile, et souvent mieux traité par une petite règle qu'on assume comme approximative.

<!-- s3b:pourquoi-pas-comparer -->
## « Pourquoi ne pas juste comparer à une image de référence ? »

C'est le réflexe le plus naturel pour reconnaître quelque chose, et il n'a besoin d'aucune IA : on garde une photo de référence de chaque objet, et on regarde laquelle « colle » le mieux, pixel contre pixel (le jargon dit *template matching*, ou recalage). Et pour les **merveilles**, ça marche très bien : une merveille, c'est grand, posé à plat, vu en entier — même photographié de travers, ça ressemble encore à sa fiche. On la recale sans peine, au point de savoir si une carte est glissée dessous. Zéro donnée, zéro entraînement.

Alors on tente exactement la même recette sur les **guildes** — ces cartes violettes. Et on pourrait se dire : facile, il y a toujours au moins le **bandeau** du haut qui dépasse, garanti visible sur la photo (revoir les piles violettes plus haut). Comparons ce bandeau à un bandeau de référence, pixel contre pixel. C'est *exactement* ce que j'ai fait. Score : **18 %.** Presque toujours faux.

Le piège, je ne l'ai vraiment compris qu'*après coup* — une fois le ResNet entraîné et monté à 91 %, en me retournant sur le pauvre 18 % du NCC. Un bandeau de guilde, c'est un grand **aplat violet uniforme — identique d'une guilde à l'autre** — avec un minuscule symbole dans un coin ; et c'est *lui seul* qui sépare la guilde des Armateurs de celle des Magistrats. Or la comparaison pixel à pixel donne le **même poids à chaque pixel** : les centaines de pixels de violet (les mêmes chez toutes les guildes) *votent* tous, et noient sous leur nombre la poignée de pixels du symbole — les seuls qui comptent. On regarde la bonne zone, mais de la mauvaise manière.

Du coup, question tentante : et si on **revenait au low-tech** ? On garde le NCC — pas de modèle, pas d'entraînement — mais on le fait cette fois **sur le symbole seul**, plus sur toute la bannière. Moins de violet parasite, donc moins de pixels qui votent pour rien : ça remonterait sûrement bien au-dessus de 18 %.

Et pourtant, ça resterait derrière le ResNet — pour une raison qui n'a plus rien à voir avec le violet. Le NCC compare des pixels *à leur place* : il est sensible à l'**angle, à la rotation, à l'éclairage**. Or les tableaux sont photographiés de biais, sous des lumières qui changent tout le temps. Le ResNet, lui, a vu tout ça pendant l'entraînement — il passe outre. Même en isolant le symbole, on ne ferait que **refaire à la main l'attention que le modèle apprend gratuitement**, tout en restant coincé avec la fragilité du pixel à pixel. C'est ça, au fond, ce qu'« apprendre » achète : sur le même bandeau, la même photo, **18 % → 91 %.** Reste à savoir *quel* modèle.

<!-- s4:quel-modele -->
## Et si c'est « oui, un modèle » : lequel ?

Parce que « mettre de l'IA », ça ne veut toujours rien dire — même une fois qu'on a décidé d'en mettre. Dans la trousse, ce ne sont pas un mais **deux** outils, qui répondent à des questions opposées, et j'en ai surtout utilisé deux :

- **Le détecteur** (type YOLO) répond à *« où, dans cette image en désordre, y a-t-il des objets, et de quel type ? »*. Il rend une liste de boîtes. C'est l'outil quand il faut **trouver** des choses dans une scène chargée.
- **Le classifieur** (type ResNet) répond à *« cette vignette-là, précisément, c'est laquelle des possibilités ? »*. On lui donne **une** image déjà cadrée, il rend **une** réponse.

D'où une règle bête et méchante : on cherche **où** → détecteur ; on veut savoir **quoi**, sur une image déjà bien serrée → classifieur.

« Et si je dégainais un détecteur pour tout faire, alors ? » Ça ne marche pas, et pour une raison simple : un détecteur passe la moitié de son temps à *localiser* — fouiller la scène pour trouver où sont les choses. Quand la vignette est déjà cadrée, cette moitié-là tourne dans le vide, et il lui reste d'autant moins de capacité pour la seule question qui compte : c'est laquelle ? En prime, il réclame beaucoup plus d'exemples, parce qu'il doit aussi apprendre à quoi ressemble le « rien » autour des objets. Le classifieur, lui, met 100 % de son attention sur la distinction fine à l'intérieur du cadre. Et l'inverse est vrai aussi : lâcher un classifieur sur une photo entière en désordre ne donne rien — il veut une chose, bien cadrée, pas une scène. Chaque outil sa question.

<!-- s4b:boite-ou-pose -->
## Une boîte suffit-elle, ou faut-il la *pose* ? (brouillon)

Détecteur ou classifieur, on n'a parlé que d'objets qu'on lit **dans leur cadre** : une pièce (quelle valeur ?), un laurier (combien de points ?), une bannière (quelle couleur ?). Pour tous ceux-là, une **boîte** suffit — on recadre, un petit classifieur tranche, fin de l'histoire. Aucune géométrie : l'angle, la rotation, l'objet s'en moque, puisqu'on ne cherche qu'*à l'intérieur*. Ce sont des objets qu'on lit et qu'on oublie.

Une seule famille casse ce confort : les **merveilles**. Parce qu'une merveille n'est pas un objet qu'on lit et qu'on oublie — c'est un **conteneur** : une carte peut être glissée dessous, et c'est justement ça qui la rend « construite » (donc qui vaut des points). Pour répondre à « y a-t-il une carte tuckée ? », une boîte ne suffit plus : il faut savoir *exactement* où passent les quatre bords de la carte, et sous quel angle, pour aller regarder juste au-delà du bon bord. Il faut la **pose**, pas seulement la position. C'est là que le vieux recalage — celui-là même qui lit les merveilles, sans un gramme d'entraînement — reprend du service, cette fois pour la géométrie.

J'ai voulu vérifier qu'il servait encore : peut-être que la boîte du détecteur suffisait, quitte à ignorer l'orientation ? Mesuré. En remplaçant la pose recalée par une simple boîte, le verdict « construite / pas construite » **bascule dans un cas sur trois** — et catastrophiquement sur les photos prises de biais : une table entière de merveilles vues de travers passe de « toutes construites » à « aucune ». La leçon complète l'axe précédent : pour un objet qu'on lit dans son cadre, la boîte suffit ; pour un conteneur dont l'enjeu est ce qui se cache **dessous**, il faut la pose. Chaque question son outil — jusque dans la géométrie.

<!-- s5:blackbox -->
## Ouvrir la boîte noire : le *transfer learning*

Le plus bel usage d'IA du projet, c'est de lire la **valeur** d'une pièce — 1, 3 ou 6. En vision pure, je m'appuyais sur la couleur du métal, confondue par la lumière : plafond à 71 %, et j'avais conclu « plafond physique, circulez ». J'avais tort. Le vrai indice, le chiffre embossé sur la pièce, était parfaitement lisible — pas par ma couleur, par un réseau.

Sauf qu'entraîner un réseau *à partir de rien* réclame des dizaines de milliers d'images, et j'en avais une centaine. La ruse qui dissout la magie s'appelle *transfer learning*. On prend un réseau **déjà** entraîné sur des millions d'images quelconques — il a appris, une fois pour toutes, les briques du fait de *voir* : contours, textures, reliefs — et on ne lui réapprend que la décision finale.

L'analogie qui marche pour moi : ton cerveau sait déjà reconnaître un visage. Le jour où tu rencontres un nouveau collègue, tu ne réapprends pas *ce qu'est* un visage — tu as déjà des années de « vision » derrière toi ; il te suffit de le croiser deux-trois fois et c'est mémorisé. Un réseau pré-entraîné, c'est ce cerveau-là : son « œil » est déjà formé une fois pour toutes.

Et ce « déjà formé », ce n'est pas une formule creuse — on peut le nommer, étage par étage. Un réseau de vision, c'est un empilement de couches, et on sait assez bien ce que chacune a appris. Les toutes premières ne connaissent que l'alphabet du fait de voir : un bord, un trait incliné, un dégradé du clair vers le sombre, une tache d'une couleur. Empile-les, et l'étage du dessus combine cet alphabet en **textures et petits motifs** : un quadrillage, des hachures, le grain régulier d'un reflet métallique. Empile encore, et on obtient des **formes et des bouts d'objets** : un cercle, un coin, un relief qui accroche la lumière. Rien de tout ça ne « connaît » les pièces de 7 Wonders — c'est un vocabulaire visuel générique, appris une fois pour toutes sur des millions d'images banales (des chats, des voitures, des chaises).

Et ça tombe bien : le chiffre embossé sur une pièce, c'est *exactement* du relief et du contour — précisément ce que ces étages-là savent déjà décrire. Alors on **gèle** cette partie — on n'y touche plus — et on ne lui apprend qu'une seule chose neuve, tout en haut : « avec ce vocabulaire, est-ce un 1, un 3 ou un 6 ? », sur ma malheureuse centaine de pièces. Résultat : **71 % → 91 %**. Aucune magie — juste un œil déjà formé à qui on apprend un nouveau nom.

<!-- s6:donnees -->
## Le piège de la donnée : elle n'aide que si elle imite le réel

« Mettre de l'IA », dans la bouche des gens, sous-entend souvent « Y'a qu'à le nourir avec un max de données ». Vrai à moitié, et la moitié fausse coûte cher. Un détecteur lisait mal des cartes empilées ; j'ai fabriqué des exemples. Première tentative, cartes bien étalées à plat : ça a *empiré* les résultats. La distribution était bidon parce qu'elle ne ressemble à aucune vraie partie. Deuxième tentative, cartes **empilées par couleur comme dans une vraie cité** (seule la bannière dépasse sous la carte suivante) : là, mesuré sur de vraies parties, les faux positifs sont **divisés par deux**. La donnée paie quand elle ressemble au réel, pas quand on en entasse pour le poids.

![Des cartes de 7 Wonders empilées par couleur — rouge, bleu, violet, jaune, vert — chaque pile décalée pour que seule la bande colorée du haut de chaque carte dépasse sous la suivante](/assets/img/7wd-cartes-empilees.jpg)

C'est ça, la bonne distribution : sur la photo ci-dessus, chaque couleur est empilée en éventail, et de la plupart des cartes on ne voit plus que la **bande du haut** — la bannière. C'est exactement ce que le détecteur doit apprendre à compter dans une vraie partie, pas des cartes sagement étalées côte à côte.

<!-- s6b:combien-de-donnees -->
## Combien de données, au fait ? (beaucoup moins qu'on croit)

Le cliché sur l'IA, c'est qu'il faut des **millions d'exemples**. C'est vrai pour construire un réseau à partir de rien — pas pour ce qu'on fait ici. Les chiffres réels du projet :

- **Huit vraies parties** servent d'étalons pour tout mesurer. Huit.
- Nommer une **guilde** parmi sept : d'une reconnaissance à **18 %** à **91 %**, sur ~90 vignettes découpées.
- Lire la **valeur d'une pièce** : **71 % → 91 %**, avec une centaine de pièces (grâce à l'œil pré-entraîné du chapitre précédent).
- Rattraper une couleur de carte que le détecteur ratait : de **71 % à 99 %** de repérage, en ajoutant… **sept photos** — des piles de cartes dans la bonne disposition.

Sept photos qui déplacent un chiffre de trente points. Pas sept mille. Pourquoi si peu suffit ? Les trois leviers du billet, combinés : un **œil pré-entraîné** qu'on n'a qu'à spécialiser ; des **données qui imitent le réel** (donc chacune porte — pas besoin d'en noyer le modèle) ; et la **mesure** qui dit exactement quelle poignée d'exemples ajouter, et quand s'arrêter.

Et le plus beau, c'est « la donnée doit ressembler au réel » poussé à son terme : **la meilleure donnée, c'est l'usage réel lui-même.** L'appli récolte les photos des parties qu'on lui donne à compter. Chaque partie photographiée avec un téléphone différent, sous une lumière différente, sur une table différente, c'est un exemple d'entraînement *parfaitement distribué* — puisque c'est, littéralement, la vraie vie. Plus l'appli sert, sur plus d'appareils et de décors variés, plus la moisson se diversifie, plus le prochain modèle est robuste. **L'outil s'améliore en étant utilisé** — sans mettre en scène des milliers de parties dans un studio.

Reste l'étiquetage — et là aussi, bien moins cher qu'on ne l'imagine. On pourrait croire qu'il faut redessiner à la main chaque boîte sur chaque photo, des heures durant. En fait, l'outil d'annotation **fait d'abord tourner le détecteur actuel** : il pré-dessine ses propres suppositions, et le plus souvent je n'ai qu'à **confirmer d'une touche** — corriger les rares couleurs qu'il a fausses, ajouter les quelques bannières qu'il a ratées. Le modèle aide à fabriquer son propre prochain jeu d'entraînement : c'est un **second flywheel**, côté étiquetage, où chaque génération rend la suivante moins fastidieuse à annoter. Avec un garde-fou — je reste le juge : aujourd'hui encore, le modèle avait collé « violet » sur une bande grise, et c'est l'œil humain qui l'a rattrapé avant que l'erreur pollue l'entraînement. Assisté, pas aveugle.

Un cas pousse cette idée jusqu'au bout : les **merveilles**. Pour les identifier, j'ai d'abord lu leur **nom imprimé** avec de l'OCR — zéro donnée, ça marche immédiatement. C'est le bon outil pour *démarrer*… mais il traîne deux limites. Il est **lent** : lire du texte à plusieurs orientations coûte plusieurs secondes par photo. Et il est **rivé à l'écrit** : il ne connaît que les langues qu'on lui a déclarées. Aujourd'hui je tiens un petit dictionnaire **bilingue** (français + anglais — une édition anglaise passe d'ailleurs très bien). Mais couvrir *toutes* les éditions du jeu, ce serait **maintenir un dictionnaire de noms par langue** — et franchement, je n'ai pas envie de m'y astreindre (sans parler du japonais ou du chinois, qui réclament carrément un autre moteur de reconnaissance de caractères). Un détecteur appris, lui, reconnaît la merveille à son **illustration** — la même dans toutes les éditions, **sans un mot de dictionnaire à écrire**. Une langue de plus lui coûte zéro.

Alors on tend exactement le pont du flywheel : **tant qu'on n'a pas de données, l'OCR fait le travail — et pendant qu'il le fait, il étiquette gratuitement.** Chaque merveille qu'il lit devient un exemple annoté pour entraîner un détecteur visuel. On accumule au fil des parties, et le jour où il y en a assez, le modèle rapide et multilingue prend le relais. L'outil lent et fragile sert d'**échafaudage** au rapide et robuste — puis s'efface. On ne choisit pas *une fois pour toutes* : on commence avec ce qui marche sans données, et on laisse ce qui marche produire les données du prochain.

C'est l'inverse du réflexe « il me faut un énorme dataset avant de commencer » : on démarre avec une poignée d'exemples honnêtes, on mesure, et on laisse le réel remplir les trous.

<!-- s7:mesurer -->
## Le garde-fou qui tient tout : mesurer avant de croire

Si une seule habitude a fait fonctionner ce projet, c'est celle-là, et elle n'a rien de sexy : avant de coder un remède, je le mesure contre de vraies parties qui servent d'étalons, et je ne garde un modèle que s'il gagne **sans rien casser**. La plupart de mes idées « l'IA va régler ça » meurent à ce test. Tant mieux — elles seraient mortes plus tard, en production, et ça aurait coûté plus cher.

Et parfois, c'est l'inverse d'un gros modèle qui l'emporte. Un détecteur de jetons se mettait à halluciner le même jeton partout, même sur des photos qui n'en contenaient aucun. En mesurant, un trou net apparaît : les vrais jetons ressemblent à leur référence à plus de 93 %, les faux jamais au-dessus de 91 %. Le nombre qui servait à dire « c'est plutôt tel jeton » disait *aussi*, si on sait interpreter la réponse du modèle, « …mais ça ne ressemble à aucun jeton ». Une ligne de code, zéro entraînement, tous les fantômes disparus. Corollaire de la démystification : **le bon geste n'est pas toujours plus d'IA — c'est souvent d'écouter un signal qu'on avait déjà sous la main.**

Et quand, malgré le bon outil, la machine n'est pas sûre — un chiffre qui se lit autrement selon l'orientation de la photo — je préfère qu'elle **le dise** (« celui-là, à vérifier ») plutôt qu'elle glisse un score faux avec aplomb dans le total. Une IA honnête sur ses doutes vaut mieux qu'une IA confiante et fausse.

<!-- s8:cloture -->
## Ce que ça a, au fond, démystifié

L'IA a cessé d'être une boîte noire magique. C'est devenu, dans ma tête, une **trousse à outils** que j'ouvre à dessein : un détecteur pour *trouver*, un classifieur pour *décider*, du transfer learning pour apprendre vite avec peu de données. Chacun fait une chose précise. Aucun ne fabrique un signal qui n'existe pas.

Et la conclusion la moins vendeuse, mais la plus vraie : sur ce projet, une fois sur deux environ, le bon outil n'était pas de l'IA du tout — c'était une règle que j'écrivais moi-même, ou un seuil posé au bon endroit. Savoir *lequel* sortir, et *pourquoi*, c'est tout le métier. Le reste, franchement, c'est du marketing.

Alors terminons sur une image — et tant pis si elle sent l'infopublicité du dimanche après-midi : cette appli, c'est un **couteau Ginsu**. Sauf qu'un couteau, ça s'émousse à l'usage, et que celui-là fait l'inverse : **plus on s'en sert, plus il s'aiguise.** Chaque partie qu'on lui donne à compter affûte le modèle suivant. Ça, pour le coup, ce n'est pas un argument de vente — juste une boucle de données honnête qui tourne.
