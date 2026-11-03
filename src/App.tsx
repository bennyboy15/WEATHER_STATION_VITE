import StationCard from "./components/StationCard";
import { useStations } from "./hooks/stations.hooks";

function App() {
    const { data: stations } = useStations();

    return (
        <div className="p-4">
            <ul>
                {stations?.map((station) => (
                    <li key={station.id}>
                        <StationCard name={station.name} temp={10} lastUpdated={"Sunny • 4 min ago"}></StationCard>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
