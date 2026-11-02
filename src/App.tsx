import "./App.css";
import { useStations } from "./hooks/stations.hooks";

function App() {
    const { data, isPending, error } = useStations();

    if (isPending) return <p>Loading…</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <ul>
            {data.map((i) => (
                <li key={i.id}>{i.name}</li>
            ))}
        </ul>
    );
}

export default App;
