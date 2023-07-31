const express = require('express'); // import express module
const mongoose = require('mongoose'); // import mongoose module
const cors = require('cors'); // import cors module
const routes = require('./Routes/TodoRoutes'); // import routes

require('dotenv').config(); // import dotenv module

const app = express(); // create an express app
const PORT = process.env.PORT || 5000; // set the port
app.use(express.json()); // use express.json() middleware
app.use(cors()); // use cors middleware
mongoose
  .connect('mongodb+srv://HrishikeshBade:noodles007@cluster0.nqwyg.mongodb.net/ToDoApp?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected')) // log the message
  .catch(err => console.log(err)); // log the error


    
app.use(routes); // use routes
app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); // listen on port 5000