import React from "react";
import { FilterCategories } from "../types";
import { SelectableOption } from "./SelectableOption";

type OptionsFiltersProps = {
    options: string[];
    type: FilterCategories;
    selected?: string[];
}

export const OptionsFilters = ({ options, type, selected }: OptionsFiltersProps) => {
    return (
        <>
            {
                options.map((option) => {
                    return <SelectableOption key={option} optionTitle={option} selected={selected?.includes(option)} type={type} />
                })
            }
        </>
    )
}