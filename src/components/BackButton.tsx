import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'

export const BackButton = () => {
    const navigate = useNavigate();
    return (
        <button style={{ height: "50px", width: "50px" }} onClick={() => navigate(-1)}>
            <FontAwesomeIcon size="3x" icon={faChevronCircleLeft} color="white" />
        </button>
    )
}