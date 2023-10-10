import { Router } from "express";
import { CrimeController } from "../controllers";
import { CreateCrime } from "../middlewares";

export function crimeRoutes() {
  const router = Router();
  const middleware = new CreateCrime();
  const controller = new CrimeController();

  router.post("/", middleware.valide, controller.create);

  return router;
}
