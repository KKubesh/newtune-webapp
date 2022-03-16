import React from "react";
import { Button } from "../shared/Button";

type LoginProps = {
    setView: (view: string) => void;
}

export const Login = ({ setView }: LoginProps) => {

    return (
        <>
            <div className="Title">Login</div>
            <div className="Login-Container">
                <label>Email</label>
                <input className="User-Input" type="text" placeholder="example@newtune.com" />

                <label>Password</label>
                <input className="User-Input" type="password" />
                <a href="somelink.com">forgot password</a>
            </div>
            <div className="Login-Buttons-Container">
                <div className="Login-Buttons">
                    <Button text="Login" color="#DFCB70" handleClick={() => setView("songs")} />
                </div>
                <div className="Login-Buttons">
                    <Button text="Sign Up" color="#DFCB70" secondary handleClick={() => setView("signup")} />
                </div>
            </div>
        </>
    )
}