import { Router } from "express";
import { serve, setup } from "swagger-ui-express";
import { swaggerDocs } from ".";

export function docsRoutes() {
  const router = Router();

  router.use("/", serve, setup(swaggerDocs));

  return router;
}
