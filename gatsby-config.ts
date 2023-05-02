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
        alias: {
          "#/components": path.resolve(__dirname, "src/components"),
          "#/constants": path.resolve(__dirname, "src/constants"),
          "#/context": path.resolve(__dirname, "src/context"),
          "#/hooks": path.resolve(__dirname, "src/hooks"),
          "#/locales": path.resolve(__dirname, "src/locales"),
          "#/pages": path.resolve(__dirname, "src/pages"),
          "#/styles": path.resolve(__dirname, "src/styles"),
          "#/utils": path.resolve(__dirname, "src/utils"),
        },
      },
      resolve: "gatsby-plugin-alias-imports",
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
