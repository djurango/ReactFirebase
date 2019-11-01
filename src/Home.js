import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import { auth } from "./firebase";

const styles = theme => ({
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    textAlign: "center",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  }
});

class Home extends Component {
  render() {
    const { classes } = this.props;

    if (!auth.currentUser) {
      return <Redirect to="/signin/" />;
    }

    return (
      <main>
        <div className={classes.heroContent}>
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            paragraph
          >
            Welcome {auth.currentUser.displayName}
          </Typography>
        </div>
      </main>
    );
  }
}

export default withStyles(styles)(Home);
