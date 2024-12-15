import { Router } from "express";
import {create,remove,update,index} from "../controllers/ProductController.js";

export const product_router = Router();

product_router.get("/", index);
product_router.post("/", create);
product_router.put("/:id", update);
product_router.delete("/:id", remove);

export default product_router;