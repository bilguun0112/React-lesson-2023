import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const URL = 'http://localhost:8080/users-table'
export default function UsersTable() {
    const navigate = useNavigate()
    const columns = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'firstname', headerName: 'First Name', width: 100 },
        { field: 'lastname', headerName: 'Last Name', width: 150 },
        { field: 'email', headerName: 'E-mail', width: 100 },
        { field: 'gender', headerName: 'Gender', width: 75 },
        {
            field: 'actions', type: 'actions', width: 100, renderCell: (params) => [
                <Link to={`/users/${params.row.id}`} state={users.filter(p => p.id === params.row.id)}>
                    <Button variant="contained" color="success">EDIT</Button>
                </Link>
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
        <div style={{ height: 600, width: '70%', margin: "auto" }}>
            <Button color='primary' variant='contained' sx={{ marginBottom: "30px" }} onClick={() => {
                navigate('/users-product', { replace: true, state: { bookName: "create product" } })
            }}>Create user</Button>
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