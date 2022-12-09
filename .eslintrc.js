require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: [
    "@ryanep/eslint-config/base",
    "@ryanep/eslint-config/typescript",
    "@ryanep/eslint-config/react",
    "@ryanep/eslint-config/tailwind",
    "@ryanep/eslint-config/jest",
    "@ryanep/eslint-config/testing-library",
    "@ryanep/eslint-config/json",
    "@ryanep/eslint-config/prettier",
  ],
};
