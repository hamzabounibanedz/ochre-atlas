# Ochre Atlas

A bilingual colour library for print, interiors and digital design, built on [SaaS Boilerplate](https://github.com/ixartz/SaaS-Boilerplate). Browse six four-colour studies, filter by setting and copy individual hex codes. English is available at the root and French at `/fr`.

## Run the portfolio

Use Node.js 24 and run `npm ci`. Set `PORTFOLIO_MODE=true` and `NEXT_PUBLIC_SENTRY_DISABLED=true`, then run `npm run dev:next` for development or `npm run build:next` and `npm start` for production. The Vercel configuration supplies the portfolio settings automatically.

## Account features

The original Clerk and database integrations are available for a separately configured account-enabled deployment. The public palette library needs neither service. See the [upstream configuration guide](https://github.com/ixartz/SaaS-Boilerplate) and [license](LICENSE).

The **Verify portfolio** GitHub workflow builds both locales and exercises filtering, copying, language switching and mobile layout in Chrome.
