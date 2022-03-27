import React, { useState } from "react";
import { Button } from "../shared/Button";
import { useAuthContext } from "../../context/AuthContext";
import { useForm } from "../hooks/useForm";
import { useUserContext } from "../../context/UserContext";

export const Settings = () => {
    const [errors, setErrors] = useState("");
    const [loading, setLoading] = useState(false);
    const { logout, currentUser } = useAuthContext();
    const { setUserPageView } = useUserContext();

    const {
        handleSubmit,
        handleChange,
        data,
    } = useForm({
        onSubmit: async () => {
            if (data.newPassword !== data.newPasswordConfirm) {
                return setErrors("Passwords do not match");
            }
            try {
                setErrors("")
                setLoading(true);
                // await signup(data.email, data.password)
                setUserPageView("user")
            } catch {
                setErrors("Failed to create an account")
            }
            setLoading(false);
        },
        initialValues: {
            email: '',
            existingPassword: '',
            newPassword: '',
            newPasswordConfirm: '',
        },
    });

    return (
        <form className="Center-Forms" onSubmit={handleSubmit}>
            <div className="Title">Settings</div>
            <div className="Login-Container">
                <label>Update Email</label>
                <input
                    className="User-Input"
                    type="text"
                    placeholder={currentUser.email}
                    onChange={handleChange("email")}
                />
                <label>Password</label>
                <input
                    className="User-Input"
                    type="password"
                    onChange={handleChange("existingPassword")}
                />
                <div className="Or-Split">OR</div>
                <label>Update Password</label>
                <input
                    className="User-Input"
                    type="password"
                    onChange={handleChange("newPassword")}
                />
                <label>Password Confirm</label>
                <input
                    className="User-Input"
                    type="password"
                    onChange={handleChange("newPasswordConfirm")}
                />
            </div>
            {errors && <p className="Error">{errors}</p>}
            <div className="Login-Buttons-Container">
                <div className="Login-Buttons">
                    <Button text="Sign Up" color="#DFCB70" submit disabled={loading} />
                </div>

                <div className="Login-Buttons">
                    <Button text="Log Out" color="#DFCB70" secondary handleClick={logout} />
                </div>
            </div>
        </form>
    )
}