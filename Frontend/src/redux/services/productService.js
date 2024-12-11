import axios from "axios";
import { BACKEND_URL } from "../../utils/url";

export const PRODUCT_URL = `${BACKEND_URL}/product`;

const createProduct = async (formData) => {
  const response = await axios.post(PRODUCT_URL, formData);
  return response.data;
};

const getAllProduct = async (formData) => {
  const response = await axios.get(`${PRODUCT_URL}/admin`);
  return response.data;
};

const productService = {
  createProduct,
};

export default productService;
