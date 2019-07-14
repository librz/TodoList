import React, { Component } from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import { TodoActionTypes, TodoObj } from "./TodoItem";
import Filter, {FilterTypes} from "./Filter";
import Editor from "./Editor";
import "./App.css";

export class App extends Component {
  state = {
    todos: [],
    filterText: FilterTypes.All,
    edittingTodoId: null
  };

  getCurTodo = () => {
    const { todos, edittingTodoId } = this.state;
    return todos.find(ele => ele.id === edittingTodoId);
  };

  getFilteredTodos = () => {
    const { todos, filterText } = this.state;
    switch (filterText) {
      case FilterTypes.INCOMPLETED:
        return todos.filter(ele => !ele.isCompleted);
      case FilterTypes.COMPLETED:
        return todos.filter(ele => ele.isCompleted);
      default:
        return todos;
    }
  };

  generateId = arr => {
    let id = 1;
    const idExists = () => arr.find(ele => ele.id === id)
    while (idExists()) id += 1;
    return id;
  };

  handleAdd = text => {
    this.setState(curState => {
      const curTodos = curState.todos;
      const newEle = new TodoObj(this.generateId(curTodos), text, false);
      return {
        todos: [...curTodos, newEle],
        filterText: FilterTypes.ALL
      };
    });
  };

  handleFilterChange = filterText => {
    this.setState({
      filterText: filterText
    });
  };

  updateTodoToEdit = newContent => {
    this.getCurTodo().content = newContent;
    this.setState({
      edittingTodoId: null
    });
  };

  handleTodoAction = (id, actionType) => {
    switch (actionType) {
      case TodoActionTypes.TOGGLE:
        this.state.todos.find(ele => ele.id === id).toggleStatus();
        this.forceUpdate();
        break;
      case TodoActionTypes.EDIT:
        this.setState({ edittingTodoId: parseInt(id, 10) });
        break;
      case TodoActionTypes.DELETE:
        this.setState(curState => {
          return {
            todos: curState.todos.filter(ele => ele.id !== id)
          };
        });
        break;
      default:
        window.alert(`Sth's wrong, go fix it`);
        break;
    }
  };

  render() {
    return (
      <div className="App">
        <AddTodo onAdd={this.handleAdd} />
        <Todos
          todos={this.getFilteredTodos()}
          onAction={this.handleTodoAction}
        />
        <Filter
          filterText={this.state.filterText}
          onChange={this.handleFilterChange}
        />
        {this.state.edittingTodoId ? (
          <Editor
            initialContent={this.getCurTodo().content}
            onUpdate={this.updateTodoToEdit}
            onClose={this.setState.bind(this, {edittingTodoId: null})}
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default App;
