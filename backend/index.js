const express = require('express');
const { createTodo } = require("./types")
const app = express();

app.use(express.json());

app.use("/todo", function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "you sent the wrong inputs"
        })
        return;
    }
    //put it in MongoDB
});

app.use("/todos", function(req, res){

});

app.use("/completed", function(req, res){
    const updatedPayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatedPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "you sent the wrong inputs"
        })
        return;
    }
});