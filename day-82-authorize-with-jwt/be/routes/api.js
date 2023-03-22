

const express = require('express')
const apiRouter = express.Router()
const auth = require('../middleware/auth')

apiRouter.post('/protected', auth, async (request, response, next) => {
    response.status(200).json({
        data: "Succesfully got the ptotected route"
    });
})

apiRouter.post('/unprotected', async (request, response) => {
    response.status(200).json({
        data: "fialed unprotected route",
    });
})


module.exports = apiRouter;