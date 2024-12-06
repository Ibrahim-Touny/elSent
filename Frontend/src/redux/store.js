import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import categoryReducer from "./features/categorySlice";

export const store = configureStore({
    reducer : {
        auth : authReducer,
        category : categoryReducer,
    },
});
