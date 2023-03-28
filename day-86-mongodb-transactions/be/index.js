console.log('Day - 86 MongoDB Transactions')

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();

const app = express()
const PORT = process.env.PORT
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING

const transactionApi = require('./routes/transaction-route')
const productApi = require('./routes/product-route')
app.use(express.json())
app.use(cors())

app.use('/transaction', transactionApi)
app.use('/product', productApi)

app.get('/', (req, res) => {
    res.send('<h1 style="text-align: center">Day 86 MongoDB Transaction </h1>')
})

app.listen(PORT, () => {
    mongoose
        .connect(MONGO_CONNECTION_STRING)
        .then(() => console.log("Database connected succesfully"))
        .catch((error) => console.error(error))
    console.log(`Application is running on http://localhost:${PORT}`)
})