import { Rol } from '../roles/types.interface';
import { UID } from '../scalars/type.interface';

export default {
  _hasScopes({ uid }: UID): Rol {
    const rol: Rol = {
      uid: '0x2',
      name: 'client',
      description: 'client common',
      typeRol: 'APPLICATION',
      created: new Date(),
      updated: new Date(),
    };

    return rol;
  },
};
