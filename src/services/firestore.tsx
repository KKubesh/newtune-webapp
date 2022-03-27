import {
    collection,
    getDoc,
    getDocs,
    doc,
    query,
    where
} from "firebase/firestore";
import React from "react";
import { Filter, FilterCategories, FilterOptions, Filters, Song } from "../components/types";
import { db } from "../firebase";

const filterDownSongResults = (songResults: Song[][]) => {
    // order smallest to largest
    const sortedArray = songResults.sort((a, b) => a.length - b.length).filter((songArray) => songArray !== undefined);

    const results = sortedArray.reduce((acc: Song[], songList: Song[], currentIndex) => {
        if (currentIndex === 0) {
            // start acc with the shortest array first
            return songList
        } else {
            const filterToMatching: Song[] = songList.filter((songA: Song) => {
                return acc.find((songB: Song) => {
                    return songA.title === songB.title;
                });
            })
            return filterToMatching;
        }
    }, [])

    return results;
}

export const useFirestoreService = () => {
    const getSongs = async (setValue: React.Dispatch<React.SetStateAction<Song[] | undefined>>) => {
        const response = await getDocs(collection(db, "songs"))
        const responseData = response.docs.map((song: any) => {
            return song.data();
        }, []);
        setValue(responseData);
    }

    const getAllFieldOptions = async (
        filters: Filters,
        setValue: (value: FilterOptions) => void
    ) => {
        const filterCategories = Object.values(FilterCategories)
        const updatedOptionsFilters = filterCategories.map(async (category: FilterCategories) => {
            const responseCategory = await getDocs(collection(db, category))
            const responseCategoryOptions = responseCategory.docs.map((item: any) => {
                return item.data()[filters[category].keyName];
            });

            return {
                [category]: responseCategoryOptions
            }
        })

        const optionsResults = await Promise.all(updatedOptionsFilters)
        const newOptions = filterCategories.reduce((acc: FilterOptions, category: FilterCategories) => {
            const sortedOptions = optionsResults.find(option => option[category])?.[category].sort()
            return {
                ...acc,
                [category]: sortedOptions
            }
        }, {
            [FilterCategories.DECADES]: [],
            [FilterCategories.GENRES]: [],
            [FilterCategories.GROOVES]: [],
            [FilterCategories.FEATURES]: [],
            [FilterCategories.SPEEDS]: [],
            [FilterCategories.DIFFICULTIES]: [],
        })

        setValue(newOptions);
    }

    const getArtistsOption = async (setValue: React.Dispatch<React.SetStateAction<any>>) => {
        const response = await getDocs(collection(db, "songs"))
        const artistsData: string[] = response.docs.reduce((acc: string[], song: any) => {
            return [...acc, ...song.data().artists];
        }, []);

        const uniqueValues = [...new Set(artistsData)];
        setValue(uniqueValues)
    }

    const getPathValues = async ({ stringPath, setValue }: { stringPath?: string, setValue: React.Dispatch<React.SetStateAction<string | undefined>> }) => {
        if (stringPath) {
            const stringRef = doc(db, "artists/rec7tqmDGZv7xiVKT");
            const output = await getDoc(stringRef);
            setValue(output.data()?.name);
        }
    }

    const getSongsWhere = async (filterCollection: string, filters?: string[], setValue?: React.Dispatch<React.SetStateAction<Song[] | undefined>>) => {
        if (filters?.length !== 0 && filters !== undefined) {
            const songsRef = collection(db, "songs");
            const q = query(songsRef, where(filterCollection, "array-contains-any", filters));
            const response = await getDocs(q)


            if (setValue) {
                const responseData = response.docs.map((song: any) => {
                    return song.data();
                });
                setValue(responseData);
            } else {
                const responseData = response.docs.map((song: any) => {
                    return song.data();
                });
                return responseData;
            }
        }
    }

    const getAllFiltersSongsWhere = async (filters: Filters, setValue: React.Dispatch<React.SetStateAction<Song[] | undefined>>) => {
        const songRequest = Object.values(filters).map(async filter => {
            return await getSongsWhere(filter.type, filter.selected)
        })
        const songResults = await Promise.all(songRequest)
        const filteredDown = filterDownSongResults(songResults as Song[][]);

        setValue(filteredDown);
    }

    const getSongDetails = async ({ song }: { song: string }) => {
        const songRef = doc(db, song);
        const output = await getDoc(songRef);
        return output
    }

    const getSavedSongs = ({ userSongListId }: { userSongListId: string }) => {
        const userSongListDocRef = doc(db, 'userSongList', userSongListId)
        return getDoc(userSongListDocRef);
    };

    return {
        getPathValues,
        getSavedSongs,
        getSongs,
        getSongDetails,
        getArtistsOption,
        getAllFieldOptions,
        getSongsWhere,
        getAllFiltersSongsWhere,
    };
}; 
