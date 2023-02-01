import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
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
];


// const rows = [
//     { id: 1, images: 'https://source.unsplash.com/random/900×700/?fruit', name: 'fruit', stock: '1', size: '2', color: 'red', category: 'fruitc' },
// ];
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
        <div style={{ height: 600, width: '75%', margin: "auto" }}>
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