import React, { createContext, ReactNode, useContext, useState } from "react";
import { FilterCategories, FilterOptions, Filters, Song } from "../components/types";

type FilterProps = {
    children: ReactNode;
}

type FilterContextState = {
    currentFilters: Filters;
    setCurrentFilters: React.Dispatch<React.SetStateAction<Filters>>;
    removeFilter: (type: FilterCategories, option: string) => void;
    addFilter: (type: FilterCategories, option: string) => void;
    clearFilters: () => void;
    filterOptions: FilterOptions;
    setFilterOptions: (value: FilterOptions) => void;
    songs?: Song[];
    setSongs: React.Dispatch<React.SetStateAction<Song[] | undefined>>;
}

export const FilterContext = createContext<FilterContextState | undefined>(undefined);

const initialFilterOptions = {
    [FilterCategories.DECADES]: [],
    [FilterCategories.GENRES]: [],
    [FilterCategories.GROOVES]: [],
    [FilterCategories.FEATURES]: [],
    [FilterCategories.SPEEDS]: [],
    [FilterCategories.DIFFICULTIES]: [],
}

const defaultFilters = {
    [FilterCategories.DECADES]: {
        type: FilterCategories.DECADES,
        keyName: "name",
        selected: [],
    },
    [FilterCategories.GENRES]: {
        type: FilterCategories.GENRES,
        keyName: "name",
        selected: [],
    },
    [FilterCategories.GROOVES]: {
        type: FilterCategories.GROOVES,
        keyName: "name",
        selected: [],
    },
    [FilterCategories.FEATURES]: {
        type: FilterCategories.FEATURES,
        keyName: "name",
        selected: [],
    },
    [FilterCategories.SPEEDS]: {
        type: FilterCategories.SPEEDS,
        keyName: "name",
        selected: [],
    },
    [FilterCategories.DIFFICULTIES]: {
        type: FilterCategories.DIFFICULTIES,
        keyName: "number",
        selected: [],
    },
};

export const FilterProvider = ({
    children,
}: FilterProps) => {
    const [currentFilters, setCurrentFilters] = useState<Filters>(defaultFilters);
    const [filterOptions, setFilterOptions] = useState<FilterOptions>(initialFilterOptions);
    const [songs, setSongs] = useState<Song[]>();

    const removeFilter = (type: FilterCategories, option: string) => {
        const filterToUpdate = { ...currentFilters[type], selected: [...currentFilters[type].selected] };
        filterToUpdate.selected = currentFilters[type].selected.filter(value => value !== option);
        setCurrentFilters({
            ...currentFilters,
            [type]: { ...filterToUpdate },
        });
    }

    const addFilter = (type: FilterCategories, option: string) => {
        const filterToUpdate = { ...currentFilters[type], selected: [...currentFilters[type].selected] };
        filterToUpdate.selected.push(option);
        setCurrentFilters({
            ...currentFilters,
            [type]: filterToUpdate,
        });
    }

    const clearFilters = () => {
        setCurrentFilters(defaultFilters)
    }

    return (
        <FilterContext.Provider
            value={{
                currentFilters,
                setCurrentFilters,
                removeFilter,
                addFilter,
                clearFilters,
                filterOptions,
                setFilterOptions,
                songs,
                setSongs,
            }}
        >
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    const context = useContext(FilterContext);

    if (!context) {
        throw new Error(
            "useFilterContext must be used within the FilterProvider Context",
        );
    }
    return context;
}