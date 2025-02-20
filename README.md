# Life Road - Mobilní aplikace

## Popis projektu
Life Road je mobilní aplikace vyvinutá v **React Native**, která se zaměřuje na propojení investorů, mentorů, společností a dalších klíčových hráčů. Aplikace poskytuje uživatelům přehledné rozhraní pro správu kontaktů, plánování schůzek a sdílení informací.

## Funkce aplikace
- **Přehled kontaktů** – seznam investorů, mentorů a společností
- **Plánování schůzek** – možnost domlouvat a organizovat schůzky
- **Notifikace** – upozornění na nadcházející události
- **Profily uživatelů** – informace o jednotlivých subjektech
- **Bezpečnost a ochrana dat** – šifrování a zabezpečení uživatelských dat

## Použité technologie
- **React Native** – pro vývoj mobilní aplikace
- **Redux** – pro správu stavu aplikace
- **React Navigation** – pro navigaci mezi obrazovkami
- **Firebase** – pro autentizaci a databázové služby
- **Expo** – pro usnadnění vývoje a testování aplikace

## Požadavky
- Node.js (doporučená verze: 16+)
- NPM nebo Yarn
- Expo CLI
- Android Studio nebo Xcode (pro emulátory)

## Instalace
1. Klonujte repozitář:
   ```bash
   git clone https://github.com/uzivatel/life-road.git
   cd life-road
   ```
2. Nainstalujte závislosti:
   ```bash
   npm install
   # nebo
   yarn install
   ```
3. Spusťte aplikaci v Expo:
   ```bash
   npx expo start
   ```
   Aplikaci můžete otevřít v emulátoru nebo na fyzickém zařízení pomocí Expo Go.

## Vývoj a testování
- **Spuštění aplikace na Androidu**
  ```bash
  npx expo run:android
  ```
- **Spuštění aplikace na iOS (macOS + Xcode nutný)**
  ```bash
  npx expo run:ios
  ```
- **Spuštění testů**
  ```bash
  npm test
  ```

## Nasazení
1. Vytvořte produkční build:
   ```bash
   expo build:android
   expo build:ios
   ```
2. Nahrání aplikace na Google Play / App Store podle oficiálních pokynů.

## Přispívání
Pokud chcete přispět k vývoji aplikace, dodržujte následující kroky:
1. Forkněte repozitář
2. Vytvořte větev pro svou změnu (`git checkout -b nova-funkce`)
3. Commitujte změny (`git commit -m "Přidána nová funkce"`)
4. Pushněte větev (`git push origin nova-funkce`)
5. Požádejte o pull request

## Licence
Tento projekt je licencován pod **MIT licencí**. Více informací naleznete v souboru `LICENSE`.

## Kontakt
Pokud máte jakékoli dotazy nebo návrhy na vylepšení, kontaktujte nás na **support@liferoad.com**.

