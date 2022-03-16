import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "../shared/Button";

type SongOverviewType = {
    song: string;
}

export const SongOverview = ({ song }: SongOverviewType) => {
    const savedSongs = ["song4", "song8"]
    const isSaved = savedSongs.includes(song);

    return (
        <div className="Catalog-Container">
            <div className="Title">Some Song Title Make it twice as long</div>
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
                <div className="Subtitle">
                    Artist
                </div>
                <div className="Description">
                    Mock Name
                </div>
                <div className="Subtitle">
                    Genres
                </div>
                <div className="Description">
                    Mock, Rock, R&B
                </div>
                <div className="Subtitle">
                    Difficulty
                </div>
                <div className="Description">
                    2 (Intermediate)
                </div>
                <div className="Subtitle">
                    Speed
                </div>
                <div className="Description">
                    123 Bpm
                </div>
                <div className="Subtitle">
                    Tempo
                </div>
                <div className="Description">
                    Allegro
                </div>
                <div className="Subtitle">
                    Groove
                </div>
                <div className="Description">
                    Swing
                </div>
            </div>
        </div>
    )
}