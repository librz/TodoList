import React, { Component } from 'react'
import Todo from './Todo'
import Editor from './Editor'

export class Todos extends Component {
    state = {
        curTodo: null //当前被Edit的Todo
    }

    handleToggle = id => {
        this.props.onToggle(id);
    }

    handleDelete = id => {
        this.props.onDelete(id);
    }

    handleEdit = (todoObj) => {
        //send data to Editor
        this.setState({
            curTodo: todoObj
        })
    }

    handleUpdate = (newTodoObj) => {
        this.setState({
            curTodo: null
        })
        this.props.onUpdate(newTodoObj);
    }

    handleClose = () => {
        this.setState({
            curTodo: null
        })
    }

    render() {
        return (
            <div>
                {this.props.todos.map(ele => 
                    <Todo 
                    key={ele.id} 
                    value={ele} 
                    toggle={this.handleToggle} 
                    onDelete = {this.handleDelete}
                    onEdit = {this.handleEdit}
                    />)
                }
                {
                    this.state.curTodo ?  
                    <Editor 
                    todoObj={this.state.curTodo} 
                    onUpdate={this.handleUpdate} 
                    onClose={this.handleClose} /> 
                    : <div></div>
                }
            </div>
        )
    }
}

export default Todos
