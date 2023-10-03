const { baseConfig } = require("@ryanep/eslint-config/lib/base");
const { typescriptConfig } = require("@ryanep/eslint-config/lib/typescript");
const { reactConfig } = require("@ryanep/eslint-config/lib/react");
const { tailwindConfig } = require("@ryanep/eslint-config/lib/tailwindcss");
const { jestConfig } = require("@ryanep/eslint-config/lib/jest");
const {
  testingLibraryConfig,
} = require("@ryanep/eslint-config/lib/testing-library");

module.exports = [
  baseConfig,
  typescriptConfig,
  jestConfig,
  reactConfig,
  testingLibraryConfig,
  tailwindConfig,
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/coverage/**",
      "eslint.config.js",
      "tailwind.config.js",
      "node_modules",
      "**/public/**",
      "**/.cache/**",
      "**/graphql-types.d.ts",
    ],
  },
];
