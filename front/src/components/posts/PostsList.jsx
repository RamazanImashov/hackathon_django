import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/posts/postsAplication";

const PostsList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    const { posts } = useSelector((state) => state.posts);

    console.log(posts);

    return <div>PostsList</div>;
};

export default PostsList;
