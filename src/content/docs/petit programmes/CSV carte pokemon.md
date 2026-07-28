---
title: CSV carte pokemon
image: "@assets/docs/projets/csv-pokemon.png"
imageAlt: Image du programme despanisator
date: 2024-12-01
author: [mathieu-escabias]
---


### CSV pour les maîtres Pokémon — Quand une API JSON devient un catalogue PrestaShop

Avant les IA génératives, avant les outils no-code, il y avait un problème, un développeur, et du code écrit à la main. Ce programme, c'est exactement ça.

---

### Le problème

Mon client gérait un site PrestaShop de vente de cartes Pokémon. Pour alimenter son catalogue, il devait saisir chaque carte manuellement — une par une, à la main. Une tâche aussi longue que pénible quand on parle de centaines de références réparties sur des dizaines de séries et collections.

Ce dont il avait besoin : un fichier CSV structuré, trié par série et collection, prêt à être importé directement dans PrestaShop via **StoreCommander** — avec les images, les noms, et tout ce qui va avec. En français **et** en anglais.

---

### Le problème dans le problème

La source de données idéale existait : **[TCGdex](https://tcgdex.dev/fr)**, une API complète recensant les cartes Pokémon avec toutes leurs informations.

Sauf que cette API ne parle qu'une langue : le **JSON**.

Et PrestaShop, lui, attend du **CSV**.

---

### La solution : un convertisseur sur mesure

J'ai développé de A à Z — sans IA, à une époque où ce n'était pas encore dans les habitudes — un programme capable de :

- **Interroger l'API TCGdex** en comprenant son architecture, ses endpoints, ses relations entre séries, collections et cartes
- **Récupérer toutes les informations voulues** : nom, série, collection, images, données spécifiques à chaque carte
- **Transformer le tout en CSV propre**, trié par série et collection, exactement comme le client le souhaitait
- **Générer deux fichiers** : un en français, un en anglais
- **Inclure les URLs des images** de chaque carte pour permettre l'import visuel via StoreCommander

---

### La partie la plus technique

Le vrai défi n'était pas la conversion JSON → CSV en elle-même, mais de **comprendre l'architecture de l'API**. TCGdex structure ses données en plusieurs niveaux — séries, sets, cartes — et il faut naviguer entre ces couches pour reconstituer une fiche produit complète avec toutes ses informations et ses visuels.

Une fois l'architecture maîtrisée, le reste coule de source. Mais il fallait y passer du temps.

---

### Le résultat

Grâce à ce programme, le client a pu alimenter son catalogue de façon autonome, en quelques clics plutôt qu'en saisie manuelle interminable. Il sélectionne la série ou la collection qui l'intéresse, lance le programme, récupère son CSV — et StoreCommander fait le reste, images comprises.

Un gain de temps massif sur une tâche qui aurait pu rester un enfer logistique indéfiniment.

![Démonstration du maitre pokemon](@assets/docs/projets/Enregistrement-csv-pokemon.gif "Démonstration du maitre pokemon")

---

### Mise en place technique

- Programme développé entièrement à la main, **sans IA**
- Connexion et parsing de l'**API TCGdex** (JSON)
- Conversion et export en **CSV** structuré par série/collection
- Sortie bilingue **français / anglais**
- Compatible avec l'import **StoreCommander** pour PrestaShop, gestion des images incluse

---

### Retour personnel

Ce projet me rappelle à quel point comprendre une API de fond en comble est une compétence à part entière. Ce n'est pas juste lire la documentation — c'est comprendre les relations entre les données, anticiper les cas particuliers, et construire quelque chose de fiable par-dessus.

Et le faire sans IA, c'est quelque chose dont je suis fier. Pas par principe idéologique — mais parce que ça prouve que la logique était là, pensée et construite de mes propres mains.

---

### Conclusion

Un problème simple en apparence, une solution qui demande de vraiment comprendre ce qu'on manipule. CSV pour les maîtres Pokémon, c'est un petit programme discret qui a rendu un service concret et durable à son utilisateur.

Exactement ce qu'un bon outil doit faire.