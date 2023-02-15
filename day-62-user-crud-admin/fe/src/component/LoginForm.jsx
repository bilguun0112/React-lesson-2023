import React from 'react';
import {
    Grid,
    TextField,
    Paper,
    Button
} from '@mui/material';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate()
    const URL = 'http://localhost:8080/login'
    async function onSubmitFunc(e) {
        e.preventDefault()

        const data = {
            email: e.target.email.value,
            password: e.target.password.value
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

        if (FETCHED_JSON.status === 'success') {
            toast('You are approved to Login')
            navigate('/users')

        } else {
            toast(FETCHED_JSON.status)
        }
    }

    return (
        <div style={{ padding: 30 }}>
            <Paper>

                <form onSubmit={onSubmitFunc}>
                    <Grid
                        container
                        spacing={3}
                        direction={'column'}
                        justify={'center'}
                        alignItems={'center'}
                    >
                        <Grid item xs={12}>
                            <TextField id='email' label="E-mail" type='email'></TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id='password' label="Password" type={'password'}></TextField>
                        </Grid>

                        <Grid item xs={12}>
                            <Button type='submit' fullWidth variant='contained' sx={{ marginBottom: '20px' }}> Login </Button>
                        </Grid>
                    </Grid>
                </form>

            </Paper>
        </div>
    );
};

export default LoginForm;
