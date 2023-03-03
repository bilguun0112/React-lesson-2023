console.log("Day - 69");

import express from "express";
import { emp_router } from "./routes/employees.js";



const app = express()
const PORT = 8080;


app.get('/', (req, res) => {
    res.send("<h1 style='text-align: center; background-color: orange'> Day - 69 <h1>")
})

app.use(express.json())
app.use(emp_router)

app.listen(PORT, () => {
    console.log(`Express app is running http://localhost:${PORT}`)
})
