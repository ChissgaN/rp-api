import UserModel from "../models/UserModel.js";
export async function index(req, res){
    try {
        const user = await UserModel.select();
        res.json({ user });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export async function show(req, res){
    try {
        const user = await UserModel.find(req.params.id);
        res.json({ user });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export async function store(req, res){
    try {
        await UserModel.create(req.body);
        res.json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export async function update(req, res){
    try{
        await UserModel.update({ ...req.body, user_id: req.params.id });
        res.json({ message: "User updated successfully" });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export function remove(req, res){
    try{
        UserModel.remove(1, req.params.id);
        res.json({ message: "User removed successfully" });
    } catch (error){
        res.status(500).json({error: error.message});
    }
}

export default { index, store, update, remove };
