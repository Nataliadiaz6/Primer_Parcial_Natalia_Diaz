import { Rol } from "./rol";

export interface IUser {
  email: string;
  password: string;
  rol: Rol;
}