import { Router } from "express";
import { product_router } from "./ProductRouter.js";
const app_router = Router();

/**
 * @description Register all routes
 * @param {Router} app
 */
export function routes(app) {
  app.use("/api/v1", app_router);
  app_router.use("/products", product_router);
}

export default routes;