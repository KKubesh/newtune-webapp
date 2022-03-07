import React, { useState } from "react";
import { FooterControls } from "./shared/FooterControls";
import { HeaderMenu } from "./shared/HeaderMenu";
import { SavesAndUserButton } from "./shared/SavesAndUserButton";
import { SearchButton } from "./shared/SearchButton";
import { CatalogResults } from "./results/CatalogResults";
import { SongOverview } from "./results/SongOverview";

export default function CatalogPage() {
    const songsMock = ["song1", "song2", "song3", "song4", "song5", "song6", "song7", "song8", "song1", "song2", "song3", "song4", "song5", "song6", "song7", "song8", "song1", "song2", "song3", "song4", "song5", "song6", "song7", "song8", "song1", "song2", "song3", "song4", "song5", "song6", "song7", "song8", "song1", "song2", "song3", "song4", "song5", "song6", "song7", "song8"];
    const [view, setView] = useState<string>("catalog");
    const [selectedSong, setSelectedSong] = useState<string>("");

    const songTileClick = (view: string, song?: string) => {
        setView(view);
        song && setSelectedSong(song);
    }

    return (
        <div className="Relative">
            <HeaderMenu rightMenuItem={<SavesAndUserButton />} />
            <SearchButton />
            <div className="Search-Container-Solid">
                {view === "catalog" && <CatalogResults songs={songsMock} handleClick={songTileClick} />}
                {view === "song" && <SongOverview song={selectedSong} />}
            </div>
            <FooterControls view="saves" />
        </div>
    )
}