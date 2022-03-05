import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { SelectedOption } from "./SelectedOption";

type SelectedFiltersProps = {
    selected: string[];
    setIsOptionsSelectOpen: (isOpen: boolean) => void;
}

export const SelectedFilters = ({ selected, setIsOptionsSelectOpen }: SelectedFiltersProps) => {
    return (
        <div className="Relative">
            {
                <div className="Selected-Filters">
                    {selected.map((option) => {
                        return <SelectedOption key={option} optionTitle={option} />
                    })}
                    <button onClick={() => setIsOptionsSelectOpen(true)}>
                        <FontAwesomeIcon className="Add-Filter-Button" icon={faPlusCircle} size="2x" color="#609191" />
                    </button>
                </div>
            }
        </div>
    )
}