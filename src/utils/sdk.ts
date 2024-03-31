import { GraphQLClient } from "graphql-request";
import { config } from "#/config";
import { getSdk } from "#/generated/sdk";

export const createGraphqlClient = () => {
  const graphqlClient = new GraphQLClient(config.CONTENTFUL_GRAPHQL_ENDPOINT);

  return getSdk(graphqlClient);
};
