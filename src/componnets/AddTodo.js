import React, { Component } from "react";

class AddTodo extends Component {
  state = { curInput: "" }

  handleInputChange = ({ target: {value} }) => {
    this.setState({ curInput: value })
  }

  handleAdd = () => {
    this.props.onAdd(this.state.curInput, false)
    this.setState({ curInput: "" })
  }

  handleKeyUp = ({keyCode}) => {
    if (keyCode !== 13) return;
    this.handleAdd();
  }

  render() {
    const { curInput } = this.state;
    return (
      <div className="AddTodo">
        <input
          value={curInput}
          onChange={this.handleInputChange}
          onKeyUp={this.handleKeyUp}
        />
        <button onClick={this.handleAdd}>
          添加
        </button>
      </div>
    )
  }
}

export default AddTodo;
