import UserModel from "../models/UserModel.js";
import { storeSchema, updateSchema } from "../libs/joi/UsersSchema.js";
export async function index(req, res, next){
    try {
        const user = await UserModel.select();
        res.json({ user });
    } catch (error) {
        next(error);
    }
}

export async function show(req, res, next){
    try {
        const user = await UserModel.find(req.params.id);
        if (!user) {
            throw { message: "User not found", status: 404 };
        }
        res.json(user);
    } catch (error) {
        next(error);
    }
}

export async function store(req, res, next){
    try {
        await storeSchema.validateAsync(req.body);
        await UserModel.create(req.body);
        res.json({ message: "User created successfully" });
    } catch (error) {
        next(error);
    }
}

export async function update(req, res,next){
    try{
        await updateSchema.validateAsync(req.body);
        await UserModel.update({ ...req.body, user_id: req.params.id });
        res.json({ message: "User updated successfully" });
    } catch (error) {
        next(error);
    }
}

export async function remove(req, res, next){
    try{
        const user = await UserModel.find(req.params.id);
        if (!user) {
            throw { message: "User not found", status: 404 };
        }
        await UserModel.remove(1, req.params.id);
        res.json({ message: "User removed successfully" });
    } catch (error){
        next(error);
    }
}

export default { index, store, update, remove };
