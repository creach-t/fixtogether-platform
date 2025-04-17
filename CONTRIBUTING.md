# Guide de contribution à FixTogether

Merci de votre intérêt pour contribuer au projet FixTogether ! Ce document vise à vous guider à travers notre processus de contribution pour que votre expérience soit aussi fluide et agréable que possible.

## Table des matières

1. [Code de conduite](#code-de-conduite)
2. [Comment commencer](#comment-commencer)
3. [Processus de développement](#processus-de-développement)
4. [Soumettre des changements](#soumettre-des-changements)
5. [Conventions de code](#conventions-de-code)
6. [Tester](#tester)
7. [Documentation](#documentation)
8. [Communication](#communication)

## Code de conduite

Notre projet est régi par un code de conduite qui s'applique à tous les espaces du projet. En participant, vous êtes tenu de respecter ce code. Veuillez signaler tout comportement inacceptable à l'équipe du projet.

Nous nous engageons à créer un environnement accueillant et inclusif pour tous, indépendamment de l'âge, de l'origine ethnique, du genre, de la nationalité, de l'apparence physique, de la religion, de l'identité et de l'expression de genre, de l'expérience ou des compétences.

## Comment commencer

### Prérequis

- Node.js (v18 ou supérieur)
- pnpm (v8 ou supérieur)
- PostgreSQL (v15 ou supérieur)
- Docker et Docker Compose (recommandé)

### Installation

1. Forkez le dépôt sur GitHub
2. Clonez votre fork localement :
   ```bash
   git clone https://github.com/votre-username/fixtogether-platform.git
   cd fixtogether-platform
   ```
3. Installez les dépendances :
   ```bash
   pnpm install
   ```
4. Configurez l'environnement :
   ```bash
   # Pour l'API
   cp apps/api/.env.example apps/api/.env
   # Pour l'application web
   cp apps/web/.env.example apps/web/.env.local
   ```
5. Démarrez les services de base de données avec Docker :
   ```bash
   docker-compose up -d
   ```
6. Générez le client Prisma et effectuez les migrations :
   ```bash
   cd apps/api
   npx prisma generate
   npx prisma migrate dev
   cd ../..
   ```
7. Démarrez le projet en mode développement :
   ```bash
   pnpm dev
   ```

## Processus de développement

### Workflow des branches

Nous utilisons le modèle GitFlow adapté :

- `main` : Code de production stable
- `develop` : Branche de développement principale
- `feature/*` : Nouvelles fonctionnalités
- `bugfix/*` : Corrections de bugs
- `release/*` : Préparation des versions
- `hotfix/*` : Corrections urgentes pour la production

### Création d'une branche

Pour travailler sur une nouvelle fonctionnalité ou correction :

```bash
git checkout develop
git pull origin develop
git checkout -b feature/nom-de-votre-fonctionnalité
```

## Soumettre des changements

1. Assurez-vous que votre code respecte nos [conventions de code](#conventions-de-code)
2. Exécutez les tests pour vous assurer que tout fonctionne correctement
3. Faites des commits atomiques avec des messages clairs et descriptifs
4. Poussez votre branche vers votre fork
5. Soumettez une Pull Request (PR) vers la branche `develop` du dépôt principal
6. Dans la description de la PR, expliquez les changements et liez les issues pertinentes

### Format des messages de commit

Nous suivons les conventions de [Conventional Commits](https://www.conventionalcommits.org/) :

```
<type>(<scope>): <description>

[corps optionnel]

[pied de page optionnel]
```

Types courants :
- `feat` : Nouvelle fonctionnalité
- `fix` : Correction de bug
- `docs` : Documentation
- `style` : Formatage (pas de changement de code)
- `refactor` : Refactoring du code
- `test` : Tests
- `chore` : Tâches de maintenance

Exemple :
```
feat(auth): ajouter l'authentification par Google

Implémente l'authentification OAuth avec Google pour permettre
aux utilisateurs de se connecter avec leur compte Google.

Closes #123
```

## Conventions de code

### Générales

- Utilisez TypeScript pour tout le code
- Respectez les règles ESLint et Prettier configurées dans le projet
- Écrivez du code lisible et maintenable plutôt que du code trop optimisé
- Commentez votre code lorsque nécessaire, notamment pour les implémentations complexes
- Utilisez des noms de variables et de fonctions significatifs et en anglais

### Frontend (Next.js)

- Suivez l'architecture des dossiers existante
- Utilisez des composants fonctionnels avec des hooks React
- Évitez l'utilisation excessive des états globaux
- Préférez les styles Tailwind aux styles inline ou CSS-in-JS
- Rendez vos composants accessibles (attributs ARIA, contraste, etc.)

### Backend (NestJS)

- Suivez l'architecture modulaire de NestJS
- Utilisez les décorateurs pour la validation des données
- Respectez les principes SOLID
- Documentez les API avec Swagger/OpenAPI
- Utilisez des transactions pour les opérations complexes en base de données

## Tester

Avant de soumettre une PR, assurez-vous que vos changements passent tous les tests :

```bash
# Exécuter tous les tests
pnpm test

# Exécuter les tests d'une application spécifique
pnpm --filter=api test
pnpm --filter=web test
```

### Ajouter des tests

- Les nouvelles fonctionnalités doivent être accompagnées de tests
- Préférez l'approche TDD (Test-Driven Development) lorsque c'est possible
- Assurez-vous que vos tests sont significatifs et ne sont pas de simples "tests pour tester"

## Documentation

- Mettez à jour la documentation pour refléter vos changements lorsque c'est nécessaire
- Les docstrings et commentaires de code doivent être en anglais
- Les README et documents de haut niveau peuvent être en français

## Communication

- Pour les discussions générales, utilisez les discussions GitHub
- Pour les problèmes spécifiques, ouvrez une issue
- Pour les questions rapides, vous pouvez utiliser le canal Discord du projet

---

Nous apprécions sincèrement votre contribution à FixTogether. Ensemble, nous pouvons créer une plateforme qui aide à promouvoir l'économie circulaire et à réduire les déchets électroniques !
