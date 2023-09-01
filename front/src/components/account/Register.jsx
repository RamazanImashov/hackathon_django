import React, { useState } from "react";
import { register } from "../../store/user/userAplication";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [user, setUser] = useState({
        email: "",
        name: "",
        password: "",
        password_confirm: "",
    });
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
                type="text"
                placeholder="name"
                onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <input
                type="password"
                placeholder="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <input
                type="password"
                placeholder="password_confirm"
                onChange={(e) =>
                    setUser({ ...user, password_confirm: e.target.value })
                }
            />
            <button
                onClick={() => {
                    dispatch(register(user));
                    navigate("/activation");
                }}>
                reg
            </button>
        </>
    );
};

export default Register;
