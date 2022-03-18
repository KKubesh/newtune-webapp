import React, { useState } from "react";
import { Button } from "../shared/Button";
import { useAuth } from "../../context/AuthContext";
import { useForm } from "../hooks/useForm";

type LoginProps = {
    setView: (view: string) => void;
}

export const Login = ({ setView }: LoginProps) => {
    const [errors, setErrors] = useState("");
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();

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
                setView("user")
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
                    <Button text="Sign Up" color="#DFCB70" secondary handleClick={() => setView("signup")} />
                </div>
            </div>
        </form>
    )
}