export interface Rol {
  uid: string;
  name: string;
  description: string;
  typeRol: 'APPLICATION' | 'COMPANIES';
  created: Date;
  updated: Date;
}
