import { makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';
import typeDefs from './graphql/defs';
import resolvers from './graphql/resolvers';

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
