import axios from "axios";

import { BACKEND_URL } from "../../utils/url";

export const AUTH_URL = `${BACKEND_URL}/users/`;

const register = async (userData) => {
    const response = await axios.post(AUTH_URL+"register", userData);
    return response.data;
};

const login = async (userData) => {
    const response = await axios.post(AUTH_URL+"login", userData);
    return response.data;
};

const logOut = async () => {
    const response = await axios.get(AUTH_URL+"logout");
    return response.data.message;
};

const getLogInStatus = async () => {
    const response = await axios.get(AUTH_URL+"loggedin");
    return response.data;
};

const getUserProfile = async () => {
    const response = await axios.get(AUTH_URL + "getuser");    
    return response.data;
};

const getAllUsers = async () => {
    const response = await axios.get(AUTH_URL + "users");    
    return response.data;
};

const authService = {
    register,
    login,
    logOut,
    getLogInStatus,
    getUserProfile,
    getAllUsers,
}

export default authService;