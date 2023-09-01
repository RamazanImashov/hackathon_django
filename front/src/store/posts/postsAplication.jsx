import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POSTS_API = "http://127.0.0.1:8000/api/v1/posts/";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
    let res = await axios.get(POSTS_API);
    return res.data;
});

// post add

export const createPost = createAsyncThunk(
    "post/ceratePost",
    async (newPostObj) => {
        let res = await axios.post(`${POSTS_API}`, newPostObj);
        return res;
    }
);
