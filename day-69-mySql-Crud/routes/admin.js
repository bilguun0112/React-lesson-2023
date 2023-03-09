import express, { request, response } from 'express'

const admin = express.Router();
import { getEmployees, hireEmployee, getMaxNo, fireEmployee, updateEmployee } from '../services/employee-services.js';

admin.get('/employees', async (req, res) => {

    const result = await getEmployees();
    console.log(result)
    res.status(200).send(result);
})


admin.post('/employee', async (request, response) => {

    const { birthDate, firstName, lastName, gender, hireDate } = request.body;
    const { max } = await getMaxNo()
    console.log(max);
    const result = await hireEmployee(
        max + 1,
        birthDate,
        firstName,
        lastName,
        gender,
        hireDate);
    console.log(result);
    response.status(200).send({})
})

admin.delete('/employee', async (request, response) => {
    const body = request.body;
    console.log(body);

    const result = await fireEmployee(body.empNo);
    response.status(200).send({})
})


admin.put('/employee', async (req, res) => {
    const body = req.body;
    console.log(body);

    // const { empNo, lastName, gender } = req.body;
    const result = await updateEmployee(body.empNo, body.lastName, body.gender);

    res.status(200).send({})
})
export { admin }
