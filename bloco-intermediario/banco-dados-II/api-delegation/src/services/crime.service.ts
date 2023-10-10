import {
  Crime as CrimePrisma,
  Criminal as CriminalPrisma,
  Weapon as WeaponPrisma,
} from "@prisma/client";
import { CreateCrimeDTO } from "../dtos";
import { Crime } from "../models";
import prisma from "../repositories/prisma.connection";
import { CriminalService } from "./criminal.service";
import { WeaponService } from "./weapon.service";

interface CrimeIncludesCriminalsAndWeapon extends CrimePrisma {
  criminals: CriminalPrisma;
  weapon: WeaponPrisma;
}

export class CrimeService {
  public async verifyWeaponIdExist(weaponId: string): Promise<boolean> {
    const exist = prisma.crime.findUnique({ where: { weaponId } });

    return !exist;
  }

  public async create(data: CreateCrimeDTO): Promise<Crime> {
    const newCrime = await prisma.crime.create({
      data: { ...data },
      include: { criminals: true, weapon: true },
    });

    // CHAMA COM O CrimeService pois o metodo é estatico
    return CrimeService.mapToModel(newCrime);
  }

  // TRANSFORMA O TIPO PRISMA NA MINHA MODEL
  static mapToModel(crime: CrimeIncludesCriminalsAndWeapon): Crime {
    const criminal = CriminalService.mapToModel(crime.criminals);
    const weapon = WeaponService.mapToModel(crime.weapon);

    return new Crime(
      crime.id,
      crime.description,
      crime.crimeDate,
      crime.article,
      crime.severity,
      crime.victims,
      criminal,
      weapon,
      crime.address
    );
  }
}
