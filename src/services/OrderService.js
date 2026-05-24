import axios from "axios";

const API = "http://localhost:5225/api/Orders";

export const getOrders = async () => {
  const response = await axios.get(`${API}`);
  return response.data;
};

export const getOrdersById = async (id) => {
  const response = await axios.get(`${API}/${id}`);
  return response.data;
};

export const createOrders = async (order) => {
  const response = await axios.post(`${API}`, order);
  return response.data;
};

export const updateOrders = async (id, order) => {
  const response = await axios.put(`${API}/${id}`, order);
  return response.data;
};

export const deleteOrders = async (id) => {
  const response = await axios.delete(`${API}/${id}`);
  return response.data;
};
