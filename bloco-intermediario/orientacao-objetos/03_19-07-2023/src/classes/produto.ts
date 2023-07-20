import { randomUUID } from "crypto";
import { Base } from "./base";

export class Produto extends Base {
  private _avaliacoes: Array<number>;
  private _comentarios: Array<string>;

  constructor(nome: string, private _valor: number) {
    super(nome);
    this._avaliacoes = [];
    this._comentarios = [];
  }

  public visualizar(): void {}

  public visualizarDetalhes(): void {}

  public addComentario(comentario: string, username: string): void {}

  public addAvaliacao(avalicao: number, username: string): void {}
}
