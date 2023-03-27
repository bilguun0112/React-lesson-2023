console.log("Day - 85")

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();

const restaurantApi = require('./routes/restaurantRoutes')
const neighborhoodsApi = require('./routes/neighborhoodsRoutes')

const app = express()
const PORT = process.env.PORT
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING

app.use(express.json())
app.use(cors())

app.use('/restaurant', restaurantApi)
app.use('/restaurant', neighborhoodsApi)

app.get('/', (req, res) => {
    res.json({
        data: []
    })
})


app.listen(PORT, () => {
    mongoose
        .connect(MONGO_CONNECTION_STRING)
        .then(() => console.log("Database connected succesfully"))
        .catch((error) => console.error(error))
    console.log(`Application is running on http://localhost:${PORT}`)
})