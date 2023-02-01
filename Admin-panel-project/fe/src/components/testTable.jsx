import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
        field: 'images', headerName: 'Image', width: 200, renderCell: (params) => {
            return (
                <>
                    <img src={params.value} style={{ width: "180px", heigth: "350px" }} alt='' />
                </>
            )
        }
    },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'stock', headerName: 'Stock', width: 100 },
    { field: 'size', headerName: 'Size', width: 100 },
    { field: 'color', headerName: 'Color', width: 100 },
    { field: 'category', headerName: 'Category', width: 100 },
    {
        field: 'actions', type: 'actions', width: 100, getActions: () => [
            <Button variant="contained" color="success" >EDIT</Button>,
        ],
    },
    {
        field: 'actions1', type: 'actions', width: 100, getActions: () => [
            <Button variant="contained" color="error">DELETE</Button>,
        ],
    },
];

const URL = 'http://localhost:8080/test'
export default function DataTable() {
    const [users, setUsers] = React.useState([])

    async function fetchAllData() {
        const FETCHED_DATA = await fetch(URL)
        const FETCHED_JSON = await FETCHED_DATA.json()
        console.log(FETCHED_JSON.data);
        setUsers(FETCHED_JSON.data)
    }

    React.useEffect(() => {
        fetchAllData()
    }, [])
    console.log('suers', users);
    return (
        <div style={{ height: 600, width: '60%', margin: "auto" }}>
            <DataGrid
                rows={users}
                columns={columns}
                pageSize={9}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}