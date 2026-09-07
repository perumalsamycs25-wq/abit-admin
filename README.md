# abit

This is a [Next.js](https://nextjs.org) project bootstrapped with [v0](https://v0.app).

## Built with v0

This repository is linked to a [v0](https://v0.app) project. You can continue developing by visiting the link below -- start new chats to make changes, and v0 will push commits directly to this repo. Every merge to `main` will automatically deploy.

[Continue working on v0 →](https://v0.app/chat/projects/prj_i5OFJWo7tIWZL605PDGva2ZYfCRc)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## CMS applications

The public site reads published content from the Express API. On API startup,
the schema is applied and empty CMS resources are seeded with the initial
homepage content; existing admin data is never overwritten. Start PostgreSQL with
`docker compose up -d postgres`, initialize the schema with `pnpm db:init`,
then create the first administrator by calling `POST /api/auth/bootstrap`.
You can also run `pnpm db:seed` to fill empty resources manually.

Run the applications in separate terminals:

```bash
pnpm dev:api
pnpm dev:admin
pnpm dev
```

The public API is available at `http://localhost:4000`, the admin portal at
`http://localhost:3001`, and the public website at `http://localhost:3000`.
Copy `apps/api/.env.example` to `apps/api/.env` and set a strong
`JWT_SECRET` and `ADMIN_PASSWORD` before using the portal outside local development.

## Learn More

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [v0 Documentation](https://v0.app/docs) - learn about v0 and how to use it.
