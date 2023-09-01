import React, { useState } from "react";
import { activation } from "../../store/user/userAplication";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Activation = () => {
    const [act, setAct] = useState({
        email: "",
        code: "",
    });
    let navigate = useNavigate();
    let dispatch = useDispatch();
    return (
        <div>
            <h1>Activation</h1>
            <input
                type="text"
                placeholder="email"
                onChange={(e) => setAct({ ...act, email: e.target.value })}
            />
            <input
                type="text"
                placeholder="code"
                onChange={(e) => setAct({ ...act, code: e.target.value })}
            />

            <button
                onClick={() => {
                    dispatch(activation(act));
                    navigate("/");
                }}>
                Activation
            </button>
        </div>
    );
};

export default Activation;
