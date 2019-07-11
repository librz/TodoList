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

    handleAdd = () => {
        //setState is asynchronous
        //pass in a function: update state with values that depend on the current state
        this.setState(curState => {
            const curTodos = curState.todos;
            const newEle = new TodoObj(curTodos.length, curState.curInput, false);
            return {
                todos: [...curTodos, newEle], 
                curInput: "",
                filterText: FilterTypes.ALL
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
        this.forceUpdate();
    }

    render() {
        return (
            <div className="TodoList">
                <AddTodo curInput={this.state.curInput} onChange={this.handleInputChange} onAdd={this.handleAdd}  />
                <Todos todos={this.getCurTodos()} onToggle={this.handleToggle} />
                <Filter filterText={this.state.filterText} onChange={this.handleFilterChange} />
            </div>
        )
    }
}

export default TodoList
