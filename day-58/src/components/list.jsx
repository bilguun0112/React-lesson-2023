import { places } from "../Data/data";
import Place from "./Place";
export default function List() {
    const myPlaces = places.map((data, idx) => {
        return (
            <Place place={data} key={idx} />
            // <Place place={data} imageSize={imageSize} key={idx} />
        )
    })
    return myPlaces
}