import React from "react";
import "./term.css";

export class Term extends React.Component {
  render() {
    return (
      <div className="term">
        <p className="word">{this.props.word}</p>
        <p className="definition">{this.props.definition}</p>
      </div>
    );
  }
}
