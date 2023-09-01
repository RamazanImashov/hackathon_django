import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let REDISTER_API = "http://127.0.0.1:8000/api/v1/register/";
let activate_API = "http://127.0.0.1:8000/api/v1/activate/";
let LOGIN_API = "http://127.0.0.1:8000/api/v1/login/";
let LOGOUT_API = "http://127.0.0.1:8000/api/v1/logout/";
let POST_API = "http://127.0.0.1:8000/api/v1/posts/";

export const register = createAsyncThunk(
    "user/register",
    async (userRegisterObj) => {
        let res = await axios.post(`${REDISTER_API}`, userRegisterObj);
        return res;
    }
);

export const activation = createAsyncThunk(
    "user/activation",
    async (codeObj) => {
        let res = await axios.post(`${activate_API}`, codeObj);
        return res;
    }
);

export const login = createAsyncThunk("user/login", async (newUserObj) => {
    const res = await axios.post(LOGIN_API, newUserObj);
    return res;
});

export const logout = createAsyncThunk("user/logout", async (tokenObj) => {
    const res = await axios.post(LOGOUT_API, tokenObj);
    return res;
});
