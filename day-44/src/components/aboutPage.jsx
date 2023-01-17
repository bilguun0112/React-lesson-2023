import { Link , useLocation } from "react-router-dom"
export default function AboutPage(){

const location = useLocation()

const state = location.state;
console.log(state);

    return (
        <>
        <div> Hello , welcome to AboutPage</div>

        <h1>{state.message}</h1>
        <h1>{state.timestamp}</h1>
        <br />
        <Link to={"/"}> Back </Link>
        </>

    )
}