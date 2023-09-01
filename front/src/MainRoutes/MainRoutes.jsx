import React from "react";
import Register from "../components/account/Register";
import Login from "../components/account/Login";
import HomePage from "../components/HomePage/HomePage";
import PostsList from "../components/posts/PostsList";
import PostCreate from "../components/posts/postCreate/PostCreate";
import Activation from "../components/account/Activation";
import { Route, Routes } from "react-router-dom";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/posts" element={<PostsList />} />
            <Route path="/createPost" element={<PostCreate />} />
            <Route path="/activation" element={<Activation />} />
        </Routes>
    );
};

export default MainRoutes;
