
const { request, response } = require('express');
const express = require('express');
const jwt = require('jsonwebtoken')
const Users = require('../models/users');
const bcrypt = require('bcrypt')
const adminRouter = express.Router()

adminRouter.post('/register', async (request, response) => {

    const { email, password } = request.body
    console.log(email, password)

    if (password && email) {
        const oldUser = await Users.findOne({ email: email });
        if (oldUser) {
            return response.status(400).json({
                message: "Хэрэглэгч бүртгэлтэй байна",
                email: email,
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        Users.create({ email: email, password: hashedPassword })
            .then((data) => {
                response.status(201).json({
                    message: "Хэрэглэгч амжилттай үүслээ",
                    email: data.email,
                });
                return;
            })
            .catch((error) => {
                return response.status(500).json({
                    success: false,
                    error,
                });
            })
    }
    else {
        return response.status(400).json({ data: ['Input field is empty'] })
    }
})

adminRouter.post('/login', async (request, response) => {

    try {
        const { email, password } = request.body;
        if (!email || !password) {
            return response.status(400).json({
                message: "утгуудыг бүрэн оруулна уу"
            })
        }
        const user = await Users.findOne({ email: email })
        if (!user) {
            return response.status(401).json({
                message: "Нэр болон нууц үгээ шалгана уу !!!"
            })
        }
        const isMatch = await bcrypt.compare(password, user?.password)

        if (isMatch && user) {
            const jwtBody = {
                user_id: user._id,
                email: email
            }
            const token = jwt.sign(jwtBody, "taajAzaaUzdee", { expiresIn: "24h" });

            return response.status(200).json({
                success: true,
                token: token
            });
        }

        if (!isMatch || !user) {
            return response.status(402).json({
                success: false,
                status: "Нэр болон нууц үгээ шалгана уу !!!"
            })
        }
    } catch (error) {
        response.status(400).json({
            message: "Failed Broyaaa"
        })
        console.error(error);
    }
})

module.exports = adminRouter;