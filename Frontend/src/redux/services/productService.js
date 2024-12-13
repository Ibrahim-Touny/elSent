import axios from "axios";
import { BACKEND_URL } from "../../utils/url";

export const PRODUCT_URL = `${BACKEND_URL}/product`;

const createProduct = async (formData) => {
  const response = await axios.post(PRODUCT_URL, formData);
  return response.data;
};

const getAllProduct = async () => {
  const response = await axios.get(`${PRODUCT_URL}`);
  return response.data;
};

const deleteProduct = async (id) => {
  const response = await axios.delete(`${PRODUCT_URL}/${id}`);
  return response.data;
};

const getProduct = async (id) => {
  const response = await axios.get(`${PRODUCT_URL}/${id}`);
  return response.data;
};

const updateProduct= async (id,formData) => {
  const response = await axios.put(`${PRODUCT_URL}/admin/${id}`,formData);
  return response.data;
};
const productService = {
  createProduct,
  getAllProduct,
  deleteProduct,
  getProduct,
  updateProduct,
};

export default productService;
