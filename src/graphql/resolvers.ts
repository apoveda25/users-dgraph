import { IResolvers } from 'graphql-tools';
import { DateTimeResolver, EmailAddressResolver } from 'graphql-scalars';
import { Password } from './scalars/scalars.resolvers';
import queriesRoles from './roles/queries.resolvers';
import queriesScopes from './scopes/queries.resolvers';
import queriesUsers from './users/queries.resolvers';

const resolverMap: IResolvers = {
  DateTime: DateTimeResolver,
  EmailAddress: EmailAddressResolver,
  Password,
  Query: {
    ...queriesRoles,
    ...queriesScopes,
    ...queriesUsers,
  },
  //   Mutation: {},
  //   Subscription: {},
};

export default resolverMap;
