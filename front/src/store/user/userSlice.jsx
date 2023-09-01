import { createSlice } from "@reduxjs/toolkit";
import { logout, register, activation, login } from "./userAplication";

const postsSlice = createSlice({
    name: "user",
    initialState: {
        oneUser: null,
        loading: false,
        activait: null,
        loginUser: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.loading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
                state.oneUser = action.payload.data;
            })
            .addCase(register.rejected, (state) => {
                state.oneUser = null;
            })
            .addCase(activation.pending, (state) => {
                state.loading = true;
            })
            .addCase(activation.fulfilled, (state, action) => {
                state.loading = false;
                state.activait = action.payload.data;
            })
            .addCase(activation.rejected, (state) => {
                state.activait = null;
            })
            .addCase(login.pending, (state) => {
                state.loading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.loginUser = action.payload.data;
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.loading = false;
                state.loginUser = null;
            });
    },
});

export default postsSlice.reducer;
