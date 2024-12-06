import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../services/authFeature"; // Ensure this path is correct
import { toast } from 'react-toastify';

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    users: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

export const register = createAsyncThunk("auth/register", async (userData, thunkAPI) => {
    try {
        const response = await authService.register(userData);
        localStorage.setItem("user", JSON.stringify(response));
    } catch (error) {
            const errorMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.tostring() || error;
            return thunkAPI.rejectWithValue(errorMessage);
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

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    try {
        await authService.logOut();
        localStorage.removeItem("user");
    } catch (error) {
        const errorMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.tostring() || error;
        return thunkAPI.rejectWithValue(errorMessage);
    }
});

export const getLogInStatus = createAsyncThunk("auth/status", async (_, thunkAPI) => {
    try {
        return await authService.getLogInStatus();
    } catch (error) {
        const errorMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.tostring() || error;
        return thunkAPI.rejectWithValue(errorMessage);
    }
});

export const getUserProfile = createAsyncThunk("auth/profile", async (_, thunkAPI) => {
    try {
        return await authService.getUserProfile();
    } catch (error) {
        const errorMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.tostring() || error;
        return thunkAPI.rejectWithValue(errorMessage);
    }
});

export const getAllUsers = createAsyncThunk("auth/getallusers", async (_, thunkAPI) => {
    try {
        await authService.getAllUsers();
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
            state.isLoggedIn = true; 
            state.user = action.payload;
        })
        .addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.payload; 
            state.user = null;
            toast.error(action.payload);
        })
        .addCase(logOut.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(logOut.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isLoggedIn = false; 
            state.user = null;
            toast.success(action.payload);
        })
        .addCase(logOut.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload; 
            toast.error(action.payload);
        })
        .addCase(getLogInStatus.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getLogInStatus.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isLoggedIn = action.payload; 
        })
        .addCase(getLogInStatus.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(getUserProfile.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getUserProfile.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isLoggedIn = true;
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload)); 
        })
        .addCase(getUserProfile.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            localStorage.removeItem("user");
            state.isLoggedIn = true;
        })
        .addCase(getAllUsers.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getAllUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isLoggedIn = true;
            state.users = action.payload;
            state.totalUsers = action.payload.length;
            })
        .addCase(getAllUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.isLoggedIn = true;
        })
    },
});

export const { RESET, logout } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;
export const selectIsSuccess = (state) => state.auth.isSuccess;

export default authSlice.reducer;
