import { config } from "#/config";
import { getSdk } from "#/generated/sdk";
import { GraphQLClient } from "graphql-request";

export const createGraphqlClient = () => {
  const graphqlClient = new GraphQLClient(config.CONTENTFUL_GRAPHQL_ENDPOINT);

  return getSdk(graphqlClient);
};
