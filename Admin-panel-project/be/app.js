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

app.post('/product-table', (request, response) => {
    const body = request.body
    console.log(body);
    const newUser = {
        id: Date.now().toString().slice(9, 14),
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

app.get('/product-table', (request, response) => {
    fs.readFile('./public/data/product.json', 'utf-8', (readError, readData) => {
        if (readError) {
            status: 'file reader error',
                data = []
        }
        const objectData = JSON.parse(readData)
        response.json({
            status: 'success',
            data: objectData
        })
    })
})

app.delete('/product-table', (request, response) => {
    //data avah
    const body = request.body
    console.log('Bodyyyy', body);
    // failaa unshih
    fs.readFile('./public/data/product.json', 'utf-8', (readError, readData) => {
        if (readError) {
            response.json({
                status: 'File reader error',
                data: []
            })
        }
        // object irj bgaa bolhoor object unshina
        const readObject = JSON.parse(readData);
        // console.log('readObject', readObject);
        const filteredObjects = readObject.filter(o => o.id !== body.userId.id);

        // butsaaj file ruugaa bichih
        fs.writeFile('./public/data/product.json', JSON.stringify(filteredObjects), (writeError) => {
            if (writeError) {
                response.json({
                    status: 'write file error',
                    data: []
                })
            }
            response.json({
                status: 'success',
                data: filteredObjects
            })
        })
    })
})

app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`);
})