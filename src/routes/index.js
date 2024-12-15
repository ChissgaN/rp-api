import { Router } from "express";
import { product_router } from "./ProductRouter.js";
import { category_router } from "./CategoryRouter.js";
import { status_router } from "./StatusRouter.js";
import { user_router } from "./UserRouter.js";
import { orden_detail_router } from "./OrdenDetailRouter.js";
import { client_router } from "./ClientRouter.js";
const app_router = Router();

/**
 * @description Register all routes
 * @param {Router} app
 */
export function routes(app) {
  app.use("/api/v1", app_router);
  app_router.use("/products", product_router);
  app_router.use("/categories", category_router);
  app_router.use("/status", status_router);
  app_router.use("/users", user_router);
  app_router.use("/orden_details", orden_detail_router);
  app_router.use("/client", client_router);
}

export default routes;