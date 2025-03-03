# Wumm

A project by Romantic Draculla.

## Features

- 3D graphics using Three.js
- Entity Component System (ECS) architecture for game logic
- Immutable state management with Immer
- Keyboard input handling for interactive elements
- TypeScript for type safety and improved developer experience
- Vite for fast development and optimized builds
- GitHub Actions for CI/CD and GitHub Pages deployment
- ESLint for code quality
- Vitest for testing

## Project Structure

```
/
├── src/                # Source files
│   ├── assets/         # Game assets (images, sounds, etc.)
│   ├── lib/            # Core game engine components
│   │   ├── systems/    # ECS systems (movement, rendering, input)
│   │   ├── ecs.ts      # Entity Component System implementation
│   │   └── components.ts # Component definitions
│   ├── utils/          # Utility functions
│   ├── game.ts         # Main game setup and loop
│   ├── style.css       # Global styles
│   └── dummy.test.ts   # Example test file
├── public/             # Static assets served as-is
├── .github/workflows/  # GitHub Actions CI/CD
├── index.html          # HTML entry point
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies and scripts
```

## Architecture

The application is built using an Entity Component System (ECS) architecture:

- **Entities**: Game objects represented by unique IDs
- **Components**: Data structures attached to entities (Position, Velocity, etc.)
- **Systems**: Logic that operates on entities with specific component combinations

The game loop processes these systems in sequence each frame:
1. Input System - Handles keyboard controls
2. Movement System - Updates positions based on velocities
3. Render System - Updates Three.js meshes based on entity positions

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

## Controls

Use the arrow keys to move the cube:
- Up Arrow: Move forward
- Down Arrow: Move backward  
- Left Arrow: Move left
- Right Arrow: Move right

## License

This project is licensed under the MIT License - see the LICENSE file for details. 