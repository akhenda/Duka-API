import express from 'express';
import { findAll, findOne, seedProducts } from 'src/controllers/products';


const router = express.Router();

router.get('/', findAll);
router.get('/seed', seedProducts);
router.get('/:productId', findOne);

export default router;
