import React, { useState } from "react";
import { Button } from "../shared/Button";
import { useAuth } from "../../context/AuthContext";
import { useForm } from "../hooks/useForm";

type SignupProps = {
    setView: (view: string) => void;
}

export const Signup = ({ setView }: SignupProps) => {
    const [errors, setErrors] = useState("");
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth();

    const {
        handleSubmit,
        handleChange,
        data,
    } = useForm({
        onSubmit: async () => {
            if (data.password !== data.passwordConfirm) {
                return setErrors("Passwords do not match");
            }
            try {
                setErrors("")
                setLoading(true);
                await signup(data.email, data.password)
                setView("user")
            } catch {
                setErrors("Failed to create an account")
            }
            setLoading(false);
        },
        initialValues: {
            email: '',
            password: '',
            passwordConfirm: '',
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
                <label>Password Confirm</label>
                <input
                    className="User-Input"
                    type="password"
                    onChange={handleChange("passwordConfirm")}
                />
            </div>
            {errors && <p className="Error">{errors}</p>}
            <div className="Login-Buttons-Container">
                <div className="Login-Buttons">
                    <Button text="Sign Up" color="#DFCB70" submit disabled={loading} />
                </div>
            </div>
        </form>
    )
}