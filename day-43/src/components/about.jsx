import { Outlet } from "react-router-dom"


export default function About() {

    return (
        <div>
            <h1> This is about</h1>
            <a href="/about/usuhkuu">Usuhkuu</a>
            <a href="/about/khangai">Khangai</a>
            <Outlet />
        </div>
    )
}