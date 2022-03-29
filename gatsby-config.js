const path = require('path');
const { config } = require('dotenv');

config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: 'react-jsx',
        allExtensions: true,
      },
    },
    'gatsby-plugin-typescript-checker',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '#/components': path.resolve(__dirname, 'src/components'),
          '#/constants': path.resolve(__dirname, 'src/constants'),
          '#/context': path.resolve(__dirname, 'src/context'),
          '#/hooks': path.resolve(__dirname, 'src/hooks'),
          '#/pages': path.resolve(__dirname, 'src/pages'),
          '#/styles': path.resolve(__dirname, 'src/styles'),
          '#/utils': path.resolve(__dirname, 'src/utils'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: 'src/types/graphql-types.ts',
        documentPaths: [
          './src/**/*.{ts,tsx}',
          './node_modules/gatsby-*/**/*.js',
        ],
        codegenDelay: 200,
        pluckConfig: {
          globalGqlIdentifierName: 'graphql',
          modules: [{ name: 'gatsby', identifier: 'graphql' }],
        },
      },
    },
  ],
};
