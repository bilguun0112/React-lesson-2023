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
    console.log('myData', currentUsers);
    async function handleEdit() {
        console.log('Clicked')
        const FETCHED_DATA = await axios({
            url: URL, method: 'PUT',
            data: {
                id: currentUsers.id,
                name: currentUsers.name,
                price: currentUsers.price,
                image: currentUsers.image,
                stock: currentUsers.stock,
                size: currentUsers.size,
                color: currentUsers.color,
                category: currentUsers.category,
                description: currentUsers.description,
            }
        })
        setUsers(FETCHED_DATA.data.data)
        navigate('/users-table')
    }

    console.log('newUsers', users);
    return (
        // * This is Edit Users
        <Container maxWidth="sm">
            <Typography variant="h5" color="initial" sx={{ marginBottom: "20px" }}>Edit Users</Typography>
            {
                currentUsers &&
                <form >
                    <FormControl sx={{ display: "flex", justifyContent: "space-around", gap: "20px" }}>
                        <TextField id="name" label="Name" variant="outlined" defaultValue={currentUsers.name}
                            onChange={(e) => setCurrentUsers({ ...currentUsers, name: e.target.value })} />
                        <TextField id="price" label="Price" variant="outlined" defaultValue={currentUsers.price}
                            onChange={(e) => setCurrentUsers({ ...currentUsers, price: e.target.value })} />
                        <TextField id="image" label="image" variant="outlined" defaultValue={currentUsers.image}
                            onChange={(e) => setCurrentUsers({ ...currentUsers, image: e.target.value })} />
                        <TextField id="stock" label="Stock" variant="outlined" defaultValue={currentUsers.stock}
                            onChange={(e) => setCurrentUsers({ ...currentUsers, stock: e.target.value })} />
                        <TextField id="size" label="Size" variant="outlined" defaultValue={currentUsers.size}
                            onChange={(e) => setCurrentUsers({ ...currentUsers, size: e.target.value })} />
                        <TextField id="color" label="Color" variant="outlined" defaultValue={currentUsers.color}
                            onChange={(e) => setCurrentUsers({ ...currentUsers, color: e.target.value })} />
                        <TextField id="category" label="Category" variant="outlined" defaultValue={currentUsers.category}
                            onChange={(e) => setCurrentUsers({ ...currentUsers, category: e.target.value })} />
                        <TextField id="description" label="Description" variant="outlined" defaultValue={currentUsers.description}
                            onChange={(e) => setCurrentUsers({ ...currentUsers, description: e.target.value })} />
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