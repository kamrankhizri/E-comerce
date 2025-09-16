// routes/ProductsRoutes.js
import express from "express";
// controller
import { getAllOrders, getByIdOrders, createOrder, updateByIdOrders, deleteByIdOrders } from "./order.controller.js";
// Middlewares
import { authorizeRoles } from "../../middleware/auhorization.js";

const router = express.Router();

router.get('/', authorizeRoles(['admin']), getAllOrders);
router.get('/:id', getByIdOrders);

router.post('/', createOrder);

router.put('/:id', updateByIdOrders);

router.delete('/:id', deleteByIdOrders);

export default router;
