import { useEffect, useState } from "react";


export default function Register() {
    const ROLE_URL = 'http://localhost:8080/admin/role/list'
    const REGISTER_URL = 'http://localhost:8080/admin/register'


    const initialFormData = Object.freeze({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        phonenumber: "",
        address: "",
        userrole: 0,
    })
    const [roles, setRoles] = useState([])
    const [formData, setFormData] = useState(initialFormData)

    const fetchRoles = async () => {
        const FETCHED_DATA = await fetch(ROLE_URL);
        const FETCHED_JSON = await FETCHED_DATA.json()
        setRoles(FETCHED_JSON.data)
    }
    useEffect(() => {
        fetchRoles()
    }, [formData])

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value.trim(),
        })
        console.log(formData)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }

        const FETCHED_DATA = await fetch(REGISTER_URL, options)
        const FETCHED_JSON = await FETCHED_DATA.json()
        console.log(FETCHED_JSON)
    }
    return (
        <div>

            <form onSubmit={handleSubmit} style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "15px",
                alignItems: "center",
                width: "500px",
                margin: "auto"

            }}>
                <h1> Register</h1>
                <label>
                    First Name :
                    <input name="firstname" type="text"
                        onChange={handleChange} />
                </label>
                <label>
                    Last Name :
                    <input name="lastname" type="text"
                        onChange={handleChange} />
                </label>
                <label>
                    E-mail :
                    <input name="email" type="email"
                        onChange={handleChange} />
                </label>
                <label>
                    Password :
                    <input name="password" type="text"
                        onChange={handleChange} />
                </label>
                <label>
                    Phone Number :
                    <input name="phonenumber" type="number"
                        onChange={handleChange} />
                </label>
                <label>
                    Address :
                    <textarea name="address" type="text"
                        onChange={handleChange} />
                </label>
                <label>
                    Roles :
                    <select name="userrole"
                        onChange={handleChange}>
                        {roles &&
                            roles.map((role, idx) =>
                                <option key={idx} id={role._id} value={role._id}>{role.name}</option>
                            )}
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}