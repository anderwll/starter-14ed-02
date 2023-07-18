// crie uma classe Velho, que herda Imovel e possui um desconto no preço.
// Crie métodos de acesso e impressão para este desconto.
import { Imovel } from "./imovel";

export class Velho extends Imovel {
  private _valorDesconto: number;

  constructor(endereco: string, preco: number, valorDesconto: number) {
    super(endereco, preco);
    this._valorDesconto = valorDesconto;
  }
  imprimirValor(): void {
    this.preco -= this._valorDesconto;
    console.log(`O valor do velho imóvel é: ${this.preco}`);
  }
}
