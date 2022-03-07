import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faGripHorizontal } from '@fortawesome/free-solid-svg-icons'

type CatalogButtonProps = {
    arrow?: string;
}

export const CatalogButton = ({ arrow }: CatalogButtonProps) => {
    const navigate = useNavigate();
    return (
        <div className="Footer-Catalog-Button" onClick={() => navigate("../catalog")}>
            {arrow === "left" && <FontAwesomeIcon size="2x" icon={faChevronLeft} color="#8F2F50" transform="right-4 down-2" />}
            <button style={{ height: "40px", width: "40px", backgroundColor: "#8F2F50" }} onClick={() => console.log("CATALOG")}>
                <FontAwesomeIcon size="2x" icon={faGripHorizontal} color="#FFF" />
            </button>
            {arrow === "right" && <FontAwesomeIcon size="2x" icon={faChevronRight} color="#8F2F50" transform="right-4 down-2" />}
        </div>
    )
}