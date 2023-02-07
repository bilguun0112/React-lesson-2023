import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import { Button, Container, TextField, ButtonGroup } from '@mui/material'
import GenderRadio from './genderRadio'
export default function NewUsers({ handleUserSubmitFunc }) {
    async function handleSubmit(e) {
        e.preventDefault()
        handleUserSubmitFunc(e)
    }
    return (
        <Container maxWidth="sm">
            <Typography variant="h5" color="initial" sx={{ marginBottom: "20px" }}>New User</Typography>
            <form onSubmit={handleSubmit}>
                <FormControl sx={{ display: "flex", justifyContent: "space-around", gap: "20px" }}>
                    <TextField
                        id="firstname"
                        label="First Name"
                        variant="outlined"
                    />
                    <TextField
                        id="lastname"
                        label="Last Name"
                        variant="outlined"
                    />
                    <TextField
                        id="email"
                        label="Email address"
                        variant="outlined"
                        type='email'
                    />
                    <TextField
                        id="phonenumber"
                        label="Phone Number"
                        variant="outlined"
                    />
                    <TextField
                        id="age"
                        label="Age"
                        variant="outlined"
                        type='number'
                    />
                    <GenderRadio />
                    <TextField
                        id="gender"
                        label="Gender"
                        variant="outlined"
                    />
                    <TextField
                        id="password"
                        label="Password"
                        variant="outlined"
                        type='password'
                    />
                    <TextField
                        id="address"
                        label="Address"
                        variant="outlined"
                    />
                    <ButtonGroup variant='contained' aria-label="contained button group">
                        <Button type='submit' color='success' sx={{ width: "50%" }}>Save</Button>
                        <Button color='primary' sx={{ width: "50%" }}>Back</Button>
                    </ButtonGroup>

                </FormControl>

            </form>

        </Container >
    )
}