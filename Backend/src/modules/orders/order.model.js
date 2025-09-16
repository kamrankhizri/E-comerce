import orderSchema from "./order.schema.js";

export const getAllOrdersModel = async () => {
    return orderSchema.find({}).populate('user').populate('product');
};

export const getByIdOrdersModel = async (id) => {
    return orderSchema.findById(id);
};

export const createOrdersModel = async (body) => {
    return orderSchema.create(body);
};

export const deleteByIdOrdersModel = async (id) => {
    return orderSchema.findByIdAndDelete(id);
};

export const updateByIdOrdersModel = async (id, body) => {
    return orderSchema.findByIdAndUpdate(id, body);
};