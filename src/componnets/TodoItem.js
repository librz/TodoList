import React, { Component } from "react";
import { TodoMethods } from './App';

class TodoItem extends Component {    
    render() {
      const { id, text, done } = this.props;
      return (
        <TodoMethods.Consumer>
        {
          ({ toggleTodo, deleteTodo, setEdittingTodoId }) => (
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
          )
        }
        </TodoMethods.Consumer>
      );
    }
}

export default TodoItem;