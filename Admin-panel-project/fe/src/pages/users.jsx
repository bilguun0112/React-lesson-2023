import { useNavigate } from "react-router-dom";
import UsersTable from "../components/newUserTable";

export default function Users() {
    const URL = 'http://localhost:8080/users-table'
    const navigate = useNavigate()
    async function handleSubmit(event) {
        const postData = {
            firstname: event.target.firstname.value,
            lastname: event.target.lastname.value,
            email: event.target.email.value,
            phonenumber: event.target.phonenumber.value,
            age: event.target.age.value,
            gender: event.target.gender.value,
            password: event.target.password.value,
            address: event.target.address.value,
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        }
        const FETCHED_DATA = await fetch(URL, options)
        const FETCHED_JSON = await FETCHED_DATA.json()
        console.log(FETCHED_JSON.data);
        navigate('/users-table')
    }
    return (
        <div>
            <UsersTable handleUserSubmitFunc={handleSubmit} />
        </div>
    )
}