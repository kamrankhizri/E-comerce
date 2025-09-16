import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

// Yup validation schema
const schema = yup.object({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be positive")
    .required("Price is required"),
  category: yup.string().required("Category is required"),
  image: yup.string().url("Enter a valid URL").required("Image URL is required"),
});

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const categories = [
    "Electronics",
    "Fashion",
    "Home Appliances",
    "Sports",
    "Toys",
    "Beauty",
  ];

  const onSubmit = async (data) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post("http://localhost:5000/product", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Product added successfully!");
      console.log(res.data);
      reset();
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed to add product");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4 sm:p-6 md:p-12">
      <div className="p-6 sm:p-8 max-w-md sm:max-w-lg w-full bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-400 mb-6 text-center">
          Add Product
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="text"
            placeholder="Product Title"
            {...register("title")}
            className="w-full p-2 sm:p-3 rounded bg-gray-700 text-white text-sm sm:text-base"
          />
          {errors.title && (
            <p className="text-red-500 text-xs sm:text-sm">{errors.title.message}</p>
          )}

          <textarea
            placeholder="Description"
            {...register("description")}
            className="w-full p-2 sm:p-3 rounded bg-gray-700 text-white text-sm sm:text-base"
          />
          {errors.description && (
            <p className="text-red-500 text-xs sm:text-sm">{errors.description.message}</p>
          )}

          <input
            type="number"
            placeholder="Price"
            {...register("price")}
            className="w-full p-2 sm:p-3 rounded bg-gray-700 text-white text-sm sm:text-base"
          />
          {errors.price && (
            <p className="text-red-500 text-xs sm:text-sm">{errors.price.message}</p>
          )}

          <select
            {...register("category")}
            className="w-full p-2 sm:p-3 rounded bg-gray-700 text-white text-sm sm:text-base"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat.toLowerCase()}>
                {cat}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-red-500 text-xs sm:text-sm">{errors.category.message}</p>
          )}

          <input
            type="text"
            placeholder="Image URL"
            {...register("image")}
            className="w-full p-2 sm:p-3 rounded bg-gray-700 text-white text-sm sm:text-base"
          />
          {errors.image && (
            <p className="text-red-500 text-xs sm:text-sm">{errors.image.message}</p>
          )}

          <button
            type="submit"
            className="w-full py-2 sm:py-3 bg-amber-400 text-gray-900 font-bold rounded-lg hover:bg-amber-500 transition text-sm sm:text-base"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
