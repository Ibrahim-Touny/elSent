import axios from "axios";

import { BACKEND_URL } from "../../utils/url";
export const CATEGORY_URL = `${BACKEND_URL}/category/`;

const CreateCategory = async (formData) => {
    const response = await axios.post(CATEGORY_URL , formData);
    return response.data;
};

const getallCategory = async () => {
    const response = await axios.get(CATEGORY_URL);
    return response.data;
};

const categoryService = {
    CreateCategory,
    getallCategory,
};

export default categoryService;
