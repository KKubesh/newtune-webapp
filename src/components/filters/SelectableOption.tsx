import React from "react";
import { useFilterContext } from "../../context/FilterContext";
import { FilterCategories } from "../types";

type OptionProps = {
    optionTitle: string;
    type: FilterCategories;
    selected?: boolean;
}

export const SelectableOption = ({ optionTitle, type, selected = false }: OptionProps) => {
    const { addFilter, removeFilter } = useFilterContext();

    return (
        <div onClick={selected ? () => removeFilter(type, optionTitle) : () => addFilter(type, optionTitle)} className={selected ? "Selectable-Button-Selected" : "Selectable-Button"} >
            {optionTitle}
        </div >
    )
}