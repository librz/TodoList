import React, { Component } from 'react'
import './Editor.css'

export class Editor extends Component {
    state = {
        content: this.props.todoObj.content
    }

    handleConfirm = () => {
        //send a signal to parent component: <Todos />
        this.props.onUpdate(Object.assign(this.props.todoObj, {content: this.state.content}))
    }

    handleClose = () => {
        //send a signal to parent component: <Todos />
        this.props.onClose();
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleKeyUp = (e) => {
        if (e.keyCode !== 13) return
        else this.handleConfirm()
    }

    render() {
        return (
            <div className="ModalContainer">
                <div className="Modal">
                    <p><span onClick={this.handleClose}>X</span></p>
                    <input value={this.state.content} onChange={this.handleChange} onKeyUp={this.handleKeyUp}  />
                    <button onClick={this.handleConfirm}>确定</button>
                </div>
            </div>
        )
    }
}

export default Editor
