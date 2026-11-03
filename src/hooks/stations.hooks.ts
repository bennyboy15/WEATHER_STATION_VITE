import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { api } from "../axios";
import type { Stations, UpdateStationType } from "../types/stations.types";

export function useStations() {
    return useQuery({
        queryKey: ["stations"],
        queryFn: () => api.get<Stations[]>("/stations").then((r) => r.data),
    });
}

export function useUpdateStation() {
    return useMutation({
        mutationKey: ["stations"],
        mutationFn: ({ stationId, updateItem }: { stationId: number; updateItem: UpdateStationType }) =>
            api.post<Stations>(`/stations/${stationId}`, updateItem).then((r) => r.data),
        onSuccess: () => toast.success("Updated station", { duration: 3000 }),
        onError: () => toast.error("Error updating station", { duration: 3000 }),
    });
}
