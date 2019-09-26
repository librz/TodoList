import React, { Component } from "react";
import { TodoMethods } from './App';

class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.todo.text
    }
  }

  confirm = () => {
    console.log('inside confirm')
    return <TodoMethods.Consumer>
      {
        ({ updateEdittingTodoText }) => {
          updateEdittingTodoText(this.state.text)
          this.close()
        }
      }
    </TodoMethods.Consumer>
  };

  handleKeyUp = (e) => {
    if (e.keyCode !== 13) return;
    else this.confirm();
  };

  render() {
    const { text } = this.state;
    return (
      <TodoMethods.Consumer>
        {
          ({ setEdittingTodoId, updateEdittingTodoText }) => (
            <div className="ModalContainer">
              <div className="Modal">
                <p>
                  <span onClick={() => { setEdittingTodoId(null) }}>X</span>
                </p>
                <input
                  value={text}
                  onChange={e => { this.setState({ text: e.target.value }) }}
                  onKeyUp={(e) => {
                    if (e.keyCode !== 13)
                      return;
                    updateEdittingTodoText(text)
                    setEdittingTodoId(null)
                  }}
                />
                <button onClick={() => {
                  updateEdittingTodoText(text);
                  setEdittingTodoId(null)
                }}>确定</button>
              </div>
            </div>
          )
        }
      </TodoMethods.Consumer>
    );
  }
}

export default Editor;