import React, { Component } from 'react'
import './Todo.css'

export class TodoObj {
    constructor(id, content, isCompleted) {
        this.id = id;
        this.content = content;
        this.isCompleted = isCompleted;
    }

    toggleStatus = () => {
        this.isCompleted = !this.isCompleted;
    }
}

export class Todo extends Component {

    static defaultProps = {
        value: {}
    }

    handleClick = (e) => {
        e.stopPropagation();
        this.props.toggle(this.props.value.id)
    }

    handleEdit = (e) => {
        e.stopPropagation();
        this.props.onEdit(this.props.value)
    }

    handleDelete = (e) => {
        e.stopPropagation();
        this.props.onDelete(parseInt(this.props.value.id))
    }

    render() {
        console.log('this.props.value: ', this.props.value)
        const {value} = this.props;
        const style = value.isCompleted ? { textDecorationLine:  "line-through"} : {};
        return (
            <div className="Todo">
              <div className="Content" style={style} 
                onClick={this.handleClick} 
                >
                {value.content} 
              </div>
              <button onClick={this.handleEdit}>编辑</button>
              <div className="Delete" onClick={this.handleDelete}>X</div>
            </div>
        )
    }
}

export default Todo
