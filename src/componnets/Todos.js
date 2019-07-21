import React, { Component } from "react";
import TodoItem from "./TodoItem";

export class Todos extends Component {
  handleAction = (id, actionType) => {
    this.props.onAction(id, actionType);
  };

  render() {
    return (
      <div>
        {this.props.todos.map(ele => (
          <TodoItem key={ele.id} value={ele} onAction={this.handleAction} />
        ))}
      </div>
    );
  }
}

export default Todos;
