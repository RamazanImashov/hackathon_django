import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./posts/postsSlice";
import userReducer from "./user/userSlice";

export default configureStore({
    reducer: {
        posts: PostReducer,
        user: userReducer,
    },
});
