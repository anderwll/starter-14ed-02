import { NextFunction, Request, Response } from "express";

export class CreateCrime {
  public valide(req: Request, res: Response, next: NextFunction) {
    const {
      description,
      crimeDate,
      article,
      severity,
      victims,
      criminalId,
      weaponId,
    } = req.body;

    if (
      !description ||
      !crimeDate ||
      !article ||
      !severity ||
      !victims ||
      !criminalId ||
      !weaponId
    ) {
      return res.status(400).json({
        ok: false,
        message:
          "Os campos description, criminalId, weaponId..., são obrigátorios.",
      });
    }

    return next();
  }
}
