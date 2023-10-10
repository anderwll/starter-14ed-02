import { Request, Response } from "express";
import { CrimeService, CriminalService, WeaponService } from "../services";

export class CrimeController {
  public async create(req: Request, res: Response) {
    const {
      description,
      crimeDate,
      article,
      severity,
      victims,
      criminalId,
      weaponId,
    } = req.body;

    const service = new CrimeService();
    const serviceWeapon = new WeaponService();
    const serviceCriminal = new CriminalService();

    // VERIFICAR SE O ID DA ARMA INFORMADO EXISTE DE FATO
    const existWeapon = await serviceWeapon.existById(weaponId);
    if (!existWeapon) {
      return res.status(400).json({
        ok: false,
        message: "O id da arma informado não existe no banco.",
      });
    }

    // VERIFICAR SE O ID DO CRIMINOSO EXISTE DE FATO
    const existCriminal = await serviceCriminal.existById(criminalId);
    if (!existCriminal) {
      return res.status(400).json({
        ok: false,
        message: "O id do criminoso informado não existe no banco.",
      });
    }

    // VERIFICA SE ESSA ARMA JÁ FOI USADA EM UM CRIME
    const existWeaponInCrime = await service.verifyWeaponIdExist(weaponId);

    if (existWeaponInCrime) {
      return res.status(409).json({
        ok: false,
        message: "Essa arma já está vinculada a outro crime.",
      });
    }

    // CADASTRA O CRIME
    const crime = await service.create(req.body);

    // RETORNA PARA O USUÁRIO

    return res.status(201).json({
      ok: true,
      message: "Crime cadastrado com sucesso.",
      data: crime.toJson(),
    });
  }
}
