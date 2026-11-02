import { useQuery } from "@tanstack/react-query";
import { api } from "../axios";
import type { Readings } from "../types/readings.types";

export function useReadings(stationId: number) {
    return useQuery({
        queryKey: ["readings"],
        queryFn: () => api.get<Readings[]>(`/stations/${stationId}/readings`).then((r) => r.data),
    });
}
