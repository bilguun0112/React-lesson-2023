import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const URL = 'http://localhost:8080/test'
export default function DataTable() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 80 },
        {
            field: 'images', headerName: 'Image', width: 200, renderCell: (params) => {
                return (
                    <img src={params.row.image} alt='' style={{ width: "180px", heigth: "160px" }} />
                )
            }
        },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'stock', headerName: 'Stock', width: 100 },
        { field: 'size', headerName: 'Size', width: 100 },
        { field: 'color', headerName: 'Color', width: 100 },
        { field: 'category', headerName: 'Category', width: 100 },
        {
            field: 'actions', type: 'actions', width: 100, renderCell: (params) => [
                console.log(params),
                <Button variant="contained" color="success">EDIT</Button>
            ],
        },
        {
            field: 'actions1', type: 'actions', width: 100, renderCell: (params) => [
                <Button variant="contained" color="error" onClick={() => handleDelete(params.row)}>DELETE</Button>
            ],
        },

    ];
    const [users, setUsers] = React.useState([])

    async function fetchAllData() {
        const FETCHED_DATA = await fetch(URL)
        const FETCHED_JSON = await FETCHED_DATA.json()
        setUsers(FETCHED_JSON.data)
    }

    React.useEffect(() => {
        fetchAllData()
    }, [])
    async function handleDelete(userId) {
        const options = {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                userId: userId
            })
        }
        const FETCHED_DATA = await fetch(URL, options)
        const FETCHED_JSON = await FETCHED_DATA.json()
        setUsers(FETCHED_JSON.data)
    }
    return (
        <div style={{ height: 600, width: '60%', margin: "auto" }}>
            <DataGrid
                rows={users}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                rowHeight={180}
                checkboxSelection
            />
        </div>
    );
}