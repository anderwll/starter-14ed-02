export class Criminal {
  constructor(
    private _id: string,
    private _name: string,
    private _birthDate: Date,
    private _createdAt: Date,
    private _updatedAt: Date,
    private _cpf?: string | null,
    private _gender?: string,
    private _rg?: string | null,
    private _cnh?: string | null,
    private _description?: string | null,
    private _address?: string | null
  ) {}

  public toJSON() {
    return {
      id: this._id,
      name: this._name,
      birthDate: this._birthDate,
      gender: this._gender,
      cpf: this._cpf,
      description: this._description,
    };
  }
}
