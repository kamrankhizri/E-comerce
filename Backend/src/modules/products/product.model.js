import productSchema from "./product.schema.js";

export const getAllProductModel = async () => {
    return productSchema.find({});
};

export const getByIdProductModel = async (id) => {
    return productSchema.findById(id);
};

export const createProductModel = async (body) => {
    return productSchema.create(body);
};

export const deleteByIdProductModel = async (id) => {
    return productSchema.findByIdAndDelete(id);
};

export const updateByIdProductModel = async (id, body) => {
    return productSchema.findByIdAndUpdate(id, body);
};