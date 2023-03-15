console.log('Day-77')

const { request, response } = require('express')
const express = require('express');
const mongoose = require('mongoose');
const apiRouter = require("./routes/api.js")

const PORT = 8080
const MONGO_CONNECTION_STRING = "mongodb+srv://blackbilguun:TEozn8OuZBEU4XQF@bilguunee.rn8hbjv.mongodb.net/test";

const app = express()
app.use(express.json())
app.use(apiRouter)
mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected succesfully"))
    .catch((error) => console.error(error))

app.get('/', (request, response) => {
    response.send('<h1 style="text-align: center; color: aqua; background-color : orange"> Day - 77 Mongoose Application </h1>')
})



app.listen(PORT, () => {
    console.log(`Express application is ruuning on http://localhost:${PORT}`)
})
