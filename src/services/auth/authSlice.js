import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const userDefaultState = {
    _id: null,
    firstName: null,
    lastName: null,
    email: null,
    mobile: null,
    token: null
};

const initialState = {
    user: userDefaultState,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ""
};

export const login = createAsyncThunk("auth/login", async (user, thunkApi) => {
    try {
        const response = await authService.login(user.data, user.rememberMe);
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.response ? error.response.data : error.message);
    }
});

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload;
            });
    }
});

export default authSlice.reducer;
