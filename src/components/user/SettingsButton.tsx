import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faChevronRight, faCog } from '@fortawesome/free-solid-svg-icons'
import { useAuthContext } from "../../context/AuthContext";

type SettingsButtonProps = {
    view: string;
    setView: (view: string) => void;
}

export const SettingsButton = ({ view, setView }: SettingsButtonProps) => {
    const { currentUser } = useAuthContext();
    const isSettingsView = view === "settings";

    if (!currentUser) {
        return null;
    }

    return (
        <>
            <div onClick={!isSettingsView ? () => setView("settings") : () => setView("user")}>
                <button style={{ height: "40px", width: "40px", backgroundColor: "#DFCB70" }}>
                    <FontAwesomeIcon size={!isSettingsView ? "2x" : "lg"} icon={!isSettingsView ? faCog : faBookmark} color="#FFF" />
                </button>
                {isSettingsView && <FontAwesomeIcon size="2x" icon={faChevronRight} color="#DFCB70" transform="right-4 down-4" />}
            </div>
        </>
    )
}