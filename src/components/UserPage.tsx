import React from "react";
import { CatalogButton } from "./CatalogButton";
import { HeaderMenu } from "./HeaderMenu";
import { SongTile } from "./results/SongTile";
import { SavesAndUserButton } from "./SavesAndUserButton";
import { SearchButton } from "./SearchButton";

export default function UserPage() {
    const savedSongsMock = ["song1", "song2", "song3", "song4", "song5"];
    return (
        <div className="Relative">
            <HeaderMenu rightMenuItem={<SavesAndUserButton />} />
            <SearchButton />
            <div className="Search-Container-Solid">
                <div className="Catalog-Container-Solid">
                    <div className="User-Container">
                        <div className="Results-Title">Saved Songs</div>
                        <div className="Results-Container">
                            {savedSongsMock.map((song, index) => {
                                return <SongTile key={`${song}-${index}`} title={song} saved={true} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ position: "absolute", bottom: 0, right: 0, margin: ".5rem" }}>
                <CatalogButton />
            </div>
        </div>
    )
}