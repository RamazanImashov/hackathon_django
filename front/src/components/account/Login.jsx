import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/user/userAplication";

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    localStorage.setItem("user", "[]");
    const { loginUser } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    let navigate = useNavigate();

    return (
        <>
            <input
                type="text"
                placeholder="email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
            />

            <input
                type="password"
                placeholder="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <button
                onClick={() => {
                    dispatch(login(user));
                    setTimeout(
                        localStorage.setItem(
                            "token",
                            JSON.stringify(loginUser)
                        ),
                        2000
                    );
                    navigate("/");
                }}>
                reg
            </button>
        </>
    );
};

export default Login;
