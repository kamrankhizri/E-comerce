import {
  getAllProductModel,
  getByIdProductModel,
  createProductModel,
  updateByIdProductModel,
  deleteByIdProductModel,
} from "./product.model.js";

export const getAllProduct = async (req, res) => {
  const data = await getAllProductModel();

  return res.status(200).json({
    message: "Data get successful",
    data,
  });
};

export const getByIdProduct = async (req, res) => {
  const id = req.params.id;
  const data = await getByIdProductModel(id);

  return res.status(200).json({
    message: "Data get successful",
    data,
  });
};

export const createOrder = async (req, res) => {
  const body = req.body;
  const data = await createProductModel(body);

  return res.status(200).json({
    message: "Data create successful",
    data,
  });
};

export const updateByIdProduct = async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  const data = await updateByIdProductModel(id, body);

  return res.status(200).json({
    message: "Data update successful",
    data,
  });
};

export const deleteByIdProduct = async (req, res) => {
  const id = req.params.id;

  const data = await deleteByIdProductModel(id);

  return res.status(200).json({
    message: "Data delete successful",
    data,
  });
};
