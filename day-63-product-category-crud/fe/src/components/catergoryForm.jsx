import { Button } from "@mui/material"
import Grid from '@mui/material/Grid'
import { TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"

export default function CategoryForm() {
    const URL = 'http://localhost:8080/category'
    const navigate = useNavigate()
    async function handleCategorySubmit(e) {
        e.preventDefault()
        console.log(e.target.catName.value)

        const options = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                catName: e.target.catName.value
            })
        }
        const FETCHED_DATA = await fetch(URL, options)
        const FETCHED_JSON = await FETCHED_DATA.json()
        console.log(FETCHED_JSON)
        if (FETCHED_JSON.status === 'success') {
            navigate('/category/list')
        }
    }
    return (
        <div>
            <h1>Category FORM</h1>
            <form onSubmit={handleCategorySubmit}>
                <Grid
                    container
                    spacing={3}
                    direction={'column'}
                    justify={'center'}
                    alignItems={'center'}
                >
                    <Grid item xs={12}>
                        <TextField id='catName' label="Category" type='text'></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant='contained'>Save</Button>
                    </Grid>
                </Grid>
            </form>
        </div>

    )
}