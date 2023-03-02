import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import { Button, Container, TextField, ButtonGroup } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export default function EditUsers() {
    const navigate = useNavigate()
    const URL = 'http://localhost:8080/users-table'
    let data = useLocation()
    let stateData = data.state[0]
    const [currentUsers, setCurrentUsers] = useState(stateData)
    const [users, setUsers] = useState([])
    async function handleEdit() {
        const FETCHED_DATA = await axios({
            url: URL, method: 'PUT',
            data: {
                id: currentUsers.id,
                firstname: currentUsers.firstname,
                lastname: currentUsers.lastname,
                email: currentUsers.email,
                phonenumber: currentUsers.phonenumber,
                age: currentUsers.age,
                gender: currentUsers.gender,
                address: currentUsers.address,
            }
        })
        setUsers(FETCHED_DATA.data.data)
        navigate('/users-table')
    }

    return (
        // * This is Edit Users
        <Container maxWidth="sm">
            <Typography variant="h5" color="initial" sx={{ marginBottom: "20px" }}>Edit Users</Typography>
            {
                currentUsers &&
                <form >
                    <FormControl sx={{ display: "flex", justifyContent: "space-around", gap: "20px" }}>
                        <TextField id="firstname" label="First name" variant="outlined" defaultValue={currentUsers.firstname}
                            onChange={(e) => setCurrentUsers({ ...currentUsers, firstname: e.target.value })} />
                        <TextField id="lastname" label="Last name" variant="outlined" defaultValue={currentUsers.lastname}
                            onChange={(e) => setCurrentUsers({ ...currentUsers, lastname: e.target.value })} />
                        <TextField id="email" label="Email address" variant="outlined" defaultValue={currentUsers.email}
                            onChange={(e) => setCurrentUsers({ ...currentUsers, email: e.target.value })} />
                        <TextField id="phonenumber" label="Phone number" variant="outlined" defaultValue={currentUsers.phonenumber}
                            onChange={(e) => setCurrentUsers({ ...currentUsers, phonenumber: e.target.value })} />
                        <TextField id="age" label="Age" variant="outlined" defaultValue={currentUsers.age}
                            onChange={(e) => setCurrentUsers({ ...currentUsers, age: e.target.value })} />
                        <TextField id="gender" label="Gender" variant="outlined" defaultValue={currentUsers.gender}
                            onChange={(e) => setCurrentUsers({ ...currentUsers, gender: e.target.value })} />
                        <TextField id="address" label="Address" variant="outlined" defaultValue={currentUsers.address}
                            onChange={(e) => setCurrentUsers({ ...currentUsers, address: e.target.value })} />
                        <ButtonGroup variant='contained' aria-label="contained button group">
                            <Button color='success' onClick={handleEdit} sx={{ width: "50%" }}>Save</Button>
                            <Button color='primary' sx={{ width: "50%" }} onClick={() => { navigate('/users-table') }}>Back</Button>
                        </ButtonGroup>
                    </FormControl>
                </form>
            }
        </Container >
    )
}