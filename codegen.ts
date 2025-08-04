import { loadEnvConfig } from "@next/env";
import { config } from "./src/config";
import type { CodegenConfig } from "@graphql-codegen/cli";

loadEnvConfig(process.cwd());

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
  schema: config.CONTENTFUL_GRAPHQL_ENDPOINT,
};

export default codegenConfig;
