console.log('Day - 62 - User Login CRUD')

const express = require('express')
const cors = require('cors')
const fs = require('fs')
const { response } = require('express')
const { request } = require('http')
const bcrypt = require('bcrypt')

const app = express()
const PORT = 8080
const SALT_ROUNDS = 10

app.use(cors())
app.use(express.json())


//! API user register

app.post('/register', (request, response) => {
    const body = request.body;
    console.log(body.role)

    // const addNew = {
    //     id: Date.now().toString().slice(-4),
    //     firstname: body.firstname,
    //     lastname: body.lastname,
    //     email: body.email,
    //     password: body.password,
    //     address: body.address,
    //     // role: body.role
    // }
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

            const userPassword = body.password;

            bcrypt.genSalt(SALT_ROUNDS, (err, salt) => {
                if (err) {
                    response.json({
                        status: 'generating salt error',
                        data: []
                    })
                }
                bcrypt.hash(userPassword, salt, (hashError, hashData) => {
                    if (hashError) {
                        response.json({
                            status: 'hashing has error',
                            data: []
                        })
                    }
                    console.log('body', body)

                    const newUser = {
                        id: Date.now().toString().slice(-4),
                        firstname: body.firstname,
                        lastname: body.lastname,
                        email: body.email,
                        password: hashData,
                        address: body.address,
                        role: roleName
                    }
                    newObject.push(newUser)
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
                            data: JSON.stringify(newUser)
                        })
                    })
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


// todo Login form section

app.post('/login', (request, response) => {
    const body = request.body
    console.log(body)

    fs.readFile('./data/users.json', 'utf-8', (readError, readData) => {

        // * Хэрвээ файл уншихад амжилтгүй болвол

        if (readError) {
            response.json({
                status: 'file doesnt exist',
                data: []
            })
        }
        // * JSON string - ээс object болгохгүй бол болохгүй
        const userArrayObject = JSON.parse(readData)

        const foundUser = userArrayObject.filter(user => body.email === user.email);

        // * хэрвээ хэрэглэгч users.json дотор байхгүй бол хэрэглэгч олдсонгүй гэж буцаана
        if (foundUser.length === 0) {
            response.json({
                status: 'User not Found',
                data: []
            })
        } else {
            // * хэрвээ хэрэглэгч users.json дотор байх юм бол
            const foundUserObj = foundUser[0]
            // console.log('foundUserObj', foundUserObj)
            const plainPassword = body.password
            const savedPassword = foundUserObj.password;

            bcrypt.compare(plainPassword, savedPassword, (compareError, compareResult) => {
                if (compareError) {
                    response.json({
                        status: "User name or password dont match",
                        data: []
                    })
                }
                if (compareResult) {
                    response.json({
                        status: "success",
                        data: {
                            email: foundUserObj.email,
                            firstname: foundUserObj.firstname,
                            lastname: foundUserObj.lastname,
                        }
                    })
                } else {
                    response.json({
                        status: "Username or Password dont match !!"
                    })
                }
            })
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})