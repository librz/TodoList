import React, { Component } from "react";
import { TodoMethods } from './App';

class AddTodo extends Component {
  state = { curInput: "" }

  handleInputChange = ({ target: {value} }) => {
    this.setState({ curInput: value })
  }

  render() {
    const { curInput } = this.state;
    return (
      <TodoMethods.Consumer>
        {
          ({ addTodo }) => (
            <div className="AddTodo">
              <input
                value={curInput}
                onChange={this.handleInputChange}
                onKeyUp={
                  ({keyCode}) => {
                    if (keyCode !== 13) return;
                    addTodo(curInput, false)
                    this.setState({ curInput: "" })
                  }
                }
              />
              <button onClick={
                () => {
                  addTodo(curInput, false);
                  this.setState({curInput: ""})
                }
              }>
                添加
              </button>
            </div>
          )
        }
      </TodoMethods.Consumer>
    )
  }
}

export default AddTodo;
