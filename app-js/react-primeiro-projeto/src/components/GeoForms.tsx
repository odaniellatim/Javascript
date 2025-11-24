import { Circle } from "./Circle";
import { Square } from "./Square";

export const GeoForm = () => {
    return (
        <>
            <h3 className="text-2xl font-bold">Formas Geométricas</h3>
            <div className="flex flex-row gap-2 mt-4">
                <Square />
                <Circle />
            </div>
        </>

    );
}