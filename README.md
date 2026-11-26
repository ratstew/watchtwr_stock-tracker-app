# watchtwr

A dark-themed stock market dashboard built with Next.js, focused on the Stockholm market.

> **Status:** work in progress. This is a learning and portfolio project, not a trading platform, and nothing in it is financial advice.

## Features

- Demo sign-in page (no real authentication yet)
- Market summary for the Stockholm exchange
- Interactive price chart with symbol search
- OMXS30 heatmap grouped by sector
- Financial news feed
- Economic calendar
- Layout that stacks into one column on smaller screens

Market data, news and calendar events come from embedded [TradingView widgets](https://www.tradingview.com/widget-docs/). Some data is delayed.

## Roadmap

- [ ] Stock search and detail pages
- [ ] Authentication
- [ ] Personal watchlist
- [ ] Scheduled news emails with Inngest

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) components

## Getting started

You need [Node.js](https://nodejs.org/) 20.9 or later.

```bash
git clone https://github.com/ratstew/watchtwr_stock-tracker-app.git
cd watchtwr_stock-tracker-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). No API keys are required for the current features.

## Project structure

```
app/           Pages, layouts and global styles
components/    Header, navigation and TradingView widgets
components/ui/ shadcn/ui components
lib/           Constants and helpers
public/        Static assets
```

## Credits

The project started from a YouTube tutorial on building a stock tracker with Next.js and Inngest, and is being adapted from there.
