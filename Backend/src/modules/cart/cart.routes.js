import express from "express";
import { getCart, addToCart, removeFromCart, clearCart } from "./cart.controller.js";

const router = express.Router();

// Get cart by user
router.get("/:userId", getCart);

// Add product to cart
router.post("/add", addToCart);

// Remove product from cart
router.post("/remove", removeFromCart);

// Clear cart
router.post("/clear", clearCart);

export default router;
