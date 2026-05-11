# Marche avec JESUS - Site Officiel

Ce projet est une application web moderne et élégante pour promouvoir l'événement **Marche avec JESUS**, un rassemblement spirituel à Abomey, Bénin.

## Architecture

- **Frontend :** React avec Vite
- **Styling :** Tailwind CSS
- **Animations :** Motion (Framer Motion)
- **Backend :** Express (Node.js) pour la gestion des inscriptions
- **Validation :** Zod & React Hook Form
- **Tests :** Vitest & React Testing Library

## Fonctionnalités

- **Hero Section :** Impact visuel fort avec message inspirant.
- **À propos :** Présentation des objectifs de l'événement.
- **Infos Pratiques :** Date, heure, lieu et carte interactive.
- **Formulaire d'Inscription :** Inscription en temps réel via une API Express.
- **Design Responsive :** Optimisé pour mobile, tablette et desktop.
- **Gestion d'Erreurs :** Validation complète côté client et serveur.

## Installation et démarrage

1. **Installer les dépendances :**
   ```bash
   npm install
   ```

2. **Démarrer en mode développement :**
   ```bash
   npm run dev
   ```
   L'application sera accessible sur `http://localhost:3000`.

3. **Lancer les tests :**
   ```bash
   npm test
   ```

4. **Build pour la production :**
   ```bash
   npm run build
   ```

## Structure du projet

- `src/components/` : Composants UI réutilisables et sections de page.
- `src/constants.ts` : Détails de l'événement et thème de couleurs.
- `src/types.ts` : Définitions TypeScript.
- `server.ts` : Point d'entrée du serveur Express.
- `src/__tests__/` : Tests unitaires et d'intégration.
