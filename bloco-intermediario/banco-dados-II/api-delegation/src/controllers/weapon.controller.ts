import { Request, Response } from "express";
import { WeaponService } from "../services/weapon.service";

export class WeaponController {
  public async create(req: Request, res: Response) {
    const { type, caliber, name, description } = req.body;
    const service = new WeaponService();

    const weapon = await service.create({ type, caliber, name, description });

    return res.status(201).json({
      ok: true,
      message: "Arma cadastrada com sucesso.",
      data: weapon.toJSON(),
    });
  }
}
