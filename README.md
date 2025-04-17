# FixTogether - Plateforme communautaire de réparation d'objets

![FixTogether Logo](https://via.placeholder.com/200x80?text=FixTogether)

## À propos du projet

FixTogether est une plateforme communautaire qui connecte des personnes ayant des objets à réparer avec des réparateurs professionnels et amateurs passionnés. Notre mission est de prolonger la durée de vie des objets, de réduire les déchets et de créer une communauté engagée autour de l'économie circulaire.

## Fonctionnalités clés

- **Mise en relation géolocalisée** entre personnes ayant des objets à réparer et réparateurs
- **Profils vérifiés** pour les réparateurs professionnels et amateurs
- **Base de connaissances collaborative** avec tutoriels et guides de réparation
- **Mesure d'impact écologique** pour visualiser les économies en CO2 et déchets évités
- **Système de communication** intégré entre utilisateurs
- **Gestion des paiements** sécurisée avec options flexibles

## Architecture technique

Ce projet est structuré comme un monorepo utilisant Turborepo, avec :

- **Front-end** : React avec Next.js
- **Back-end** : Node.js avec NestJS
- **Base de données** : PostgreSQL avec Prisma comme ORM

## Structure du monorepo

```
fixtogether/
├── apps/
│   ├── web/                  # Application web React (Next.js)
│   ├── api/                  # API backend (NestJS)
│   └── admin/                # Tableau de bord d'administration (React)
├── packages/
│   ├── ui/                   # Bibliothèque de composants UI partagés
│   ├── config/               # Configurations partagées (eslint, typescript, etc.)
│   ├── logger/               # Service de logging
│   ├── analytics/            # Service d'analytique
│   ├── schemas/              # Schémas de validation partagés (zod)
│   ├── api-interfaces/       # Interfaces partagées entre front et back
│   └── utils/                # Utilitaires partagés
├── scripts/                  # Scripts de build, déploiement, etc.
├── docker/                   # Configurations Docker
└── infrastructure/           # Code IaC (Terraform/Pulumi)
```

## Démarrage rapide

### Prérequis

- Node.js (v18 ou supérieur)
- pnpm (v8 ou supérieur)
- Docker et Docker Compose

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/creach-t/fixtogether-platform.git
cd fixtogether-platform

# Installer les dépendances
pnpm install

# Démarrer l'environnement de développement
pnpm dev
```

## Contribuer

Nous encourageons les contributions ! Consultez notre [guide de contribution](CONTRIBUTING.md) pour plus d'informations.

## Licence

Ce projet est sous licence [MIT](LICENSE).

## Contact

Pour toute question ou suggestion, veuillez ouvrir une issue ou contacter l'équipe à l'adresse contact@fixtogether.com.
