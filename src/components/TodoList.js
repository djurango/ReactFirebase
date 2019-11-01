import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Icon
} from "@material-ui/core";

const styles = () => ({
  checkbox: {
    paddingLeft: 0
  }
});

class TodoList extends React.Component {
  handleToggle = todo => () => {
    this.props.onToggle(todo);
  };
  handleDelete = todo => () => {
    this.props.onDelete(todo);
  };

  render() {
    const { classes, todos } = this.props;
    return (
      <List>
        {todos.map(todo => (
          <ListItem
            key={todo.id}
            role={undefined}
            button
            onClick={this.handleToggle(todo)}
          >
            <Checkbox
              className={classes.checkbox}
              checked={todo.checked}
              tabIndex={-1}
              disableRipple
            />
            <ListItemText primary={todo.text} />
            <ListItemSecondaryAction>
              <IconButton onClick={this.handleDelete(todo)}>
                <Icon>delete</Icon>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  }
}

export default withStyles(styles)(TodoList);
