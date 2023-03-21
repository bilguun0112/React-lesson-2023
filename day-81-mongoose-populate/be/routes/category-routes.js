const express = require('express')
const Category = require('../models/category')
const categoryRouter = express.Router()


categoryRouter.get('/list', async (req, res) => {
    const result = await Category.find({})

    res.status(200).json({
        data: result,
    })
})

categoryRouter.post('/create', async (req, res) => {
    const body = req.body
    console.log(body)

    const result = await Category.create(body)

    res.status(200).json({
        data: result
    })
})


module.exports = categoryRouter;