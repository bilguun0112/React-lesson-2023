import { Link } from "react-router-dom";

export default function Index() {

    const d = new Date();
    const aboutPageData = {
        from: "Index ",
        message: "Welcome to About Page",
        timestamp: Date.now()
    }

    const homePageData = {
        from: "Index ",
        message: "Welcome to Home Page",
        timestamp: d.getDate()
    }






    return (
        <>
            <h1>Day - 44 Dynamic Routing</h1>


            <Link to={"/about"} state={aboutPageData}>About Page</Link>
            <Link to={"/home"} state={homePageData}>Home Page</Link>
            <Link to={"/accordion"} >Accordion Page</Link>
            <Link to={"/movies"}>Movies Page</Link>
        </>
    )
}