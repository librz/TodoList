import React, { Component } from "react";
import { v4 } from 'uuid';
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem"
import Filter from "./Filter";
import FilterTypes from "./FilterTypes";
import Editor from './Editor';
import "../css/App.scss";

/*
let todo = {
  id: 1,
  text: "Eat Dinner",
  done: false
}
*/

const TodoMethods = React.createContext(null);

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      filterType: FilterTypes.ALL,
      edittingTodoId: null
    }
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

  setEdittingTodoId = (id) => {
    this.setState({
      edittingTodoId: id
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
  
  render() {
    const { todos, filterType, edittingTodoId } = this.state;
    return (
      <TodoMethods.Provider 
        value={{
          addTodo: this.addTodo, 
          deleteTodo: this.deleteTodo, 
          toggleTodo: this.toggleTodo, 
          setFilterType: this.setFilterType, 
          setEdittingTodoId: this.setEdittingTodoId, 
          updateEdittingTodoText: this.updateEdittingTodoText 
        }}
      >
        <div className="App">
          <AddTodo />
          {
            this.getFilteredTodos().map(todo => <TodoItem key={todo.id} {...todo} />)
          }
          <Filter currentType={filterType} />
          {
            edittingTodoId
            ?
            <Editor todo={todos.find(({id}) => id === edittingTodoId)} />
            :
            null
          }
        </div>
      </TodoMethods.Provider>
    );
  }
}
export { TodoMethods };
export default App;