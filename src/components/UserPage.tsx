import React, { useState } from "react";
import "./user/user.css";
import { CatalogButton } from "./shared/CatalogButton";
import { HeaderMenu } from "./shared/HeaderMenu";
import { SavesAndUserButton } from "./shared/SavesAndUserButton";
import { SearchButton } from "./shared/SearchButton";
import { SavedSongs } from "./user/SavedSongs";
import { Login } from "./user/Login";
import { SettingsButton } from "./user/SettingsButton";
import { Signup } from "./user/Signup";
import { Settings } from "./user/Settings";
import { useAuthContext } from "../context/AuthContext";

const loggedin = true;

export default function UserPage() {
    const [view, setView] = useState<string>("user");
    const user = loggedin;
    const { currentUser } = useAuthContext();

    return (
        <div className="Relative">
            <HeaderMenu rightMenuItem={<SavesAndUserButton />} />
            <SearchButton />
            <div className="Search-Container-Solid">
                <div className="Catalog-Container-Solid">
                    <div className="User-Container">
                        {currentUser && view === "user" && <SavedSongs />}
                        {currentUser && view === "settings" && <Settings />}
                        {!currentUser && view === "user" && <Login />}
                        {!currentUser && view === "signup" && <Signup />}
                    </div>
                </div>
            </div>
            <div style={{ position: "absolute", bottom: 0, right: 0, margin: ".5rem" }}>
                <CatalogButton />
            </div>
            {user &&
                <div style={{ position: "absolute", bottom: 0, left: 0, marginLeft: "2.5rem", marginBottom: "1.5rem" }}>
                    <SettingsButton setView={setView} view={view} />
                </div>
            }
        </div>
    )
}