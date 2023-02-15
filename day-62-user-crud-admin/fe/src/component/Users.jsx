import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { useEffect } from 'react';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstname',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastname',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 110,
        editable: true,
    },
    {
        field: 'address',
        headerName: 'Address',
        width: 200,
        editable: true,
    },
    {
        field: 'role',
        headerName: 'Role',
        width: 100,
        editable: true,
    }

];
const URL = 'http://localhost:8080/users'


export default function Users() {
    async function fetchUsers() {
        const FETCHED_DATA = await fetch(URL)
        const FETCHED_JSON = await FETCHED_DATA.json()
        console.log(FETCHED_JSON)
        setUsers('data', FETCHED_JSON.data)
    }
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <Box sx={{ height: 400, width: '80vw', margin: "auto" }}>
            <DataGrid
                rows={users}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>
    );
}