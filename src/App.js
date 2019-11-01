import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import Home from "./Home";
import SignIn from "./SignIn";
import theme from "./theme";
import { auth } from "./firebase";
import { CircularProgress } from "@material-ui/core";

const styles = theme => ({
  appBar: {
    position: "relative",
    backgroundColor: theme.palette.primary.color
  },
  circularProgressWrapper: {
    display: "flex",
    justifyContent: "center",
    paddingTop: `${theme.spacing.unit * 8}px`
  }
});

class App extends Component {
  state = {
    isSignedIn: false,
    loading: true
  };

  componentDidMount() {
    this.unregisterAuthObserver = auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          isSignedIn: true,
          loading: false
        });
      } else {
        this.setState({
          isSignedIn: false,
          loading: false
        });
      }
    });
  }

  componentWillUnmount() {
    // un-register Firebase observers when the component unmounts
    this.unregisterAuthObserver();
  }

  render() {
    const { classes } = this.props;

    const isLoggedIn = !!auth.currentUser;

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" color="primary" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap style={{ flex: 1 }}>
              {isLoggedIn ? `${auth.currentUser.displayName}'s` : "My "} TODOs
            </Typography>
            {isLoggedIn && (
              <Button
                color="inherit"
                variant="outlined"
                onClick={() => auth.signOut()}
              >
                Sign-out
              </Button>
            )}
          </Toolbar>
        </AppBar>
        <Router>
          {this.state.loading ? (
            <div className={classes.circularProgressWrapper}>
              <CircularProgress />
            </div>
          ) : (
            <div>
              <Route path="/" exact component={Home} />
              <Route path="/signin/" component={SignIn} />
            </div>
          )}
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
