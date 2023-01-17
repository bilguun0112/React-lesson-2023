import { useLocation, useParams } from "react-router-dom"
import movieData from "../data/movies"




export default function Movie() {
    // const location = useLocation();
    const {id} = useParams()
    const movie = movieData.filter((data) => data.id == id);

    return (
        <>
            <h1>Single Movie {id}</h1>
            {/* <div>{location.state.id}</div>
            <div>{location.state.name}</div>
            <div>{location.state.ISBN}</div> */}
            {
                movie && movie.map((m,idx) => {
                    return (
                        <div key={idx}>
                            <p>Maplasan {m.name}</p>
                            <p>Maplasan {m.id}</p>
                            <p>Maplasan {m.ISBN}</p>
                            <p>Maplasan {m.genre}</p>
                        </div>
                    )
                })
            }
        </>
    )
}