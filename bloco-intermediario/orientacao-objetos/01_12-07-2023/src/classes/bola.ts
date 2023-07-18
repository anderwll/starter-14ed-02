// Crie uma classe que modele uma bola:
// Atributos
//    Cor
//    Circunferência
//    Material
// Métodos
//    Trocar Cor
//    Mostrar Cor

export class Bola {
  cor: string;
  circunferencia: number;
  material: string;

  constructor(cor: string, cfr: number, material: string) {
    this.cor = cor;
    this.circunferencia = cfr;
    this.material = material;
  }

  trocaCor(novaCor: string): void {
    this.cor = novaCor;
  }

  mostrarCor(): void {
    console.log(`A cor da bola é ${this.cor}`);
  }
}
