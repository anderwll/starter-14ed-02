import { NextFunction, Request, Response } from "express";
import { JWTAdapter } from "../adapters/jwt.adapter";
import envs from "../envs";

export class Auth {
  public async validar(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization; // Bearer AISJHSI1923A9AMD0ASD0-AS,caisjkdas

    if (!token) {
      return res.status(401).json({
        code: 401,
        ok: false,
        mensagem: "Token é obrigatório",
      });
    }

    try {
      const [_, tokenSemBearer] = token.split(" ");

      const jwt = new JWTAdapter(envs.JWT_SECRET_KEY, envs.JWT_EXPIRE_IN);
      const user = jwt.decodeToken(tokenSemBearer);

      req.authUser = user;

      return next();
    } catch (error) {
      return res.status(401).json({
        code: 401,
        ok: false,
        mensagem: "Token inválido",
      });
    }
  }
}
