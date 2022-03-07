import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faChevronRight, faCog } from '@fortawesome/free-solid-svg-icons'

type SettingsButtonProps = {
    view: string;
    setView: (view: string) => void;
}

export const SettingsButton = ({ view, setView }: SettingsButtonProps) => {
    return (
        <>
            <button onClick={() => setView("login")}>temp login view</button>
            <div onClick={view !== "songs" ? () => setView("songs") : () => setView("settings")}>
                <button style={{ height: "40px", width: "40px", backgroundColor: "#DFCB70" }}>
                    <FontAwesomeIcon size="2x" icon={view === "songs" ? faCog : faBookmark} color="#FFF" />
                </button>
                {view !== "songs" && <FontAwesomeIcon size="2x" icon={faChevronRight} color="#DFCB70" transform="right-4 down-2" />}

            </div>
        </>
    )
}