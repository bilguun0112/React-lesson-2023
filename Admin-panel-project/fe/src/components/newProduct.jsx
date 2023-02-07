import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import { Button, Container, TextField, ButtonGroup } from '@mui/material'
import { useNavigate } from 'react-router-dom'
export default function NewProduct({ handleSubmitFunc }) {
    const navigate = useNavigate()
    async function handleSubmit(e) {
        e.preventDefault()
        handleSubmitFunc(e)
    }
    return (
        <Container maxWidth="sm">
            <Typography variant="h5" color="initial" sx={{ marginBottom: "20px" }}>New product</Typography>
            <form onSubmit={handleSubmit}>
                <FormControl sx={{ display: "flex", justifyContent: "space-around", gap: "20px" }}>
                    <TextField
                        id="name"
                        label="Name"
                        variant="outlined"
                    />
                    <TextField
                        id="price"
                        label="Price"
                        variant="outlined"
                    />
                    <TextField
                        id="image"
                        label="image"
                        variant="outlined"
                    />
                    <TextField
                        id="stock"
                        label="Stock"
                        variant="outlined"
                    />
                    <TextField
                        id="size"
                        label="Size"
                        variant="outlined"
                    />
                    <TextField
                        id="color"
                        label="Color"
                        variant="outlined"
                    />
                    <TextField
                        id="category"
                        label="Category"
                        variant="outlined"
                    />
                    <TextField
                        id="description"
                        label="Description"
                        variant="outlined"
                    />
                    <ButtonGroup variant='contained' aria-label="contained button group">
                        <Button type='submit' color='success' sx={{ width: "50%" }}>Save</Button>
                        <Button color='primary' sx={{ width: "50%" }} onClick={() => {
                            navigate('/product-table', { replace: true, state: { bookName: "product table" } })
                        }}>Back</Button>
                    </ButtonGroup>

                </FormControl>

            </form>

        </Container >
    )
}