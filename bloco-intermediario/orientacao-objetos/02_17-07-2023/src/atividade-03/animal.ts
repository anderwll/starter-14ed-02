export abstract class Animal {
  private _patas: number;
  private _rabo: boolean;

  constructor(patas: number, rabo: boolean) {
    this._patas = patas;
    this._rabo = rabo;
  }

  correr(metros: number): void {}
}
