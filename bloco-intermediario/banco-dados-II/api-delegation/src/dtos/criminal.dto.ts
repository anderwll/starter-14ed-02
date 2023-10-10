export interface CreateCriminalDTO {
  name: string;
  birthDate: Date;
  gender: string;
  cpf?: string;
  description?: string;
}
