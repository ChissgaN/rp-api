import StatusModel from "../models/StatusModel.js";
export async function index(req, res){
    try {
        const status = await StatusModel.select();
        res.json({ status });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export async function show(req, res){
    try {
        const status = await StatusModel.find(req.params.id);
        res.json({ status });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export async function store(req, res){
    try {
        await StatusModel.create(req.body);
        res.json({ message: error.message });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export async function update(req, res){
    try{
        await StatusModel.update({ ...req.body, status_id: req.params.id });
        res.json({ message: "Status updated successfully" });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export async function remove(req, res){
    try{
        StatusModel.remove(1, req.params.id);
        res.json({ message: "Status removed successfully" });
    } catch (error){
        res.status(500).json({error: error.message});
    }
}

export default { index, store, update, remove };