import React, { Component } from 'react'
import Todo from './Todo'

export class Todos extends Component {

    handleToggle = id => {
        this.props.onToggle(id);
    }

    render() {
        return (
            <div>
                {this.props.todos.map(ele => 
                    <Todo 
                    key={ele.id} 
                    value={ele} 
                    toggle={this.handleToggle} 
                    />)
                }
            </div>
        )
    }
}

export default Todos
