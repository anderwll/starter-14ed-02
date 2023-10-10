export class Weapon {
  constructor(
    private _id: string,
    private _caliber: number,
    private _name: string,
    private _createdAt: Date,
    private _updatedAt: Date,
    private _type?: number | null,
    private _length?: number | null,
    private _weight?: number | null,
    private _serialNumber?: string | null,
    private _description?: string | null
  ) {}

  public toJSON() {
    return {
      id: this._id,
      name: this._name,
      type: this._type,
      desciption: this._description,
    };
  }
}
