import { makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';
// import {
//   DateTimeResolver,
//   DateTimeTypeDefinition,
//   EmailAddressResolver,
//   EmailAddressTypeDefinition,
// } from 'graphql-scalars';
import typeDefs from './graphql/defs';
import resolvers from './graphql/resolvers';

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [/*DateTimeTypeDefinition, EmailAddressTypeDefinition, */ typeDefs],
  resolvers: [
    /*{ DateTime: DateTimeResolver },
    { EmailAddress: EmailAddressResolver },*/
    resolvers,
  ],
});

export default schema;
