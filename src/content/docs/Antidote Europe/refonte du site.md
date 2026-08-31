---
title: refonte Antidote Europe
image: "@assets/docs/projets/site-refonte-antidote.png"
imageAlt: logo antidote Europe
pubDate: 2026-08-31
author: [mathieu-escabias, lory-mattolini]
---

![Gif de la refonte du site Antidote Europe](@assets/docs/projets/refonte-antidote.gif "Aperçu de la refonte du site Antidote Europe")

### Refonte d'Antidote Europe — Déminer vingt ans de code accumulé

Reprendre un site, c'est déjà complexe. Le refondre en profondeur sans rien casser, sans interrompre le service, sur une base vieille de vingt ans — c'est un autre niveau.

---

### L'état du site avant intervention

Pour comprendre l'ampleur du chantier, il faut décrire ce qu'on a trouvé en soulevant le capot.

Le site tournait sur **Themify**, un constructeur de pages WordPress vieillissant, dont le template avait été intégré de force dans une configuration qui n'était pas prévue pour lui. Résultat : des conflits partout, des comportements imprévisibles, et un rendu visuel qui s'effritait à chaque mise à jour.

La liste des problèmes était longue :

- **Un plugin piraté** dans l'installation — une bombe à retardement en termes de sécurité
- **Une traduction boiteuse** : le site était censé être multilingue, mais la gestion des langues était bancale et incohérente
- **Des dizaines de pages fantômes** : des pages non référencées mais toujours actives, invisibles pour les visiteurs mais indexées par les moteurs de recherche — du bruit pur
- **Des tables de base de données actives mais inutilisées** : des données qui prenaient de la place sans servir à rien
- **Des plugins en pagaille** : installés au fil des années par différentes mains, la plupart dormants ou redondants
- **Une version de PHP trop ancienne** pour assurer la compatibilité avec les extensions modernes
- **Du code épars et non documenté**, héritage de multiples interventions sans cohérence globale

Et le symptôme le plus concret de tout ça : vers la fin, il n'était plus possible d'ajouter de nouveaux articles sans déclencher des erreurs. Le site s'était bloqué lui-même.

---

### Le grand ménage

La refonte ne pouvait pas commencer sans un nettoyage complet et documenté. Chaque suppression a été répertoriée : pages retirées, plugins désinstallés, tables de base de données purgées, code mort retiré.

Ce travail de fond — invisible pour les visiteurs — est pourtant ce qui a rendu tout le reste possible. On ne reconstruit pas sur des fondations pourries.

La version de PHP a été mise à jour, le plugin piraté supprimé, les traductions rationalisées, et les accès serveur sécurisés et restructurés.

---

### La refonte graphique avec Elementor

Une fois le terrain déblayé, la reconstruction pouvait commencer. Le site a été refondu visuellement avec **Elementor**, ce qui a permis de repartir d'une base propre tout en gardant la maîtrise du rendu page par page.

Le résultat visuel est sans commune mesure avec l'ancien site : plus lisible, plus cohérent, plus digne du sérieux de l'association et du contenu scientifique qu'elle publie.

---

### Restructuration de l'architecture

Le chantier graphique ne suffisait pas. La structure même du site posait problème : trop de pages différentes, une navigation pénible, et un contenu mal organisé qui rendait la découverte du site frustrante.

Parmi les décisions structurelles les plus importantes :

- **Séparation des articles en deux collections distinctes** — *news* et *articles* — pour mettre fin à l'indexation de contenus trop courts qui parasitaient le référencement. Des articles de trois lignes n'ont pas leur place dans un index SEO sérieux.
- **Réorganisation de la navigation** : simplification des menus, suppression des doublons, création d'une hiérarchie logique que l'utilisateur peut suivre sans se perdre
- **Refonte du référencement** : nouvelles pages optimisées, URLs propres, sitemap remis à jour

---

### Mise en place technique

- **WordPress** avec **Elementor** comme constructeur de pages
- Migration et mise à jour de **PHP** vers une version compatible et maintenue
- **Suppression du plugin piraté** et audit de sécurité complet
- **Purge de la base de données** : tables inutiles supprimées, données nettoyées
- **Désinstallation des plugins dormants** et rationalisation des extensions actives
- **Restructuration du contenu** : séparation news / articles, pages fantômes retirées
- **Refonte SEO** : sitemap, métadonnées, hiérarchie de contenu

---

### Retour personnel

Ce projet est l'une des réfections les plus exigeantes que j'aie menées. La spécificité d'une refonte sur un site aussi ancien, c'est qu'on ne peut jamais aller vite. Chaque modification peut avoir des effets en cascade sur des dizaines d'autres éléments. Il faut tester, observer, corriger — encore et encore.

C'est aussi le type de mission qui demande de savoir expliquer ce qu'on fait et pourquoi. André Menache, le directeur d'Antidote Europe, n'est pas développeur. Lui donner de la visibilité sur un chantier aussi technique, sans le noyer dans les détails, fait partie du travail.

---

### Conclusion

Antidote Europe a aujourd'hui un site dont il peut être fier — propre, lisible, sécurisé, et capable d'accueillir les années à venir sans accumuler une nouvelle couche de lasagne.

Le travail n'est pas terminé. Il ne l'est peut-être jamais vraiment sur un site vivant. Mais les fondations, elles, sont désormais saines.