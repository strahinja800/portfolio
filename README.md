# Strahinja Ković — Portfolio

A modern, full-stack portfolio website built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Payload CMS 3** for content management.

## Features

- **Full-Stack Architecture**: Next.js frontend with Payload CMS backend
- **Modern Styling**: Tailwind CSS v4 with custom design tokens and OKLch color spaces
- **Content Management**: Payload CMS for managing portfolio content, media, and users
- **Database**: MongoDB for persistent data storage
- **Rich Text**: Lexical rich text editor integration
- **Type Safety**: Full TypeScript support throughout the project
- **Testing**: Playwright end-to-end testing suite
- **Responsive Design**: Mobile-first, responsive UI with custom breakpoints
- **Performance**: Next.js App Router with optimized images and code splitting

## Tech Stack

### Frontend
- **Next.js 16.2.6** - React framework with App Router
- **React 19.2.6** - UI library
- **TypeScript 5.7** - Type-safe development
- **Tailwind CSS v4.3.0** - Utility-first CSS framework
- **PostCSS** - CSS processing

### Backend & CMS
- **Payload CMS 3.85.1** - Headless content management system
- **MongoDB** - Document database
- **GraphQL** - Query language for the API

### Development Tools
- **ESLint 9** - Code linting
- **Prettier** - Code formatting
- **Playwright 1.58** - End-to-end testing
- **Sharp 0.34** - Image optimization

## Getting Started

### Prerequisites

- **Node.js**: 18.20.2 or higher (or 20.9.0+)
- **npm** or **pnpm**: Package manager
- **MongoDB**: Local instance or MongoDB Atlas connection string

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio2
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env
   ```
   Update `.env` with your configuration:
   - `MONGODB_URL` - MongoDB connection string
   - `DATABASE_URI` - Payload database connection
   - Other required variables from `.env.example`

4. **Start development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`

### Available Scripts

```bash
# Development
npm run dev              # Start Next.js dev server with hot reload
npm run devsafe         # Clean build cache and start dev server

# Production
npm run build           # Build for production
npm run start           # Start production server

# Payload CMS
npm run payload         # Run Payload CLI commands
npm run generate:types  # Generate TypeScript types from Payload config
npm run generate:importmap # Generate import map for admin UI

# Code Quality
npm run lint            # Run ESLint on the codebase

# Testing
npm run test:e2e        # Run Playwright E2E tests
npm test                # Run all tests

```

## Project Structure

```
portfolio2/
├── src/
│   ├── app/
│   │   ├── (app)/              # Public-facing portfolio routes
│   │   │   ├── components/     # Reusable UI components
│   │   │   ├── globals.css     # Global styles & Tailwind config
│   │   │   └── layout.tsx      # Root layout
│   │   └── (payload)/          # Payload CMS admin panel
│   │       ├── admin/          # Admin dashboard
│   │       ├── api/            # Payload API routes
│   │       └── layout.tsx      # Payload layout
│   ├── collections/            # Payload collection definitions
│   ├── hooks/                  # Custom React hooks
│   └── payload.config.ts       # Payload CMS configuration
├── public/                     # Static assets
├── tests/                      # Test files
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts          # Tailwind CSS configuration
├── postcss.config.mjs          # PostCSS configuration
└── playwright.config.ts        # Playwright test configuration
```

## Development Guide

### Adding a New Collection

Edit `src/payload.config.ts` and add your collection definition to the `collections` array. See [Payload Collections Docs](https://payloadcms.com/docs/configuration/collections).

### Styling

The project uses Tailwind CSS v4 with custom design tokens defined in `src/app/(app)/globals.css`. Color variables use OKLch color space for perceptually uniform colors.

#### Custom Colors
```css
--bg: oklch(0.165 0.006 264)       /* Dark background */
--accent: oklch(0.74 0.145 286)    /* Purple accent */
--text: oklch(0.96 0.004 264)      /* Light text */
```

### Creating Components

Components are located in `src/app/(app)/components/`. Follow these patterns:

- Use TypeScript for type safety
- Keep components small and focused
- Use Tailwind utility classes for styling
- Export as default for simplicity

### Database

The project uses MongoDB. Configure the connection in your `.env`:

```
MONGODB_URL=mongodb://localhost:27017/portfolio
```

For production, use MongoDB Atlas:
```
MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/database
```

## Testing

Run Playwright end-to-end tests:

```bash
npm run test:e2e
```

Tests are configured in `playwright.config.ts` and located in the `tests/` directory.

## Deployment

### Build for Production

```bash
npm run build
npm run start
```

### Environment Variables for Production

Ensure these are set in your production environment:
- `MONGODB_URL` - Production MongoDB connection
- `NEXT_PUBLIC_*` - Public environment variables (prefixed with `NEXT_PUBLIC_`)

### Hosting Options

- **Vercel** - Official Next.js hosting (recommended)
- **Docker** - Containerize using the provided setup
- **Self-hosted** - Deploy to any Node.js-capable server

## Troubleshooting

### Dev Server Not Picking Up Changes

Run the clean dev command to reset the build cache:
```bash
npm run devsafe
```

### MongoDB Connection Issues

- Verify `MONGODB_URL` in `.env`
- Check MongoDB is running locally or accessible
- Ensure firewall/network allows the connection

### TypeScript Errors

Generate fresh types from Payload config:
```bash
npm run generate:types
```

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Run linting: `npm run lint`
4. Run tests: `npm run test:e2e`
5. Submit a pull request

## License

MIT

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Payload CMS Documentation](https://payloadcms.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## Support

For issues or questions:
- Check the troubleshooting section above
- Review [Payload Discord Community](https://discord.com/invite/payload)
- Open an issue in the repository
