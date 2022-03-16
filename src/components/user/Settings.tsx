import React from "react";
import { Button } from "../shared/Button";

type SettingsProps = {
    setView: (view: string) => void;
}

export const Settings = ({ setView }: SettingsProps) => {

    return (
        <>
            <div className="Title">Settings</div>
            <div className="Login-Container">
                <label>Email</label>
                <input className="User-Input" type="text" placeholder="tempuser.email" />

                <label>Change Password</label>
                <input className="User-Input" type="password" />
                <label>Confirm Password</label>
                <input className="User-Input" type="password" />
            </div>
            <div className="Login-Buttons-Container">
                <div className="Login-Buttons">
                    <Button text="Update" color="#DFCB70" handleClick={() => setView("songs")} />
                </div>
                <div className="Login-Buttons">
                    <Button text="Log Out" color="#DFCB70" secondary handleClick={() => setView("login")} />
                </div>
            </div>
        </>
    )
}