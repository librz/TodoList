import React, { useContext } from "react";
import { TodoMethods } from './App';

function TodoItem({ id, text, done }) {
    const { toggleTodo, deleteTodo, setEdittingTodoId } = useContext(TodoMethods);

    return (
      <div className="TodoItem">
        <div 
          className="Content" 
          style={{ textDecorationLine: done ? "line-through" : "none", opacity: done ? .5 : 1 }} 
          onClick={() => { toggleTodo(id) }}
        >
          {text}
        </div>

        <div className="Operation">
          <span 
            className="Edit"
            onClick={() => { setEdittingTodoId(id) }}
          >
            编辑
          </span>
          
          <span 
            className="Delete" 
            onClick={ () => { deleteTodo(id) } }
          >
            删除
          </span>
        </div>

        
      </div>
    );
}

export default TodoItem;