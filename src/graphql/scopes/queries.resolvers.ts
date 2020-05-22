import { Scope } from './types.interface';
import { UID } from '../scalars/type.interface';

export default {
  getScopeById(_: void, { uid }: UID): Scope | object {
    const scope = {
      uid: '0x3',
      name: 'query_scopes',
      description: 'read scopes',
      created: new Date(),
      updated: new Date(),
    };

    return uid === scope.uid ? scope : {};
  },
};
