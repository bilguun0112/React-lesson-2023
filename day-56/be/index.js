console.log('Day 56 - REST API')

const { request, response } = require('express')
const express = require('express')
const fs = require('fs')
const cors = require('cors')

const app = express()
const PORT = 8080

app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
    response.send('<h1>Express REST API is running</h1>')
})
app.get('/timers', (request, response) => {

    fs.readFile('./data/data.json', 'utf-8', (readError, readData) => {
        if (readError) {
            response.json({
                status: 'file not found ',
                data: []
            })
        }

        const timerData = JSON.parse(readData);
        response.json({
            status: 'success',
            data: timerData
        })
    })
})

app.post('/timers', (request, response) => {
    const body = request.body
    // console.log('create', body);
    const addNew = {
        id: body.id,
        title: body.title,
        project: body.project,
        elapsed: body.elapsed,
    }
    fs.readFile('./data/data.json', 'utf-8', (readError, readData) => {
        if (readError) {
            response.json({
                status: 'file doesnt exist',
                data: []
            })
        }
        const newObject = JSON.parse(readData)
        newObject.push(addNew)
        // console.log('newObject', newObject);
        fs.writeFile('./data/data.json', JSON.stringify(newObject), (writeError) => {
            if (writeError) {
                response.json({
                    status: 'Error during file write',
                    data: []
                })
            }
            response.json({
                status: 'success',
                data: newObject
            })
        })


    })
})

app.put('/timers', (request, response) => {
    fs.readFile("./data/data.json", "utf8", (readError, readData) => {
        if (readError) {
            response.json({
                status: "file read error",
                data: [],
            });
        }
        const getData = JSON.parse(readData);
        const newData = getData.map(w => {
            if (w.id === request.body.id) {
                w.title = request.body.title;
                w.project = request.body.project;
                w.elapsed = request.body.elapsed;
            }
            return w;
        })
        fs.writeFile("./data/data.json", JSON.stringify(newData), (writeError) => {
            if (writeError) {
                response.json({
                    status: "file write error",
                    data: [],
                })
            }
            response.json({
                status: "success",
                data: newData
            })
        })
    })
})
app.delete('/timers', (request, response) => {
    const body = request.body;

    fs.readFile('./data/data.json', 'utf-8', (readError, readData) => {
        if (readError) {
            response.json({
                status: 'File reader error',
                data: []
            })
        }

        const readFile = JSON.parse(readData);
        const filteredData = readFile.filter(o => o.id !== body.id);

        fs.writeFile('./data/data.json', JSON.stringify(filteredData), (writeError) => {
            if (writeError) {
                response.json({
                    status: 'write file error',
                    data: []
                })
            }
        })
        response.json({
            status: 'success',
            data: filteredData
        })
    })
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})