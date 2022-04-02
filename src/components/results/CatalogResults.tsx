import React from "react";
import { useFilterContext } from "../../context/FilterContext";
import { Song } from "../types";
import { SongTile } from "./SongTile";

type CatalogResultsProps = {
    songs: Song[];
}

export const CatalogResults = ({ songs }: CatalogResultsProps) => {
    const { noFilters } = useFilterContext();

    return (
        <div className="Catalog-Container">
            <div className="Title">{noFilters ? "Catalog" : "Results"}</div>
            {songs.length === 0 ?
                <div className="Songs-No-Results">No songs found, adjust your search.</div> :
                <>
                    <div className="Song-Count">{`${songs.length} Songs`}</div>
                    <div className="Songs-Container">
                        {songs.map((song, index) => {
                            return <SongTile key={`${song}-${index}`} song={song} saved={index === 3 || index === 7} />
                        })}
                    </div>
                </>
            }
        </div>
    )
}