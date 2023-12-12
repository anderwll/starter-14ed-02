export enum ETypeUser {
  TECH_HELPER = "T",
  FORMADO = "F",
  MATRICULADO = "M",
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  age: number;
  type: ETypeUser;
}

export type CreateUser = Omit<User, "id"> & { password: string };

export interface UserLogin {
  email: string;
  password: string;
}
