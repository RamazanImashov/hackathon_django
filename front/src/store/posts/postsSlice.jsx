import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./postsAplication";
import { createPost } from "./postsAplication";

const postsSlice = createSlice({
    name: "products",
    initialState: {
        loading: false,
        posts: [],
        oneProduct: null,
        error: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload.data;
            })
            .addCase(getPosts.rejected, (state) => {
                state.error = "error";
            })
            .addCase(createPost.pending, (state) => {
                state.loading = true;
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.oneProduct = action.payload.data;
            });
    },
});

export default postsSlice.reducer;
