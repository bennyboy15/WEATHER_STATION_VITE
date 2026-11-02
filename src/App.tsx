import { useQuery } from "@tanstack/react-query";
import "./App.css";
import { api } from "./axios";

interface Stations {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}

function App() {
    const { data, isPending, error } = useQuery({
        queryKey: ["stations"],
        queryFn: () => api.get<Stations[]>("/stations").then((r) => r.data),
    });

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
