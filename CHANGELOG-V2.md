# CHANGELOG — FilChantier V2

Cette V2 repart des **sources locales complètes de la V1** (le point de départ correct), et non de la version compressée déployée par erreur en ligne. Objectif : une landing **terminée**, sans faute, soignée sur mobile comme sur desktop.

---

## 1. Corrections par rapport à la V1 mise en ligne (version bâclée)

La version live contenait des fautes et un contenu tronqué. Toutes ont été corrigées :

| Zone | V1 live (fautif) | V2 |
| --- | --- | --- |
| Titre (hero) | « digéree » | **« digérée »** (accent rétabli) |
| Section problème | « La **rèlle** change tout le temps » | **« La règle change tout le temps »** |
| Eyebrow hero | « Veille réglementaire **§** Bâtiment » | **« Veille réglementaire · Bâtiment · France »** (séparateur correct) |
| Contenu | Sections vides / titres seuls, texte amputé | **Contenu complet rétabli** dans chaque section |
| Aperçu email | Réduit à quelques mots | **Deux maquettes d'email complètes** (hero + section « Ce que tu reçois ») |
| Lede hero | Phrase raccourcie | **Lede complet** : JO, BOFIP, BOSS, Légifrance + promesse « 3 actions max » |

## 2. Orthographe & typographie française

- **Apostrophes typographiques** `’` partout à la place des apostrophes droites `'` (d’attente, l’essentiel, t’envoyer…).
- **Espaces fines insécables** (`&#8239;`, U+202F) avant `;`, `?`, `!` et à l’intérieur des guillemets `«  »`.
- **Espace insécable** (`&nbsp;`) avant `:` et pour lier les unités (`12&nbsp;€`, `3&nbsp;mois`, `2&nbsp;min`, `NF&nbsp;C&nbsp;15-100`).
- Guillemets français `«  »` avec espacement correct.
- Relecture complète : accents, cédilles, `œ` (second œuvre), majuscules accentuées (À faire, Électricité, Éplucher).

## 3. Contenu & cohérence

- **Tutoiement artisan** cohérent sur toute la page.
- Nouvelle **section FAQ** (5 questions) qui lève les objections avant l’inscription et renforce la crédibilité + le disclaimer.
- CTA de l’offre Solo neutralisé : « **Rejoindre la liste d’attente** » (au lieu d’une formulation à écriture inclusive), pour rester neutre et lisible.
- **Aucune mention politique**, d’élu ou de parti. Uniquement des sources administratives/officielles.
- Disclaimer « veille documentaire, pas un conseil juridique » conservé et mis en avant.

## 4. Design terminé (rien d’amputé)

- Hero avec maquette d’email premium (carte + pile en arrière-plan, tags colorés TVA/URSSAF/Norme).
- Sections complètes : problème (3 cartes), « Ce que tu reçois », fonctionnement (3 étapes), tarifs (2 offres), **FAQ**, waitlist, disclaimer, footer.
- Aucun `placeholder` : les liens « Source » des maquettes pointent désormais vers les **vrais sites officiels** (Légifrance, BOSS, BOFIP, Journal Officiel) au lieu de `href="#"`.
- Nouvelle **image de partage social** de marque `assets/og-image.png` (1200×630).

## 5. Accessibilité

- Surlignage du lien de navigation **actif au défilement** (IntersectionObserver).
- Menu mobile : fermeture à la touche **Échap** et remise du focus sur le bouton.
- `aria-label` descriptifs sur les maquettes d’email ; retrait d’un `aria-hidden="false"` redondant.
- `skip link`, `:focus-visible`, `role="status"` sur le retour de formulaire, respect de `prefers-reduced-motion`.

## 6. Technique, SEO & performance

- Métadonnées enrichies : `canonical`, Open Graph complet (`og:image`, dimensions, `alt`), carte Twitter `summary_large_image`, `color-scheme`, `robots`.
- **Données structurées JSON-LD** : `Organization`, `WebSite` et `FAQPage`.
- `vercel.json` renforcé : **Content-Security-Policy** (compatible Google Fonts), `Permissions-Policy`, cache dédié pour `app.js`.
- Feuille de style **d’impression** ajoutée.
- Message de succès du formulaire corrigé typographiquement (« Merci&#8239;! »).

---

### Livrables

`index.html` · `styles.css` · `app.js` · `assets/` (favicon + image OG) · `vercel.json` · `README.md` · `CHANGELOG-V2.md`
