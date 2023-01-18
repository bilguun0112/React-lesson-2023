import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1> this is my homepage</h1>
            <nav>
                <Link to="/login">Log in</Link>
                <Link to="/register">Register</Link>
                <Link to="/accordion">Accordion</Link>
            </nav>
        </div>
    )
}