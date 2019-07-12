import React, { Component } from 'react'
import AddTodo from './AddTodo'
import Todos from './Todos'
import { TodoObj } from './Todo'
import Filter from './Filter'
import FilterTypes from './FilterTypes'
import './TodoList.css'

export class TodoList extends Component {
    state = {
        todos: [],
        filterText: FilterTypes.All,
        curInput: ""
    }

    getCurTodos = () => {
        const { todos, filterText } = this.state;
        switch (filterText) {
            case FilterTypes.INCOMPLETED:
                return todos.filter(ele => !ele.isCompleted)
            case FilterTypes.COMPLETED:
                return todos.filter(ele => ele.isCompleted)
            default:
                return todos;
        }
    }

    generateId = (arr) => {
        let ret = 0;
        while (arr.find(ele => ele.id === ret))
            ret += 1;
        return ret;
    }

    handleAdd = () => {
        //setState is asynchronous
        //pass in a function: update state with values that depend on the current state
        this.setState(curState => {
            const curTodos = curState.todos;
            const newEle = new TodoObj(this.generateId(curTodos), curState.curInput, false);
            return {
                todos: [...curTodos, newEle], 
                curInput: "",
                filterText: FilterTypes.ALL
            }
        })
        /* stupid mistake: todos.push(newEle) will return todos.length instead of the new array
        this.setState({
            todos: this.state.todos.push(newEle)
        */
    }

    handleDelete = id => {
        this.setState(curState => {
            return {
                todos: curState.todos.filter(ele => ele.id !== id)
            }
        })
    }

    handleInputChange = inputText => {
        this.setState({
            curInput: inputText
        })
    }

    handleFilterChange = filterText => {
        this.setState({
            filterText : filterText
        })
    }

    handleToggle = id => {
        this.state.todos.find(ele => ele.id === id).toggleStatus();
        //this.state改变了但react并不知道
        this.forceUpdate();
        // this.setState({}) 和forceUpdate效果一致
    }

    handleUpdate = newTodoObj => {
        this.state.todos.find(ele => ele.id === newTodoObj.id).content = newTodoObj.content;
        this.forceUpdate();
    }

    render() {
        return (
            <div className="TodoList">
                <AddTodo curInput={this.state.curInput} onChange={this.handleInputChange} onAdd={this.handleAdd}  />
                <Todos todos={this.getCurTodos()} onToggle={this.handleToggle} onDelete={this.handleDelete} onUpdate={this.handleUpdate} />
                <Filter filterText={this.state.filterText} onChange={this.handleFilterChange} />
            </div>
        )
    }
}

export default TodoList
