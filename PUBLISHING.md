# Publishing PulsoFit to the App Store & Google Play

The signing + build automation is already wired up. You provide accounts and a
few GitHub **Secrets**, then push a version **tag** (`v1.0.0`) and CI produces a
store-ready build: a signed `.aab` for Google Play and a TestFlight upload for
iOS.

> Add secrets at: repo → **Settings → Secrets and variables → Actions → New
> repository secret**.

---

## 1. Android (Google Play)

### One-time setup
1. Create a **Google Play Console** account (one-time $25): https://play.google.com/console
2. The **upload keystore** is already generated for you (sent as
   `pulsofit-upload.jks`). **Back it up somewhere safe** — if you lose it you
   can reset it later only because of Play App Signing (see below), but keep it
   anyway.
3. Add these 4 repository secrets:

   | Secret | Value |
   |---|---|
   | `PULSOFIT_KEYSTORE_BASE64` | the whole contents of the `keystore.b64` file I sent |
   | `PULSOFIT_KEYSTORE_PASSWORD` | the keystore password I gave you in chat |
   | `PULSOFIT_KEY_ALIAS` | `pulsofit` |
   | `PULSOFIT_KEY_PASSWORD` | the same password |

### Build & publish
1. Tag a release and push the tag:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```
   The **Android release (signed AAB)** workflow runs and uploads
   `pulsofit-release` (the `.aab` + `.apk`) to the run's **Artifacts**.
2. In Play Console: **Create app** → fill the listing (name, description,
   screenshots, privacy policy, content rating).
3. **Release → Testing → Internal testing → Create release** → upload the
   `.aab`. Accept **Play App Signing** when prompted (recommended: Google holds
   the real signing key; your upload key can be reset if ever compromised).
4. Add testers, roll out. When ready, promote to **Production**.

---

## 2. iOS (App Store / TestFlight)

### One-time setup
1. Enrol in the **Apple Developer Program** ($99/year):
   https://developer.apple.com/programs/
2. Register the bundle id **`com.pulsofit.fitness`** (Certificates, IDs & Profiles →
   Identifiers) and create the app record in **App Store Connect**
   (https://appstoreconnect.apple.com → Apps → +).
3. Create an **App Store Connect API key** (Users and Access → Integrations →
   App Store Connect API → generate, role *App Manager*). Download the
   `AuthKey_XXXXXX.p8` (you can only download it once).
4. Add these 4 repository secrets:

   | Secret | Value |
   |---|---|
   | `APPSTORE_API_KEY_ID` | the Key ID (e.g. `ABC123XYZ`) |
   | `APPSTORE_API_ISSUER_ID` | the Issuer ID (a UUID) |
   | `APPSTORE_API_KEY_BASE64` | `base64 -i AuthKey_XXXXXX.p8` output |
   | `APPLE_TEAM_ID` | your 10-character Team ID |

### Build & publish
1. Push a tag (`git push origin v1.0.0`) — the **iOS release (TestFlight)**
   workflow archives, signs (cloud signing via your API key) and uploads to
   **TestFlight**.
2. In App Store Connect the build appears under **TestFlight** in a few minutes
   — add it to a test group to try it on a device.
3. When ready: **App Store** tab → fill the listing → attach the build →
   **Submit for review**.

> No Mac needed: the iOS workflow runs on a macOS GitHub runner. (A Mac is only
> needed if you want to build/run locally with `npm run ios`.)

---

## Versioning

- **Marketing version** (e.g. `1.0`): Android `versionName` in
  `app/android/app/build.gradle`; iOS `MARKETING_VERSION` in the Xcode project.
- **Build number**: Android `versionCode` (bump each upload); iOS build number
  is set automatically from the CI run number.
- Re-tag with a higher `vX.Y.Z` for each new release.

## Security note

Your keystore password and the Apple `.p8` were shared to set this up. Once the
secrets are in GitHub, **rotate what you can**: you may delete/recreate the App
Store Connect API key anytime, and the Android upload key can be reset via Play
App Signing. Never commit these files to the repo (they are kept out of git).
