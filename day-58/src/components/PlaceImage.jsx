import { useContext } from "react"
import { MyContext } from "../context/newContext"
import { getImageUrl } from "../Data/utils"


export default function PlaceImage({ place }) {
    const URL = getImageUrl(place)
    const imageSize = useContext(MyContext)
    console.log(imageSize)
    const imageWidth = imageSize.imageSize
    return (
        <img src={URL} alt={place.name} width={imageWidth} height={imageWidth} />
    )
}