import ClientModel from "../models/ClientModel.js";
export async function index(req, res){
    try {
        const client = await ClientModel.select();
        res.json({ client });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export async function show(req, res){
    try {
        const client = await ClientModel.find(req.params.id);
        res.json({ client });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export async function store(req, res){
    try {
        await ClientModel.create(req.body);
        res.json({ message: "Client created successfully" });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export async function update(req, res){
    try{
        await ClientModel.update({ ...req.body, client_id: req.params.id });
        res.json({ message: "Client updated successfully" });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export async function remove(req, res){
    try{
        ClientModel.remove(1, req.params.id);
        res.json({ message: "Client removed successfully" });
    } catch (error){
        res.status(500).json({error: error.message});
    }
}

export default { index, store, update, remove };