import { Scope } from '../scopes/types.interface';
import { User } from '../users/types.interface';
import { UID } from '../scalars/type.interface';

export default {
  hasScopes({ uid }: UID): [Scope] | [] {
    const uidParent = '0x2';
    const scope: Scope = {
      uid: '0x3',
      name: 'query scopes',
      description: 'read scopes',
      created: new Date(),
      updated: new Date(),
    };

    return uid === uidParent ? [scope] : [];
  },
  _hasRolCompanies({ uid }: UID): User {
    const user: User = {
      uid: '0x1',
      password: 'secret',
      name: 'alfredo',
      surname: 'poveda',
      username: 'poveron',
      email: 'alfpovistemas@gmail.com',
      active: true,
      created: new Date(),
      updated: new Date(),
    };

    return user;
  },
  _hasRolApplication({ uid }: UID): User {
    const user: User = {
      uid: '0x1',
      password: 'secret',
      name: 'alfredo',
      surname: 'poveda',
      username: 'poveron',
      email: 'alfpovistemas@gmail.com',
      active: true,
      created: new Date(),
      updated: new Date(),
    };

    return user;
  },
};
