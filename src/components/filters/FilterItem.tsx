import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown, faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Filter } from "../types";
import { SelectedFilters } from "./SelectedFilters";
import { OptionsFilters } from "./OptionsFilters";

type FilterItemProps = {
    filter: Filter;
}

export const FilterItem = ({ filter }: FilterItemProps) => {
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
    const [isOptionsSelectOpen, setIsOptionsSelectOpen] = useState<boolean>(false);

    return (
        <div className="Filter-Container">
            <div className="Filter-Title-Container">
                <div>
                    {filter.type}
                </div>
                {isFilterOpen ?
                    <div onClick={() => setIsFilterOpen(false)} className="Subtitle">{filter.selected.length > 0 ? `${filter.selected.length} Selected` : "Collapse Filter"}<FontAwesomeIcon className="Padding-Left" icon={faChevronCircleUp} color="#609191" /></div>
                    : <div onClick={() => setIsFilterOpen(true)} className="Subtitle">{filter.selected.length > 0 ? `${filter.selected.length} Selected` : "Add Filter"} <FontAwesomeIcon className="Padding-Left" icon={faChevronCircleDown} color="#609191" /></div>}
            </div>
            {isFilterOpen &&
                <div className="Filter-Options-Container">
                    <div className="Filter-Options">
                        {filter.selected.length > 0 && !isOptionsSelectOpen ?
                            <SelectedFilters selected={filter.selected} setIsOptionsSelectOpen={setIsOptionsSelectOpen} /> :
                            <OptionsFilters selected={filter.selected} options={filter.options} />
                        }
                    </div>
                    {filter.selected.length > 2 && !isOptionsSelectOpen && <div className="Option-Shadow" />}
                </div>
            }
        </div>
    )
}