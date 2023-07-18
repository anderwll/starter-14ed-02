// Crie uma classe Contador, que encapsule um valor usado para
// contagem de itens ou eventos. A classe deve oferecer métodos que devem:
// a) Zerar;
// b) Incrementar;
// c) Retornar o valor do contador.

export class Contador {
  valor: number;

  constructor(valor: number) {
    this.valor = valor;
  }

  zerar() {
    this.valor = 0;
  }

  incrementar() {
    this.valor++;
  }

  retornarValor() {
    console.log(this.valor);
  }
}
