console.log('Day 63 product category CRUD')

const express = require('express')
const cors = require('cors')
const fs = require('fs')
const { request } = require('http')
const { log } = require('console')
const { response } = require('express')

const app = express()
const PORT = 8080

app.use(cors())
app.use(express.json())

app.route('/category')
    .post((request, response) => {
        const body = request.body
        console.log(body)

        const categoryData = fs.readFileSync("./data/categories.json", {
            encoding: 'utf-8',
            flag: 'r'
        })
        const categoryDataObj = JSON.parse(categoryData)

        const newCategory = {
            id: Date.now().toString().slice(-4),
            name: body.catName
        }
        categoryDataObj.push(newCategory)

        const writeCategoryData = fs.writeFileSync("./data/categories.json", JSON.stringify(categoryDataObj))

        if (writeCategoryData) {
            response.json({
                status: 'File write Error',
                data: []
            })
        } else {
            response.json({
                status: 'success',
                data: categoryDataObj
            })
        }

    })
    .get((request, response) => {
        const readCategoryData = fs.readFileSync('./data/categories.json', {
            encoding: 'utf-8',
            flag: 'r'
        })



        response.json({
            status: 'success',
            data: JSON.parse(readCategoryData)
        })
    })






app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})