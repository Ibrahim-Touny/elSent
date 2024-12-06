import axios from "axios";

import { BACKEND_URL } from "../../utils/url";
export const CATEGORY_URL = `${BACKEND_URL}/category/`;

const createCategory = async (formData) => {
    const response = await axios.post(CATEGORY_URL + formData);
    return response.data;
}

const categoryService = {
    createCategory,
}

export default categoryService;
