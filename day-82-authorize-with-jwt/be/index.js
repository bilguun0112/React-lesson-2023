console.log("Day - 82")

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const adminRouter = require('./routes/admin-api')
const apiRouter = require('./routes/api')

const PORT = 8080
const app = express()

app.use(express.json())
app.use(cors())
const MONGO_CONNECTION_STRING = 'mongodb+srv://blackbilguun:TEozn8OuZBEU4XQF@bilguunee.rn8hbjv.mongodb.net/day-82'


app.use('/admin', adminRouter)
app.use('/api', apiRouter)

app.listen(PORT, () => {
    mongoose
        .connect(MONGO_CONNECTION_STRING)
        .then(() => console.log("Database connected succesfully"))
        .catch((error) => console.error(error))
    console.log(`Application is running on http://localhost:${PORT}`)
})