import { NextFunction, Request, Response } from "express";
import { ETipoAluno } from "../enum/aluno.enum";

export class CadastroAluno {
  public validar(req: Request, res: Response, next: NextFunction) {
    const { nome, email, senha, tipo } = req.body;

    if (!nome || !email || !senha || !tipo) {
      return res.status(400).json({
        ok: false,
        mensagem: "Faltam campos!",
      });
    }

    if (!email.includes("@") || !email.includes(".com")) {
      return res.status(400).json({
        ok: false,
        mensagem: "E-mail inválido!",
      });
    }

    if (senha.length < 6) {
      return res.status(400).json({
        ok: false,
        mensagem: "Mínima 6 caracteres para senha",
      });
    }

    if (
      tipo !== ETipoAluno.F &&
      tipo !== ETipoAluno.T &&
      tipo !== ETipoAluno.M
    ) {
      return res.status(400).json({
        ok: false,
        mensagem: "Tipo inválido! Deve ser apenas dos tipos M, T ou F",
      });
    }

    return next();
  }
}
