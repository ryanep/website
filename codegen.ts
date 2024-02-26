import type { CodegenConfig } from "@graphql-codegen/cli";

const codegenConfig: CodegenConfig = {
  documents: "src/**/*.graphql",
  generates: {
    "./src/generated/graphql.schema.json": {
      plugins: ["introspection"],
    },
    "./src/generated/schema.graphql": {
      plugins: ["schema-ast"],
    },
    "./src/generated/sdk.ts": {
      config: {
        scalars: {
          DateTime: "Date",
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
