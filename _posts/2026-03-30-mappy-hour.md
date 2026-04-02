---
layout: post
title: "Mappy Hour : la technologie au service de l'apéro"
tags: [project, gis, nextjs, swisstopo]
---

![Mappy Hour](/assets/img/mappy-hour.png)

Dimanche matin, début mars. 8h. Tout le monde dort encore. Dehors il fait 4 degrés et la saison des barbecues se fait méchamment attendre. Le genre de matin où tu fixes ton café en te demandant quand est-ce que tu pourras enfin t'asseoir en terrasse sans te les geler.

Et là, au lieu de me rendormir comme une personne normale, j'ai ouvert un terminal et tapé `npx create-next-app`. Parce que j'avais une question existentielle : est-ce que cette terrasse sur la place de la Riponne est vraiment au soleil à 16h, ou est-ce que l'immeuble d'en face me gâche l'apéro ?

## Le problème

Lausanne, c'est beau, mais c'est en pente. Et qui dit pente dit ombre. Le soleil tape à 14h sur une terrasse, et à 15h c'est fini parce qu'un immeuble de six étages décide que l'apéro est terminé. Google Maps ne te dit pas ça. Météo Suisse non plus.

J'en avais marre de m'installer en terrasse pour me retrouver à l'ombre 20 minutes plus tard. Alors j'ai fait ce que tout développeur ferait : j'ai sur-ingéniéré une solution.

## Le stack

Next.js, Leaflet, et beaucoup de maths. L'idée de base est simple : pour un point donné et une heure donnée, est-ce que le soleil est visible ?

En pratique, c'est trois couches de calcul :

1. **Le terrain** -- les montagnes et collines entre la Suisse et la France, via SwissALTI3D (résolution 2m) et le DEM Copernicus pour l'horizon transfrontalier
2. **Les bâtiments** -- les données SwissBUILDINGS3D de Swisstopo, des vrais modèles 3D, pas des boîtes extrudées (enfin, un peu des deux)
3. **La végétation** -- la canopée des arbres via swissSURFACE3D

Pour chaque point, on trace un rayon vers le soleil et on regarde si quelque chose le bloque. Simple sur le papier. Moins simple quand tu as des milliers de bâtiments à tester.

## L'évolution du modèle

Le calcul d'ombre des bâtiments a traversé trois versions, chacune née d'un problème concret :

**Version 1 : les prismes.** On extrude le footprint de chaque bâtiment en hauteur — une boîte. Rapide, mais un bâtiment en L devient un rectangle plein. Résultat : des terrasses déclarées à l'ombre qui ne le sont pas.

**Version 2 : le two-level.** Le prisme filtre d'abord. Quand le résultat est ambigu (le soleil est proche du seuil d'ombre), on vérifie avec le vrai mesh 3D. Meilleur, mais encore des faux positifs — parce que le prisme peut être "confiant et faux" quand sa bounding box est trois fois plus grande que le vrai bâtiment.

**Version 3 : le mesh détaillé.** Les vrais polyfaces 3D des fichiers DXF de Swisstopo, avec 32 passes de raffinement. Zéro faux positif. C'est le défaut actuel. Et grâce aux optimisations (grille spatiale, corridor de recherche, contexte partagé par tuile), c'est suffisamment rapide pour tourner en production.

## Le pipeline de données

Le plus sous-estimé du projet. Avant de calculer quoi que ce soit, il faut :

- Télécharger les GeoTIFF de terrain via l'API STAC de Swisstopo
- Parser des fichiers DXF de bâtiments 3D (oui, DXF, comme en 1982)
- Construire un index spatial pour que le ray-tracing ne teste pas les 50'000 bâtiments de Lausanne à chaque requête
- Précalculer un masque d'horizon à 360 degrés pour chaque zone

Tout ça tient dans des scripts d'ingestion qu'on lance une fois. Après, c'est du cache en tuiles de 250m avec invalidation automatique quand le modèle évolue.

## Trouver un bar au soleil

Le ray-tracing, c'est la fondation. Mais le vrai use case, ce n'est pas "est-ce que ce pixel est au soleil ?". C'est : **"quel bar a une terrasse au soleil à 17h ?"**

L'app interroge OpenStreetMap via l'Overpass API pour les terrasses, bars, restos et parcs de Lausanne. Chaque lieu passe par un endpoint qui calcule ses fenêtres de soleil — les créneaux horaires où la terrasse est éclairée. Le résultat : tu ne cherches pas un bar. Tu cherches un bar au soleil à l'heure de ton apéro.

## Et concrètement ?

Tu ouvres la carte. Tu cliques sur une terrasse. L'app te dit : soleil de 11h à 15h20, après c'est l'immeuble au nord qui prend le relais. Tu peux aussi voir la grille colorée en temps réel -- jaune pour le soleil, rouge pour l'ombre -- et regarder l'animation de la journée défiler.

Ça marche pour Lausanne et Nyon. Parce que c'est là que je bois des coups.

## Ce que j'ai appris

Que la donnée publique suisse est exceptionnelle. SwissALTI3D, SwissBUILDINGS3D, swissSURFACE3D -- tout est accessible, documenté, et d'une précision ridicule. Le vrai travail, c'est de transformer ces données brutes en quelque chose d'utilisable à la vitesse d'une requête HTTP.

Et que le meilleur moteur de motivation pour un side project, c'est un apéro au soleil.

## 4 heures et un LLM

Premier commit : dimanche 8 mars 2026, 07:57. Premier prototype fonctionnel avec les ombres de bâtiments : 11:50. Quatre heures.

Impossible sans LLM. Pas parce que le code est compliqué — c'est du TypeScript, du Next.js, rien d'exotique. Mais parce que les **maths** sont le bottleneck. Ray-tracing de polygones 3D, projection LV95↔WGS84, correction de réfraction atmosphérique, produits scalaires pour le corridor de recherche... Je voyais comment ça devait marcher en bougeant les mains. Trouver la formule exacte, jamais.

Le LLM ne génère pas le code à ma place. Il me donne les outils mathématiques que je n'aurais pas trouvés en moins de deux jours de recherche. La différence entre "je sais que ça existe" et "voici l'implémentation qui fonctionne", c'est exactement ce que le LLM comble.

Les optimisations, par contre, c'est du trial-and-error pur. Essayer, mesurer, garder ou jeter. Le LLM propose des pistes, mais c'est le benchmark qui décide.
