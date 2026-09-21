---
title: blog privé et photo drive
image: "@assets/docs/projets/chat-qui-dort.png"
imageAlt: "chat et logo pelotte o pattes"
pubDate: 2026-09-21
author: [lory-mattolini, mathieu-escabias]
---

### Pelote o Pattes — Le journal photo des chats, sans se ruiner

Charlène tient ses clients informés chaque jour de comment vont leurs chats pendant leur séjour. Une attention adorable — mais chronophage. Il fallait lui trouver une solution simple, gratuite, et qui ne ralentisse pas son site.

---

### Le problème

Un hôtel pour chats, c'est avant tout une question de confiance. Les propriétaires confient leur animal à Charlène et veulent avoir de ses nouvelles régulièrement. Elle postait donc chaque jour des photos pour rassurer ses clients — un geste qui fait toute la différence, mais qui lui prenait un temps considérable.

L'enjeu : automatiser ce processus sans lui compliquer la vie, sans abonnement mensuel, et sans alourdir son site avec des dizaines de photos stockées en local.

---

### La solution : Google Drive comme galerie

Avec **Lory**, on a conçu un système entièrement gratuit basé sur l'**API Google Drive**.

Le principe est simple du côté de Charlène : elle poste ses photos dans un dossier Drive, comme elle le ferait normalement. C'est tout ce qu'elle a à faire.

De l'autre côté, la magie opère automatiquement :

- Un **système cron** synchronise les photos toutes les heures depuis le Drive vers le site
- Les photos sont **classées par date de prise de vue réelle** grâce à la lecture des données **EXIF** — pas par date d'upload. Si une photo a été prise le mardi mais ajoutée au Drive le jeudi, elle apparaîtra bien dans la galerie du mardi
- Les photos ne sont **jamais stockées sur le serveur du site** : elles sont servies directement depuis Drive, sans alourdir l'hébergement d'un seul mégaoctet

---

### Une page protégée pour les clients

La galerie est accessible sur une page **protégée par mot de passe**, réservée aux clients dont l'animal est en séjour. Charlène leur communique l'accès à la réservation — et chaque jour, ils peuvent voir les nouvelles photos postées sans avoir à demander.

Un petit espace de réassurance, discret et efficace.

---

### Mise en place technique

- Connexion à l'**API Google Drive** (gratuite, sans quota problématique à cette échelle)
- **Tâche cron** de synchronisation horaire
- Lecture des métadonnées **EXIF** pour le tri chronologique par date de prise de vue
- **Zéro stockage serveur** : les images restent hébergées sur Drive
- Page protégée par **mot de passe** sous WordPress
- Interface pensée pour être lisible et agréable sur mobile — les clients consultent ça depuis leur téléphone

---

### Retour personnel

Ce système est un bon exemple de ce qu'on peut faire quand on prend le temps de comprendre le vrai besoin. Charlène n'avait pas besoin d'une galerie photo complexe — elle avait besoin de gagner du temps tout en gardant ce lien quotidien avec ses clients.

Utiliser ce qu'elle avait déjà (un compte Google Drive) comme fondation, c'est la solution la plus élégante qu'on pouvait trouver. Gratuite, légère, et tellement simple à utiliser qu'elle n'a rien eu à apprendre.

---

### Conclusion

Pas besoin d'un plugin premium ou d'un service tiers payant pour offrir une vraie valeur à un client. Parfois, une API gratuite, un cron bien configuré et une lecture EXIF suffisent à transformer une tâche quotidienne fastidieuse en quelque chose d'entièrement automatique.

Les chats sont heureux. Les propriétaires aussi. Et Charlène a récupéré du temps.