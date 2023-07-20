import { Base } from "./base";
import { Produto } from "./produto";

export class Usuario extends Base {
  private _username: string;
  private _carrinho: Array<Produto>;

  constructor(nome: string, username: string) {
    super(nome); // Esse cara chama o constructor do pai => Base
    this._username = username;
    this._carrinho = [];
  }

  public addProduto(produto: Produto): void {
    this._carrinho.push(produto);
    console.log("Produto adicionado ao carrinho. 🎉");
  }

  public removeProduto(id: string): void {}

  public visualizarProdutos(): void {}
}
