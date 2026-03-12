# Project

Structure recommandée :

```
project
│
├── src
├── tests
└── README.md
```

Ce dépôt contient le code source dans `src` et les tests dans `tests`.

Installation & tests (exemple Python) :

```bash
python -m venv .venv
# Windows (PowerShell)
.venv\Scripts\Activate.ps1
# macOS / Linux
source .venv/bin/activate
pip install -r requirements.txt
pytest
```

Le pipeline GitHub Actions se trouve dans `.github/workflows/ci.yml`.
