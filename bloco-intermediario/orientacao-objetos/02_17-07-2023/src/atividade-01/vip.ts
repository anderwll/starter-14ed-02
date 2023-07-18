// crie uma classe VIP, que herda Ingresso e possui um valor adicional.
import { Ingresso } from "./ingresso";

export class VIP extends Ingresso {
  private _valorAdicional: number;

  constructor(valor: number, valorAdicional: number) {
    super(valor);
    this._valorAdicional = valorAdicional;
  }
  imprimeValor() {
    this._valor = this._valor + this._valorAdicional;
    console.log(`O valor do ingresso VIP é: R$${this._valor}`);
  }
}
