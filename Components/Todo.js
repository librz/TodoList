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
        this.props.toggle(parseInt(e.target.id))
    }

    render() {
        const {value} = this.props;
        const style = value.isCompleted ? { textDecorationLine:  "line-through"} : {};
        return (
            <p style={style} id={value.id} onClick={this.handleClick} className="Todo">
              {value.content} 
            </p>
        )
    }
}

export default Todo
