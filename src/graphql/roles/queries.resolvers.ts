import { Rol } from './types.interface';
import { UID } from '../scalars/type.interface';

export default {
  getRolById(_: void, { uid }: UID): Rol | object {
    const rol = {
      uid: '0x2',
      name: 'client',
      description: 'client common',
      created: new Date(),
      updated: new Date(),
    };

    return uid === rol.uid ? rol : {};
  },
};
