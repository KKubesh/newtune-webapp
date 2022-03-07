import React from "react";
import { SongTile } from "../results/SongTile";

type SavedSongsProps = {
    setView: (view: string) => void;
}

export const SavedSongs = ({ setView }: SavedSongsProps) => {
    const savedSongsMock = ["song1", "song2", "song3", "song4", "song5"];

    return (
        <>
            <div className="Title">Saved Songs</div>
            <div className="Songs-Container">
                {savedSongsMock.map((song, index) => {
                    return <SongTile key={`${song}-${index}`} title={song} saved={true} handleClick={setView} />
                })}
            </div>
        </>
    )
}