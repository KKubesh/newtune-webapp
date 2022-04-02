import React from "react";
import { ReactComponent as AcousticGuitar } from '../../svgs/acoustic-guitar.svg';
import { useUserContext } from "../../context/UserContext";
import { SongTile } from "../results/SongTile";

export const SavedSongs = () => {
    const { savedSongs } = useUserContext();
    return (
        <>
            <div className="Title">Saved Songs</div>
            <div className="Songs-Container">
                {savedSongs?.map((song, index) => {
                    return <SongTile key={`${song}-${index}`} song={song} saved={true} />
                })}
            </div>
        </>
    )
}