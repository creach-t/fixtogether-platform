# API FixTogether

Cette API NestJS constitue le backend du projet FixTogether, une plateforme communautaire de réparation d'objets qui vise à promouvoir l'économie circulaire et à réduire les déchets.

## Structure du projet

```
api/
├── prisma/                # Configuration ORM Prisma
│   └── schema.prisma      # Schéma de base de données
├── src/
│   ├── auth/              # Module d'authentification
│   ├── users/             # Gestion des utilisateurs
│   ├── repair-requests/   # Gestion des demandes de réparation
│   ├── categories/        # Catégories d'objets
│   ├── tutorials/         # Tutoriels de réparation
│   ├── common/            # Composants partagés
│   │   ├── decorators/    # Décorateurs personnalisés
│   │   ├── filters/       # Filtres d'exception
│   │   ├── guards/        # Gardes d'authentification et autorisation
│   │   ├── interfaces/    # Interfaces partagées
│   │   └── dto/           # Objets de transfert de données partagés
│   ├── config/            # Configuration de l'application
│   └── main.ts            # Point d'entrée de l'application
├── test/                  # Tests d'intégration et e2e
└── .env.example           # Exemple de configuration
```

## Technologies utilisées

- **NestJS** : Framework Node.js pour construire des applications serveur efficaces et évolutives
- **Prisma** : ORM moderne pour Node.js et TypeScript
- **PostgreSQL** : Base de données relationnelle
- **PassportJS** : Middleware d'authentification
- **JWT** : Jetons d'authentification sécurisés
- **TypeScript** : Langage de programmation typé
- **Jest** : Framework de test

## Fonctionnalités principales de l'API

1. **Authentification et Autorisation**
   - Inscription et connexion des utilisateurs
   - Gestion des sessions avec JWT
   - Vérification des rôles et permissions

2. **Gestion des utilisateurs**
   - Profils (utilisateurs, réparateurs amateurs, réparateurs professionnels)
   - Gestion des compétences
   - Système de notation et d'avis

3. **Demandes de réparation**
   - Création, lecture, mise à jour et suppression des demandes
   - Filtrage et recherche (par catégorie, localisation, etc.)
   - Gestion des offres de réparation

4. **Messagerie**
   - Communication entre demandeurs et réparateurs
   - Notifications

5. **Catégories et objets**
   - Gestion des catégories d'objets
   - Statistiques par catégorie

6. **Tutoriels**
   - Création et gestion de tutoriels
   - Système de commentaires

7. **Impact environnemental**
   - Calcul et stockage des métriques d'impact (CO2 économisé, déchets évités)

## Installation et configuration

### Prérequis

- Node.js (v18 ou supérieur)
- pnpm (v8 ou supérieur)
- PostgreSQL (v15 ou supérieur)
- Redis (optionnel, pour le cache et les files d'attente)

### Variables d'environnement

Créez un fichier `.env` à la racine du dossier api en vous basant sur `.env.example` :

```env
# Base de données
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/fixtogether?schema=public"

# JWT
JWT_SECRET="your-jwt-secret"
JWT_EXPIRATION="1d"

# Serveur
PORT=3001
NODE_ENV=development

# Configuration e-mail (optionnel)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=user
SMTP_PASSWORD=password
```

### Commandes

```bash
# Installation des dépendances (depuis la racine du monorepo)
pnpm install

# Génération du client Prisma
cd apps/api && npx prisma generate

# Migration de la base de données
npx prisma migrate dev

# Démarrage du serveur de développement
pnpm dev

# Construction pour la production
pnpm build

# Démarrage en mode production
pnpm start:prod

# Exécution des tests
pnpm test
pnpm test:e2e
```

## Structure des endpoints API

L'API suit les principes REST et expose les endpoints suivants :

- **Auth** : `/api/auth`
  - POST `/register` - Inscription
  - POST `/login` - Connexion
  - POST `/refresh` - Rafraîchissement du token
  - POST `/logout` - Déconnexion

- **Users** : `/api/users`
  - GET `/` - Liste des utilisateurs
  - GET `/:id` - Détails d'un utilisateur
  - PATCH `/:id` - Mise à jour d'un profil
  - GET `/:id/skills` - Compétences d'un utilisateur
  - GET `/:id/reviews` - Avis sur un utilisateur

- **Repair Requests** : `/api/repair-requests`
  - GET `/` - Liste des demandes
  - POST `/` - Créer une demande
  - GET `/:id` - Détails d'une demande
  - PATCH `/:id` - Mise à jour d'une demande
  - DELETE `/:id` - Suppression d'une demande
  - POST `/:id/offers` - Ajouter une offre
  - GET `/:id/offers` - Liste des offres

- **Categories** : `/api/categories`
  - GET `/` - Liste des catégories
  - GET `/:id` - Détails d'une catégorie
  - GET `/:id/repair-requests` - Demandes par catégorie

- **Tutorials** : `/api/tutorials`
  - GET `/` - Liste des tutoriels
  - POST `/` - Créer un tutoriel
  - GET `/:id` - Détails d'un tutoriel
  - PATCH `/:id` - Mise à jour d'un tutoriel
  - DELETE `/:id` - Suppression d'un tutoriel
  - POST `/:id/comments` - Ajouter un commentaire
  - GET `/:id/comments` - Liste des commentaires

- **Impact** : `/api/impact`
  - GET `/metrics` - Statistiques globales d'impact
  - GET `/users/:id/metrics` - Impact par utilisateur
  - GET `/repair-requests/:id/metrics` - Impact d'une réparation

## Bonnes pratiques de développement

1. **Architecture** : Suivre l'architecture modulaire de NestJS (modules, contrôleurs, services, etc.)
2. **Validation** : Utiliser les classes DTO et class-validator pour la validation des données
3. **Documentation** : Documenter les API avec Swagger/OpenAPI
4. **Tests** : Écrire des tests unitaires et d'intégration pour chaque fonctionnalité
5. **Transactions** : Utiliser les transactions Prisma pour les opérations complexes
6. **Idempotence** : Concevoir les API pour qu'elles soient idempotentes lorsque c'est approprié
7. **Pagination** : Implémenter la pagination pour les endpoints qui retournent de grandes collections

## Sécurité

- **Rate Limiting** : Protection contre les attaques par force brute
- **Helmet** : Configuration des en-têtes HTTP pour la sécurité
- **CORS** : Configuration des origines approuvées
- **HTTPS** : Utilisation obligatoire en production
- **Validation** : Validation des entrées pour prévenir les injections
- **Logs** : Journalisation sécurisée et complète des événements importants

## Monitoring et performances

- **Prometheus** : Métriques d'application (optionnel)
- **Health Checks** : Points de terminaison pour vérifier l'état de l'application
- **Caching** : Mise en cache des données fréquemment accédées
- **Compression** : Compression des réponses HTTP
