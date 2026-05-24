import axios from "axios";

const API = "http://localhost:5225/api/Product";

export const getProducts = async () => {
  const response = await axios.get(`${API}/All`);
  return response.data;
};

export const getProductsById = async (id) => {
  const response = await axios.get(`${API}/${id}`);
  return response.data;
};

export const createProducts = async (product) => {
  const response = await axios.post(`${API}/Add`, product);
  return response.data;
};

export const updateProducts = async (id, product) => {
  const response = await axios.put(`${API}/Update/${id}`, product);
  return response.data;
};

export const deleteProducts = async (id) => {
  const response = await axios.delete(`${API}/Delete/${id}`);
  return response.data;
};
