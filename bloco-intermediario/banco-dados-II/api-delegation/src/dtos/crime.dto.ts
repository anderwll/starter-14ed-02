export interface CreateCrimeDTO {
  description: string;
  crimeDate: Date;
  article: string;
  severity: number;
  victims: string;
  criminalId: string;
  weaponId: string;
}
