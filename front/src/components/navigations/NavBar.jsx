import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../../store/user/userAplication";
import { useDispatch } from "react-redux";
const NavBar = () => {
    const { loginUser } = useSelector((state) => state.user);
    console.log(loginUser);

    let dispatch = useDispatch();

    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/posts">posts</Link>
            {loginUser ? (
                <>
                    <Link to="/createPost">createPost</Link>
                    <Link
                        to="/"
                        onClick={() => {
                            dispatch(logout(loginUser));
                        }}>
                        Logout
                    </Link>
                </>
            ) : (
                <>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </>
            )}
        </div>
    );
};

export default NavBar;
