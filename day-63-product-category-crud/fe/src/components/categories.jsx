import { Button } from "@mui/material"
import { useEffect, useState } from "react"

export default function Categories() {
    const [categories, setCategories] = useState([])
    const URL = 'http://localhost:8080/category'
    useEffect(() => {
        fetchCategories()
    }, [])

    async function fetchCategories() {
        const FETCHED_DATA = await fetch(URL)
        const FETCHED_JSON = await FETCHED_DATA.json()
        if (FETCHED_JSON.status === 'success') {
            setCategories(FETCHED_JSON.data)
        }
    }

    return (
        <div>
            <h1>Category list</h1>
            <table>
                <thead>
                    <tr>
                        <td>Category ID</td>
                        <td>Category Name</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories && categories.map((cat, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{cat.id}</td>
                                    <td>{cat.name}</td>
                                    <td>
                                        <Button variant="contained" color="info"> Edit</Button>
                                    </td>
                                    <td>
                                        <Button variant="contained" color="success"> Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}