console.log("Day - 82")

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();
const adminRouter = require('./routes/admin-api')
const apiRouter = require('./routes/api')

const app = express()
const PORT = process.env.PORT
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING

app.use(express.json())
app.use(cors())


app.use('/admin', adminRouter)
app.use('/api', apiRouter)

app.listen(PORT, () => {
    mongoose
        .connect(MONGO_CONNECTION_STRING)
        .then(() => console.log("Database connected succesfully"))
        .catch((error) => console.error(error))
    console.log(`Application is running on http://localhost:${PORT}`)
})