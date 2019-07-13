import React, { Component } from "react";
import "./TodoItem.css";

export class TodoObj {
  constructor(id, content, isCompleted) {
    this.id = id;
    this.content = content;
    this.isCompleted = isCompleted;
  }

  toggleStatus = () => {
    this.isCompleted = !this.isCompleted;
  };
}

export const TodoActionTypes = {
  TOGGLE: "TOGGLE",
  EDIT: "EDIT",
  DELETE: "DELETE"
};

export class TodoItem extends Component {
  handleUserAction(actionType, e) {
    e.stopPropagation();
    this.props.onAction(this.props.value.id, actionType);
  }

  constructor(props) {
    super(props);
    this.handleToggle = this.handleUserAction.bind(
      this,
      TodoActionTypes.TOGGLE
    );
    this.handleEdit = this.handleUserAction.bind(this, TodoActionTypes.EDIT);
    this.handleDelete = this.handleUserAction.bind(
      this,
      TodoActionTypes.DELETE
    );
  }

  render() {
    const { value } = this.props;
    const style = value.isCompleted
      ? { textDecorationLine: "line-through", color: "grey" }
      : {};
    return (
      <div className="TodoItem">
        <div className="Content" style={style} onClick={this.handleToggle}>
          {value.content}
        </div>
        <button onClick={this.handleEdit}>编辑</button>
        <div className="Delete" onClick={this.handleDelete}>
          X
        </div>
      </div>
    );
  }
}

export default TodoItem;
