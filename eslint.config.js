import globals from "globals";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import vuePlugin from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";

export default [
  // Apply global ignores first
  {
     ignores: [
        "**/node_modules/**",
        "dist/**",             // Ignore root dist
        "packages/**/dist/**"  // Ignore package dist folders
     ],
  },
  // Base configuration for all files
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
  },
  // TypeScript configuration
  {
    files: ["**/*.{ts,tsx,mts,cts}"],
    plugins: {
      "@typescript-eslint": tseslint,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: null, // Or point to your tsconfig.json if needed for specific rules
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
    rules: {
      ...tseslint.configs["eslint-recommended"].rules,
      ...tseslint.configs.recommended.rules,
      // Add any specific TS rules here
    },
  },
  // Vue configuration - Spread the recommended flat config
  ...vuePlugin.configs['flat/recommended'],
  // Customizations for Vue files AFTER spreading the base config
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
         // Ensure TS parser is used for <script lang="ts">
         // Note: The base config might already handle this, verify if needed
        parser: tsParser,
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
    rules: {
      // Apply specific overrides
      "vue/multi-word-component-names": "off",
      // Add any other specific Vue rules here
    }
  }
];
