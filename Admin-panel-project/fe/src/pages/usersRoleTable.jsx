import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const URL = 'http://localhost:8080/users-role-table'
export default function UsersRoleTable() {
    const URL = 'http://localhost:8080/users-role-table'
    const navigate = useNavigate()
    const columns = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'name', headerName: 'User Name', width: 100 },
        // {
        //     field: 'actions', type: 'actions', width: 100, renderCell: (params) => [
        //         <Link Link to={`/users-role-edit/${params.row.id}`} state={users.filter(p => p.id === params.row.id)} >
        //             <Button variant="contained" color="success" onClick={() => {
        //                 console.log(params)
        //             }}>EDIT</Button>
        //         </Link >
        //     ],
        // },
        // {
        //     field: 'actions1', type: 'actions', width: 100, renderCell: (params) => [
        //         <Button variant="contained" color="error" onClick={() => handleDelete(params.row)}>DELETE</Button>
        //     ],
        // },
    ];
    const [users, setUsers] = React.useState([])

    async function handleDelete(userId) {
        console.log('delete clicked');
        // const options = {
        //     method: 'DELETE',
        //     headers: {
        //         "Content-type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         userId: userId
        //     })
        // }
        // const FETCHED_DATA = await fetch(URL, options)
        // const FETCHED_JSON = await FETCHED_DATA.json()
        // setUsers(FETCHED_JSON.data)
    }

    async function fetchAllData() {
        const FETCHED_DATA = await fetch(URL)
        const FETCHED_JSON = await FETCHED_DATA.json()
        setUsers(FETCHED_JSON)
        console.log(FETCHED_JSON)
    }

    React.useEffect(() => {
        fetchAllData()
    }, [])
    return (
        <div style={{ height: 600, width: '70%', margin: "auto" }}>
            <Button color='primary' variant='contained' sx={{ marginBottom: "30px" }} onClick={() => {
                navigate('/users-role-add')
            }}>Create user role</Button>
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