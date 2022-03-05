import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FilterItem } from "./filters/FilterItem";
import { FooterControls } from "./FooterControls";
import { HeaderMenu } from "./HeaderMenu";
import { Filter } from "./types";
import { SavesAndUserButton } from "./SavesAndUserButton";

export default function FilterPage() {
    const hardCodedFilters: Filter[] = [
        {
            type: "Decade",
            selected: ["thing1", "thing2"],
            options: ["thing1", "thing2", "thing3", "thing4"]
        },
        {
            type: "Grene",
            selected: ["thing1", "thing2", "thing3", "thing4"],
            options: ["thing1", "thing2", "thing3", "thing4"]
        },
        {
            type: "Features",
            selected: ["thing3"],
            options: ["thing1", "thing2", "thing3", "thing4"]
        },
        {
            type: "Speed",
            selected: ["thing1", "thing2", "thing3"],
            options: ["thing1", "thing2", "thing3", "thing4"]
        },
        {
            type: "Tempo",
            selected: [],
            options: ["thing1", "thing2", "thing3", "thing4"]
        },
        {
            type: "Groove",
            selected: [],
            options: ["thing1", "thing2", "thing3", "thing4"]
        }
    ]

    return (
        <div className="Relative">
            <HeaderMenu rightMenuItem={<SavesAndUserButton />} />
            <div className="Search-Container">
                <div className="Title">Filters</div>
                <div className="Search-Artist-Container">
                    <input type="text" />
                    <button className="Input-Button" onClick={() => console.log("SEARCH ARTIST BUTTON")}>
                        <FontAwesomeIcon size="lg" icon={faSearch} color="#609191" />
                    </button>
                </div>
                <hr />
                <div className="Filters-Container" >
                    {
                        hardCodedFilters.map(filter => {
                            return < FilterItem key={filter.type} filter={filter} />
                        })
                    }
                </div>
            </div>
            <FooterControls view="catalog" />
        </div>
    )
}