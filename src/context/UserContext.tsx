import React, { createContext, ReactNode, useContext, useState } from "react";
import { Song } from "../components/types";

type UserProps = {
    children: ReactNode;
}

type UserContextState = {
    currentSong: Song | undefined;
    setCurrentSong: React.Dispatch<React.SetStateAction<Song | undefined>>;
    savedSongs: Song[] | undefined;
    setSavedSongs: React.Dispatch<React.SetStateAction<Song[] | undefined>>;
    userPageView: string;
    setUserPageView: React.Dispatch<React.SetStateAction<string>>;
    catalogPageView: string;
    setCatalogPageView: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<UserContextState | undefined>(undefined);

const mockSavedSongs: Song[] = [
    {
        title: "1-2-3",
        date_added: { seconds: 1, nanoseconds: 2 }
    }, {
        title: "A Foggy Day",
        date_added: { seconds: 1, nanoseconds: 2 },
    }
]

export const UserProvider = ({
    children,
}: UserProps) => {
    const [currentSong, setCurrentSong] = useState<Song>();
    const [savedSongs, setSavedSongs] = useState<Song[] | undefined>(mockSavedSongs);
    const [userPageView, setUserPageView] = useState<string>("user");
    const [catalogPageView, setCatalogPageView] = useState<string>("catalog");


    return (
        <UserContext.Provider
            value={{
                currentSong,
                setCurrentSong,
                savedSongs,
                setSavedSongs,
                userPageView,
                setUserPageView,
                catalogPageView,
                setCatalogPageView,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error(
            "useUserContext must be used within the UserProvider Context",
        );
    }
    return context;
}