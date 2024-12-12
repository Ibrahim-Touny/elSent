import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "../services/productService";
import { toast } from "react-toastify";

const initialState ={
    products:[],
    userProducts:[],
    ownedProducts:[],
    product:null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:"",
};

export const createProduct = createAsyncThunk("product/create", async (formData, thunkAPI) => {
    try {
        return await productService.createProduct(formData);
    } catch (error) {
            const errorMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.tostring() || error;
            return thunkAPI.rejectWithValue(errorMessage);
    }
});

const productSlice=createSlice({
    name:"product",
    initialState,
    reducers :{},
    extraReducers: (builder) => {
        builder
        .addCase(createProduct.pending, (state) => {
            state.isLoading = true;
        })  
        .addCase(createProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
             // Check if action.payload has success property
             if (action.payload.success) {
                state.products.push(action.payload.data); // Assuming payload contains a `data` object
            }
            
            toast.success("Product has been Created");
        })
        .addCase(createProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload);
        });
    },
});

export default productSlice.reducer;