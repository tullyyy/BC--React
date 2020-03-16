import React from "react";
import ReactDOM from "react-dom";
import { Quote } from "./Quote/Quote.jsx";
import "./index.css";
import "./index.html";

class App extends React.Component {
  render() {
    return <Quote />;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

// Create an App component which will just display 'Hello world' and put it into your #app element on the page.
// Create a component Term with hardcoded term name and definition. Use it in your App.
// Use props to set the term name and definition for the Term component. In your App component, create a three encyclopedia definitions of your favourite hard-to-pronounce terms.
