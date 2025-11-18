import { GraphQLClient } from 'graphql-request';

const endpoint = import.meta.env.VITE_GRAPHQL_URL || 'http://localhost:3001/graphql';

export const graphqlClient = new GraphQLClient(endpoint);