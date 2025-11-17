Contexte du projet

Ce projet a été créé pour permettre de générer facilement des dégradés de couleurs en direct.

L’objectif était de mettre en place un petit outil où l’utilisateur peut :

- choisir deux couleurs
- choisir l’angle du dégradé
- voir le code CSS correspondant
- et visualiser le résultat immédiatement

Cela permet de créer rapidement un dégradé utile pour des sites web ou des maquettes sans devoir écrire le code soi même.

Fonctionnalités

- Choix de deux couleurs grâce à des champs de type color.
- Sélection de l’angle du dégradé avec un slider entre 0 et 360°.
- Affichage en direct du résultat.
- Génération automatique du code CSS à copier.
- Interface simple et facile à comprendre.

Implémentation technique :

1) HTML

Le fichier dégradé.html organise la page :

- un cadre qui affiche le dégradé
- deux champs pour choisir les couleurs
- un slider pour l’angle
- et une zone qui montre le code CSS du dégradé

La structure est simple pour rendre l’outil facile à utiliser.

2) CSS

Le fichier dégradé.css gère l’apparence :

- un fond gris pour faire ressortir le dégradé
- un cadre avec des arrondis et une ombre
- des contrôles alignés de manière propre
- un affichage clair du code CSS

Le but est d’avoir une interface propre, moderne et agréable à regarder.

3) JavaScript

Le fichier dégradé.js s’occupe du fonctionnement :

- il récupère les valeurs des couleurs et de l’angle
- il construit automatiquement la valeur CSS du dégradé (linear-gradient)
- il met à jour l’affichage du dégradé
- il met à jour l’angle affiché et le code CSS

La fonction updateGradient() est appelée à chaque changement et met tout à jour en direct.

Exemple de code css généré :

background: linear-gradient(45deg, #ff6b6b, #4ecdc4);

Objectifs atteints :

Ce projet permet de :

- générer facilement un dégradé CSS
- voir le résultat sans recharger la page
- montrer la gestion du DOM
- utiliser des événements JavaScript
- afficher du style de manière dynamique
- proposer une interface simple et pratique

Structure du projet
/
|-- dégradé.html
|-- dégradé.css
|-- dégradé.js
