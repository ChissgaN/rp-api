import { Router } from 'express';
import { create, update, remove, index } from '../controllers/OrdenDetailController.js';

export const orden_detail_router = Router();

orden_detail_router.get('/', index);
orden_detail_router.post('/', create);
orden_detail_router.put('/:id', update);
orden_detail_router.delete('/:id', remove);

export default orden_detail_router;