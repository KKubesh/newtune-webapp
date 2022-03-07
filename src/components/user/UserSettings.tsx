import React from "react";
import { SongTile } from "../results/SongTile";

export const UserSettings = () => {
    const savedSongsMock = ["song1", "song2", "song3", "song4", "song5"];

    return (
        <>
            <div className="Title">User Settings</div>
            <div className="Songs-Container">
                {savedSongsMock.map((song, index) => {
                    return <SongTile key={`${song}-${index}`} title={song} saved={true} />
                })}
            </div>
        </>
    )
}