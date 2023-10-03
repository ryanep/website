import path from "node:path";
import { config } from "dotenv";
import type { GatsbyConfig } from "gatsby";

config({
  path: `.env.${process.env.NODE_ENV}`,
});

const gatsbyConfig: GatsbyConfig = {
  graphqlTypegen: {
    typesOutputPath: "./src/types/graphql-types.d.ts",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    {
      options: {
        allExtensions: true,
        isTSX: true,
        jsxPragma: "react-jsx",
      },
      resolve: `gatsby-plugin-typescript`,
    },
    {
      options: {
        // eslint-disable-next-line unicorn/prefer-module
        configFile: `${__dirname}/tsconfig.json`,
        silent: true,
      },
      resolve: `gatsby-plugin-tsconfig-paths`,
    },
    {
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
      resolve: "gatsby-plugin-google-analytics",
    },
    {
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
      resolve: "gatsby-source-contentful",
    },
  ],
};

export default gatsbyConfig;
