import { useNavigate } from "react-router";
import StationCard from "../components/StationCard";
import { Button } from "../components/ui/button";
import { useStations, useUpdateStation } from "../hooks/stations.hooks";

function HomePage() {
    const { data: stations } = useStations();
    const { mutate: updateStation } = useUpdateStation();

    const navigate = useNavigate();
    return (
        <div className="p-4">
            <ul>
                {stations?.map((station) => (
                    <li key={station.id}>
                        <StationCard name={station.name} temp={10} lastUpdated={"Sunny • 4 min ago"} onClick={() => navigate(`/stations/${station.id}`)} />
                    </li>
                ))}
            </ul>
            <Button onClick={() => updateStation({ stationId: 1, updateItem: { name: "HOME" } })}>UPDATE</Button>
        </div>
    );
}

export default HomePage;
