// crie uma classe Novo, que herda Imovel e possui um adicional no preço.
// Crie métodos de acesso e impressão deste valor adicional.
import { Imovel } from "./imovel";

export class Novo extends Imovel {
  private _valorAdicional: number;

  constructor(endereco: string, preco: number, valorAdicional: number) {
    super(endereco, preco);
    this._valorAdicional = valorAdicional;
  }

  imprimirValor(): void {
    this.preco += this._valorAdicional;
    console.log(`O valor do novo imóvel é: ${this.preco}`);
  }
}
