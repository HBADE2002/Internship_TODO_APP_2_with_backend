import axios from "axios"; 

const baseUrl = "http://localhost:5000"; 

const getAllToDo = (setToDo) => { // define getAllToDo function and pass in setToDo
  axios.get(baseUrl).then(({ data }) => { // make a get request to the backend
    console.log("data ---> ", data); // log the data
    setToDo(data);
  });
};

const addToDo = (text, setText, setToDo) => { // define addToDo function and pass in text, setText, and setToDo
  axios
    .post(`${baseUrl}/save`, { text }) // make a post request to the backend
    .then((data) => { // log the data
      console.log(data); 
      setText(""); // set text to an empty string
      getAllToDo(setToDo); // call getAllToDo function and pass in setToDo
    })
    .catch((err) => console.log(err)); // log the error
};

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => { // define updateToDo function and pass in toDoId, text, setToDo, setText, and setIsUpdating
  axios
    .post(`${baseUrl}/update`, { _id: toDoId, text }) // make a post request to the backend
    .then((data) => { // log the data
      setText(""); // set text to an empty string
      setIsUpdating(false); // set isUpdating to false
      getAllToDo(setToDo); // call getAllToDo function and pass in setToDo
    })
    .catch((err) => console.log(err)); // log the error
};

const deleteToDo = (_id, setToDo) => { // define deleteToDo function and pass in _id and setToDo
  axios
    .post(`${baseUrl}/delete`, { _id }) // make a post request to the backend
    .then((data) => {
      console.log(data); // log the data
      getAllToDo(setToDo); // call getAllToDo function and pass in setToDo
    })
    .catch((err) => console.log(err)); // log the error
};

export { getAllToDo, addToDo, updateToDo, deleteToDo }; 
