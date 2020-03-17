import React from "react";
import ReactDOM from "react-dom";
import { ContactList } from "./contact-list/contact-list.jsx";
import "./index.css";
import "./index.html";

class App extends React.Component {
  render() {
    return <ContactList />;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

// Start a new React project based on the starter template and create a component called Toggle. The toggle switches between three states - check, cross and question mark. The pictures are provided for you in a ZIP. Make the toggle switch when user clicks on it.

// Make a component called TodoItem which displays the Toggle and a text. The text is some kind of a task like 'tak out the trash', 'buy vegetables', 'pay the bills'. The user can click on the Toggle to check that the task was done.
// Display a list of TodoItems on your page.
