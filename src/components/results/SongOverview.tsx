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
            <div className="Title">Some Song Title</div>
            <div className="Song-Overview-Container">
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
        </div>
    )
}