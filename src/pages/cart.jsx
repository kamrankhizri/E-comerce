import React, { useEffect, useState } from "react";
import axios from "axios";

const Cart = () => {
  const [cart, setCart] = useState([]);

  // Fetch cart items from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/cart")
      .then((res) => {
        setCart(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const removeFromCart = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/cart/${productId}`);
      setCart((prevCart) => prevCart.filter((item) => item.productId !== productId));
      alert("Product removed from cart!");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed to remove product");
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 min-h-screen px-4 sm:px-6 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-400 mb-6 sm:mb-8 text-center">
        My Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-400 text-sm sm:text-base">Your cart is empty.</p>
      ) : (
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cart.map((item) => (
            <div
              key={item.productId}
              className="bg-gray-800 rounded-lg shadow-lg p-4 sm:p-5 flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              <img
                className="w-28 h-28 sm:w-40 sm:h-40 object-contain mb-4"
                src={item.image}
                alt={item.title}
              />
              <h2 className="text-base sm:text-lg font-semibold text-center text-white mb-2 line-clamp-2">
                {item.title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 text-center mb-3 line-clamp-3">
                {item.description}
              </p>
              <span className="text-amber-400 font-bold text-base sm:text-lg mb-3">
                ${item.price}
              </span>
              <button
                onClick={() => removeFromCart(item.productId)}
                className="px-3 py-2 sm:px-4 sm:py-2 bg-red-500 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-red-600 transition duration-300"
              >
                Remove From Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
