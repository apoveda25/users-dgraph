import { IResolvers } from 'graphql-tools';
import { DateTimeResolver, EmailAddressResolver } from 'graphql-scalars';
import { Password } from './scalars/scalars.resolvers';
import queriesRoles from './roles/queries.resolvers';
import typesRoles from './roles/types.resolvers';
import queriesScopes from './scopes/queries.resolvers';
import typesScopes from './scopes/types.resolvers';
import queriesUsers from './users/queries.resolvers';
import typesUsers from './users/types.resolvers';

const resolverMap: IResolvers = {
  DateTime: DateTimeResolver,
  EmailAddress: EmailAddressResolver,
  Password,
  User: { ...typesUsers },
  Rol: { ...typesRoles },
  Scope: { ...typesScopes },
  Query: {
    ...queriesRoles,
    ...queriesScopes,
    ...queriesUsers,
  },
  //   Mutation: {},
  //   Subscription: {},
};

export default resolverMap;
