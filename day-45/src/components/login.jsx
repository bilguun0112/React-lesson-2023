import { useState } from "react";
import { ToastContainer, toast } from "react-toastify"
import { useNavigate } from "react-router-dom";
import Header from "./header";

export default function LogIn() {
    const navigate = useNavigate()

    const [user, setUser] = useState({
        loginName: 'google@gmail.com',
        password: '123456789',
    })

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.username.value);
        console.log(e.target.password.value);
        if (user.loginName === e.target.username.value && user.password === e.target.password.value) {
            toast("User is premitted");
            navigate('/', { replace: true, state: { bookName: "Fake Title" } })

        } else {

            toast("User is not premitted");
            navigate('/register', { replace: true, state: { bookName: "Fake Title" } })
        }
    }
    return (
        <>
            <Header />
            <form onSubmit={onSubmit}>
                <label> Log in name : </label>
                <input type="email" name={"username"} /> <br />
                <label htmlFor="">Password</label>
                <input type="password" name="password" />
                <br />
                <button>Sign in</button>
            </form>
            <ToastContainer />
        </>
    )
}