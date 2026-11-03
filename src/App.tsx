import StationCard from "./components/StationCard";
import { Button } from "./components/ui/button";
import { useStations, useUpdateStation } from "./hooks/stations.hooks";

function App() {
    const { data: stations } = useStations();
    const { mutate: updateStation } = useUpdateStation();
    return (
        <div className="p-4">
            <ul>
                {stations?.map((station) => (
                    <li key={station.id}>
                        <StationCard name={station.name} temp={10} lastUpdated={"Sunny • 4 min ago"}></StationCard>
                    </li>
                ))}
            </ul>
            <Button onClick={() => updateStation({ stationId: 1, updateItem: { name: "HOME" } })}>UPDATE</Button>
        </div>
    );
}

export default App;
