import {
  getAllOrdersModel,
  getByIdOrdersModel,
  createOrdersModel,
  updateByIdOrdersModel,
  deleteByIdOrdersModel,
} from "./order.model.js";

export const getAllOrders = async (req, res) => {
  const data = await getAllOrdersModel();

  return res.status(200).json({
    message: "Data get successful",
    data,
  });
};

export const getByIdOrders = async (req, res) => {
  const id = req.params.id;
  const data = await getByIdOrdersModel(id);

  return res.status(200).json({
    message: "Data get successful",
    data,
  });
};

export const createOrder = async (req, res) => {
  const body = req.body;
  const data = await createOrdersModel(body);

  return res.status(200).json({
    message: "Data create successful",
    data,
  });
};

export const updateByIdOrders = async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  const data = await updateByIdOrdersModel(id, body);

  return res.status(200).json({
    message: "Data update successful",
    data,
  });
};

export const deleteByIdOrders = async (req, res) => {
  const id = req.params.id

  const data = await deleteByIdOrdersModel(id);

  return res.status(200).json({
    message: "Data delete successful",
    data,
  });
};
