import React, { Component } from "react";

class Editor extends Component {

  state = { text: this.props.initialText }

  handleConfirm = () => {
    this.props.onConfirm(this.state.text)
  };

  handleKeyUp = (e) => {
    if (e.keyCode !== 13) return;
    else this.handleConfirm();
  };

  render() {
    const { text } = this.state;
    return (
      <div className="ModalContainer">
        <div className="Modal">
          <p>
            <span onClick={this.props.onCancel()}>X</span>
          </p>
          <input
            value={text}
            onChange={({ target: {value} }) => { this.setState({ text: value }) }}
            onKeyUp={this.handleKeyUp}
          />
          <button onClick={this.handleConfirm}>确定</button>
        </div>
      </div>
      )
  }
}

export default Editor;