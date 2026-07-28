---
title: despanisator
image: "@assets/docs/projets/despanisator.png"
imageAlt: Image du programme despanisator
date: 2025-10-15
author: [mathieu-escabias]
---


### Le Despanisator — Quand un problème précis mérite un outil sur mesure

Il y a des problèmes qu'on pourrait régler à la main, laborieusement, ou en envoyant des tonnes de tokens à une IA. Et puis il y a la troisième option : coder un outil qui le fait en un clic.

---

### Le problème

Mon client gère des fiches produit rédigées à la main, avec une mise en forme soignée — gras, souligné, espacements... Le souci, c'est que ce contenu transite depuis un site créé en 2007, passé par d'innombrables mises à jour successives.

À force d'être trimballet de version en version, le HTML généré était devenu un véritable champ de mines :

- Des `<span>` imbriqués dans d'autres `<span>` sans raison
- Des espaces en trop, des textes collés
- Des balises étranges ou mal fermées
- Des tailles de police codées en dur
- Des familles de polices entières héritées d'anciennes versions du site — en totale contradiction avec le thème actuel

Résultat : un code illisible, fragile, et qui cassait régulièrement le rendu visuel des fiches produit.

---

### La solution : le Despanisator

Plutôt que de corriger à la main fichier après fichier — ou de déléguer ça à une IA au prix de tokens gaspillés — j'ai développé un petit programme sur mesure : le **Despanisator**.

Trois fichiers. JavaScript, HTML, CSS. Ça tient dans un répertoire, ça s'ouvre dans un navigateur, et ça tourne entièrement en local — sans serveur, sans connexion, sans abonnement.

---

### Ce qu'il fait

- **Nettoyage en un clic** : le contenu HTML collé ou importé est analysé et remis en forme instantanément
- **Système de filtres** : une interface de cases à cocher permet de choisir précisément quelles balises supprimer — parce que certaines sont à garder, et que le programme ne doit pas décider à la place de l'utilisateur
- **Double mode d'import** : copier-coller direct dans la zone de texte, ou glisser-déposer un fichier `.txt`
- **Zéro dépendance externe** : aucune API, aucune IA, aucun token consommé — tout le traitement se fait en pur JavaScript, côté client

![Démonstration du Despanisator](@assets/docs/projets/Enregistrement-despanisator.gif "Démonstration du Despanisator en action")
---

### Mise en place technique

- Développé en **JavaScript**, **HTML** et **CSS** — trois fichiers, pas un de plus
- Hébergé **en local** chez le client, sans besoin de serveur
- Interface simple et accessible, pensée pour un utilisateur non technique
- Logique de nettoyage entièrement paramétrable via les filtres

---

### Retour personnel

Ce projet est un bon exemple de ce que j'aime faire : identifier un problème précis, comprendre sa source, et concevoir une solution adaptée plutôt que générique. Le Despanisator ne fait qu'une chose — mais il la fait bien, instantanément, et sans contrainte extérieure.

C'est aussi une petite fierté d'avoir évité le réflexe "on va demander à une IA" pour quelque chose qui méritait simplement un outil bien pensé.

---

### Conclusion

Pas tous les outils utiles sont complexes. Parfois, trois fichiers et une bonne logique suffisent à résoudre un problème qui faisait perdre du temps chaque semaine.

Le Despanisator n'est pas en accès public — il est développé et vendu sur mesure pour répondre à un besoin client spécifique. Mais il illustre bien mon approche : quand un problème revient régulièrement, la bonne réponse c'est un outil, pas une procédure manuelle.