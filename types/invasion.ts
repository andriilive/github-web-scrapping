

export type CasualtiesTypes = "personnel" | "jets" | "tanks";

export type ApiCasualties_Index = {
    day: number,
    casualties: {
        [key in CasualtiesTypes]: {
            total: number,
            increase: false | number
        }
    }
}


