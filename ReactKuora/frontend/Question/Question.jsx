import React from "react";

export class Question extends React.Component {
  render() {
    return (
      <div className="question">
        <p className="title">{this.props.title}</p>
        <p className="text">{this.props.text}</p>
      </div>
    );
  }
}
