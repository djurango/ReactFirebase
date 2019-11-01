import React from "react";

import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import { auth, uiConfig } from "./firebase";

const styles = theme => ({
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  }
});

class SignIn extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <main>
        <div className={classes.heroContent}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            My TODO App
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            paragraph
          >
            Please sign-in to get started
          </Typography>
          <div className={classes.heroButtons}>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
          </div>
        </div>
      </main>
    );
  }
}

export default withStyles(styles)(SignIn);
