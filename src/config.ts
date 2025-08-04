import { z } from "zod";

const configSchema = z.object({
  CONTENTFUL_GRAPHQL_ENDPOINT: z.string().url(),
});

export const config = configSchema.parse(process.env);
