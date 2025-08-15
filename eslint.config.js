import { createConfig } from "@ryanep/eslint-config";

const eslintConfig = [
  ...createConfig({
    isGraphql: false,
  }),
  {
    // TODO: Disable rules due to avoid Tailwind v4 clash.
    rules: {
      "tailwindcss/classnames-order": "off",
      "tailwindcss/no-custom-classname": "off",
    },
  },
];

export default eslintConfig;
