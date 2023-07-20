import { randomUUID } from "crypto";

export abstract class Base {
  private _id: string;
  private _nome: string;

  constructor(nome: string) {
    this._id = randomUUID();
    this._nome = nome;
  }
}
