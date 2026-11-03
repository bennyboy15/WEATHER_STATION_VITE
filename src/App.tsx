import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import StationDetailsPage from "./pages/StationDetailsPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/stations/:id" element={<StationDetailsPage />} />
        </Routes>
    );
}

export default App;
