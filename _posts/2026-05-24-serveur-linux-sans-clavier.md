---
layout: post
title: "J'ai installé mon serveur Linux sans sortir le clavier"
date: 2026-05-24 09:00:00 +0200
tags: [project, infrastructure, linux, self-hosting, automation, ai]
header_image: /assets/img/mappyhour-linux-zero-touch-hero.png
unlisted: true
permalink: /blog/preview/a17f4c92/serveur-linux-sans-clavier
sitemap: false
---

![Un mini-PC alimenté par une clé USB, avec son installation automatisée qui se déroule au-dessus](/assets/img/mappyhour-linux-zero-touch-hero.png)

Le 18 mai, [j'écrivais à propos de Mitch](/blog/preview/c3d8f014/self-hosting-nuc-zero-euro), le NUC qui héberge MappyHour :

> La migration vers Linux aurait coûté du temps, et WSL2 suffit pour Docker. Certains combats ne méritent pas d'être gagnés.

Quatre jours plus tard, Mitch était posé au milieu de mon salon avec une clé USB dans le ventre, prêt à remplacer Windows et WSL2 par Ubuntu.

Il n'y a que les imbéciles qui ne changent pas d'avis.

La pile Windows fonctionnait. Mais la fin du support de Windows 10 venait de rappeler une évidence : même quand le matériel ne bouge pas, l'OS finit par avoir une date de péremption.

Au même moment, les caches de précalcul des atlas d'ensoleillement de MappyHour avaient fini par remplir le SSD. Puisqu'il fallait de toute façon remplacer le disque, autant profiter de l'occasion pour retirer aussi Windows et WSL2.

C'est comme ça que je me suis retrouvé à installer Linux pour la première fois de ma vie.

Je m'attendais à passer un week-end devant un écran noir à apprendre des commandes obscures. En pratique, j'ai branché une clé que j'avais préparée avec Claude, démarré le NUC et attendu.

Je n'avais même pas sorti le clavier.

## Une clé USB à la place d'un clavier

Mitch est rangé dans un meuble, à côté de la TV. Dans une autre vie, il me servait de Media Center. Aujourd'hui, ni écran, ni clavier, ni souris. C'est parfait pour un serveur, un peu moins pour installer un système d'exploitation.

Je ne voulais surtout pas suivre une checklist du genre : choisir la langue, configurer le clavier, saisir le mot de passe Wi-Fi, créer un utilisateur, copier une clé SSH, installer Docker, cloner le dépôt, démarrer les containers, configurer les tunnels, installer et configurer tailscale, puis découvrir trois mois plus tard que j'avais oublié l'étape 17.

L'idée était plus simple : mettre toutes ces décisions dans l'image bootable.

La clé connaissait déjà le réseau Wi-Fi et son mot de passe. Elle contenait la clé publique autorisée pour SSH. Elle savait comment préparer le disque, installer Ubuntu Server, récupérer MappyHour, démarrer Docker et raccorder la machine à mon réseau privé.

Je n'installais donc pas un Ubuntu générique qu'il faudrait ensuite transformer en serveur. Le serveur était déjà dans la clé.

Il restait quatre gestes :

1. brancher la clé ;
2. allumer le NUC ;
3. lui demander de démarrer dessus ;
4. ne plus rien toucher.

![Une clé USB lance l'installation d'un NUC qui devient accessible à distance après un gros quart d'heure](/assets/img/mappyhour-linux-zero-touch-flow.png)

Le dernier point, ne plus rien toucher, était important. Pas de câble Ethernet provisoire, pas de clavier « juste pour le mot de passe », pas de commande copiée depuis un autre ordinateur. Après le démarrage sur la clé, Mitch devait se débrouiller tout seul jusqu'à ce qu'il réapparaisse sur le réseau, et de pouvoir reprendre le flambeau en ssh.

## Le serveur était déjà tout cuit dans la clé

Une clé Ubuntu classique contient un installateur. La mienne contenait aussi la configuration spécifique dont j'avais besoin.

Le Wi-Fi est configuré avant que l'installation commence vraiment. Ubuntu sait quel disque utiliser et quels paquets installer. Au premier démarrage, quelques services mettent en route Tailscale, le tunnel Cloudflare, Docker, MappyHour et la télémétrie. Un contrôle final vérifie que les éléments importants répondent réellement.

Je simplifie volontairement. La fabrication de cette clé a eu sa collection de problèmes de guillemets, de scripts imbriqués et de paquets Wi-Fi absents. Ça mérite éventuellement un article à part, pour les gens qui aiment voir Bash et PowerShell se disputer la propriété d'une apostrophe.

Mais ce n'est pas ce qui m'a frappé une fois la clé terminée.

Ce qui m'a frappé, c'est à quel point l'installation finale était banale.

Le NUC était posé par terre, sans périphérique. J'ai démarré dessus, puis je suis allé faire autre chose. Un gros quart d'heure plus tard, il avait rejoint le Wi-Fi, récupéré son identité sur Tailscale et ouvert l'accès SSH prévu dans l'image.

La commande de contrôle a fini par afficher **13 PASS, 0 FAIL**.

À ce moment-là, je n'avais pas seulement un Linux qui démarrait. J'avais déjà une session d'administration à distance, prête à l'emploi, sur une machine qui hébergeait de nouveau l'application.

Le premier build de la clé prend une dizaine de minutes. L'installation complète en prend environ dix-sept. Ce n'est pas instantané, mais ce sont des minutes pendant lesquelles personne n'a besoin de taper des commandes - particulièrement appréciable quand c'est ta première installation de Linux.

## Un quart d'heure plus tard : SSH

SSH est le moment où le NUC cesse d'être un objet dans mon salon.

Avant, il faut pouvoir l'allumer, voir ce qu'il fait et éventuellement intervenir. Après, il peut retourner dans son meuble. Tout se passe depuis mon laptop, et plus précisément, depuis Claude: vérifier un service, lire un log, relancer un container ou déployer une nouvelle version.

{j'ai l'impression que les deux paragraphes suivants sont de la répétition de ce que l'on a plus haut, non ? 
La clé publique nécessaire est déjà intégrée à l'installation. La clé privée, elle, reste sur ma machine. Dès que Mitch rejoint le réseau privé, je peux donc m'y connecter sans créer un mot de passe temporaire ni recopier un secret au clavier.

Le mot de passe Wi-Fi est bien gravé dans l'image bootable. Ce n'est pas magique, et ça transforme la clé en objet sensible : je ne la laisse pas traîner dans un tiroir ouvert et je ne publie évidemment pas son contenu. Dans ce cas précis, c'est un compromis assumé. La clé reste sous mon contrôle physique et son rôle est précisément de reconstruire cette machine sur ce réseau.

----> il me semble qu'il y avait un truc qu'on faisait de super malin pour éviter les problèmes, c'était qu'il y a une certaine clef, je ne sais plus laquelle, qui était valable pendant peu de temps : c'était ssh ? tailscale ? autre chose ? je sais plus ! }

L'intérêt n'est pas d'avoir éliminé les identifiants. C'est de les avoir placés une fois au bon endroit, au lieu de les ressaisir pendant chaque installation.

À partir de là, la distance ne change plus grand-chose. Mitch peut être à côté de mon bureau ou à trente kilomètres : s'il est joignable en SSH, le travail est le même.

Et c'est là que Claude entre vraiment dans l'histoire.

## Claude prend le relais

Administrer un serveur Linux a longtemps eu pour moi une barrière assez simple : je ne savais pas exactement quoi taper, et très franchement, je suis plus intéressé à m'approprier les concepts que la syntaxe.

Avec Claude, la relation est différente.

Je peux lui demander de vérifier les logs d'un certain service pour comprendre pourquoi il ne démarre pas, de regarder l'espace disque ou de déployer la dernière version. Il se connecte à Mitch en SSH depuis mon environnement de travail, exécute les contrôles, relie ce qu'il observe au code du projet et propose la correction.

Je n'ai pas besoin de connaître par cœur la différence entre `journalctl`, `systemctl` et les options de `docker compose`. J'ai besoin de savoir ce que je veux obtenir, de comprendre la portée de la commande proposée et de vérifier le résultat.

Ce n'est pas tout à fait la même chose que « Claude gère le serveur à ma place ».

Claude ne sait pas qu'une coupure vient du routeur si je ne lui donne aucun moyen de l'observer. Il ne décide pas tout seul qu'il peut effacer un disque ou modifier un tunnel de production. Et quand plusieurs solutions sont possibles, quelqu'un doit encore choisir celle qui correspond au projet plutôt que celle qui est simplement commode à écrire.

Mais le niveau de connaissance nécessaire pour démarrer a beaucoup baissé.

Avant, une erreur Linux me renvoyait vers quinze { peut-on remplacer la ligne suivante avec quelque chose de plus linuxien ? genre "quinze ManPages" ? (c'est très linux, ça, les manpages, non ?) onglets, chacun supposant que j'avais lu les quatorze précédents}. Maintenant, je peux partir du symptôme concret : « le site ne répond plus », « ce container redémarre », « le disque se remplit ». Claude fait le premier travail d'exploration et m'explique ce qu'il trouve dans le contexte de *mon* serveur.

Je n'ai pas acquis dix ans d'expérience en administration système. J'ai simplement arrêté d'en avoir besoin pour chaque petite opération.

## La complexité n'a pas disparu

La clé USB n'a pas supprimé la complexité d'une installation Linux. Elle l'a déplacée.

Au lieu de la payer à chaque réinstallation, au milieu d'une suite de formulaires et de commandes manuelles, je l'ai payée une fois dans une image reproductible. Le Wi-Fi, SSH, les tunnels et les services sont préparés à l'avance, relus comme du code et rejoués de la même façon. La différence, c'est que c'est diablement plus pratique à itérer sur mon laptop avec Claude qu'en me grattant la tête accroupi derrière un meuble au salon.

{beaucoup de redite sur les paragraphes suivants non ?
Claude fait quelque chose de similaire pour l'administration. Il ne rend pas `systemd`, Docker ou le réseau moins complexes. Il absorbe une partie du coût pour naviguer entre eux, trouver les bonnes informations et traduire le résultat dans un langage que je peux contrôler.

Ça laisse malgré tout quelques responsabilités très humaines : garder les secrets hors du dépôt, limiter les accès, disposer de sauvegardes, relire les opérations risquées et accepter qu'un serveur à trente kilomètres reste un objet physique qui peut très bien décider de ne plus s'allumer.

La différence, c'est que ces responsabilités ne sont plus noyées sous le travail mécanique.}

## Le vrai changement

Le passage de Windows et WSL2 à Ubuntu a apporté quelques gains sympathiques. Les données de MappyHour, lues à travers NTFS et WSL2, plafonnaient autour de **1 Mo/s**. Sur ext4 natif, elles approchent les **200 Mo/s**. La mémoire au repos est passée d'environ **3 Go à 600 Mo**.

Mais ce n'est pas ça qui a changé ma relation au serveur.

Le vrai changement, c'est que Mitch n'est plus une machine configurée au fil du temps et qu'il faudrait reconstruire de mémoire. Si son SSD meurt, je peux régénérer la clé, redémarrer dessus et retrouver une machine joignable en SSH avec le même environnement. Ensuite, Claude peut reprendre le relais depuis un système connu.

La clé est à la fois l'installateur, la recette et le point de départ de l'administration. Elle ne contient pas seulement Ubuntu. Elle contient la réponse à la question pénible : « qu'est-ce que j'avais bien pu faire la dernière fois pour que ça marche ? »

Dans mon salon, tout cela s'est résumé à brancher une clé et appuyer sur un bouton.

J'avais donc raison sur un point : installer et administrer Linux à la main n'était peut être pas un combat qui méritait d'être gagné.

... À moins qu'on n'ait plus besoin de le faire à la main.
