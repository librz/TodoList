import React, { useState } from "react";
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

function App() {
  const [todos, setTodos] = useState([]);
  const [filterType, setFilterType] = useState(FilterTypes.ALL);
  const [edittingTodoId, setEdittingTodoId] = useState(null); //edittingTodoId表示正在被编辑的TodoItem的id

  function addTodo(text, done) {
    setTodos(prev => prev.concat({ id: v4(), text, done }))
  }

  function deleteTodo(id) {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  function toggleTodo(id) {
    setTodos(prev => {
      let result = [];
      prev.forEach(todo => {
        if (todo.id !== id)
          result.push(todo)
        else 
          result.push({ ...todo, done: !todo.done })
      })
      return result;
    })
  }

  function updateEdittingTodoText(newText) {
    setTodos(prev => {
      let result = [];
      prev.forEach(todo => {
        if (todo.id === edittingTodoId)
          result.push({ ...todo, text: newText })
        else
          result.push(todo)  
      })
      return result;
    })
  }

  const getFilteredTodos = () => {
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

  return (
    <TodoMethods.Provider 
      value={{addTodo, deleteTodo, toggleTodo, setFilterType, setEdittingTodoId, updateEdittingTodoText }}
    >
      <div className="App">
        <AddTodo />
        {
          getFilteredTodos().map(todo => <TodoItem key={todo.id} {...todo} />)
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

export { TodoMethods };
export default App;