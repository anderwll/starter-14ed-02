import { NextFunction, Request, Response } from "express";

export class CreateWeapon {
  public validate(req: Request, res: Response, next: NextFunction) {
    const { type, caliber, name, description } = req.body;

    if (!type || !caliber || !name || !description) {
      return res.status(400).json({
        ok: false,
        message: "Os campos type, caliber, name, description são obrigátorios.",
      });
    }

    return next();
  }
}
