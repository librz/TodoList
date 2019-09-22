import React, { useState, useContext } from "react";
import { TodoMethods } from './App';

function AddTodo() {
  const [curInput, setCurInput] = useState("");
  const { addTodo } = useContext(TodoMethods);
  
  const add = () => {
    addTodo(curInput, false);
  }
  const handleKeyUp = ({ keyCode }) => {
    if (keyCode !== 13)
      return;
    add();
  }

  return (
    <div className="AddTodo">
      <input
        value={curInput}
        onChange={e =>{ setCurInput(e.target.value) }}
        onKeyUp={handleKeyUp}
      />
      <button onClick={add}>添加</button>
    </div>
  );
}

export default AddTodo;
