import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface Props {
    name: string;
    lastUpdated: string;
    temp: number;
    onClick?: () => void;
}

function StationCard({ name, lastUpdated, temp, onClick }: Props) {
    return (
        <Card onClick={onClick} className="flex flex-row gap-2 bg-white hover:bg-gray-500/5 hover:cursor-pointer justify-between max-w-lg p-4">
            {/* SVG ICON */}
            <div className="bg-[rgb(255, 241, 199)]">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="52" height="52" viewBox="38 217.8000030517578 52 52">
                    <defs />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g id="wx1">
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g transform="matrix(0.8125 0 0 0.8125 38 217.8)">
                            <g stroke="rgb(245, 158, 11)" stroke-width="3.5px" stroke-linecap="round" color="rgb(31, 41, 55)" fill="rgb(0, 0, 0)">
                                <path
                                    d="M32 4v7M32 53v7M4 32h7M53 32h7M12.2 12.2l5 5M46.8 46.8l5 5M12.2 51.8l5-5M46.8 17.2l5-5"
                                    color="rgb(31, 41, 55)"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(245, 158, 11)"
                                    stroke-linecap="round"
                                    stroke-width="3.5px"
                                />
                            </g>
                            <g color="rgb(31, 41, 55)" fill="rgb(0, 0, 0)" stroke="none">
                                <circle cx="32" cy="32" r="15" fill="rgb(255, 201, 60)" stroke="rgb(31, 41, 55)" stroke-width="2.5px" color="rgb(31, 41, 55)" />
                                <g color="rgb(31, 41, 55)" fill="rgb(0, 0, 0)" stroke="none">
                                    <circle cx="27" cy="30" r="1.8" fill="rgb(31, 41, 55)" color="rgb(31, 41, 55)" stroke="none" />
                                    <circle cx="37" cy="30" r="1.8" fill="rgb(31, 41, 55)" color="rgb(31, 41, 55)" stroke="none" />
                                </g>
                                <path
                                    d="M27 36q5 4.5 10 0"
                                    fill="none"
                                    stroke="rgb(31, 41, 55)"
                                    stroke-width="2.2px"
                                    stroke-linecap="round"
                                    color="rgb(31, 41, 55)"
                                />
                                <circle cx="23.5" cy="35" r="2" fill="rgb(255, 159, 122)" opacity="0.7" color="rgb(31, 41, 55)" stroke="none" />
                                <circle cx="40.5" cy="35" r="2" fill="rgb(255, 159, 122)" opacity="0.7" color="rgb(31, 41, 55)" stroke="none" />
                            </g>
                        </g>
                    </g>
                </svg>
            </div>

            <CardHeader className="w-full text-left flex flex-col gap-0">
                <CardTitle className="font-semibold text-xl align-bottom items-baseline">{name}</CardTitle>
                <CardDescription className="text-xs align-top items-start">{lastUpdated}</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center items-center text-4xl font-bold">
                {temp}
                <span className="text-lg">°</span>
            </CardContent>
        </Card>
    );
}

export default StationCard;
