import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import { Button, Container, TextField, ButtonGroup } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export default function EditProduct() {
    const URL = 'http://localhost:8080/product-table'
    let data = useLocation()
    console.log('myData', data.state.users[0]);
    const [currentProduct, setCurrentProduct] = useState(data.state.users[0])
    const [product, setProduct] = useState([])

    async function handleEdit() {
        const FETCHED_DATA = await axios({
            url: URL, method: 'PUT',
            data: {
                name: currentProduct.name,
                price: currentProduct.price,
                image: currentProduct.image,
                stock: currentProduct.stock,
                size: currentProduct.size,
                color: currentProduct.color,
                category: currentProduct.category,
                description: currentProduct.description,
            }
        })
        setProduct(FETCHED_DATA.data.data)
    }

    console.log('newProduct', product);
    return (
        //This is Edit Product
        <Container maxWidth="sm">
            <Typography variant="h5" color="initial" sx={{ marginBottom: "20px" }}>Edit product</Typography>
            <form onClick={handleEdit}>
                <FormControl sx={{ display: "flex", justifyContent: "space-around", gap: "20px" }}>
                    <TextField id="name" label="Name" variant="outlined" defaultValue={currentProduct.name}
                        onChange={(e) => setCurrentProduct({ ...currentProduct, name: e.target.value })} />
                    <TextField id="price" label="Price" variant="outlined" defaultValue={currentProduct.price}
                        onChange={(e) => setCurrentProduct({ ...currentProduct, price: e.target.value })} />
                    <TextField id="image" label="image" variant="outlined" defaultValue={currentProduct.image}
                        onChange={(e) => setCurrentProduct({ ...currentProduct, image: e.target.value })} />
                    <TextField id="stock" label="Stock" variant="outlined" defaultValue={currentProduct.stock}
                        onChange={(e) => setCurrentProduct({ ...currentProduct, stock: e.target.value })} />
                    <TextField id="size" label="Size" variant="outlined" defaultValue={currentProduct.size}
                        onChange={(e) => setCurrentProduct({ ...currentProduct, size: e.target.value })} />
                    <TextField id="color" label="Color" variant="outlined" defaultValue={currentProduct.color}
                        onChange={(e) => setCurrentProduct({ ...currentProduct, color: e.target.value })} />
                    <TextField id="category" label="Category" variant="outlined" defaultValue={currentProduct.category}
                        onChange={(e) => setCurrentProduct({ ...currentProduct, category: e.target.value })} />
                    <TextField id="description" label="Description" variant="outlined" defaultValue={currentProduct.description}
                        onChange={(e) => setCurrentProduct({ ...currentProduct, description: e.target.value })} />
                    <ButtonGroup variant='contained' aria-label="contained button group">
                        <Button type='submit' color='success' sx={{ width: "50%" }}>Save</Button>
                        <Button color='primary' sx={{ width: "50%" }}>Back</Button>
                    </ButtonGroup>

                </FormControl>

            </form>

        </Container >
    )
}