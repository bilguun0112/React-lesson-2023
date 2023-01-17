import { Link , useLocation } from "react-router-dom"

export default function HomePage() {

    const location = useLocation()
    const data = location.state;

    return (
        <>
            <div> Hello , welcome to homepage</div>
            <h1>{data.message}</h1>
            <h1>{data.timestamp}</h1>
            <br />
            <Link to={"/"}> Back </Link>
        </>
    )
}