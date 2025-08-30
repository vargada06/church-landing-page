# Bibliai Örömhír Közösség Weboldal

Ez a React-alapú webalkalmazás a Bibliai Örömhír Közösség hivatalos weboldala.

## Telepítés

```bash
# Függőségek telepítése
npm install

# Fejlesztői szerver indítása
npm run dev

# Build
npm run build
```

## Technológiák

- React 19 + TypeScript
- Tailwind CSS 4
- shadcn/ui komponensek
- Vite 6

## Azure Static Web App telepítési útmutató

1. Hozz létre egy Azure Static Web App erőforrást az Azure portálon
2. A telepítési forrásnál válaszd a GitHub opciót
3. Adj hozzáférést az Azure-nak a GitHub repository-hoz
4. Az Azure hozzáad egy GitHub Actions titkos kulcsot a repository-hoz
5. A telepítés automatikusan elindul minden main ágra történő push esetén

### Telepítési beállítások

- **App location:** / (gyökér mappa)
- **API location:** (hagyd üresen)
- **Output location:** dist (a Vite által generált build mappa)

## Konfiguráció

A `staticwebapp.config.json` fájl tartalmazza a statikus weboldal beállításait, mint például:

- Útvonal átirányítások
- Fejlécek
- MIME típusok

## Fejlesztői információk

A GitHub Actions workflow a `.github/workflows/azure-static-web-apps.yml` fájlban található, ami az Azure Static Web Apps szolgáltatáshoz készült.
