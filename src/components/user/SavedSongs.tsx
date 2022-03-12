import React from "react";
import { SongTile } from "../results/SongTile";

type SavedSongsProps = {
    setView: (view: string) => void;
}

export const SavedSongs = ({ setView }: SavedSongsProps) => {
    const savedSongsMock = ["song4", "song8"];

    return (
        <>
            <div className="Title">Saved Songs</div>
            <div className="Songs-Container">
                {savedSongsMock.map((song, index) => {
                    return <SongTile key={`${song}-${index}`} song={{ title: song, date_added: { seconds: 1, nanoseconds: 2 } }} saved={true} handleClick={setView} />
                })}
            </div>
        </>
    )
}