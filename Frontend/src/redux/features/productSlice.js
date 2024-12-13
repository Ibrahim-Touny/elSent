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

export const getAllProduct = createAsyncThunk("product/admin/products", async (_, thunkAPI) => {
    try {
        return await productService.getAllProduct();
    } catch (error) {
            const errorMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.tostring() || error;
            return thunkAPI.rejectWithValue(errorMessage);
    }
});

export const deleteProduct = createAsyncThunk("product/public/delete", async (id, thunkAPI) => {
    try {
        return await productService.deleteProduct(id);
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
            
        })
        .addCase(getAllProduct.pending, (state) => {
            state.isLoading = true;
        })  
        .addCase(getAllProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.products=action.payload;
        })
        .addCase(getAllProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;  
        })
        .addCase(deleteProduct.pending, (state) => {
            state.isLoading = true;
        })  
        .addCase(deleteProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            toast.success("Product deleted Successfully")
        })
        .addCase(deleteProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;  
            toast.success(action.payload);
        });
    },
});

export default productSlice.reducer;