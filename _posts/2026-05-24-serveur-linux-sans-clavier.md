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

Je ne voulais surtout pas suivre une checklist du genre : choisir la langue, configurer le clavier, saisir le mot de passe Wi-Fi, créer un utilisateur, copier une clé SSH, installer Docker, cloner le dépôt, démarrer les containers, configurer les tunnels, installer et configurer Tailscale, puis découvrir trois mois plus tard que j'avais oublié l'étape 17.

L'idée était plus simple : mettre toutes ces décisions dans l'image bootable.

La clé connaissait déjà le réseau Wi-Fi et son mot de passe. Elle contenait la clé publique autorisée pour SSH. Elle savait comment préparer le disque, installer Ubuntu Server, récupérer MappyHour, démarrer Docker et raccorder la machine à mon réseau privé.

Je n'installais donc pas un Ubuntu générique qu'il faudrait ensuite transformer en serveur. Le serveur était déjà dans la clé.

Il restait quatre gestes :

1. brancher la clé ;
2. allumer le NUC ;
3. lui demander de démarrer dessus ;
4. ne plus rien toucher.

![Une clé USB lance l'installation d'un NUC qui devient accessible à distance après un gros quart d'heure](/assets/img/mappyhour-linux-zero-touch-flow.png)

Le dernier point, ne plus rien toucher, était important. Pas de câble Ethernet provisoire, pas de clavier « juste pour le mot de passe », pas de commande copiée depuis un autre ordinateur. Après le démarrage sur la clé, Mitch devait se débrouiller tout seul jusqu'à ce qu'il réapparaisse sur le réseau et que je puisse reprendre le flambeau en SSH.

## Le serveur était déjà tout cuit dans la clé

Une clé Ubuntu classique contient un installateur. La mienne contenait aussi la configuration spécifique dont j'avais besoin.

Le Wi-Fi est configuré avant que l'installation commence vraiment. Ubuntu sait quel disque utiliser et quels paquets installer. Au premier démarrage, quelques services mettent en route Tailscale, le tunnel Cloudflare, Docker et MappyHour. Un contrôle final vérifie que les éléments importants répondent réellement.

Et puisqu'on va de toute façon surveiller ce serveur, autant préparer la clé USB pour installer le monitoring dans la foulée. Elle embarque donc aussi de quoi installer et configurer les agents qui envoient les métriques et les logs de Mitch à Grafana Cloud. Les tableaux de bord sont hébergés chez Grafana ; sur le NUC, on installe ce qui les alimente.

Je simplifie volontairement. La fabrication de cette clé a eu sa collection de problèmes de guillemets, de scripts imbriqués et de paquets Wi-Fi absents. Ça mérite éventuellement un article à part, pour les gens qui aiment voir Bash et PowerShell se disputer la propriété d'une apostrophe.

Mais ce n'est pas ce qui m'a frappé une fois la clé terminée.

Ce qui m'a frappé, c'est à quel point l'installation finale était banale.

Le NUC était posé par terre, sans périphérique. J'ai démarré dessus, puis je suis allé faire autre chose. Un gros quart d'heure plus tard, il avait rejoint le Wi-Fi, récupéré son identité sur Tailscale et ouvert l'accès SSH prévu dans l'image.

La commande de contrôle a fini par afficher **13 PASS, 0 FAIL**.

À ce moment-là, je n'avais pas seulement un Linux qui démarrait. J'avais déjà une session d'administration à distance, prête à l'emploi, sur une machine qui hébergeait de nouveau l'application.

Le premier build de la clé prend une dizaine de minutes. L'installation complète en prend environ dix-sept. Ce n'est pas instantané, mais ce sont des minutes pendant lesquelles personne n'a besoin de taper des commandes — particulièrement appréciable quand c'est ta première installation de Linux.

## Un quart d'heure plus tard : SSH

SSH est le moment où le NUC cesse d'être un objet dans mon salon.

Avant, il faut pouvoir l'allumer, voir ce qu'il fait et éventuellement intervenir. Après, il peut retourner dans son meuble. Tout se passe depuis mon laptop.

Pour que Mitch rejoigne Tailscale sans me demander de me connecter depuis le salon, il fallait préparer son autorisation à l'avance. Lors de la fabrication de la clé USB, le script ouvre l'administration Tailscale et me guide pour créer un jeton d'accès API, avec une validité de 90 jours. Je le copie-colle dans le terminal. Le script le garde pour les prochaines fabrications et l'intègre à l'image ; tant qu'il est valide, je n'ai pas à refaire cette étape.

Au premier démarrage, Mitch utilise ce jeton pour demander une clé d'enrôlement à usage unique, valable dix minutes. Il la consomme aussitôt pour rejoindre mon réseau privé. Une fois la machine inscrite, l'expiration de cette clé ne la déconnecte pas.

La clé USB ne peut donc pas dormir indéfiniment dans un tiroir : les 90 jours commencent à la création du jeton chez Tailscale. Refabriquer l'image avec le même jeton ne remet pas le compteur à zéro. S'il a expiré, il faut en créer un nouveau et régénérer l'image avant de réinstaller.

Le mot de passe Wi-Fi et ce jeton sont bien gravés dans l'image, qui reste donc un objet sensible. Pour SSH, seule ma clé publique s'y trouve. La clé privée, elle, ne quitte jamais mon laptop.

Une fois Mitch inscrit sur Tailscale et joignable en SSH, la distance ne change plus grand-chose. Il peut être à côté de mon bureau ou à trente kilomètres : le travail est le même.

Et c'est là que Claude entre vraiment dans l'histoire.

## Claude prend le relais

Administrer un serveur Linux a longtemps eu pour moi une barrière assez simple : je ne savais pas exactement quoi taper, et très franchement, je suis plus intéressé à m'approprier les concepts que la syntaxe.

Avec Claude, la relation est différente.

Je peux lui demander de vérifier les logs d'un certain service pour comprendre pourquoi il ne démarre pas, de regarder l'espace disque ou de déployer la dernière version. Il se connecte à Mitch en SSH depuis mon environnement de travail, exécute les contrôles, relie ce qu'il observe au code du projet et propose la correction.

Et ce n'est pas limité au dépannage. Une fois connecté, Claude peut aussi faire évoluer le serveur : ajouter un service, le raccorder au reste de la pile et vérifier qu'il répond. Mitch peut gagner de nouvelles briques sans ressortir du meuble — et moi, sans ressortir le clavier USB.

Je n'ai pas besoin de connaître par cœur la différence entre `journalctl`, `systemctl` et les options de `docker compose`. J'ai besoin de savoir ce que je veux obtenir, de comprendre la portée de la commande proposée et de vérifier le résultat.

Ce n'est pas tout à fait la même chose que « Claude gère le serveur à ma place ».

Claude ne sait pas qu'une coupure vient du routeur si je ne lui donne aucun moyen de l'observer. Il ne décide pas tout seul qu'il peut effacer un disque ou modifier un tunnel de production. Et quand plusieurs solutions sont possibles, quelqu'un doit encore choisir celle qui correspond au projet plutôt que celle qui est simplement commode à écrire.

Mais le niveau de connaissance nécessaire pour démarrer a beaucoup baissé.

Avant, une erreur Linux me renvoyait vers quinze pages de `man`, chacune convaincue que j'avais lu les quatorze autres. Maintenant, je peux partir du symptôme concret : « le site ne répond plus », « ce container redémarre », « le disque se remplit ». Claude fait le premier travail d'exploration et m'explique ce qu'il trouve dans le contexte de *mon* serveur.

Je n'ai pas acquis dix ans d'expérience en administration système. J'ai simplement arrêté d'en avoir besoin pour chaque petite opération.

## La complexité n'a pas disparu

La clé USB n'a pas supprimé la complexité d'une installation Linux. Elle l'a déplacée.

Au lieu de la payer à chaque réinstallation, au milieu d'une suite de formulaires et de commandes manuelles, je l'ai payée une fois dans une image reproductible. Le Wi-Fi, SSH, les tunnels et les services sont préparés à l'avance, relus comme du code et rejoués de la même façon. La différence, c'est que c'est diablement plus pratique à itérer sur mon laptop avec Claude qu'en me grattant la tête accroupi derrière un meuble au salon.

Je garde quand même le travail qui mérite une décision : protéger les secrets, limiter les accès, prévoir les sauvegardes et relire les opérations risquées. Claude peut écrire la commande. C'est toujours à moi de décider si elle a le droit de toucher au serveur.

## Le vrai changement

Le passage de Windows et WSL2 à Ubuntu a apporté quelques gains sympathiques. Les données de MappyHour, lues à travers NTFS et WSL2, plafonnaient autour de **1 Mo/s**. Sur ext4 natif, elles approchent les **200 Mo/s**. La mémoire au repos est passée d'environ **3 Go à 600 Mo**.

Mais ce n'est pas ça qui a changé ma relation au serveur.

Le vrai changement, c'est que Mitch n'est plus une machine configurée au fil du temps et qu'il faudrait reconstruire de mémoire. Si son SSD meurt, je peux régénérer la clé, redémarrer dessus et retrouver une machine joignable en SSH avec le même environnement. Ensuite, Claude peut reprendre le relais depuis un système connu.

La clé est à la fois l'installateur, la recette et le point de départ de l'administration. Elle ne contient pas seulement Ubuntu. Elle contient la réponse à la question pénible : « qu'est-ce que j'avais bien pu faire la dernière fois pour que ça marche ? »

Dans mon salon, tout cela s'est résumé à brancher une clé et appuyer sur un bouton.

J'avais donc raison sur un point : installer et administrer Linux à la main n'était peut-être pas un combat qui méritait d'être gagné.

À moins de simplement ne plus avoir à le faire à la main.
