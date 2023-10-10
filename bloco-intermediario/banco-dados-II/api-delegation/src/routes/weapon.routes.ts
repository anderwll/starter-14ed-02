import { Router } from "express";
import { WeaponController } from "../controllers";
import { CreateWeapon } from "../middlewares";

export function weaponRoutes() {
  const router = Router();
  const middleware = new CreateWeapon();
  const controller = new WeaponController();

  router.post("/", middleware.validate, controller.create);

  return router;
}
