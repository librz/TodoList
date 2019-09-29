import React, { Component } from "react";

class TodoItem extends Component {    
    render() {
      const { id, text, done, onDelete, onToggle, onEdit } = this.props;
      return (
            <div className="TodoItem">
              <div 
                className="Content" 
                style={{ 
                  textDecorationLine: done ? "line-through" : "none", 
                  opacity: done ? .5 : 1 
                }} 
                onClick={() => { onToggle(id) }}
              >
                {text}
              </div>

              <div className="Operation">
                <span 
                  className="Edit"
                  onClick={() => { console.log('inside todo item, onEdit'); onEdit(id) }}
                >
                  编辑
                </span>
                
                <span 
                  className="Delete" 
                  onClick={ () => { onDelete(id) } }
                >
                  删除
                </span>
              </div>
            </div>
          )
        }
}

export default TodoItem;