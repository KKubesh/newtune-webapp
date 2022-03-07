import React from "react";
import { Button } from "../shared/Button";

type LoginProps = {
    loggedIn?: boolean;
    setView: (view: string) => void;
}

export const Login = ({ loggedIn = false, setView }: LoginProps) => {
    const user = loggedIn;

    return (
        <>
            <div className="Title">{user ? "Settings" : "Login"}</div>
            <div className="Login-Container">
                <label>Email</label>
                <input className="User-Input" type="text" placeholder="example@newtune.com" />

                <label>Password</label>
                <input className="User-Input" type="password" />
                {!user && <a href="somelink.com">forgot password</a>}
            </div>
            <div className="Login-Buttons-Container">
                {user ?
                    <div className="Login-Buttons">
                        <Button text="Update" color="#DFCB70" handleClick={() => setView("songs")} />
                    </div>
                    :
                    <>
                        <div className="Login-Buttons">
                            <Button text="Login" color="#DFCB70" handleClick={() => setView("songs")} />
                        </div>
                        <div className="Login-Buttons">
                            <Button text="Sign Up" color="#DFCB70" secondary handleClick={() => setView("songs")} />
                        </div>
                    </>
                }
            </div>
        </>
    )
}