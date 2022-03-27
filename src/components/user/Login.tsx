import React, { useState } from "react";
import { Button } from "../shared/Button";
import { useAuthContext } from "../../context/AuthContext";
import { useForm } from "../hooks/useForm";
import { useUserContext } from "../../context/UserContext";

export const Login = () => {
    const [errors, setErrors] = useState("");
    const [loading, setLoading] = useState(false);
    const { login } = useAuthContext();
    const { setUserPageView } = useUserContext();

    const {
        handleSubmit,
        handleChange,
        data,
    } = useForm({
        onSubmit: async () => {
            try {
                setErrors("")
                setLoading(true);
                await login(data.email, data.password)
                setUserPageView("user")
            } catch {
                setErrors("Failed to log in")
            }
            setLoading(false);
        },
        initialValues: {
            email: '',
            password: '',
        },
    });

    return (
        <form className="Center-Forms" onSubmit={handleSubmit}>
            <div className="Title">Sign Up</div>
            <div className="Login-Container">
                <label>Email</label>
                <input
                    className="User-Input"
                    type="text"
                    placeholder="example@newtune.com"
                    onChange={handleChange("email")}
                />

                <label>Password</label>
                <input
                    className="User-Input"
                    type="password"
                    onChange={handleChange("password")}
                />
                <a href="somelink.com">forgot password</a>
            </div>
            {errors && <p className="Error">{errors}</p>}

            <div className="Login-Buttons-Container">
                <div className="Login-Buttons">
                    <Button text="Login" color="#DFCB70" submit disabled={loading} />
                </div>
                <div className="Login-Buttons">
                    <Button text="Sign Up" color="#DFCB70" secondary handleClick={() => setUserPageView("signup")} />
                </div>
            </div>
        </form>
    )
}