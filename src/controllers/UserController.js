
export function index(req, res){
    try {
        res.json({ user: []});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export function create(req, res){
    try {
        res.json({ user: {}});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export function update(req, res){
    try{
        res.json({ user: {}});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export function remove(req, res){
    try{
        res.json({ user: {}});
    } catch (error){
        res.status(500).json({error: error.message});
    }
}

export default { index, create, update, remove };