export class Criminal {
  constructor(
    private _id: string,
    private _name: string,
    private _birthDate: Date,
    private _createdAt: Date,
    private _updatedAt: Date,
    private _cpf?: string,
    private _gender?: string,
    private _rg?: string,
    private _cnh?: string,
    private _description?: string,
    private _address?: string
  ) {}

  public toJSON() {
    return {
      id: this._id,
      name: this._name,
      birthDate: this._birthDate,
      description: this._description,
    };
  }
}
