import { Button } from "@mui/material";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function CategoryEditForm() {
    const navigate = useNavigate()
    const URL = "http://localhost:8080/category";
    const { id } = useParams()

    const [category, setCategory] = useState({})

    async function fetchCategory() {
        const options = {
            method: 'PUT',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                categoryId: id
            })
        }
        const FETCHED_DATA = await fetch(URL, options)
        const FETCHED_JSON = await FETCHED_DATA.json()
        if (FETCHED_JSON) {
            setCategory(FETCHED_JSON.data)
        }
    }

    useEffect(() => {
        fetchCategory()
    }, [])
    function handleInputChange(e) {
        setCategory(e.target.value)
    }
    async function handleEditSubmit(e) {
        e.preventDefault()
        const options = {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                categoryId: id,
                categoryName: e.target.categoryName.value,
                isEdit: true,
            })
        }
        const FETCHED_DATA = await fetch(URL, options)
        const FETCHED_JSON = await FETCHED_DATA.json()
        if (FETCHED_JSON.status === 'success') {
            navigate('/category/list')
        }
    }
    return (
        <div>
            <h1>Category Edit Form</h1>
            <form onSubmit={handleEditSubmit}>
                <input name="categoryName" value={category.name} onChange={handleInputChange} />
                <Button type="submit" variant="outlined" color="warning">Edit Save</Button>
            </form>
        </div>
    )
}