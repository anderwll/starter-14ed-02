import { listaUsuarios } from "../database/usuarios";
import { Avaliacao, NotaAvaliacao } from "../types/avaliacao";
import { Base } from "./base";
import { Comentario } from "./comentario";
import { Usuario } from "./usuario";

export class Produto extends Base {
  private _avaliacoes: Array<Avaliacao>; // Interface
  private _comentarios: Array<Comentario>; // Class

  constructor(nome: string, private _valor: number) {
    super(nome);
    this._avaliacoes = [];
    this._comentarios = [];
  }

  public get valor(): number {
    return this._valor;
  }

  public visualizar(): void {
    console.log(
      `Produto ${this.nome} - ${this._valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}`
    );
  }

  public visualizarDetalhes(): void {
    this.visualizar();
    this._comentarios.forEach((com) => {
      console.log(`         ${com.usuario.username}: ${com.texto}`);
    });
    console.log("\n---------------------\n");
  }

  public addComentario(comentario: Comentario): void {
    const existe = this._comentarios.some((com) => com.id === comentario.id);

    if (existe) {
      console.log("Esse comentário já existe. 😪");
      console.log("\n---------------------\n");
      return;
    }

    this._comentarios.push(comentario);
    console.log("Comentário adicionado com sucesso. 🎉");
    console.log("\n---------------------\n");
  }

  public addAvaliacao(avalicao: NotaAvaliacao, username: string): void {
    const existeUsuario = listaUsuarios.some(
      (usuario) => usuario.username === username
    );

    if (!existeUsuario) {
      console.log("Esse usuário não existe. 😪");
      console.log("\n---------------------\n");
      return;
    }

    const jaExisteCom = this._avaliacoes.some((av) => av.username === username);

    if (jaExisteCom) {
      console.log("Esse usuário já avaliou. 😪");
      console.log("\n---------------------\n");
      return;
    }

    const notaAvalicao: Avaliacao = {
      notaAvalicao: avalicao,
      username: username,
    };

    this._avaliacoes.push(notaAvalicao);
    console.log("Avaliação adicionada com sucesso. 🎉");
    console.log("\n---------------------\n");
  }
}
