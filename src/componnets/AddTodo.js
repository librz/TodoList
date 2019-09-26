import React, { Component } from "react";
import { TodoMethods } from './App';

class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      curInput: ""
    }
  }
  // const { addTodo } = useContext(TodoMethods);
  
  // const add = () => {
  //   addTodo(curInput, false);
  // }
  // const handleKeyUp = ({ keyCode }) => {
  //   if (keyCode !== 13)
  //     return;
  //   add();
  // }

  render() {
    const { curInput } = this.state;
    return (
      <TodoMethods.Consumer>
        {
          ({ addTodo }) => (
            <div className="AddTodo">
              <input
                value={curInput}
                onChange={e => { this.setState({ curInput: e.target.value }) }}
                onKeyUp={({ keyCode }) => {
                  if (keyCode !== 13)
                    return
                  addTodo(curInput, false)
                }}
              />
              <button onClick={() => {
                addTodo(curInput, false)
              }}>
                添加
              </button>
            </div>
          )
        }
      </TodoMethods.Consumer>
    );
  }
}

export default AddTodo;
