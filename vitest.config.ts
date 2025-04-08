/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom', // Use jsdom for browser-like environment
    // Optional: setup file for global test configurations
    // setupFiles: './test/setup.ts',
    include: ['test/**/*.spec.ts'], // Look for tests relative to the package directory
    alias: {
      // Resolve workspace package aliases
      '@monorepo/olive': path.resolve(__dirname, 'packages/olive/src'),
      '@monorepo/wallet': path.resolve(__dirname, 'packages/wallet/src'),
      '@monorepo/cedar': path.resolve(__dirname, 'packages/cedar/src'),
      '@monorepo/rosewood': path.resolve(__dirname, 'packages/rosewood/src'),
    },
  },
})
