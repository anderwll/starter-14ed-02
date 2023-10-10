import { NextFunction, Request, Response } from "express";

export class CreateCriminal {
  public validate(req: Request, res: Response, next: NextFunction) {
    const { name, birthDate, gender } = req.body;

    if (!name || !birthDate || !gender) {
      return res.status(400).json({
        ok: false,
        message: "Os campos name, birthDate e gender são obrigátorios.",
      });
    }

    return next();
  }
}
