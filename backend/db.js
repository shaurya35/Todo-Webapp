const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://general:general@cluster0.yfnufzb.mongodb.net/")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.export= {

}