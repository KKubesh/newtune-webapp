import React from "react";
import { Song } from "../types";
import { SongTile } from "./SongTile";

type CatalogResultsProps = {
    songs: Song[];
}

export const CatalogResults = ({ songs }: CatalogResultsProps) => {
    return (
        <div className="Catalog-Container">
            <div className="Title">Results</div>
            <div className="Songs-Container">
                {songs.map((song, index) => {
                    return <SongTile key={`${song}-${index}`} song={song} saved={index === 3 || index === 7} />
                })}
            </div>
        </div>
    )
}