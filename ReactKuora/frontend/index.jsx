import React from "react";
import ReactDOM from "react-dom";
import { Question } from "./Question/Question.jsx";
import "./index.css";
import "./index.html";

class App extends React.Component {
  render() {
    return (
      <>
        <Question
          title="What color is Martian Blood?"
          text="I would like to know for a book I am writing."
        />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

// Create a component displaying one question. Every question should have a title and a text. For now, hardcode the title and text right into your render method
