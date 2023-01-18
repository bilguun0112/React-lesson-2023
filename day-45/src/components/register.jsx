import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "./header";

export default function Register() {

    // const navigate = useNavigate()
    const [formSubmitted, setFormSubmitted] = useState(false)

    if (formSubmitted) {
        return <Navigate to={"/login"} />
    }

    const handleSubmit = function (event) {
        event.preventDefault();
        setFormSubmitted(true)

    }
    return (

        <>
            <Header />

            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="email">Email : </label>
                <input type="email" name={"email"} /> <br />
                <label htmlFor="username">User Name : </label>
                <input type="text" name={"username"} /><br />
                <label htmlFor="">Password : </label>
                <input type="pawssword" name={"password"} /><br />
                <label htmlFor="">PhoneNumber : </label>
                <input type="number" name={"phonenumber"} /><br />
                <button>Register</button>
            </form >
        </>


    )
}