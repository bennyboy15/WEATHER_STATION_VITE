import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface Props {
    name: string;
    lastUpdated: string;
    temp: number;
}

function StationCard({ name, lastUpdated, temp }: Props) {
    return (
        <Card className="bg-red p-4 text-red-500">
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{lastUpdated}</CardDescription>
            </CardHeader>
            <CardContent>{temp}</CardContent>
        </Card>
    );
}

export default StationCard;
