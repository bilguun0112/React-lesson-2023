import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import { Button, Container, TextField, ButtonGroup } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
export default function UserRole() {
    const [formData, setFormData] = useState({});
    axios.defaults.baseURL = 'http://localhost:8080'

    const navigate = useNavigate()
    async function handleRoleSubmit(e) {
        e.preventDefault()
        try {
            const response = await axios.post('/users-role-table', formData);
            console.log(response.data);
        } catch (err) {
            console.error(err);
        }

    }
    const handleChange = (e) => {
        setFormData({ ...formData, name: e.target.value });
    };
    return (
        <Container maxWidth="sm">
            <Typography variant="h5" color="initial" sx={{ marginBottom: "20px" }}>New user role</Typography>
            <form onSubmit={handleRoleSubmit}>
                <FormControl sx={{ display: "flex", justifyContent: "space-around", gap: "20px" }}>
                    <TextField
                        id="name"
                        label="Name"
                        variant="outlined"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <ButtonGroup variant='contained' aria-label="contained button group">
                        <Button type='submit' color='success' sx={{ width: "50%" }}>Save</Button>
                        <Button color='primary' sx={{ width: "50%" }} onClick={() => {
                            navigate('/user-role-table')
                        }}>Back</Button>
                    </ButtonGroup>
                </FormControl>
            </form>
        </Container >
    )
}