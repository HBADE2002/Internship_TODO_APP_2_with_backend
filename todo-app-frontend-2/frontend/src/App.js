import { useEffect, useState } from "react"; // import useEffect and useState from react
import ToDo from "./components/ToDo"; // import ToDo component
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utils/HandleApi"; // import functions from HandleApi.js


function App() {

  const [toDo, setToDo] = useState([]) // set toDo to an empty array
  const [text, setText] = useState("") // set text to an empty string
  const [isUpdating, setIsUpdating] = useState(false) // set isUpdating to false
  const [toDoId, setToDoId] = useState("") // set toDoId to an empty string
  const sortedToDo = [...toDo].reverse(); // reverse the order of the toDo array and store it in sortedToDo (so the newest toDo is at the top)

  useEffect(() => {
    getAllToDo(setToDo) // call getAllToDo function and pass in setToDo
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdating(true) // set isUpdating to true
    setText(text)  // set text to the text of the toDo item
    setToDoId(_id) // set toDoId to the _id of the toDo item
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleButtonClick(); // call handleButtonClick function when the enter key is pressed
    }
  };

  const handleButtonClick = () => {
    if (isUpdating) {
      updateToDo(toDoId, text, setToDo, setText, setIsUpdating); // call updateToDo function and pass in toDoId, text, setToDo, setText, and setIsUpdating
    } else {
      addToDo(text, setText, setToDo); // call addToDo function and pass in text, setText, and setToDo
    }
  };

  return (
    <div className="App">

      <div className="container">
        <div className="app-wrapper"> 
        <h1>ToDo App</h1>

        <div className="top">
          <input
            type="text"
            placeholder="Add ToDos..." 
            value={text} // set the value of the input to the text
            onChange={(e) => setText(e.target.value)} // when the input changes, set the text to the value of the input
            onKeyDown={(e) => handleKeyDown(e)} // when "enter" key is pressed, call handleKeyDown function 
          />

      <button
        className="add"
        onClick={handleButtonClick} // when the button is clicked, call handleButtonClick function
      >
        {isUpdating ? "Update" : "Add"}  {/* if isUpdating is true, display "Update", otherwise display "Add" */}
      </button>

        </div>

        <div className="list">
        {sortedToDo.map((item) => ( // map through sortedToDo array and display each item
          <ToDo
            key={item._id}
            text={item.text}
            updateMode={() => updateMode(item._id, item.text)} // when the update button is clicked, call updateMode function and pass in the _id and text of the toDo item
            deleteToDo={() => deleteToDo(item._id, setToDo)} // when the delete button is clicked, call deleteToDo function and pass in the _id of the toDo item
          />
        ))}
      </div>
          </div>

      </div>

    </div>
  );
}

export default App;