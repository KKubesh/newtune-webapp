import { faBookmark, faGaugeSimpleHigh, faGuitar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ReactComponent as Metronome } from '../../svgs/metronome.svg';
import { Button } from "../shared/Button";
import { Song } from "../types";
import { IconBackground } from "./IconBackground";

type SongOverviewType = {
    song: Song;
}

export const SongOverview = ({ song }: SongOverviewType) => {
    const savedSongs = ["1-2-3", "A Foggy Day"]
    const isSaved = savedSongs.includes(song.title);
    const songSpeed = song.speeds && song.speeds.length > 0 ? ` / ${song.speeds}` : "";
    const songBpm = song.bpm || "";

    return (
        <div className="Catalog-Container">
            <div className="Title">{song.title}</div>
            <div className="Button-Padding">
                <Button
                    text={isSaved ? "Saved" : "Save"}
                    color="#DFCB70"
                    secondary={!isSaved}
                    width="120px"
                    handleClick={() => console.log("BOOKMARK")}
                >
                    <FontAwesomeIcon size="lg" icon={faBookmark} color={isSaved ? "#FFF" : "#DFCB70"} />
                </Button>
            </div>
            <div className="Song-Description">
                <div>
                    <div className="Song-Row">
                        <div>
                            <div className="Center-Subtitle">
                                Difficulty
                            </div>
                            <div className="Center-Description">
                                {song.difficulty &&
                                    <>
                                        {song.difficulty}
                                        <FontAwesomeIcon icon={faGaugeSimpleHigh} size="sm" transform="right-2" />
                                    </>
                                }
                            </div>
                        </div>
                        <div>
                            <div className="Center-Subtitle">
                                Decade
                            </div>
                            <div className="Center-Description">
                                {song.decades}
                            </div>
                        </div>
                        <div>
                            <div className="Center-Subtitle">
                                BPM/Speed
                            </div>
                            <div className="Center-Description">
                                {`${songBpm}${songSpeed}`} {(songBpm || songSpeed) && <Metronome style={{ height: "15px", width: "15px", padding: "1px 2px 0px", marginBottom: "-.5px", fill: "#666" }} />}
                            </div>
                        </div>
                    </div>
                    <div className="Subtitle">
                        Artist
                    </div>
                    <div className="Description">
                        {song.artists}
                    </div>
                    <div className="Subtitle">
                        Composer
                    </div>
                    <div className="Description">
                        {song.composers}
                    </div>

                </div>
                <div className="Subtitle">
                    Genres
                </div>
                <div className="Description">
                    {song.genres}
                </div>
                {song.groove &&
                    <>
                        <div className="Subtitle">
                            Groove
                        </div>
                        <div className="Description">
                            {song.groove}
                        </div>
                    </>
                }
                {song.features?.[0] &&
                    <>
                        <div className="Subtitle">
                            Features
                        </div>
                        <div className="Description">
                            {song.features}
                        </div>
                    </>
                }
            </div>
            <IconBackground genres={song.genres} color="#C4C4C4" scale={3} />

        </div>
    )
}