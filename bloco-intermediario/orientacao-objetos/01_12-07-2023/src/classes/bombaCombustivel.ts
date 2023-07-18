// Faça um programa completo utilizando classes e métodos que:
// Possua uma classe chamada BombaCombustivel, com no mínimo esses atributos:
//      tipoCombustivel.
//      valorLitro
//      quantidadeCombustivel
// Possua no mínimo esses métodos:
//      abastecerPorValor() – método onde é informado o valor a ser abastecido e mostra
//                            a quantidade de litros que foi colocada no veículo
//       abastecerPorLitro() – método onde é informado a quantidade em litros de
//                            combustível e mostra o valor a ser pago pelo cliente.
//      alterarValor() – altera o valor do litro do combustível.
//      alterarCombustivel() – altera o tipo do combustível.
//      alterarQuantidadeCombustivel() – altera a quantidade de combustível restante na bomba.
// OBS: Sempre que acontecer um abastecimento é necessário atualizar a quantidade de
// combustível total na bomba. Não deve ser possível abastecer se não tiver gasolina
// suficiente na bomba.

export class BombaCombustivel {
  tipoCombustivel: string;
  valorLitro: number;
  quantidadeCombustivel: number;

  constructor(
    tipoCombustivel: string,
    valorLitro: number,
    quantidadeCombustivel: number
  ) {
    this.tipoCombustivel = tipoCombustivel;
    this.valorLitro = valorLitro;
    this.quantidadeCombustivel = quantidadeCombustivel;
  }

  abastecerPorValor(money: number): void {
    if (money < this.valorLitro) {
      console.log("Dinheiro não é o suficiente para abastecer 1 litro.");
    } else {
      const abastecido = money / this.valorLitro;

      if (abastecido > this.quantidadeCombustivel) {
        console.log("Não há gasolina suficiente.");
      } else {
        this.quantidadeCombustivel -= abastecido;
        console.log(`Voce abasteceu ${abastecido.toFixed(2)} litros`);
      }
    }
  }

  abastecerPorLitro(litros: number): void {
    if (litros > this.quantidadeCombustivel) {
      console.log("Não há gasolina suficiente.");
      return;
    }
    const valorPagar = litros * this.valorLitro;
    this.quantidadeCombustivel -= litros;
    console.log(`O valor a ser pago é de R$ ${valorPagar.toFixed(2)} reais.`);
  }

  alterarValor(novoValor: number): void {
    this.valorLitro = Number(novoValor.toFixed(3));

    console.log(`O valor do litro foi alterado para R$ ${this.valorLitro}.`);
  }

  alterarCombustivel(nomeCombustivel: string): void {
    this.tipoCombustivel = nomeCombustivel;

    console.log(
      `O tipo de combustivel foi alterado para ${this.tipoCombustivel}.`
    );
  }

  alterarQuantidadeCombustivel(novaQuantidade: number): void {
    if (novaQuantidade < this.quantidadeCombustivel) {
      console.log(`Não é possivel inserir um valor menor que o valor atual.`);
      return;
    }
    this.quantidadeCombustivel = novaQuantidade;

    console.log(
      `A nova quantidade de combustivel é ${this.quantidadeCombustivel}.`
    );
  }
}
