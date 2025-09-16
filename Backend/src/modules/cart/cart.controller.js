import Cart from "./cart.model.js";

// Get cart by userId
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId }).populate("products.productId");
    if (!cart) return res.status(404).json({ message: "Cart not found" });
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: "Error fetching cart", error: err });
  }
};

// Add product to cart
export const addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, products: [{ productId, quantity }] });
    } else {
      const productIndex = cart.products.findIndex(
        (p) => p.productId.toString() === productId
      );
      if (productIndex > -1) {
        cart.products[productIndex].quantity += quantity;
      } else {
        cart.products.push({ productId, quantity });
      }
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (err) {
    res.status(400).json({ message: "Error adding to cart", error: err });
  }
};

// Remove product from cart
export const removeFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.products = cart.products.filter(
      (p) => p.productId.toString() !== productId
    );

    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(400).json({ message: "Error removing from cart", error: err });
  }
};

// Clear cart
export const clearCart = async (req, res) => {
  try {
    const { userId } = req.body;

    const cart = await Cart.findOneAndUpdate(
      { userId },
      { products: [] },
      { new: true }
    );

    if (!cart) return res.status(404).json({ message: "Cart not found" });

    res.json({ message: "Cart cleared", cart });
  } catch (err) {
    res.status(400).json({ message: "Error clearing cart", error: err });
  }
};
