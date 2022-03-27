import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faGripHorizontal } from '@fortawesome/free-solid-svg-icons'
import { useFilterContext } from "../../context/FilterContext";

type CatalogButtonProps = {
    arrow?: string;
    setView?: () => void;
}

export const CatalogButton = ({ arrow, setView }: CatalogButtonProps) => {
    const navigate = useNavigate();
    const { clearFilters, currentFilters } = useFilterContext();

    const isRight = arrow === "right"
    const isLeft = arrow === "left"

    const handleClick = () => {
        if (arrow === "right") {
            clearFilters()
        }
        navigate("../catalog")
        if (setView) {
            setView()
        }
    }

    return (
        <div className={arrow ? "Footer-Catalog-Button-Container-Arrow" : "Footer-Catalog-Button-Container"} onClick={handleClick}>
            {isRight && <div className="Skip-Text">Skip</div>}
            <div className="Footer-Catalog-Button">
                {isLeft && <FontAwesomeIcon size="2x" icon={faChevronLeft} color="#8F2F50" transform="left-4 down-2" />}
                <button style={{ height: "40px", width: "40px", backgroundColor: "#8F2F50" }}>
                    <FontAwesomeIcon size="2x" icon={faGripHorizontal} color="#FFF" />
                </button>
                {isRight && <FontAwesomeIcon size="2x" icon={faChevronRight} color="#8F2F50" transform="right-4 down-2" />}
            </div>
        </div>
    )
}