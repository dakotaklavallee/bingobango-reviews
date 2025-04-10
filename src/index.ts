import { buildSubgraphSchema } from '@apollo/subgraph';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import gql from 'graphql-tag';
import fs from 'fs';

import { resolvers } from './resolvers.js';

const typeDefs = gql(fs.readFileSync('./src/reviewSchema.graphql', { encoding: 'utf-8' }));

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
});

await startStandaloneServer(server, {
  listen: { port: 4002 },
});

console.log('🚀 Subgraph ready at http://localhost:4002/graphql');