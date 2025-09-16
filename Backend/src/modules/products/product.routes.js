// routes/ProductsRoutes.js
import express from "express";
// controller
import { getAllProduct, getByIdProduct, createOrder, updateByIdProduct, deleteByIdProduct } from "./product.controller.js";

const router = express.Router();

router.get('/', getAllProduct);
router.get('/:id', getByIdProduct);

router.post('/', createOrder);

router.put('/:id', updateByIdProduct);

router.delete('/:id', deleteByIdProduct);

export default router;
