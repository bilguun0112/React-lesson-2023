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
    ];
    const [users, setUsers] = React.useState([])

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