const express = require("express");
const Todo = require("../models/Todo");
const todoRouter = express.Router();

todoRouter.post("/create", async (request, response) => {
    const body = request.body;
    const todo = await Todo.create(body);
    const result = await todo.populate("category");
    response.status(200).json({
        data: result,
    });
});
todoRouter.get("/list", async (request, response) => {
    const result = await Todo.find({}).populate("category");
    response.status(200).json({
        data: result,
    });
});

todoRouter.put('/update', async (req, res) => {
    const body = req.body;
    const result = await Todo.updateMany({ name: body[1].name }, { $set: { checked: body[0].checked } })

    res.status(200).json({
        data: result,
    })
})

todoRouter.delete('/delete', async (req, res) => {
    const body = req.body
    const result = await Todo.deleteMany(body);

    res.status(200).json({
        data: result
    })
})


module.exports = todoRouter;