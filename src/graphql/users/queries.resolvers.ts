import { User } from './types.interface';
import { UID } from '../scalars/type.interface';

export default {
  getUserById(_: void, { uid }: UID): User | object {
    const user = {
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

    return uid === user.uid ? user : {};
  },
};
