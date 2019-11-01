import React, { Component } from "react";

import Todos from "../components/Todos";
import TodosCollection from "../collections/TodosCollection";
import { db, auth } from "../firebase";

class TodosContainer extends Component {
  state = {
    filterValue: "all"
  };

  handleToggle = todo => {
    db.collection("todos")
      .doc(todo.id)
      .update({
        checked: !todo.checked
      });
  };

  handleDelete = todo => {
    db.collection("todos")
      .doc(todo.id)
      .delete();
  };

  handleCreate = text => {
    db.collection("todos").add({
      text,
      checked: false,
      createdAt: new Date(),
      userId: auth.currentUser.uid
    });
  };

  handleFilter = filterValue => {
    this.setState({ filterValue });
  };

  render() {
    const { filterValue } = this.state;

    return (
      <TodosCollection
        renderError={error => <div>{error.message}</div>}
        render={({ data: todos, isLoading }) => (
          <Todos
            todos={todos}
            filterValue={filterValue}
            isLoading={isLoading}
            onCreate={this.handleCreate}
            onToggle={this.handleToggle}
            onDelete={this.handleDelete}
            onFilter={this.handleFilter}
          />
        )}
      />
    );
  }
}

export default TodosContainer;
