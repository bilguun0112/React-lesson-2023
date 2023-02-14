console.log('Day - 62 - User Login CRUD')

const express = require('express')
const cors = require('cors')
const fs = require('fs')
const { response } = require('express')

const app = express()
const PORT = 8080

app.use(cors())
app.use(express.json())


//! API user register

app.post('/register', (request, response) => {
    const body = request.body;
    console.log(body.role)

    const addNew = {
        id: Date.now().toString().slice(-4),
        firstname: body.firstname,
        lastname: body.lastname,
        email: body.email,
        password: body.password,
        address: body.address,
        // role: body.role
    }
    fs.readFile('./data/users.json', 'utf-8', (readError, readData) => {
        if (readError) {
            response.json({
                status: 'file doesnt exist',
                data: []
            })
        }
        const newObject = JSON.parse(readData)

        fs.readFile('./data/userRole.json', 'utf-8', (readError, readData) => {
            if (readError) {
                response.json({
                    status: 'file read error',
                    data: []
                })
            }
            const roleData = JSON.parse(readData)
            const roleName = roleData.filter(role => role.id === body.role)[0]

            const userData = {
                ...addNew, roles: roleName.name
            }
            newObject.push(userData)
            // ! fs write
            fs.writeFile('./data/users.json', JSON.stringify(newObject), (writeError) => {
                if (writeError) {
                    response.json({
                        status: 'Error during file write',
                        data: []
                    })
                }
                response.json({
                    status: 'success',
                    data: []
                })
            })
        })


    })
})

app.get('/users', (request, response) => {

    fs.readFile('./data/users.json', 'utf-8', (readError, readData) => {
        if (readError) {
            response.json({
                status: 'File not found',
                data: []
            })
        }
        const usersData = JSON.parse(readData)
        response.json({
            status: 'success',
            data: usersData
        })
    })
})


// * API get rules and role

app.get('/users/roles', (request, response) => {

    fs.readFile('./data/userRole.json', 'utf-8', (readError, readData) => {
        if (readError) {
            response.json({
                status: 'file does not exist',
            })
        }
        response.json({
            status: 'success',
            data: JSON.parse(readData)
        })
    })
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})