import React from "react";

type SongTileProps = {
    title: string;
    saved: boolean;
    handleClick?: (view: string, song?: string) => void;
}

export const SongTile = ({ title, saved = false, handleClick }: SongTileProps) => {
    return (
        <div className={saved ? "Song-Tile-Container-Saved" : "Song-Tile-Container"} onClick={handleClick ? () => handleClick("song", title) : undefined}>
            {title}
        </div>
    )
}