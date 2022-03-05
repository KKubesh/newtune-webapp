import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type SelectedOptionProps = {
    optionTitle: string;
}

export const SelectedOption = ({ optionTitle }: SelectedOptionProps) => {
    return (
        <div className="Relative">
            <button className="Selected-Close-Button" onClick={() => console.log("Remove", optionTitle)}>
                <FontAwesomeIcon icon={faTimes} size="lg" color="#FFF" />
            </button>
            <div className={"Selected-Option-Container"} >
                <div>
                    {optionTitle}
                </div>
            </div >
        </div >
    )
}