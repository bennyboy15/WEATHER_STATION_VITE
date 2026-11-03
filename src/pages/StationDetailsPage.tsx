import { useParams } from "react-router";
import { useStation } from "../hooks/stations.hooks";

function StationDetailsPage() {
    const { id } = useParams<{ id: string }>();
    const stationId = Number(id);
    const { data: station } = useStation(stationId);
    return <div>{station?.name}</div>;
}

export default StationDetailsPage;
