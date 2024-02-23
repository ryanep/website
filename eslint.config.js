/* eslint-disable unicorn/prefer-module */
const { createConfig } = require("@ryanep/eslint-config");

module.exports = [
  ...createConfig(),
  {
    ignores: ["out, .next", "src/utils/sdk.ts"],
  },
];
