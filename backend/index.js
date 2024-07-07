const express = require('express');
const app = express();

app.use(express.json());

app.use("/todo", function(req, res){

});

app.use("/todos", function(req, res){

});

app.use("/completed", function(req, res){

});