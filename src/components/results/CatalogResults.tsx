import React from "react";
import { SongTile } from "./SongTile";

type CatalogResultsProps = {
    songs: string[];
    handleClick: (view: string) => void;
}

export const CatalogResults = ({ songs, handleClick }: CatalogResultsProps) => {
    return (
        <div className="Catalog-Container">
            <div className="Title">Results</div>
            <div className="Songs-Container">
                {songs.map((song, index) => {
                    return <SongTile key={`${song}-${index}`} title={song} saved={index === 3 || index === 7} handleClick={handleClick} />
                })}
            </div>
        </div>
    )
}