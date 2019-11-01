import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  LinearProgress
} from "@material-ui/core";
import TodoList from "./TodoList";
import TodoActions from "./TodoActions";
import TodoInput from "./TodoInput";

class Todos extends Component {
  getFilteredTodos = (todos, filterValue) => {
    return todos.filter(({ checked }) => {
      if (filterValue === "active") {
        return checked === false;
      } else if (filterValue === "completed") {
        return checked === true;
      } else {
        return true;
      }
    });
  };

  render() {
    const {
      todos,
      filterValue,
      isLoading,
      onCreate,
      onToggle,
      onDelete,
      onFilter
    } = this.props;

    const filteredTodos = this.getFilteredTodos(todos, filterValue);
    const itemsLeft = this.getFilteredTodos(todos, "active").length;
    const itemsTotal = todos.length;

    return (
      <Card>
        <CardHeader title="What do you want to do?" />
        <CardContent>
          <TodoInput onCreate={onCreate} />
        </CardContent>
        {isLoading && <LinearProgress variant="query" />}
        <TodoList
          todos={filteredTodos}
          onToggle={onToggle}
          onDelete={onDelete}
        />
        <CardActions disableActionSpacing>
          <TodoActions
            itemsLeft={itemsLeft}
            itemsTotal={itemsTotal}
            onFilter={onFilter}
            filterValue={filterValue}
          />
        </CardActions>
      </Card>
    );
  }
}

export default Todos;
