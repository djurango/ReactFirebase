import React from "react";
import { db, auth } from "../firebase";

class TodosCollection extends React.Component {
  state = {
    isLoading: true,
    data: [],
    error: null,
    snapshot: null
  };

  componentDidMount() {
    const collectionRef = db
      .collection("todos")
      .where("userId", "==", auth.currentUser.uid)
      .orderBy("createdAt");

    this.unsubscribe = collectionRef.onSnapshot(
      this.handleOnNext,
      this.handleOnError
    );
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  handleOnNext = snapshot => {
    if (snapshot) {
      this.setState({
        isLoading: false,
        data: snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })),
        error: null,
        snapshot
      });
    }
  };

  handleOnError = error => {
    this.setState({
      isLoading: false,
      data: [],
      error,
      snapshot: null
    });
  };

  render() {
    const { data, error, isLoading } = this.state;
    if (error) {
      return this.props.renderError(error);
    }
    return this.props.render({ data, isLoading });
  }
}

export default TodosCollection;
