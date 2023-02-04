import UsersTable from "../components/newUserTable";

export default function Users() {
    const URL = 'http://localhost:8080/users'
    async function handleSubmit(event) {
        const postData = {
            name: event.target.firstname.value,
            price: event.target.lastprice.value,
            image: event.target.email.value,
            stock: event.target.phonenumber.value,
            size: event.target.age.value,
            color: event.target.gender.value,
            category: event.target.password.value,
            description: event.target.address.value,
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
    }
    return (
        <div>
            <UsersTable handleUserSubmitFunc={handleSubmit} />
        </div>
    )
}