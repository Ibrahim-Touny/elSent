import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryService from "../services/categoryService";
import { toast } from "react-toastify";

const initialState = {
    categorys: [],
    category: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

export const createCategory = createAsyncThunk("category/create", async (formData, thunkAPI) => {
    try {
        return await categoryService.createCategory(formData);
    } catch (error) {
            const errorMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.tostring() || error;
            return thunkAPI.rejectWithValue(errorMessage);
    }
});

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(createCategory.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(createCategory.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            toast.success("Category has been Created");
        })
        .addCase(createCategory.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload);
        });
    },
});

export default categorySlice.reducer;

