import React, { Component } from "react";
import { v4 } from 'uuid';
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem"
import Filter from "./Filter";
import FilterTypes from "./FilterTypes";
import Editor from './Editor';
import "../css/App.scss";

/*
let todoExample = {
  id: 1,
  text: "Eat Dinner",
  done: false
}
*/

class App extends Component {
  state = {
    todos: [],
    filterType: FilterTypes.ALL,
    edittingTodoId: null,
  }

  addTodo = (text, done) => {
    this.setState(prev => {
        return { todos: [...prev.todos, { id: v4(), text, done }] }
    })
  }

  deleteTodo = (id) => {
    this.setState(prev => {
      return { todos: prev.todos.filter(todo => todo.id !== id) }
    })
  }

  toggleTodo = (id) => {
    this.setState(({todos}) => {
      let result = [];
      todos.forEach(todo => {
        if (todo.id !== id)
          result.push(todo)
        else 
          result.push({ ...todo, done: !todo.done })
      })
      return { todos: result }
    })
  }

  setFilterType = (type) => {
    this.setState({
      filterType: type
    })
  }

  updateEdittingTodoText = (newText) => {
    const { edittingTodoId } = this.state;
    this.setState(({todos}) => {
      let result = [];
      todos.forEach(todo => {
        if (todo.id === edittingTodoId)
          result.push({ ...todo, text: newText })
        else
          result.push(todo)  
      })
      return { todos: result }
    })
  }

  getFilteredTodos = () => {
    const { filterType, todos  } = this.state;
    let result = null;
    switch (filterType) {
      case FilterTypes.COMPLETED:
        result = todos.filter(todo => todo.done)
        break;
      case FilterTypes.INCOMPLETED:
        result = todos.filter(todo => !todo.done)
        break;
      default:
        result = todos;
        break;
    }
    return result;
  }

  handleEditConfirm = (newText) => {
    this.updateEdittingTodoText(newText);
    this.setState({ edittingTodoId: null });
  }

  handleEditCancel = () => {
    this.setState({ edittingTodoId: null })
  }
  
  render() {
    const { todos, filterType, edittingTodoId } = this.state;
    return (
        <div className="App">
          <AddTodo onAdd={this.addTodo} />
          {
            this.getFilteredTodos().map(todo => 
              <TodoItem 
                key={todo.id} 
                {...todo} 
                onDelete={this.deleteTodo} 
                onToggle={this.toggleTodo}
                onEdit={(id) => { this.setState({ edittingTodoId: id }) } }
              />
            )
          }
          <Filter 
            currentType={filterType} 
            onChange={this.setFilterType}
          />

          {
            edittingTodoId
            ?
            <Editor 
              initialText={ todos.find(({id}) => id === edittingTodoId).text }
              onConfirm={this.handleEditConfirm}
              onCancel={this.handleEditCancel}
            />
            :
            "no editting todo id"
          }
        </div>
    );
  }
}
export default App;