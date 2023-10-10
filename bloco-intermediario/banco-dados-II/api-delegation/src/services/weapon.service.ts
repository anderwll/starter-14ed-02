import { Weapon as WeaponPrisma } from "@prisma/client";
import { CreateWeaponDTO } from "../dtos";
import { Weapon } from "../models";
import prisma from "../repositories/prisma.connection";

export class WeaponService {
  public async existById(id: string): Promise<boolean> {
    const exist = await prisma.weapon.findUnique({ where: { id } });

    return !!exist;
  }

  public async create(data: CreateWeaponDTO): Promise<Weapon> {
    const newWeapon = await prisma.weapon.create({ data: { ...data } });

    return WeaponService.mapToModel(newWeapon);
  }

  static mapToModel(weapon: WeaponPrisma): Weapon {
    return new Weapon(
      weapon.id,
      weapon.caliber,
      weapon.name,
      weapon.createdAt,
      weapon.updatedAt,
      weapon.type,
      weapon.length,
      weapon.weight,
      weapon.serialNumber,
      weapon.description
    );
  }
}
