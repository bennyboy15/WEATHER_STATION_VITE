import { useQuery } from "@tanstack/react-query";
import { api } from "../axios";
import type { Stations } from "../types/stations.types";

export function useStations() {
    return useQuery({
        queryKey: ["stations"],
        queryFn: () => api.get<Stations[]>("/stations").then((r) => r.data),
    });
}
