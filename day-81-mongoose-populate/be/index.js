console.log('Day 80 file upload multer')

const express = require('express')
const cors = require('cors')
const multer = require('multer')
const fs = require('fs')
const mongoose = require('mongoose')
const { request, response } = require('express')
const { async } = require('regenerator-runtime')
const todoRouter = require('./routes/category-routes')
const categoryRouter = require('./routes/todo-routes')


const app = express()
const PORT = 8080
app.use('/todo', todoRouter)

const MONGO_CONNECTION_STRING = 'mongodb+srv://blackbilguun:TEozn8OuZBEU4XQF@bilguunee.rn8hbjv.mongodb.net/test'

app.use(express.json())
app.use(cors())

app.use('/category', categoryRouter)

app.get('/', (req, res) => {
    res.send(
        '<h1>Hello Day-81 Insert/Update/Delete Many</h1>'
    )
})



app.listen(PORT, () => {
    mongoose
        .connect(MONGO_CONNECTION_STRING)
        .then(() => console.log("Database connected succesfully"))
        .catch((error) => console.error(error))
    console.log(`Express application is running http://localhost:${PORT}`)
})