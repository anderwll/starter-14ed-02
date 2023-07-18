// Crie  uma  classe  para  implementar  uma conta  corrente.
// A  classe  deve  possuir  os  seguintes  atributos:
//    Número  da  conta
//    Nome  do  correntista
//    Saldo
// Os métodos são os seguintes:
//    Alterar nome
//    Deposito
//    Saque
// No construtor, o saldo é opcional, com valor padrão zero e os
// demais atributos são obrigatórios. A conta não pode ficar com saldo negativo.

export class ContaCorrente {
  nConta: number;
  nomeCorrentista: string;
  saldo: number;

  constructor(nConta: number, nomeCorrentista: string, saldo?: number) {
    this.nConta = nConta;
    this.nomeCorrentista = nomeCorrentista;
    // this.saldo = saldo ?? 0;
    this.saldo = saldo ? saldo : 0;
  }

  alterarNome(novoNome: string): void {
    this.nomeCorrentista = novoNome;
    console.log(`Nome alterado para ${this.nomeCorrentista}`);
  }

  depositar(valor: number): void {
    if (valor <= 0) {
      console.log("é necessario inserir um valor maior que zero");
    } else {
      this.saldo += valor;
      console.log(
        `O saldo apos deposito do usuario ${this.nomeCorrentista} é ${this.saldo}`
      );
    }
  }

  sacar(valor: number): void {
    if (valor > this.saldo) {
      console.log("voce vai entrar no cheque especial");
    } else {
      this.saldo -= valor;
      console.log(
        `O saldo apos saque usuario ${this.nomeCorrentista} é ${this.saldo}`
      );
    }
  }
}
