export interface Stations {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}

export type UpdateStationType = Partial<Omit<Stations, "id">>;
