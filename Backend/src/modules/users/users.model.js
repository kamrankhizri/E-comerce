import userSchema from "./users.schema.js";

export const getAllUsersModel = async () => {
    return userSchema.find({});
};

export const getUserModel = async (filter) => {
    return userSchema.findOne({...filter});
};

export const getByIdUsersModel = async (id) => {
    return userSchema.findById(id);
};

export const createUsersModel = async (body) => {
    return userSchema.create(body);
};

export const deleteByIdUsersModel = async (id) => {
    return userSchema.findByIdAndDelete(id);
};

export const updateByIdUsersModel = async (id, body) => {
    return userSchema.findByIdAndUpdate(id, body);
};