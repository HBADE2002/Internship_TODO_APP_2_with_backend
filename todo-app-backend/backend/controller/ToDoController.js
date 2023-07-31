const ToDoModel = require("../Models/ToDoModel");

module.exports.getTodo = async (req, res) => { // getTodo is a function
  const todo = await ToDoModel.find(); // await is used to wait for the response
  res.send(todo); // send the response
};

module.exports.saveTodo = async (req, res) => { // saveTodo is a function
  const { text } = req.body; // destructure text from req.body
    ToDoModel // ToDoModel is a mongoose model
        .create({ text }) // create a new document in the database
        .then((data) => { // log the data
            console.log("Data saved successfully");  
            console.log(data); 
            res.send(data); // send the response
        });
};

module.exports.updateToDo = async (req, res) => {
    const { _id, text } = req.body; // destructure _id and text from req.body
    ToDoModel
        .findByIdAndUpdate(_id, { text }) // find the document by id and update the text
        .then(() => res.send("Updated successfully")) // send the response
        .catch((err)=> console.log(err)) // log the error
};

module.exports.deleteToDo = async (req, res) => { // deleteToDo is a function
  const { _id } = req.body; // destructure _id from req.body
  ToDoModel.findByIdAndDelete(_id) // find the document by id and delete it
    .then(() => res.send("Deleted successfully")) // send the response
    .catch((err) => { // log the error
      console.log(err);   
      res.status(500).send("Error deleting ToDo"); // send the response
    });
};
