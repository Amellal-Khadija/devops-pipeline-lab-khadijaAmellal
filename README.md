# DevOps Pipeline Lab - Khadija Amellal

[![CI](https://github.com/Amellal-Khadija/devops-pipeline-lab-khadijaAmellal/actions/workflows/ci.yml/badge.svg)](https://github.com/Amellal-Khadija/devops-pipeline-lab-khadijaAmellal/actions/workflows/ci.yml)

Application Node.js démo pour apprendre les pipelines DevOps avec GitHub Actions.

## 📁 Structure du projet

```
project
│
├── .github
│   └── workflows
│       └── ci.yml          # Pipeline CI/CD GitHub Actions
├── src
│   ├── index.js           # Point d'entrée de l'application
│   ├── calculator.js      # Module calculatrice
│   └── utils.js           # Utilitaires
├── tests
│   ├── example.test.js    # Tests de la calculatrice
│   └── utils.test.js      # Tests des utilitaires
├── .eslintrc.json         # Configuration ESLint
├── .gitignore             # Fichiers à ignorer par Git
├── package.json           # Dépendances et scripts npm
└── README.md              # Ce fichier
```

## 🚀 Installation

### Prérequis

- Node.js >= 16.x
- npm >= 8.x

### Installation des dépendances

```bash
npm install
```

## 📝 Scripts disponibles

| Script | Description |
|--------|-------------|
| `npm start` | Lance l'application |
| `npm test` | Exécute les tests avec couverture |
| `npm run test:watch` | Exécute les tests en mode watch |
| `npm run lint` | Vérifie le code avec ESLint |
| `npm run lint:fix` | Corrige automatiquement les erreurs ESLint |

## 🧪 Tests

Les tests sont écrits avec Jest. Pour les exécuter :

```bash
npm test
```

Pour obtenir un rapport de couverture :

```bash
npm test -- --coverage
```

## 🔄 Pipeline CI/CD

Le projet utilise GitHub Actions pour l'intégration continue. Le pipeline :

- ✅ S'exécute sur les pushs et pull requests (branches `main` et `master`)
- ✅ Teste le code sur Node.js 16.x, 18.x et 20.x
- ✅ Installe les dépendances (npm ou yarn)
- ✅ Exécute les tests automatiquement

Voir [.github/workflows/ci.yml](.github/workflows/ci.yml) pour plus de détails.

## 📦 Fonctionnalités

L'application inclut :

- **Calculatrice** : Addition, soustraction, multiplication, division, puissance, racine carrée
- **Utilitaires** : Formatage de résultats, validation de nombres, arrondis
- **Tests complets** : Couverture > 90%
- **Linting** : ESLint pour la qualité du code

## 🛠️ Développement

### Lancer l'application

```bash
npm start
```

### Exécuter les tests en mode watch

```bash
npm run test:watch
```

### Vérifier le code

```bash
npm run lint
```

## 📄 Licence

MIT

## 👤 Auteur

Khadija Amellal
