console.log("Day - 69");

import express from "express";
import { admin } from "./routes/admin.js";
import { api_router } from "./routes/api.js";
import { getPopularCategories } from "./services/category-services.js";
import cors from 'cors'



const app = express()
const PORT = 8081;



app.get('/', (req, res) => {
    res.send("<h1 style='text-align: center; background-color: orange'> Day - 69 <h1>")
})

app.use(express.json())
app.use(cors())
app.use("/admin", admin)
app.use("/api", api_router)


app.listen(PORT, () => {
    console.log(`Express app is running http://localhost:${PORT}`)
})
