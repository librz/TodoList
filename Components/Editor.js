import React, { Component } from "react";
import "./Editor.css";

export class Editor extends Component {
  //Editor has 2 actions that needs to notify parent
  //Close, Confirm
  state = {
    content: this.props.initialContent
  };

  updateContent = e => {
    this.setState({
      content: e.target.value
    });
  };

  handleConfirm = () => {
    if (this.state.content === this.props.initialContent)
      this.props.onClose()
    this.props.onUpdate(this.state.content);
  };

  handleKeyUp = e => {
    if (e.keyCode !== 13) return;
    else this.handleConfirm();
  };

  handleClose = () => {
    this.props.onClose();
  };

  render() {
    return (
      <div className="ModalContainer">
        <div className="Modal">
          <p>
            <span onClick={this.handleClose}>X</span>
          </p>
          <input
            value={this.state.content}
            onChange={this.updateContent}
            onKeyUp={this.handleKeyUp}
            autoFocus={true}
          />
          <button onClick={this.handleConfirm}>确定</button>
        </div>
      </div>
    );
  }
}

export default Editor;
