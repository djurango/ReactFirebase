import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";

const styles = theme => ({
  actionLeft: {
    paddingLeft: theme.spacing.unit * 2
  }
});

class TodoActions extends Component {
  handleFilter = (event, value) => {
    this.props.onFilter(value);
  };

  render() {
    const { classes, itemsLeft, itemsTotal, filterValue } = this.props;

    return (
      <Grid container>
        <Grid container justify="flex-start" alignItems="center" item xs={3}>
          <Typography className={classes.actionLeft} variant="button">
            {itemsLeft} {itemsLeft === 1 ? "todo" : "todos"} left
          </Typography>
        </Grid>
        <Grid alignItems="center" container justify="center" item xs={6}>
          <ToggleButtonGroup exclusive onChange={this.handleFilter}>
            <ToggleButton value="all" selected={filterValue === "all"}>
              All
            </ToggleButton>
            <ToggleButton value="active" selected={filterValue === "active"}>
              Active
            </ToggleButton>
            <ToggleButton
              value="completed"
              selected={filterValue === "completed"}
            >
              Completed
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid alignItems="center" container justify="flex-end" item xs={3}>
          <Typography className={classes.actionLeft} variant="button">
            {itemsTotal} {itemsTotal === 1 ? "todo" : "todos"} total
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(TodoActions);
