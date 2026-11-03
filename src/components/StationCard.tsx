import { Button } from "./ui/button";

interface Props {
    name: string;
    lastUpdated: string;
    temp: number;
}

function StationCard({ name, lastUpdated, temp }: Props) {
    return <Button className="bg-red p-4 text-red-500">StationCard</Button>;
}

export default StationCard;
