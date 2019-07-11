import React, { Component } from 'react'
// import throttle from 'lodash.throttle'
import './AddTodo.css'

export class AddTodo extends Component {

    //下一步：使用lodash.throttle来限制每秒能调用handleAdd的次数
    handleAdd = (e) => {
        if (this.props.curInput === "")
            return;
        if (e.keyCode && e.keyCode !== 13)//keyCode 13 代表回车键
            return
        this.props.onAdd()
    }

    handleChange = (e) => {
        this.props.onChange(e.target.value)
    }

    render() {
        return (
            <div className="AddTodo">
                <input type="text" value={this.props.curInput} onChange={this.handleChange} onKeyUp={this.handleAdd} />
                <button onClick={this.handleAdd} >添加</button>
            </div>
        )
    }
}

export default AddTodo
