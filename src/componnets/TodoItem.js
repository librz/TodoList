import React, { useContext } from "react";
import { TodoMethods } from './App';

function TodoItem({ id, text, done }) {
    const { toggleTodo, deleteTodo, setEdittingTodoId } = useContext(TodoMethods);

    return (
      <div className="TodoItem">
        <div 
          className="Content" 
          style={{ textDecorationLine: done ? "line-through" : "none" }} 
          onClick={() => { toggleTodo(id) }}
        >
          {text}
        </div>

        <button 
          onClick={() => { setEdittingTodoId(id) }}
        >
          编辑
        </button>
        
        <div 
          className="Delete" 
          onClick={ () => { deleteTodo(id) } }
        >
          X
        </div>
      </div>
    );
}

export default TodoItem;