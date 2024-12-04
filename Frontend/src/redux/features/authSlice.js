import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../services/authFeature"; // Ensure this path is correct
import { toast } from 'react-toastify';

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    isLoggedIn: JSON.parse(localStorage.getItem("user")) ? true : false, // Track login status
};

export const register = createAsyncThunk("auth/register", async (userData, thunkAPI) => {
    try {
        const response = await authService.register(userData);
        localStorage.setItem("user", JSON.stringify(response));
    } catch (error) {
            const errorMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.tostring() || error;
            return thunkAPI.rejectWithValue(errorMessage);
       /*enty katabty elhetta deh w howa aslan maamalhash w beyghayarha delw2ty
        // Check if error.response exists and handle it
        if (error.response) {
            return thunkAPI.rejectWithValue(error.response.data);
        } else if (error.request) {
            // Handle request issues (e.g., no response from the server)
            return thunkAPI.rejectWithValue("No response from server. Please check your network connection.");
        } else {
            // Handle other types of errors
            return thunkAPI.rejectWithValue(error.message || "An unexpected error occurred");
        }*/
    }
});


export const login = createAsyncThunk("auth/login", async (userData, thunkAPI) => {
    try {
        const response = await authService.login(userData);
        localStorage.setItem("user", JSON.stringify(response));
    } catch (error) {
        const errorMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.tostring() || error;
        return thunkAPI.rejectWithValue(errorMessage);
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        RESET(state) {
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.message = "";
        },
        logout(state) {
            state.user = null;
            state.isLoggedIn = false;
            localStorage.removeItem("user");
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(register.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isLoggedIn = true; // Set logged in to true
            state.user = action.payload;
        })
        .addCase(register.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload; // Display the error message
            state.user = null;
            toast.error(action.payload);
        })
        .addCase(login.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isLoggedIn = true; // Set logged in to true
            state.user = action.payload;
        })
        .addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload; // Display the error message
            state.user = null;
            toast.error(action.payload);
        });
    },
});

export const { RESET, logout } = authSlice.actions;

export default authSlice.reducer;
