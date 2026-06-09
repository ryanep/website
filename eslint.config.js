import { createConfig } from "@ryanep/eslint-config";
import { defineConfig } from "eslint/config";

const eslintConfig = defineConfig([
  createConfig({
    features: ["testing-library", "tailwind", "react", "next"],
  }),
  {
    rules: {
      "tailwindcss/classnames-order": "off",
      "tailwindcss/no-custom-classname": "off",
    },
  },
]);

export default eslintConfig;
