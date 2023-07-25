import { randomUUID } from "crypto";

export abstract class Base {
  private _id: string;
  private _nome: string;

  constructor(nome: string) {
    this._id = randomUUID();
    this._nome = nome;
  }

  public get id(): string {
    return this._id;
  }

  public get nome(): string {
    return this._nome;
  }

  public visualizar(): void {
    console.log(`Nome: ${this._nome}`);
  }
}
