const { request, response } = require('express');
const express = require('express');
const User = require('../models/users');

const Router = express.Router();

Router.get('/users', async (request, response) => {
    const result = await User.find({});
    console.log(result);
    response.json({ data: result });
})

Router.post('/user', async (request, response) => {
    const body = request.body;

    const newUser = new User(body)

    const result = await newUser.save()
    console.log(result);

    response.json({ data: result })
})


Router.delete('/users', async (request, response) => {
    const id = request.body._id;
    console.log('my params', request.body._id)

    try {
        const result = await User.deleteOne({ _id: id });
        console.log(result);

        if (result.deletedCount === 0) {
            response.status(404).json({ error: 'User not found' });
        } else {
            response.json({ message: 'User deleted successfully' });
        }
    } catch (error) {
        response.status(500).json({ error: 'Internal server error' });
    }
});



module.exports = Router