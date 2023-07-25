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

  public get username(): string {
    return this._username;
  }

  public addProduto(produto: Produto): void {
    this._carrinho.push(produto);
    console.log("Produto adicionado ao carrinho. 🎉");
    console.log("\n---------------------\n");
  }

  public removeProduto(produto: Produto): void {
    // -1 => false || 0, 1, 2.... => true
    const indice = this._carrinho.findIndex((item) => item.id === produto.id);

    if (indice === -1) {
      console.log("Produto não encontrado. 😪");
      console.log("\n---------------------\n");
      return;
    }

    const [itemRemovido] = this._carrinho.splice(indice, 1);
    console.log(`Produto removido do carrinho. ✔`);
    console.log(itemRemovido.visualizar());
    console.log("\n---------------------\n");
  }

  public visualizarProdutos(): void {
    this._carrinho.forEach((item) => {
      console.log(
        `Produto: ${item.nome}, ${item.valor.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}`
      );
    });
    console.log("\n---------------------\n");
  }

  public visualizar(): void {
    console.log(`Nome: ${this.nome} | Username: ${this._username}`);
    console.log("\n---------------------\n");
  }
}
