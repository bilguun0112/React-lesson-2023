import { Grid, TextField, Button, InputLabel, Select, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function UserRegisterForm() {
    const URL = 'http://localhost:8080/register'
    const ROLE_URL = 'http://localhost:8080/users/roles'

    const [roles, setRoles] = useState([])
    const [currentRole, setCurrentRole] = useState(0)

    const navigate = useNavigate()
    async function handleSubmit(e) {
        e.preventDefault();
        console.log('Submit clicked')

        const data = {
            firstname: e.target.firstname.value,
            lastname: e.target.lastname.value,
            email: e.target.email.value,
            password: e.target.password.value,
            address: e.target.address.value,
            role: currentRole,
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        const FETCHED_DATA = await fetch(URL, options)
        const FETCHED_JSON = await FETCHED_DATA.json()
        console.log(FETCHED_JSON)
        if (FETCHED_JSON) {
            navigate('/users')
        }
    }
    async function fetchRoles() {
        const FETCHED_DATA = await fetch(ROLE_URL)
        const FETCHED_JSON = await FETCHED_DATA.json()
        setRoles(FETCHED_JSON.data)
    }
    useEffect(() => {
        fetchRoles()
    }, [])
    function handleSelectChange(e) {
        setCurrentRole(e.target.value)
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            id="firstname"
                            defaultValue=""
                            size="small"
                            label="First name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            id="lastname"
                            defaultValue=""
                            size="small"
                            label="Last name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            id="email"
                            defaultValue=""
                            size="small"
                            label="Email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            id="password"
                            defaultValue=""
                            size="small"
                            label="Password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            id="comfirm-password"
                            defaultValue=""
                            size="small"
                            label="Comfirm password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            id="address"
                            defaultValue=""
                            size="small"
                            label="Address"
                            multiline
                            rows={4}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InputLabel> User Roles
                        </InputLabel>
                        <Select
                            id='role-selector'
                            value={currentRole}
                            label="Roles"
                            onChange={handleSelectChange}
                        >
                            {
                                roles && roles.map((roles, idx) => {
                                    return (

                                        <MenuItem key={idx} value={roles.id}>{roles.name}</MenuItem>

                                    )
                                })
                            }
                        </Select>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="success" type="submit">
                            Submit
                        </Button>
                    </Grid>

                </Grid>

            </form>
        </div >
    )
}