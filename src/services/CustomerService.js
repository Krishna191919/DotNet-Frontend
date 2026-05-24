import axios from "axios";

const API = "http://localhost:5225/api/Customer";

export const getCustomers = async () => {
  const response = await axios.get(`${API}`);
  return response.data;
};

export const getCustomersById = async (id) => {
  const response = await axios.get(`${API}/${id}`);
  return response.data;
};

export const createCustomers = async (customer) => {
  const response = await axios.post(`${API}`, customer);
  return response.data;
};

export const updateCustomers = async (id, customer) => {
  const response = await axios.put(`${API}/${id}`, customer);
  return response.data;
};

export const deleteCustomers = async (id) => {
  const response = await axios.delete(`${API}/${id}`);
  return response.data;
};
