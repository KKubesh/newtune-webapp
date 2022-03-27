import React, { useEffect, useState } from "react";
import { FooterControls } from "./shared/FooterControls";
import { HeaderMenu } from "./shared/HeaderMenu";
import { SavesAndUserButton } from "./shared/SavesAndUserButton";
import { SearchButton } from "./shared/SearchButton";
import { CatalogResults } from "./results/CatalogResults";
import { SongOverview } from "./results/SongOverview";
import { useFirestoreService } from "../services/firestore";
import { useUserContext } from "../context/UserContext";
import { useFilterContext } from "../context/FilterContext";

const songsMock = ["song1", "song2", "song3", "song4", "song5", "song6", "song7", "song8", "song1", "song2", "song3", "song4", "song5", "song6", "song7", "song8", "song1", "song2", "song3", "song4", "song5", "song6", "song7", "song8", "song1", "song2", "song3", "song4", "song5", "song6", "song7", "song8", "song1", "song2", "song3", "song4", "song5", "song6", "song7", "song8"];

export default function CatalogPage() {
    const { getSongs } = useFirestoreService();
    const { currentSong, catalogPageView } = useUserContext();
    const { songs, setSongs } = useFilterContext();

    useEffect(() => {
        if (!songs.length) {
            getSongs(setSongs);
        }
    }, [])

    return (
        <div className="Relative">
            <HeaderMenu rightMenuItem={<SavesAndUserButton />} />
            <SearchButton />
            <div className="Search-Container-Solid">
                {catalogPageView === "catalog" && <CatalogResults songs={songs || songsMock} />}
                {catalogPageView === "song" &&
                    currentSong &&
                    <SongOverview song={currentSong} />}
            </div>
            {catalogPageView === "catalog" && <FooterControls view="saves" />}
            {catalogPageView === "song" && <FooterControls view="overview" />}
        </div>
    )
}