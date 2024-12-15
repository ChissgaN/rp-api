import { Router } from 'express';
import { create, update, remove, index } from '../controllers/CategoryController.js';

export const category_router = Router();

category_router.get('/', index);
category_router.post('/', create);
category_router.put('/:id', update);
category_router.delete('/:id', remove);

export default category_router;