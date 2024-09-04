import { useState } from "react";
import "./App.css";

function App() {
  let [inputText, setInputText] = useState("");
  let [list, setList] = useState([]);
  let [editIndex ,setEditIndex ] = useState(null)

  let handletext = (event) => {
    setInputText(event.target.value);

    if(event.key === "Enter") addText();
  };

  let addText = () => {
    let copyList = [...list];
    if(editIndex !== null){
      copyList[editIndex] = inputText
      setInputText(copyList)
      setEditIndex(null)
    }else{
      if (inputText.trim()){
        copyList.push(inputText);
        
      } else{
        alert("Please Enter text!")
      }
      

      
    }
    setList(copyList);
    setInputText('')

  };
  let delText = (index) => {
    let copyList = [...list];
    copyList.splice(index, 1);
    setList(copyList);
  };
  
let editText = (index) => {
  setInputText(list[index]); // Load the selected item into the input field
  setEditIndex(index); // Set the index of the item being edited
};
  return (
    <>
    <h1>Todo List</h1>
      <input id="input" value={inputText} onChange={handletext} type="text" onKeyDown={handletext} />
      <button id="addBtn" onClick={addText}>
        {" "}
        {editIndex !== null ? "Update" : "Add"}
      </button>
      <ul>
        {list.map((data, index) => {
          return (
            <li key={index} >
              <span>{data}</span>
              <div>
                <button id="editBtn" onClick={() => editText(index)}>
                  Edit
                </button>{" "}
                <button id="delBtn" onClick={() => delText(index)}>
                  delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
