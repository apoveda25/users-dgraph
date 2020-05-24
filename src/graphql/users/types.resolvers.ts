import { Rol } from '../roles/types.interface';
import { UID } from '../scalars/type.interface';

export default {
  hasRolCompanies({ uid }: UID): Rol | object {
    const uidParent = '0x1';
    const rol = {
      uid: '0x2',
      name: 'client',
      description: 'client common',
      typeRol: 'COMPANIES',
      created: new Date(),
      updated: new Date(),
    };
    return uid === uidParent ? rol : {};
  },
  hasRolApplication({ uid }: UID): Rol | object {
    const uidParent = '0x1';
    const rol = {
      uid: '0x2',
      name: 'client',
      description: 'client common',
      typeRol: 'APPLICATION',
      created: new Date(),
      updated: new Date(),
    };
    return uid === uidParent ? rol : {};
  },
};
