export type Filter = {
    type: string;
    selected: string[];
    options: string[];
}

// string array means it is an id that will require an additional call
export type Song = {
    artists?: string[];
    bpm?: number;
    composers?: string;
    date_added: {
        seconds: number,
        nanoseconds: number
    };
    decade?: string[];
    difficulty?: string[];
    features?: string[];
    genres?: string[];
    groove?: string[];
    live_performance?: string;
    notes?: string;
    sheet_music?: string;
    speed?: string[];
    studio_recording?: string;
    title: string;
}