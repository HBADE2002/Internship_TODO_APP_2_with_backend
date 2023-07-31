const { Router } = require('express'); // import Router module from express
const { getTodo,saveTodo, updateToDo, deleteToDo } = require('../controller/ToDoController'); // import getTodo, saveTodo, updateToDo, and deleteToDo functions from ToDoController
const router = Router(); // create a router

router.get('/', getTodo); // create a get route
router.post('/save', saveTodo); // create a post route
router.post('/update', updateToDo); // create a post route
router.post('/delete', deleteToDo); // create a post route


module.exports = router; // export the router