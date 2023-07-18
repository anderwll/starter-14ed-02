// crie uma classe Normal, que herda Ingresso..
import { Ingresso } from "./ingresso";

export class Normal extends Ingresso {
  constructor(valor: number) {
    super(valor);
  }

  imprimeValor() {
    console.log(`O valor do ingresso é: R$${this._valor}`);
  }
}
