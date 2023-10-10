import { Criminal as CriminalPrisma } from "@prisma/client";
import { CreateCriminalDTO } from "../dtos/criminal.dto";
import { Criminal } from "../models";
import prisma from "../repositories/prisma.connection";

export class CriminalService {
  public async existById(id: string): Promise<boolean> {
    const exist = await prisma.criminal.findUnique({ where: { id } });

    return !!exist;
  }

  public async existByCpf(cpf: string): Promise<boolean> {
    const exist = await prisma.criminal.findUnique({ where: { cpf } });

    return !!exist;
  }

  public async create(data: CreateCriminalDTO) {
    const newCriminal = await prisma.criminal.create({
      data: { ...data },
    });

    return CriminalService.mapToModel(newCriminal);
  }

  static mapToModel(criminal: CriminalPrisma): Criminal {
    return new Criminal(
      criminal.id,
      criminal.name,
      criminal.birthDate,
      criminal.createdAt,
      criminal.updatedAt,
      criminal.cpf,
      criminal.gender,
      criminal.rg,
      criminal.cnh,
      criminal.description,
      criminal.address
    );
  }
}
