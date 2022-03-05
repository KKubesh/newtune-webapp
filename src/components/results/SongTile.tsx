import React from "react";

type SongTileProps = {
    title: string;
    saved: boolean;
}

export const SongTile = ({ title, saved = false }: SongTileProps) => {
    return (
        <div className={saved ? "Song-Tile-Container-Saved" : "Song-Tile-Container"}>
            {title}
        </div>
    )
}