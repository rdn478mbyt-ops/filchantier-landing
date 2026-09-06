# FilChantier — Landing page

La veille réglementaire hebdomadaire des artisans du bâtiment : chaque lundi, **3 actions maximum**, en français clair, avec les liens officiels (JO, BOFIP, BOSS, Légifrance).

Site statique, sans dépendance et sans étape de build : trois fichiers (`index.html`, `styles.css`, `app.js`) et un dossier `assets/`.

## Structure

```
.
├── index.html        # Structure et contenu de la page
├── styles.css        # Design system (palette, typo, composants, responsive, print)
├── app.js            # Interactions : menu mobile, nav active, validation du formulaire
├── assets/
│   ├── favicon.svg   # Favicon (logo FilChantier)
│   └── og-image.png  # Image de partage social (Open Graph / Twitter, 1200×630)
├── vercel.json       # Réécritures d'URL, en-têtes de sécurité et de cache
├── README.md
└── CHANGELOG-V2.md   # Corrections et améliorations de la V2 par rapport à la V1
```

## Aperçu en local

Aucune installation n'est nécessaire. Depuis la racine du projet, lance un petit serveur statique :

```bash
# Avec Python
python3 -m http.server 8080

# ou avec Node
npx serve .
```

Puis ouvre `http://localhost:8080`.

> Ouvrir `index.html` directement via `file://` fonctionne aussi, mais passer par un serveur local reproduit fidèlement le comportement en production (URL propres, en-têtes).

## Déploiement sur Vercel

Le site est 100 % statique : **aucune commande de build**, aucun framework. Trois façons de le mettre en ligne.

### 1. Depuis le dépôt Git (recommandé)

1. Sur [vercel.com](https://vercel.com), clique sur **Add New… → Project**.
2. Importe le dépôt `filchantier-landing`.
3. Laisse les réglages par défaut :
   - **Framework Preset** : `Other`
   - **Build Command** : *(vide)*
   - **Output Directory** : `.` (la racine)
4. Clique sur **Deploy**. Chaque `git push` sur la branche de production redéploie automatiquement.

### 2. Avec la CLI Vercel

```bash
npm i -g vercel      # une seule fois
vercel               # déploiement de prévisualisation
vercel --prod        # déploiement en production
```

### 3. Glisser-déposer

Depuis le tableau de bord Vercel, dépose le dossier du projet dans la zone d'import : le site est publié tel quel.

### Ce que fait `vercel.json`

- `cleanUrls` / `trailingSlash` : URL propres, sans `.html` ni slash final.
- En-têtes de sécurité : `Content-Security-Policy` (compatible Google Fonts), `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`.
- Cache : `assets/` en cache long immuable (1 an), `styles.css` et `app.js` en cache d'un jour.

## Personnalisation rapide

- **Couleurs et typo** : variables CSS en haut de `styles.css` (`:root`).
- **Contenu** : tout le texte est dans `index.html`.
- **Formulaire** : par défaut, le formulaire de liste d'attente utilise un lien `mailto:` (repli sans back-end). Pour collecter les inscriptions dans un outil (Brevo, Mailchimp, Formspree, une fonction Vercel…), remplace l'attribut `action` du `<form id="waitlist-form">` par l'URL de ton service.
- **Image de partage** : remplace `assets/og-image.png` (1200×630) pour changer l'aperçu affiché sur les réseaux et messageries.

## Qualité

- **Typographie française** : espaces fines insécables avant `;`, `?`, `!` et à l'intérieur des guillemets `«  »`, espace insécable avant `:`, apostrophes typographiques `’`.
- **Accessibilité** : navigation au clavier, `skip link`, libellés ARIA, contrastes soignés, respect de `prefers-reduced-motion`.
- **Performance** : pas de framework, une seule feuille de style, polices chargées avec `preconnect` et `display=swap`.
- **Responsive** : mises en page dédiées mobile / tablette / desktop, plus une feuille d'impression.

## Mention

FilChantier propose une **veille documentaire**, pas un conseil juridique. Les synthèses renvoient toujours aux textes officiels.
