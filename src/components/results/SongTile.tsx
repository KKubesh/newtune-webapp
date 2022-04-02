import { faGaugeSimpleHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Song } from "../types";
import { ReactComponent as Metronome } from '../../svgs/metronome.svg';
import { useUserContext } from "../../context/UserContext";
import { IconBackground } from "./IconBackground";

type SongTileProps = {
    song: Song;
    saved: boolean;
}

export const SongTile = ({ song, saved = false }: SongTileProps) => {
    const { setCurrentSong, setCatalogPageView } = useUserContext();

    const tileClick = () => {
        setCatalogPageView("song");
        setCurrentSong(song);
    }

    return (
        <div className={saved ? "Song-Tile-Container-Saved" : "Song-Tile-Container"} onClick={tileClick} style={{ backgroundImage: "../../svgs/acoustic-guitar", backgroundRepeat: "no-repeat" }}>
            <div className="Song-Tile">
                <div className="Song-Text">
                    <div>
                        <div className={"Song-Tile-Title"}>
                            {song.title?.length > 9 ? `${song.title.substring(0, 7)}...` : song.title}
                        </div>
                    </div>
                    <div>
                        <div className="Song-Tile-Artist">
                            {song.artists && song.artists[0] &&
                                <>{song.artists[0].length > 10 ? `${song.artists[0].substring(0, 9)}...` : song.artists[0]}</>
                            }
                        </div>
                    </div>
                </div>
                <IconBackground genres={song.genres} saved={saved} />
                <div className="Song-Tile-Numbers">
                    <div className="Song-Tile-Bpm">
                        {song.bpm &&
                            <>
                                {song.bpm}
                                <Metronome style={{ height: "10px", width: "10px", padding: "1px 2px 0px", marginBottom: "-.5px", fill: `${saved ? "#666" : "#8F2F50"}` }} />
                            </>
                        }
                    </div>
                    <div className="Song-Tile-Difficulty">
                        {song.difficulty &&
                            <>
                                {song.difficulty}
                                <FontAwesomeIcon icon={faGaugeSimpleHigh} size="xs" transform="right-3" color={saved ? "#666" : "#8F2F50"} />
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}