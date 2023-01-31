console.log('it is my app.js');

// import necessary module

const express = require('express')
const cors = require('cors')
const fs = require('fs');
const { response, request } = require('express');

// configuration of modules
const app = express()
const PORT = 8080

app.use(cors())
app.use(express.json())

app.post('/test', (request, response) => {
    const body = request.body
    console.log(body);
    const newUser = {
        id: Date.now().toString(),
        name: body.name,
        price: body.price,
        image: body.image,
        stock: body.stock,
        size: body.size,
        color: body.color,
        category: body.category,
        description: body.description,
    }

    fs.readFile('./public/data/product.json', 'utf-8', (readError, readData) => {
        if (readError) {
            response.json({
                status: 'file doesnt exist',
                data: []
            })
        }
        const dataObject = JSON.parse(readData)
        console.log(dataObject)
        dataObject.push(newUser)
        fs.writeFile('./public/data/product.json', JSON.stringify(dataObject), (writeError) => {
            if (writeError) {
                response.json({
                    status: 'Error during file write',
                    data: []
                })
            }
            response.json({
                status: 'success',
                data: dataObject
            })
        })
    })
})

app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`);
})