const { request, response } = require('express');
const express = require('express');
const User = require('../models/users');

const Router = express.Router();

Router.get('/users', async (request, response) => {
    const result = await User.find({});
    console.log(result);
    response.json({ data: result });
})
// ! ID ashiglaj hailt hiiv
Router.get('/user', async (request, response) => {
    const userId = request.query.id;
    console.log(request.query);
    const user = await User.findOne({ _id: userId })
    response.json({ data: user });
})

// ! Emaileer haih
// Router.get('/userByMail', async (request, response) => {
//     const userMail = request.query.email;
//     console.log(request.query.email);
//     const user = await User.findOne({ email: userMail })
//     response.json({ data: user });
// })

// ! Emaileer haih todorhoi baganii medeelel avah
Router.get('/userByMail', async (request, response) => {
    const userMail = request.query.email;
    console.log(request.query.email);
    const user = await User.find({ email: userMail }, '_id name email').exec()

    response.json({ data: user });
})

Router.post('/user', async (request, response) => {
    const body = request.body;
    const newUser = new User(body)

    const result = await newUser.save()
    console.log(result);

    response.json({ data: result })
})

Router.get('/userGetEmail', async (req, res) => {
    const userEmail = request.query.email;

    const foundUser = await User.findByUserEmail(userEmail);
    response.json({
        data: foundUser,
    })
})

Router.put('/updateUser', async (request, response) => {
    const result = await User.updateOne(
        { email: "reddragon@gmail.com" },
        { $set: { lastLogin: Date.now() } }
    );
    response.json({ date: result })
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