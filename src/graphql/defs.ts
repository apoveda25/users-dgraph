import 'graphql-import-node';
import { mergeTypes } from 'merge-graphql-schemas';
import {
  DateTimeTypeDefinition,
  EmailAddressTypeDefinition,
} from 'graphql-scalars';
import * as scalars from './scalars/scalars.schema.graphql';
import * as queriesSchemaRoles from './roles/queries.schema.graphql';
import * as typesSchemaRoles from './roles/types.schema.graphql';
import * as queriesSchemaScopes from './scopes/queries.schema.graphql';
import * as typesSchemaScopes from './scopes/types.schema.graphql';
import * as queriesSchemaUsers from './users/queries.schema.graphql';
import * as typesSchemaUsers from './users/types.schema.graphql';

const types = [
  DateTimeTypeDefinition,
  EmailAddressTypeDefinition,
  scalars,
  queriesSchemaRoles,
  typesSchemaRoles,
  queriesSchemaScopes,
  typesSchemaScopes,
  queriesSchemaUsers,
  typesSchemaUsers,
];

export default mergeTypes(types);
