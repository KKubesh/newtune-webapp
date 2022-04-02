import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown, faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useFilterContext } from "../../context/FilterContext";
import { FilterSlider } from "./FilterSlider";

export const BPMFilterItem = () => {
    const { filterOpen, setFilterOpen } = useFilterContext();


    return (
        <div className="Filter-Container">
            <div className="Filter-Title-Container">
                <div>
                    BPM
                </div>
                {filterOpen === "bpm" ?
                    <div onClick={() => setFilterOpen("")} className="Subtitle">Collapse BPM<FontAwesomeIcon className="Padding-Left" icon={faChevronCircleUp} color="#609191" /></div>
                    : <div onClick={() => setFilterOpen("bpm")} className="Subtitle">Adjust BPM<FontAwesomeIcon className="Padding-Left" icon={faChevronCircleDown} color="#609191" /></div>}
            </div>
            {filterOpen === "bpm" &&
                <FilterSlider />
            }
        </div>
    )
}