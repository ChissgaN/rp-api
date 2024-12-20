import ProductsModel from "../models/ProductModel.js";
import { storeSchema, updateSchema } from "../libs/joi/ProductsSchema.js";
import joi from "joi";

export async function index(req, res, next) {
  try {
    const products = await ProductsModel.select();
    res.json({ products });
  } catch (error) {
    next(error);
  }
}

export async function show(req, res, next) {
  try {
    const product = await ProductsModel.find(req.params.id);
    if (!product) {
      throw { message: "Product not found", status: 404 };
    }
    res.json(product);
  } catch (error) {
    next(error);
  }
}

export async function store(req, res, next) {
  try {
    await storeSchema.validateAsync(req.body);
    await ProductsModel.create(req.body);
    res.json({ message: "Product created successfully" });
  } catch (error) {
    next(error);
  }
}

export async function update(req, res, next) {
  try {
    await updateSchema.validateAsync(req.body);
    await ProductsModel.update({ ...req.body, product_id: req.params.id });

    res.json({ message: "Product updated successfully" });
  } catch (error) {
    next(error);
  }
}

export async function remove(req, res, next) {
  try {
    const product = await ProductsModel.find(req.params.id);
    if (!product) {
      throw { message: "Product not found", status: 404 };
    }
    await ProductsModel.remove(1, req.params.id);
    res.json({ message: "Product removed successfully" });
  } catch (error) {
    next(error);
  }
}

export default { index, show, store, update, remove };
