# Plan d'implémentation : Correction Modale & Liens Hôtels

Ce plan détaille les corrections apportées à la modale d'hôtels pour assurer un affichage correct et l'ajout des liens vers les sites officiels et Booking.com.

## Changements Proposés

### Composants UI

#### [MODIFY] [HotelModal.tsx](file:///Users/leoelmy/Projects/mariage-zineb-basile/src/components/HotelModal.tsx)
- **Correction Layout** : Utilisation d'un `Portal` React pour s'assurer que la modale est rendue à la racine du `body` et ne subit pas les transformations CSS des parents (qui causent le problème de positionnement tout en bas du site).
- **Mise à jour des données** :
  - Ajout des sites officiels et des liens Booking.com pour Villazancot, Dar Tanja, Fredj et Rembrandt.
  - Mise à jour des descriptions et arguments selon les nouvelles instructions.
- **Amélioration UI** :
  - Ajout de boutons pour le site officiel et Booking dans chaque carte d'hôtel.
  - Distinction visuelle entre les deux types de liens.
  - S'assurer que le défilement se fait à l'intérieur de la modale et non sur la page parente quand elle est ouverte (via `overflow-hidden` sur le body).

## Plan de Vérification

### Vérification Manuelle
1. Ouvrir la modale depuis n'importe quelle position de défilement sur le site.
2. Vérifier que la modale apparaît bien centrée dans le viewport (fenêtre) et non tout en bas de la page.
3. Vérifier que le contenu de la modale est scrollable si nécessaire.
4. Tester tous les nouveaux liens (Site Officiel et Booking).
5. Vérifier le comportement sur mobile.
