---
layout: post
title: "Héberger une app Next.js en prod sur un NUC pour 1.25 CHF/mois"
date: 2026-05-18 09:00:00 +0200
tags: [project, infrastructure, deployment, docker, tailscale, cloudflare]
header_image: /assets/img/self-hosting-nuc-zero-euro.png
unlisted: true
permalink: /blog/preview/c3d8f014/self-hosting-nuc-zero-euro
sitemap: false
---

J'ai une app Next.js qui tourne en production depuis quelques mois sur un NUC Intel posé dans un coin de bureau. Pas de VPS, pas d'AWS, pas de Vercel. Un NUC, une connexion internet de bureau, un domaine à 15 CHF l'an. Coût récurrent : 1.25 CHF/mois.

Ce n'est pas un article sur pourquoi c'est une bonne idée en général — souvent ce ne l'est pas. C'est un article sur ce que j'ai appris en le faisant : les problèmes inattendus, les solutions qui n'ont pas l'air d'exister, et quelques chiffres qui m'ont surpris.

## Le stack et les contraintes de départ

**La machine** : un NUC Intel sous Windows 11 Pro, 118 Go de SSD. Derrière NAT — une box internet banale, pas d'IP publique fixe, aucun port-forwarding possible. L'app elle-même est un container Docker qui a besoin d'un gros bind-mount (~33 Go de données précalculées).

**Pourquoi pas Docker Desktop** : Docker Desktop est gratuit pour les projets personnels mais son licensing devient ambigu dès qu'il y a une organisation derrière. Docker Engine directement dans Ubuntu WSL2 évite la question. C'est la même chose sans GUI, sans les 500 Mo d'overhead de l'app Desktop, et sans la conversation de licensing.

**Pourquoi Windows** : la machine avait Windows, la migration vers Linux aurait coûté du temps, et WSL2 suffit pour Docker. Certains combats ne méritent pas d'être gagnés.

## La VM qui disparaît toutes les cinquante secondes

Premier problème sérieux : l'app tombait de façon intermittente. Pas un crash — le container continuait à tourner. Mais les requêtes échouaient en 502, et `docker ps` dans WSL mettait plusieurs secondes à répondre, parfois timeout.

`dmesg` dans WSL révèle l'explication :

```
Operation canceled @p9io.cpp:258 (AcceptAsync)
Received SIGTERM from PID 1 (systemd-shutdow)
```

WSL2 fait tourner Linux dans une VM Hyper-V légère. Cette VM a un **idle timeout** : quand Windows estime qu'il n'y a plus d'activité utilisateur côté WSL, il éteint la VM. Silencieusement, sans warning, environ 50 secondes après le dernier accès. Le container continue à exister conceptuellement — mais le runtime est mort.

La solution naïve : passer `vmIdleTimeout=-1` dans `.wslconfig`. Ça ne suffit pas.

La vraie solution est un triplet de conditions cumulatives — toutes les trois sont nécessaires, aucune ne remplace les autres :

1. `systemd=true` dans `/etc/wsl.conf` de la distro
2. `vmIdleTimeout=-1` dans `.wslconfig` **dans le profil Windows de l'utilisateur qui lance WSL** — pas n'importe quel profil, celui de la session qui possède la VM
3. Une **tâche planifiée** qui lance `wsl.exe sleep infinity` au logon de cet utilisateur

Le troisième point est contre-intuitif. Windows ne regarde pas ce qui tourne *dans* la VM pour décider si elle est inactive — il regarde si une commande `wsl.exe` est en cours d'exécution *côté hôte*. Sans un processus `wsl.exe` actif dans la session Windows, le timer expire même avec `vmIdleTimeout=-1`. La tâche planifiée maintient ce processus vivant en permanence.

## Tailscale : l'accès sans IP publique

Problème suivant : comment rendre l'app accessible depuis internet sans IP publique fixe ni port-forwarding routeur.

[Tailscale Funnel](https://tailscale.com/kb/1223/funnel) résout ça proprement. Tailscale est un VPN mesh qui tourne sur la machine — il crée un tunnel sortant vers le réseau Tailscale. Funnel étend ça en exposant un port local sur une URL publique (`<machine>.<tailnet>.ts.net`), avec TLS automatique. La machine n'a pas besoin d'être joignable directement. C'est Tailscale qui reçoit le trafic et le route vers elle via le tunnel déjà établi.

Ça fonctionne. L'URL est stable, le certificat est valide. Mais l'URL est moche : `mitch.tail63c42d.ts.net`.

## Le problème du certificat qu'on ne contrôle pas

Idée naturelle : acheter un domaine, faire un CNAME `mappyhour.ch → mitch.tail63c42d.ts.net`, prendre un certificat Let's Encrypt pour `mappyhour.ch`.

Ça ne marche pas. Le CNAME route le trafic vers les serveurs Tailscale, qui transmettent à la machine. Mais c'est **Tailscale** qui termine le TLS — avec son propre certificat pour `*.tail63c42d.ts.net`. Le certificat Let's Encrypt pour `mappyhour.ch` n'a nulle part où s'installer. Le navigateur voit un certificat valide pour un autre domaine, et refuse.

Pour que `mappyhour.ch` fonctionne avec un certificat valide, il faut que **la terminaison TLS soit sous le contrôle de quelqu'un qui a un certificat pour ce domaine**. Sans IP publique, ça veut dire un intermédiaire.

## Cloudflare Tunnel : le tunnel sortant gratuit

[Cloudflare Tunnel](https://www.cloudflare.com/products/tunnel/) fait exactement ce dont j'avais besoin. `cloudflared` tourne sur la machine, crée une connexion sortante vers l'edge Cloudflare. Le DNS de `mappyhour.ch` pointe vers Cloudflare (CNAME vers `<uuid>.cfargotunnel.com`). Cloudflare termine TLS pour `mappyhour.ch` avec son propre certificat, puis route le trafic vers la machine via le tunnel.

Aucun port ouvert. Aucune IP publique. TLS valide pour le domaine custom. Coût : 0 CHF.

Ce qui m'a surpris, c'est que l'intégralité du setup est scriptable via API : créer le tunnel, configurer les règles d'ingress, créer les DNS records. Le `cloudflared` sur la machine n'a besoin que d'un token pour se connecter. Aucune interaction navigateur requise côté serveur — pratique quand le serveur est headless et que la session interactive est compliquée à obtenir.

## Le CI/CD qui n'a pas non plus d'IP publique

Côté symétrique du même problème : à chaque push sur `master`, GitHub Actions doit pouvoir déployer sur la machine. Build une image Docker, la pusher sur GHCR, se connecter en SSH au NUC, et lancer `docker compose pull && up -d`. Sauf que les runners GitHub Actions sont des VMs jetables hébergées chez GitHub — ils n'ont aucun moyen direct de joindre une machine derrière NAT.

La solution traditionnelle pour ce cas : ouvrir un port SSH public, mettre un allowlist d'IPs source pour les runners GitHub. Impossible ici puisqu'il n'y a pas d'IP publique du tout, et l'allowlist GitHub Actions est de toute façon un sport en soi (le range d'IPs change régulièrement).

La solution propre : le runner GitHub Actions rejoint **lui aussi** le tailnet. Tailscale a un mode "OAuth client" prévu pour exactement ce cas : un workflow GHA reçoit un `client_id` / `client_secret`, l'action [`tailscale/github-action`](https://github.com/tailscale/github-action) génère une auth-key éphémère au démarrage du job, le runner devient un node taggé `tag:ci` sur le tailnet pour la durée du job, et le node disparaît à la fin. Plus de SSH public, plus d'allowlist, plus de rotation de clés. La connexion SSH `runner → NUC` se fait via le tailnet comme n'importe quel autre node.

```
push master
  ↓
GitHub Actions runner (instance jetable)
  ↓ Tailscale OAuth → node éphémère tag:ci sur le tailnet
  ↓ SSH via tailnet → mitch
  ↓ docker compose pull && up -d
  ↓ run terminé → node ci supprimé
```

L'élégance est que la même primitive — un tunnel sortant Tailscale — sert deux usages opposés : la machine se rend joignable depuis internet via Funnel, et le runner CI se rend joignable depuis la machine via le tailnet. Aucun port ouvert nulle part.

## Le disque qui grossit sans jamais rétrécir

Après quelques semaines, le SSD de 118 Go commence à se remplir plus vite que prévu. Coupable : le fichier `.vhdx` de la distro WSL2.

Un VHDX dynamique (le format de disque virtuel qu'utilise WSL2) alloue des blocs au fur et à mesure que le filesystem interne en a besoin. Mais quand le filesystem libère de l'espace — après un `docker system prune`, par exemple — les blocs restent alloués côté Windows. Le fichier ne rétrécit jamais spontanément.

Résultat observé : le `.vhdx` était à **28.9 Go** pour un ext4 interne qui n'utilisait que ~5 Go. Les `docker pull` successifs des derniers mois avaient gonflé le fichier, et les prunes n'avaient récupéré l'espace que dans le filesystem Linux — pas dans le conteneur Windows.

Fix : `diskpart` avec `compact vdisk`, lancé après `wsl --shutdown`. La cmdlet PowerShell native `Optimize-VHD` serait plus élégante, mais elle requiert Hyper-V, qui n'est pas installé par défaut sur Windows Pro. `diskpart` est builtin et fait le même travail.

Résultat : **22 Go récupérés en quelques minutes**. Le VHDX est passé de 28.9 Go à 6.7 Go. Sans le moindre impact sur les données ou le container après redémarrage.

C'est le genre de problème qu'on ne voit pas venir la première fois : l'espace libre *dans* WSL dit une chose, l'espace libre *sur Windows* dit une autre.

## Les chiffres finaux

| Composant | Coût mensuel |
|---|---|
| NUC (machine possédée) | 0 CHF |
| Cloudflare Tunnel | 0 CHF |
| Tailscale (plan personal) | 0 CHF |
| Docker Engine dans WSL2 | 0 CHF |
| Umami analytics (self-hosted) | 0 CHF |
| Domaine `mappyhour.ch` | ~1.25 CHF |
| **Total** | **~1.25 CHF/mois** |

Ce n'est pas une option réaliste pour une app à fort trafic ou avec des contraintes de SLA. Mais pour un side project avec quelques dizaines d'utilisateurs, un NUC est plus que suffisant — et cette expérience m'a appris plus sur le fonctionnement réel de WSL2, Hyper-V et les tunnels réseau que n'importe quelle configuration cloud où l'infrastructure est abstraite derrière une console.

La prochaine fois que le VHDX gonfle, je saurai quoi faire.
