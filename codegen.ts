import type { CodegenConfig } from "@graphql-codegen/cli";

const codegenConfig: CodegenConfig = {
  documents: "src/**/*.graphql",
  generates: {
    "./generated/graphql.schema.json": {
      plugins: ["introspection"],
    },
    "./generated/schema.graphql": {
      plugins: ["schema-ast"],
    },
    "./src/utils/sdk.ts": {
      config: {
        scalars: {
          DateTime: "string",
          JSONString: "string",
          UUID: "string",
        },
      },
      plugins: [
        "typescript",
        "typescript-graphql-request",
        "typescript-operations",
      ],
    },
  },
  overwrite: true,
  require: ["dotenv/config"],
  schema: process.env.CONTENTFUL_GRAPHQL_ENDPOINT,
};

export default codegenConfig;
