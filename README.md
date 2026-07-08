# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Minecraft applications

The `/minecraft` page uses these environment variables:

```bash
NUXT_PUBLIC_DISCORD_INVITE_URL=https://discord.gg/your-invite
MINECRAFT_APPLICATION_DESTINATION=https://your-form-or-webhook-endpoint.example/applications
MINECRAFT_EMAIL_PROVIDER=your-provider-name
DISCORD_MINECRAFT_APPLICATION_WEBHOOK=https://discord.com/api/webhooks/...
MAILERLITE_API_TOKEN=...
MAILERLITE_GROUP_ID=...
```

Configure at least one application delivery target: `DISCORD_MINECRAFT_APPLICATION_WEBHOOK` or `MINECRAFT_APPLICATION_DESTINATION`. `MINECRAFT_APPLICATION_DESTINATION` must accept a JSON `POST`. `MAILERLITE_API_TOKEN` and `MAILERLITE_GROUP_ID` are required only when email opt-ins should be sent to MailerLite. Keep private values in `.env` and Vercel environment variables; never commit them.
