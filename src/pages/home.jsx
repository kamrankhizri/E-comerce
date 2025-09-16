import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion"; // 👈 Framer Motion import

const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const navigate = useNavigate();

  // Refs
  const heroRef = useRef(null);
  const categoriesRef = useRef(null);
  const productsRef = useRef(null);

  // Scroll to products
  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Simulated user
  const [user] = useState(
    JSON.parse(localStorage.getItem("user")) || { role: "user" }
  );

  // Categories
  const categories = [
    { label: "All Products", value: "all", img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=500&q=80" },
    { label: "Electronics", value: "electronics", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80" },
    { label: "Fashion", value: "fashion", img: "https://th.bing.com/th?id=OIF.n5WQF3%2fK3rVAgcjnDXDarw&w=186&h=186&c=7&r=0&o=5&dpr=1.2&pid=1.7" },
    { label: "Home Appliances", value: "home-appliances", img: "https://th.bing.com/th/id/OIP.Lr_mumbrt60q3JoAhJL-_QHaLF?w=140&h=210&c=7&r=0&o=7&dpr=1.2&pid=1.7&rm=3" },
    { label: "Sports", value: "sports", img: "https://th.bing.com/th/id/OIP.SDwpjal9o0SFYA_xRl_3aQHaDt?w=335&h=174&c=7&r=0&o=7&dpr=1.2&pid=1.7&rm=3" },
    { label: "Toys", value: "toys", img: "https://th.bing.com/th/id/OIP.76O6u53DJjxsJqh7lvI1qAHaE6?w=248&h=180&c=7&r=0&o=7&dpr=1.2&pid=1.7&rm=3" },
    { label: "Beauty", value: "beauty", img: "https://th.bing.com/th/id/OIP.Yn4doh8LANa5xr5rtQpqzAHaE7?w=205&h=180&c=7&r=0&o=7&dpr=1.2&pid=1.7&rm=3" },
  ];

  // Hero images
  const heroImages = [
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1600&q=80",
    "https://media.istockphoto.com/id/2029879472/photo/a-pair-of-modern-running-sneakers-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=nEPDT4JPT7Iezxua_9WGc2dM5NtsyhVCo5eIqnWTCGA=",
    "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1600&q=80",
  ];

  // Auto-change hero image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Fetch products
  useEffect(() => {
    axios
      .get("http://localhost:5000/product")
      .then((res) => {
        if (Array.isArray(res.data)) setProducts(res.data);
        else if (Array.isArray(res.data.products)) setProducts(res.data.products);
        else if (Array.isArray(res.data.data)) setProducts(res.data.data);
        else setProducts([]);
      })
      .catch((err) => console.error(err));
  }, []);

  // Auto-scroll when category changes
  useEffect(() => {
    if (selectedCategory !== "all") {
      scrollToProducts();
    }
  }, [selectedCategory]);

  // Init AOS
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Filter products
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(
          (p) => p.category && p.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  // Delete (Admin)
  const deleteProduct = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await axios.delete(`http://localhost:5000/product/${id}`);
      setProducts((prev) => prev.filter((p) => p._id !== id && p.id !== id));
      alert("✅ Product deleted successfully!");
    } catch (err) {
      console.error("Delete error:", err);
      alert("❌ Failed to delete product.");
    }
  };

  // Add to Cart
  const addToCart = (product) => {
    alert(`Added "${product.title}" to cart!`);
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full h-[70vh] flex items-center justify-center text-center overflow-hidden"
      >
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="hero"
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h1 className="text-5xl font-bold text-amber-400 mb-6 drop-shadow-lg">
            Welcome to Our Store
          </h1>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg text-gray-200 max-w-2xl mx-auto mb-8"
          >
            Explore the best products in fashion, electronics, jewelry, and more.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToProducts}
            className="px-6 py-3 bg-amber-400 text-gray-900 font-bold rounded-lg shadow-lg hover:bg-amber-500 transition"
          >
            <i className="fas fa-shopping-bag mr-2"></i> Shop Now
          </motion.button>
        </motion.div>
      </section>

      {/* Add Product Button (Admin Only) */}
      {user.role === "admin" && (
        <div className="flex justify-center mt-8">
          <Link
            to="/addproduct"
            className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 transition flex items-center"
          >
            <i className="fas fa-plus-circle mr-2"></i> Add Product
          </Link>
        </div>
      )}

      {/* Categories */}
      <section ref={categoriesRef} className="px-6 py-12">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-amber-400 mb-8"
        >
          Categories
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.value}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className={`bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 ${
                selectedCategory === cat.value ? "ring-2 ring-amber-400" : ""
              }`}
            >
              <img
                src={cat.img}
                alt={cat.label}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col items-center">
                <span className="text-lg font-semibold text-white mb-4">
                  {cat.label}
                </span>
                <button
                  onClick={() => setSelectedCategory(cat.value)}
                  className="px-4 py-2 bg-amber-400 text-gray-900 font-semibold rounded-lg hover:bg-amber-500 transition duration-300"
                >
                  <i className="fas fa-tags mr-2"></i> Shop Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section ref={productsRef} className="px-6 py-12">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-amber-400 mb-8 text-center"
        >
          {selectedCategory === "all" ? "All Products" : selectedCategory}
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, i) => (
              <motion.div
                key={product._id || product.id}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="bg-gray-800 w-full h-56 flex items-center justify-center overflow-hidden">
                  <img className="object-contain h-full" src={product.image} alt={product.title} />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h2 className="text-lg font-semibold text-white mb-2 text-center">
                    {product.title}
                  </h2>
                  <p className="text-sm text-gray-300 mb-4 text-center leading-relaxed">
                    {product.description || "No description available"}
                  </p>
                  <span className="text-amber-400 font-bold text-xl text-center mb-4">
                    Rs {product.price}
                  </span>
                  <div className="flex gap-2 justify-center mt-auto">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => addToCart(product)}
                      className="px-4 py-2 bg-amber-400 text-gray-900 font-semibold rounded-lg hover:bg-amber-500 transition duration-300"
                    >
                      <i className="fas fa-cart-plus mr-1"></i> Add to Cart
                    </motion.button>
                    {user.role === "admin" && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => deleteProduct(product._id || product.id)}
                        className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300"
                      >
                        <i className="fas fa-trash mr-1"></i> Delete
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-400 col-span-full">
              No products found in this category.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
