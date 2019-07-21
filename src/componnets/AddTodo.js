import React, { Component } from "react";
// import throttle from 'lodash.throttle'
import "./AddTodo.css";

export class AddTodo extends Component {
  state = {
    curInput: "" //need to clear input after confirmation, so input needs to be controlled componet
  };

  //下一步：使用lodash.throttle来限制每秒能调用handleAdd的次数
  handleAdd = e => {
    if (this.props.curInput === "") return;
    if (e.keyCode && e.keyCode !== 13)
      //keyCode 13代表回车
      return;
    this.props.onAdd(this.state.curInput);
    this.setState({
      curInput: ""
    });
  };

  handleChange = e => {
    this.setState({
      curInput: e.target.value
    });
  };

  render() {
    return (
      <div className="AddTodo">
        <input
          value={this.state.curInput}
          onChange={this.handleChange}
          onKeyUp={this.handleAdd}
        />
        <button onClick={this.handleAdd}>添加</button>
      </div>
    );
  }
}

export default AddTodo;
