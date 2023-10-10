import { Request, Response } from "express";
import { CriminalService } from "../services/criminal.service";

export class CriminalController {
  public async create(req: Request, res: Response) {
    const { name, birthDate, gender, cpf, description } = req.body;
    const service = new CriminalService();

    const existByCpf = await service.existByCpf(cpf);

    if (existByCpf) {
      return res.status(409).json({
        ok: false,
        message: "Criminoso já cadastrado no banco de dados.",
      });
    }

    // MESMA COISA PRO RG

    const criminal = await service.create({
      name,
      birthDate,
      gender,
      cpf,
      description,
    });

    return res.status(201).json({
      ok: true,
      message: "Criminoso criado com sucesso!",
      data: criminal.toJSON(),
    });
  }
}
