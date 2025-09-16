import React, { useEffect, useState } from "react";
import axios from "axios";

const Sales = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        
          setSales(res.data);
      
      })
      .catch((err) => {
        console.error("Error fetching sales:", err);
      });
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 min-h-screen px-6 py-12">
      <h1 className="text-4xl font-bold text-amber-400 mb-8 text-center">
        Sales Records
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sales.map((sale) => (
          <div
            key={sale.id}
            className="bg-gray-800 rounded-lg shadow-lg p-5 flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={sale.image}
              alt={sale.title}
              className="w-40 h-40 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold text-center text-white mb-2">
              {sale.title}
            </h2>
            <p className="text-sm text-gray-400 text-center mb-4 line-clamp-3">
              {sale.description}
            </p>
            <span className="text-amber-400 font-bold text-lg mb-4">
              ${sale.price}
            </span>
            <button className="px-4 py-2 bg-amber-400 text-gray-900 font-semibold rounded-lg hover:bg-amber-500 transition duration-300">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sales;
