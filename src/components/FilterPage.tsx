import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import React, { ChangeEvent, useEffect, useState } from "react";
import { FilterItem } from "./filters/FilterItem";
import { FooterControls } from "./shared/FooterControls";
import { HeaderMenu } from "./shared/HeaderMenu";
import { SavesAndUserButton } from "./shared/SavesAndUserButton";
import "./filters/filters.css";
import { useFilterContext } from "../context/FilterContext";
import { useFirestoreService } from "../services/firestore";
import { FilterCategories } from "./types";

export default function FilterPage() {
    const navigate = useNavigate();
    const { currentFilters, setFilterOptions, setSongs } = useFilterContext();
    const { getArtistsOption, getAllFieldOptions, getSongsWhere } = useFirestoreService();
    const [artists, setArtists] = useState([]);
    const [filterArtist, setFilterArtist] = useState("");


    useEffect(() => {
        getArtistsOption(setArtists);
        getAllFieldOptions(currentFilters, setFilterOptions)
        // getSongsWhere("Foo Fighters");
        // getSongsWhereGenre();
    }, []);

    const handleArtistSearch = async (artist: string) => {
        await getSongsWhere("artists", [artist], setSongs);
        navigate("../catalog");
    }

    return (
        <div className="Relative">
            <HeaderMenu rightMenuItem={<SavesAndUserButton />} />
            <div className="Search-Container">
                <div className="Title">Filters</div>
                <div className="Search-Artist-Container">
                    <input list="artists" name="artist" id="artist" onChange={(e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => setFilterArtist(e.target.value)} />
                    <datalist id="artists">
                        {artists.map(artist => <option key={artist} value={artist} id={artist} />)}
                    </datalist>
                    <button className="Input-Button" onClick={() => handleArtistSearch(filterArtist)}>
                        <FontAwesomeIcon size="lg" icon={faSearch} color="#609191" />
                    </button>
                </div>
                <hr />
                <div className="Filters-Container" >
                    <FilterItem filter={currentFilters[FilterCategories.DECADES]} />
                    <FilterItem filter={currentFilters[FilterCategories.GENRES]} />
                    <FilterItem filter={currentFilters[FilterCategories.GROOVES]} />
                    <FilterItem filter={currentFilters[FilterCategories.FEATURES]} />
                    <FilterItem filter={currentFilters[FilterCategories.SPEEDS]} />
                    <FilterItem filter={currentFilters[FilterCategories.DIFFICULTIES]} />
                </div>
            </div>
            <FooterControls view="catalog" />
        </div>
    )
}