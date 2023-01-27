console.log('Day - 51 : API express JS');

const { request, response } = require('express');
const express = require('express')

const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const PORT = 8080

app.use(cors())
app.use(express.json())

let data = [
    {
        "id": 1,
        "name": "khan",
        "major": "cs"
    }
]

app.put("/data", (request, response) => {
    const updateDat = data.map(d => {
        if (d.id === request.body.id) {

            d.name = request.body.name,
                d.major = request.body.major
        }
        return d
    })
    data = updateDat
    console.log('up', updateDat);
    // //  method 2 
    // const found = data.filter(d => d.id !== request.body.id)
    // data = [...found, request.body]
    response.json(data)
})

app.get("/", (request, response) => {
    response.send("bi server bn sfsfsdf")
})

app.get("/data", (request, response) => {
    response.json(data)
})

app.post("/data", (request, response) => {

    console.log('body', request.body);
    const length = data.length;
    const requestData = {
        id: length + 1,
        name: request.body.name,
        major: request.body.major
    }
    data = [...data, requestData]
    response.json(data)
})


app.delete("/data", (request, response) => {
    console.log('delete', request.body);
    const newData = data.filter(d => d.id !== request.body.id);
    data = newData
    response.json(data)
})

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
})