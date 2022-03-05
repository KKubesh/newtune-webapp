import React from "react";
import { FooterControls } from "./shared/FooterControls";
import { HeaderMenu } from "./shared/HeaderMenu";
import { SongTile } from "./results/SongTile";
import { SavesAndUserButton } from "./shared/SavesAndUserButton";
import { SearchButton } from "./shared/SearchButton";

export default function CatalogPage() {
    const songsMock = ["song1", "song2", "song3", "song4", "song5", "song6", "song7", "song8", "song1", "song2", "song3", "song4", "song5", "song6", "song7", "song8", "song1", "song2", "song3", "song4", "song5", "song6", "song7", "song8", "song1", "song2", "song3", "song4", "song5", "song6", "song7", "song8", "song1", "song2", "song3", "song4", "song5", "song6", "song7", "song8"];
    return (
        <div className="Relative">
            <HeaderMenu rightMenuItem={<SavesAndUserButton />} />
            <SearchButton />
            <div className="Search-Container-Solid">
                <div className="Catalog-Container">
                    <div className="Results-Title">Results</div>
                    <div className="Results-Container">
                        {songsMock.map((song, index) => {
                            return <SongTile key={`${song}-${index}`} title={song} saved={index === 3 || index === 7} />
                        })}
                    </div>
                </div>
            </div>
            <FooterControls view="saves" />
        </div>
    )
}