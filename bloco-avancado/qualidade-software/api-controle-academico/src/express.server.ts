import cors from "cors";
import express from "express";

import { docsRoutes } from "./docs/config-swagger";
import { alunoRoutes, authRoutes, avaliacaoRoutes } from "./routes";

export const createServer = () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());

  app.use("/auth", authRoutes());
  app.use("/alunos", alunoRoutes());
  app.use("/avaliacoes", avaliacaoRoutes());
  app.use("/docs", docsRoutes());

  app.get("/", (_, res) => res.status(200).json({ ok: true }));

  return app;
};

