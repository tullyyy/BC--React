import React, { Component } from "react";

class Display extends Component {
  componentDidMount() {
    console.log("I am here");
  }

  componentDidUpdate() {
    console.log("I updated");
  }

  render() {
    const { count } = this.props;
    return <h2>{count}</h2>;
  }
}

export default Display;
