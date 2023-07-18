import { Animal } from "./animal";

export class Gato extends Animal {
  constructor(patas: number, rabo: boolean) {
    super(patas, rabo);
  }

  correr(metros: number): void {
    console.log(`O gato andou ${metros} metros`);
  }

  miar(): void {
    console.log("miau");
  }
}
