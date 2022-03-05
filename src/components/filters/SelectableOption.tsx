import React from "react";

type OptionProps = {
    optionTitle: string;
    selected?: boolean;
}

export const SelectableOption = ({ optionTitle, selected = false }: OptionProps) => {
    return (
        <div onClick={() => console.log("OPTION CLICKED", optionTitle)} className={selected ? "Selectable-Button-Selected" : "Selectable-Button"} >
            {optionTitle}
        </div >
    )
}