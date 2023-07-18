// Crie uma classe para representar uma Calculadora.
// Esta classe deve conter um atributo que servirá para
// rmazenar o histórico das operações e seus respectivos resultados.
//    A - Esta classe deve conter as operações de somar, multiplicar,
//        dividir e diminuir.
//    B -Esta classe deve iniciar com o histórico vazio
//    C- Esta classe deve conter uma ação para visualizar o histórico.
export class Calculadora {
  historico: Array<string>;

  constructor() {
    this.historico = [];
  }

  somar(a: number, b: number): void {
    const resultado = `${a} + ${b} = ${a + b}`;
    console.log(resultado);
    this.historico.push(resultado);
  }

  multiplicar(a: number, b: number): void {
    const resultado = `${a} * ${b} = ${a * b}`;
    console.log(resultado);
    this.historico.push(resultado);
  }

  dividir(a: number, b: number): void {
    const resultado = `${a} / ${b} = ${a / b}`;
    console.log(resultado);
    this.historico.push(resultado);
  }

  diminuir(a: number, b: number): void {
    const resultado = `${a} - ${b} = ${a - b}`;
    console.log(resultado);
    this.historico.push(resultado);
  }

  visualizarHistorico(): void {
    console.log(this.historico);
  }
}
