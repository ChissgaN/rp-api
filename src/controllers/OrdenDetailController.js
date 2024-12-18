import OrdenDetailModel from "../models/OrdenDetailModel.js";

export async function index(req, res){
    try {
        const orden_detail = await OrdenDetailModel.select();
        res.json({ orden_detail });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export async function show(req, res){
    try {
        const orden_detail = await OrdenDetailModel.find(req.params.id);
        res.json({ orden_detail });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export async function store(req, res){
    try {
        await OrdenDetailModel.create(req.body);
        res.json({ message: "Orden Detail created successfully" });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export async function update(req, res){
    try{
        await OrdenDetailModel.update({ ...req.body, orden_detail_id: req.params.id });
        res.json({ message: "Orden Detail updated successfully" });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export async function remove(req, res){
    try{
        OrdenDetailModel.remove(1, req.params.id);
        res.json({ message: "Orden Detail removed successfully" });
    } catch (error){
        res.status(500).json({error: error.message});
    }
}

export default { index, store, update, remove };