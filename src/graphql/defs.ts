import 'graphql-import-node';
import { mergeTypes } from 'merge-graphql-schemas';
import * as queriesSchemaRoles from './roles/queries.schema.graphql';
import * as queriesSchemaUsers from './users/queries.schema.graphql';

const types = [queriesSchemaRoles, queriesSchemaUsers];

export default mergeTypes(types);
