import { useContext } from 'react'
import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'
import { NeighborhoodsContext } from '../context/neighborhoods.context'
import { RestaurantContext } from '../context/restaurants.context'

export default function Map() {

    const restaurants = useContext(RestaurantContext)
    // console.log(restaurants[0]?.address.coord)
    // console.log(restaurants)

    const neighborhoods = useContext(NeighborhoodsContext)
    console.log(neighborhoods)
    return (
        <div>
            <h1> My Map </h1>

            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* 
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker> */}

                {restaurants?.map((r, idx) => {
                    return (
                        <Marker key={idx} position={[r?.address.coord[1], r?.address.coord[0]]}>
                            <Popup>
                                {r.name}
                            </Popup>
                        </Marker>
                    );
                })}



            </MapContainer>
        </div>
    )
}