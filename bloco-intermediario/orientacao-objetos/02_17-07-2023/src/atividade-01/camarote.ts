// crie uma classe Camarote, que herda ingresso e possui um valor adicional.
import { Ingresso } from "./ingresso";

export class Camarote extends Ingresso {
  private _valorCamarote: number;

  constructor(valor: number, valorCamarote: number) {
    super(valor);
    this._valorCamarote = valorCamarote;
  }
  imprimeValor() {
    this._valor = this._valor + this._valorCamarote;
    console.log(`O valor do ingresso no camarote é: R$${this._valor}`);
  }
}
