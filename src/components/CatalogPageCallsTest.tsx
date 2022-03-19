import React, { useEffect, useState } from "react";
import { FooterControls } from "./shared/FooterControls";
import { HeaderMenu } from "./shared/HeaderMenu";
import { SongTile } from "./results/SongTile";
import { SavesAndUserButton } from "./shared/SavesAndUserButton";
import { SearchButton } from "./shared/SearchButton";
import { useFirestoreService } from "../services/firestore";
import { SongResults } from "./results/SongResults";
import { Song } from "./types";
import { DocumentData } from "firebase/firestore";



export default function CatalogPage() {
    const { getArrayValues, getSongs } = useFirestoreService();
    const [songs, setSongs] = useState<any[]>([]);
    // console.log("thing")
    // const auth = authenticateAnonymously()
    // console.log(auth);
    // useEffect(() => {
    // console.log(songResults);
    // }, [auth])

    const buildSong = (song: DocumentData) => {
        return {
            artists: song.artists,
            bpm: song.bpm,
            composers: song.composers,
            date_added: song.date_added,
            decade: song.decade,
            difficulty: song.difficulty,
            features: song.features,
            genres: song.genres,
            groove: song.groove,
            live_performance: song.live_performance,
            notes: song.notes,
            sheet_music: song.sheet_music,
            speed: song.speed,
            studio_recording: song.studio_recording,
            title: song.title,
        }
    };


    const songsMock = ["song1", "song2", "song3", "song4", "song5", "song6", "song7", "song8", "song1", "song2", "song3", "song4", "song5", "song6", "song7", "song8", "song1", "song2", "song3", "song4", "song5", "song6", "song7", "song8", "song1", "song2", "song3", "song4", "song5", "song6", "song7", "song8", "song1", "song2", "song3", "song4", "song5", "song6", "song7", "song8"];


    useEffect(() => {
        getSongs().then(data => {
            const snap = data.docs.reduce((acc: Song[], song) => {
                console.log(buildSong(song.data()))
                return [...acc, buildSong(song.data())];
            }, []);
            console.log(snap)
            setSongs(snap);
        }).catch(error => {
            setSongs(songsMock);
        });
    }, [])

    return (
        <div className="Relative">
            <HeaderMenu rightMenuItem={<SavesAndUserButton />} />
            <SearchButton />
            <div className="Search-Container-Solid">
                <div className="Catalog-Container">
                    <div className="Results-Title">Results</div>
                    <div className="Results-Container">
                        <SongResults songs={songs} />
                    </div>
                </div>
            </div>
            <FooterControls view="saves" />
        </div>
    )
}