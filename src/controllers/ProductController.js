import ProductsModel from "../models/ProductModel.js";

export async function index(req, res) {
  try {
    const products = await ProductsModel.select();
    res.json({ products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function show(req, res) {
  try {
    const product = await ProductsModel.find(req.params.id);
    res.json({ product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function store(req, res) {
  try {
    await ProductsModel.create(req.body);
    res.json({ message: "Product created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function update(req, res) {
  try {
    await ProductsModel.update({ ...req.body, product_id: req.params.id });

    res.json({ message: "Product updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export function remove(req, res) {
  try {
    ProductsModel.remove(1, req.params.id);
    res.json({ message: "Product removed successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default { index, show, store, update, remove };
