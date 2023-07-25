import { randomUUID } from "crypto";
import { Usuario } from "./usuario";

export class Comentario {
  private _id: string;
  private _texto: string;
  private _usuario: Usuario;

  constructor(texto: string, usuario: Usuario) {
    this._id = randomUUID();
    this._texto = texto;
    this._usuario = usuario;
  }

  public get id(): string {
    return this._id;
  }

  public get texto(): string {
    return this._texto;
  }

  public get usuario(): Usuario {
    return this._usuario;
  }
}
