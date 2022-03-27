import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useFilterContext } from "../../context/FilterContext";
import { FilterCategories } from "../types";

type SelectedOptionProps = {
    optionTitle: string;
    type: FilterCategories;
}

export const SelectedOption = ({ optionTitle, type }: SelectedOptionProps) => {
    const { removeFilter } = useFilterContext();
    return (
        <div className="Relative">
            <button className="Selected-Close-Button" onClick={() => removeFilter(type, optionTitle)}>
                <FontAwesomeIcon icon={faTimes} size="lg" color="#FFF" onClick={() => removeFilter(type, optionTitle)} />
            </button>
            <div className={"Selected-Option-Container"} >
                {optionTitle}
            </div >
        </div >
    )
}