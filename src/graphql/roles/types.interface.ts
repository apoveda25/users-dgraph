export interface Rol {
  uid: string;
  name: string;
  description: string;
  typeRol: TypeRol;
  created: Date;
  updated: Date;
}

enum TypeRol {
  APPLICATION = 'APPLICATION',
  COMPANIES = 'COMPANIES',
}
