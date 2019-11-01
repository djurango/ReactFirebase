import React, { Component } from "react";
import uuid from "uuid/v4";

import Todos from "../components/Todos";

class TodosContainer extends Component {
  state = {
    todos: [
      { id: uuid(), text: "Learn Firebase", checked: false },
      { id: uuid(), text: "Learn React", checked: true }
    ],
    filterValue: "all"
  };

  handleToggle = ({ id }) => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        } else {
          return todo;
        }
      })
    }));
  };

  handleDelete = ({ id }) => {
    this.setState(({ todos }) => ({
      todos: todos.filter(todo => todo.id !== id)
    }));
  };

  handleFilter = filterValue => {
    this.setState({ filterValue });
  };

  handleCreate = text => {
    this.setState(({ todos }) => ({
      todos: [...todos, { text, checked: false }]
    }));
  };

  render() {
    const { todos, filterValue } = this.state;

    return (
      <Todos
        todos={todos}
        filterValue={filterValue}
        onCreate={this.handleCreate}
        onToggle={this.handleToggle}
        onDelete={this.handleDelete}
        onFilter={this.handleFilter}
      />
    );
  }
}

export default TodosContainer;
