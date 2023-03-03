import express from 'express'
import { postUserData, getRoles } from '../services/user-role-services.js';

const user_role_router = express.Router();

user_role_router.post('/users-role-table', async (req, res) => {
    const body = req.body;
    console.log(body.name);
    const result = await postUserData(body.name)
    console.log(result)
    res.status(200).send({})
})

user_role_router.get('/users-role-table', async (req, res) => {
    const result = await getRoles()
    console.log(result);
    res.status(200).send(result)
})

export default user_role_router 
