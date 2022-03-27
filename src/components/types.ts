export type Filter = {
    type: string;
    keyName: string;
    selected: string[];
    options: string[];
}

export type FilterProperties = {
    type: FilterCategories;
    keyName: string;
    selected: string[];
}

export enum FilterCategories {
    DECADES = "decades",
    GENRES = "genres",
    GROOVES = "grooves",
    FEATURES = "features",
    SPEEDS = "speeds",
    DIFFICULTIES = "difficulties",
}

export type Filters = {
    [FilterCategories.DECADES]: FilterProperties;
    [FilterCategories.GENRES]: FilterProperties;
    [FilterCategories.GROOVES]: FilterProperties;
    [FilterCategories.FEATURES]: FilterProperties;
    [FilterCategories.SPEEDS]: FilterProperties;
    [FilterCategories.DIFFICULTIES]: FilterProperties;
}

export type FilterOptions = {
    [FilterCategories.DECADES]: string[];
    [FilterCategories.GENRES]: string[];
    [FilterCategories.GROOVES]: string[];
    [FilterCategories.FEATURES]: string[];
    [FilterCategories.SPEEDS]: string[];
    [FilterCategories.DIFFICULTIES]: string[];
}

// string array means it is an id that will require an additional call
export type Song = {
    artists?: string[];
    artist_paths?: string[]
    bpm?: number;
    composers?: string;
    date_added: {
        seconds: number,
        nanoseconds: number
    };
    decades?: string[];
    difficulty?: number | null;
    features?: string[];
    genres?: string[];
    groove?: string;
    live_performance?: string;
    notes?: string | null;
    sheet_music?: string | null;
    speeds?: string | null;
    studio_recording?: string;
    title: string;
}

export type Artist = {
    name: string;
    id: string;
}