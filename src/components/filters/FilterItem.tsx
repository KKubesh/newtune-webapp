import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown, faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { FilterProperties } from "../types";
import { SelectedFilters } from "./SelectedFilters";
import { OptionsFilters } from "./OptionsFilters";
import { useFilterContext } from "../../context/FilterContext";

type FilterItemProps = {
    filter: FilterProperties;
}

export const FilterItem = ({ filter }: FilterItemProps) => {
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
    const [isOptionsSelectOpen, setIsOptionsSelectOpen] = useState<boolean>(false);
    const { filterOptions } = useFilterContext();

    return (
        <div className="Filter-Container">
            <div className="Filter-Title-Container">
                <div>
                    {/* title letter uppercase */}
                    {filter.type.charAt(0).toUpperCase() + filter.type.slice(1)}
                </div>
                {isFilterOpen ?
                    <div onClick={() => setIsFilterOpen(false)} className="Subtitle">{filter.selected.length > 0 ? `${filter.selected.length} Selected` : "Collapse Filter"}<FontAwesomeIcon className="Padding-Left" icon={faChevronCircleUp} color="#609191" /></div>
                    : <div onClick={() => setIsFilterOpen(true)} className="Subtitle">{filter.selected.length > 0 ? `${filter.selected.length} Selected` : "Add Filter"} <FontAwesomeIcon className="Padding-Left" icon={faChevronCircleDown} color="#609191" /></div>}
            </div>
            {isFilterOpen &&
                <div className="Filter-Options-Container">
                    <div className="Filter-Options">
                        {filter.selected.length > 0 && !isOptionsSelectOpen ?
                            <SelectedFilters selected={filter.selected} setIsOptionsSelectOpen={setIsOptionsSelectOpen} type={filter.type} /> :
                            <OptionsFilters selected={filter.selected} options={filterOptions[filter.type] || []} type={filter.type} />
                        }
                    </div>
                    {filter.selected.length > 2 && !isOptionsSelectOpen && <div className="Option-Shadow" />}
                </div>
            }
        </div>
    )
}