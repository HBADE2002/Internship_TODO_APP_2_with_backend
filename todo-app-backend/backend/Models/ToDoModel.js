const mongoose = require('mongoose'); // import mongoose module to connect to the database
const todoSchema = new mongoose.Schema({ // create a schema for the todo
    text: {
        type: String, // set the type to string
        require: true // set require to true
    }
});

const TodoModel = mongoose.model('Todo', todoSchema); // create a model for the todo
module.exports = TodoModel;  // export the model