import "./App.css";
import StationCard from "./components/StationCard";
import { useReadings } from "./hooks/readings.hooks";
import { useStations } from "./hooks/stations.hooks";

function App() {
    const { data: stations } = useStations();
    const { data: readings } = useReadings(1);

    return (
        <>
            <ul>
                {stations?.map((station) => (
                    <li key={station.id}>
                        <StationCard name={station.name} temp={10} lastUpdated={"Now"}></StationCard>
                    </li>
                ))}
            </ul>

            <ul>
                {readings?.map((reading) => (
                    <>
                        <li key={reading.id}>{reading.station_id}</li>
                        <li key={reading.id}>{reading.temperature}</li>
                        <li key={reading.id}>{reading.pressure}</li>
                    </>
                ))}
            </ul>
        </>
    );
}

export default App;
