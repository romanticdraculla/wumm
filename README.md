# Wumm

A project by Romantic Draculla.

## Features

- Simple game loop implementation with canvas rendering
- TypeScript for type safety and improved developer experience
- Vite for fast development and optimized builds
- GitHub Actions for CI/CD and GitHub Pages deployment
- Minimal folder structure for assets and game code
- ESLint for code quality
- Vitest for testing

## Project Structure

```
/
├── src/                # Source files
│   ├── assets/         # Game assets (images, sounds, etc.)
│   ├── levels/         # Level definitions
│   ├── utils/          # Utility functions
│   ├── game.ts         # Main game class
│   ├── main.ts         # Entry point
│   └── style.css       # Global styles
├── public/             # Static assets served as-is
├── .github/workflows/  # GitHub Actions CI/CD
├── index.html          # HTML entry point
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v20 or higher recommended)
- pnpm (v8.15.3 or higher recommended)

### Installation

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

### Development

Start the development server:

```bash
pnpm dev
```

This will start the development server on the default Vite port.

### Building for Production

Build the project for production:

```bash
pnpm build
```

The built assets will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
pnpm preview
```

### Linting

Run ESLint to check code quality:

```bash
pnpm lint
```

### Testing

Run tests with Vitest:

```bash
pnpm test
```

### Deploying to GitHub Pages

The project includes GitHub Actions workflows that will automatically deploy your application to GitHub Pages when you push to the main branch.

You can also manually deploy using:

```bash
pnpm deploy
```

## Customizing Your Application

### Adding Assets

Place your assets in the `src/assets/` directory. You can import them directly in your TypeScript files.

### Creating Levels

Use the `src/levels/` directory to define your levels, maps, or stages.

### Utilities

Common helper functions can be placed in the `src/utils/` directory for reuse across your application.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 