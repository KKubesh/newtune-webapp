import { faDrum, faGaugeSimpleHigh, faHeartPulse } from "@fortawesome/free-solid-svg-icons";
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
        artists: "Long Artis",
        bpm: Math.floor(Math.random() * 90) + 100,
        difficulty: Math.floor(Math.random() * 4) + 1,
        genres: "Rock",
    }

    console.log(defaultSongProps.title.length > 7 ? `${defaultSongProps.title.substring(0, 8)}...` : defaultSongProps.title)
    return (
        <div className={saved ? "Song-Tile-Container-Saved" : "Song-Tile-Container"} onClick={handleClick ? () => handleClick("song", song.title) : undefined}>
            <div className="Song-Tile">
                <div className="Song-Text">
                    <div>
                        <div className={"Song-Tile-Title"}>
                            {defaultSongProps.title.length > 9 ? `${defaultSongProps.title.substring(0, 7)}...` : defaultSongProps.title}
                        </div>
                    </div>
                    <div>
                        <div className="Song-Tile-Artist">
                            {defaultSongProps.artists.length > 10 ? `${defaultSongProps.artists.substring(0, 9)}...` : defaultSongProps.artists}
                        </div>
                    </div>
                </div>
                <div className="Song-Tile-Numbers">
                    <div className="Song-Tile-Bpm">
                        {defaultSongProps.bpm}
                        <FontAwesomeIcon icon={faHeartPulse} size="xs" transform="right-3" color={saved ? "#DFCB70" : "#8F2F50"} />
                    </div>
                    <div className="Song-Tile-Difficulty">
                        {defaultSongProps.difficulty}
                        <FontAwesomeIcon icon={faGaugeSimpleHigh} size="xs" transform="right-3" color={saved ? "#DFCB70" : "#8F2F50"} />
                    </div>
                </div>
            </div>
        </div>
    )
}