# Application Web FixTogether

Cette application Next.js constitue la partie frontend du projet FixTogether, une plateforme communautaire de réparation d'objets qui vise à promouvoir l'économie circulaire et à réduire les déchets.

## Structure du projet

```
web/
├── app/                  # Structure App Router de Next.js
│   ├── (auth)/           # Routes pour l'authentification
│   ├── categories/       # Pages des catégories d'objets
│   ├── profile/          # Gestion de profil utilisateur
│   ├── repair-requests/  # Gestion des demandes de réparation
│   ├── tutorials/        # Tutoriels de réparation
│   ├── globals.css       # Styles globaux
│   └── layout.tsx        # Layout principal
├── components/           # Composants React réutilisables
│   ├── auth/             # Composants liés à l'authentification
│   ├── common/           # Composants génériques (boutons, inputs, etc.)
│   ├── home/             # Composants spécifiques à la page d'accueil
│   ├── layout/           # Composants de mise en page (Header, Footer)
│   ├── repair-requests/  # Composants liés aux demandes de réparation
│   └── ui/               # Éléments d'interface utilisateur
├── hooks/                # Hooks React personnalisés
├── lib/                  # Utilitaires et services
│   ├── api/              # Clients API et fonctions d'intégration
│   ├── utils/            # Fonctions utilitaires générales
│   └── validation/       # Schémas de validation
├── public/               # Fichiers statiques (images, fonts, etc.)
└── types/                # Types TypeScript partagés
```

## Technologies utilisées

- **Next.js** : Framework React avec App Router pour le rendu côté serveur et les routes.
- **TailwindCSS** : Framework CSS utilitaire pour le styling.
- **React** : Bibliothèque JavaScript pour l'interface utilisateur.
- **TypeScript** : Typage statique pour améliorer la maintenabilité.

## Fonctionnalités principales

1. **Authentification** : Inscription, connexion, gestion de profil.
2. **Recherche de réparateurs** : Par catégorie d'objet et géolocalisation.
3. **Gestion des demandes de réparation** : Création, suivi et historique.
4. **Messagerie** : Communication entre demandeurs et réparateurs.
5. **Tutoriels** : Base de connaissances collaborative pour l'auto-réparation.
6. **Évaluations et avis** : Système de réputation pour les réparateurs.
7. **Mesure d'impact** : Calcul des économies en CO2 et déchets évités.

## Configuration et démarrage

### Prérequis

- Node.js (v18 ou supérieur)
- pnpm (v8 ou supérieur)

### Variables d'environnement

Créez un fichier `.env.local` à la racine du dossier web avec les variables suivantes :

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_MAPS_API_KEY=your_google_maps_api_key
```

### Commandes

```bash
# Installation des dépendances (depuis la racine du monorepo)
pnpm install

# Démarrage du serveur de développement
pnpm dev

# Construction pour la production
pnpm build

# Démarrage en mode production
pnpm start
```

## Bonnes pratiques de développement

1. **Composants** : Créez des composants réutilisables et modulaires.
2. **Types** : Utilisez TypeScript pour tout le code.
3. **État** : Préférez les hooks React et évitez les états globaux complexes pour les petites fonctionnalités.
4. **Performance** : Utilisez correctement `useMemo`, `useCallback` et optimisez le rendu avec React.memo quand nécessaire.
5. **Accessibilité** : Respectez les standards WCAG 2.1 pour une expérience inclusive.
6. **Tests** : Écrivez des tests unitaires pour les composants critiques et des tests d'intégration pour les flux principaux.

## Intégration avec le backend

L'application communique avec l'API NestJS via des requêtes HTTP, principalement gérées dans les dossiers `lib/api` et certaines routes serveur Next.js pour des opérations sensibles ou nécessitant des données SSR.
