import React from "react";
import { SelectableOption } from "./SelectableOption";

type OptionsFiltersProps = {
    options: string[];
    selected?: string[];
}

export const OptionsFilters = ({ options, selected }: OptionsFiltersProps) => {
    return (
        <div className="Filter-Options">
            {
                options.map((option) => {
                    return <SelectableOption key={option} optionTitle={option} selected={selected?.includes(option)} />
                })
            }
        </div>
    )
}