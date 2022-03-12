import { faBolt, faDrum } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Song } from "../types";

type SongTileProps = {
    song: Song;
    saved: boolean;
    handleClick?: (view: string, song?: string) => void;
}

export const SongTile = ({ song, saved = false, handleClick }: SongTileProps) => {

    const defaultSongProps = {
        title: "Kam Test Long Title For Song",
        artists: "Long Artist Name",
        bpm: Math.floor(Math.random() * 90) + 100,
        difficulty: Math.floor(Math.random() * 4) + 1,
        genres: "Rock",
    }
    return (
        <div className={saved ? "Song-Tile-Container-Saved" : "Song-Tile-Container"} onClick={handleClick ? () => handleClick("song", song.title) : undefined}>
            <div className="Song-Tile">
                <div className="Song-Text">
                    <div>
                        <div className={"Song-Tile-Title"}>{defaultSongProps.title}</div>
                    </div>
                    <div>
                        <div className="Song-Tile-Artist"> {defaultSongProps.artists}</div>
                    </div>
                </div>
                <div className="Song-Tile-Numbers">
                    <div className="Song-Tile-Bpm">
                        {defaultSongProps.bpm}
                        <FontAwesomeIcon icon={faDrum} size="xs" transform="up-3 right-2" color={saved ? "#DFCB70" : "#8F2F50"} />
                    </div>
                    <div className="Song-Tile-Difficulty">
                        {defaultSongProps.difficulty}
                        <FontAwesomeIcon icon={faBolt} size="xs" transform="up-2 right-2" color={saved ? "#DFCB70" : "#8F2F50"} />
                    </div>
                </div>
            </div>
        </div>
    )
}