import { Droplet } from "lucide-react";
import { Card } from "./ui/card";

interface Props {
    title: string;
    data: string;
    subtitle: string;
}

function InfoCard({ title, data, subtitle }: Props) {
    return (
        <Card className="flex flex-col gap-2 p-2">
            <div className="flex flex-row gap-2">
                <Droplet />
                <p>{title}</p>
            </div>
            <p>{data}</p>
            <p>{subtitle}</p>
        </Card>
    );
}

export default InfoCard;
