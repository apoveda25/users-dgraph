import { IResolvers } from 'graphql-tools';
import queriesRoles from './roles/queries.resolvers';
import queriesUsers from './users/queries.resolvers';

const resolverMap: IResolvers = {
  Query: {
    ...queriesRoles,
    ...queriesUsers,
  },
  //   Mutation: {},
  //   Subscription: {},
};

export default resolverMap;
