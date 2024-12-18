import CategoryModel from "../models/CategoryModel.js";

export async function index(req, res){
    try {
        const categories = await CategoryModel.select();
        res.json({ categories });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export async function show(req, res){
    try {
        const category = await CategoryModel.find(req.params.id);
        res.json({ category });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export async function store(req, res){
    try {
        await CategoryModel.create(req.body);
        res.json({ category: {}});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export async function update(req, res){
    try{
        await CategoryModel.update({ ...req.body, category_id: req.params.id });
        res.json({ message: "Category updated successfully" });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export function remove(req, res){
    try {
        CategoryModel.remove(1, req.params.id);
        res.json({ message: "Category removed successfully" });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export default { index, store, update, remove };