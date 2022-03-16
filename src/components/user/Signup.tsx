import React from "react";
import { Button } from "../shared/Button";

type SignupProps = {
    setView: (view: string) => void;
}

export const Signup = ({ setView }: SignupProps) => {

    return (
        <>
            <div className="Title">Sign Up</div>
            <div className="Login-Container">
                <label>Email</label>
                <input className="User-Input" type="text" placeholder="example@newtune.com" />

                <label>Password</label>
                <input className="User-Input" type="password" />
                <label>Password Confirm</label>
                <input className="User-Input" type="password" />
            </div>
            <div className="Login-Buttons-Container">
                <div className="Login-Buttons">
                    <Button text="Sign Up" color="#DFCB70" handleClick={() => setView("songs")} />
                </div>
            </div>
        </>
    )
}