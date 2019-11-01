import React from "react";
import { TextField } from "@material-ui/core";

class TodoInput extends React.Component {
  state = { value: "" };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onCreate(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          id="addTodo"
          name="addTodo"
          label="For example: Learn React and Firebase..."
          value={this.state.value}
          fullWidth
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default TodoInput;
