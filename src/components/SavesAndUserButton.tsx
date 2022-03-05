import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

export const SavesAndUserButton = () => {
    const navigate = useNavigate();
    return (
        <button style={{ height: "40px", width: "40px" }} onClick={() => navigate("../user")}>
            <FontAwesomeIcon size="3x" icon={faUserCircle} color="#DFCB70" />
        </button>
    )
}