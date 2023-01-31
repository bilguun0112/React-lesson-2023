import React from 'react';
import { useForm } from '@unform/core';
import { Container, Form } from './styles';
import { Button, TextField, Container, FormControl, FormLabel, FormHelperText, FormGroup } from '@mui/material';

export default function NewProductForm() {
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // TODO: Add submit logic for new product
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    inputRef={register({ required: true })}
                    name="name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                {errors.name && <p>This field is required</p>}

                <TextField
                    inputRef={register({ required: true })}
                    name="price"
                    label="Price"
                    type="number"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                {errors.price && <p>This field is required</p>}

                <TextField
                    inputRef={register}
                    name="description"
                    label="Description"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}
