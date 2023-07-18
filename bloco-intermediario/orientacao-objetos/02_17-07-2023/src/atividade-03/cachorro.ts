import { Animal } from "./animal";

export class Cachorro extends Animal {
  constructor(patas: number, rabo: boolean) {
    super(patas, rabo);
  }

  correr(metros: number): void {
    console.log(`O cachorro andou ${metros} metros`);
  }

  latir(): void {
    console.log("auau");
  }
}
