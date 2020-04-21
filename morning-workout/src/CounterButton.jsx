import React, { Component } from "react";

class CounterButton extends Component {
  render() {
    const { value, handleClick } = this.props;
    return <button onClick={handleClick}>{value}</button>;
  }
}

export default CounterButton;
