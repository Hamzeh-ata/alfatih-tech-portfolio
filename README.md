# Alfatih Tech Solutions — Corporate Portfolio

Angular corporate website for Alfatih Tech Solutions (Khalda, Amman, Jordan).

## Stack

- Angular 21 (standalone components, signals)
- SCSS design tokens
- English / Arabic i18n with RTL support

## Scripts

```bash
npm start
npm run build
```

## Content sources

- Products: `src/app/core/data/products.data.ts`
- Services / team / process: `src/app/core/data/`
- Translations: `src/app/core/i18n/en.json` and `src/app/core/i18n/ar.json`
- Logo: `public/assets/images/logo.jpg`

## Contact form

The contact form validates input, then opens the visitor’s email client with a prepared `mailto:` message to `hamzeh@alfatih-tech.com`. It does not fake a successful server submission.

To connect a backend later, replace the `submit()` method in `src/app/pages/contact/contact.ts` with an API call while keeping the same validation.

## Product order

1. Postlane  
2. InkPlay  
3. Dokkan Style  
4. Point-of-Sale System  
5. Inkverse  
6. SchoolWatch  
7. GymWatch  
8. SiteProof  
9. AqarPay  
10. Sendly  

Dokkan Style and the Point-of-Sale System are separate products with separate routes. Client Portal and Agency Workload & Profitability are described as planned Postlane modules.
