import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../../store/posts/postsAplication";

const PostCreate = () => {
    let dispatch = useDispatch();
    const [post, setPost] = useState({
        title: "",
        body: "",
        category: "",
    });
    return (
        <div>
            <input
                type="text"
                placeholder="title"
                onChange={(e) => setPost({ ...post, title: e.target.value })}
            />
            <input
                type="text"
                placeholder="body"
                onChange={(e) => setPost({ ...post, body: e.target.value })}
            />
            <input
                type="text"
                placeholder="category"
                onChange={(e) => setPost({ ...post, category: e.target.value })}
            />
            <button onClick={() => dispatch(createPost(post))}>add</button>
        </div>
    );
};

export default PostCreate;
