This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# A Travel transfers List and Details demo app | [live](https://transfers-list.vercel.app)

### This demo project is build with:

- [Next.js](https://nextjs.org/)
- `TypeScript`
- `TailwindCSS`
- `Prettier`
- `dayjs`
- `Vercel`

---

## Getting Started

Requirements:

```
Nodejs: 18.12.x (LTS)
Yarn: 3.4.x
```

First, clone the project:

```bash
git clone https://github.com/Shiroe/transfers-list.git
# cd into the folder
cd transfers-list
```

Then, install packages and run the development server:

```bash
yarn # to install dependencies
yarn dev # to run the dev server
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

### API routes:

- [api/transfers](http://localhost:3000/api/transfers): get all transfers from simulated endpoint (originally found locally inside `src/json`)
- [api/transferDetails](http://localhost:3000/api/transferDetails): same as previous endpoint but for a single transfer's details

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

---
