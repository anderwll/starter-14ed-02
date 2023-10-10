import { Router } from "express";
import { CriminalController } from "../controllers/criminal.controller";
import { CreateCriminal } from "../middlewares/create-criminal.middleware";

export function criminalRoutes() {
  const router = Router();
  const middleware = new CreateCriminal();
  const controller = new CriminalController();

  router.post("/", middleware.validate, controller.create);

  return router;
}
