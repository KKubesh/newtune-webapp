import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const SearchButton = () => {
    const navigate = useNavigate();
    return (
        <button className="Search-Button" onClick={() => navigate("../filter")} >
            <FontAwesomeIcon icon={faSearch} color="#9FDCDD" size="lg" />
        </button>
    )
}