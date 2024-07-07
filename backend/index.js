const express = require('express');
const { createTodo } = require("./types")
const { todos } = require('./db')
const app = express();

app.use(express.json());

app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "you sent the wrong inputs"
        })
        return;
    }
    //put it in MongoDB
    await todos.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "todo created"
    })
});

app.get("/todos",async function(req, res){
    const todos = await todos.find({})
    res.json({
        todos
    })
});

app.put("/completed", async function(req, res){
    const updatedPayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatedPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "you sent the wrong inputs"
        })
        return;
    }

    await todos.update({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "todo marked is completed"
    })
});