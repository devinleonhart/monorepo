# Monorepo Example

This is an example monorepo using pnpm workspaces with Vue 3 and TypeScript. It demonstrates how to create a modular application with shared components across multiple packages.

## Structure

- `packages/olive`: Main application that consumes components from other packages
- `packages/wallet`: Package containing wallet-related components
- `packages/cedar`: Package containing dashboard components
- `packages/rosewood`: Package containing statistics components

## Setup

1. Install pnpm if you haven't already:
```bash
npm install -g pnpm
```

2. Install dependencies:
```bash
pnpm install
```

## Available Scripts

From the root directory, you can run the following commands:

- `pnpm build`: Build all packages
- `pnpm test`: Run tests across all packages
- `pnpm lint`: Run ESLint across all packages
- `pnpm tsc`: Run TypeScript type checking across all packages

To run a command for a specific package, navigate to that package's directory or use the `--filter` flag:

```bash
pnpm --filter @monorepo/olive dev
```

## Development

1. Start the development server for the olive package:
```bash
cd packages/olive
pnpm dev
```

2. Make changes to any package, and the changes will be reflected in the main application.

## Package Dependencies

Each package can depend on other packages in the monorepo using workspace dependencies. For example:

```json
{
  "dependencies": {
    "@monorepo/wallet": "workspace:*"
  }
}
```
