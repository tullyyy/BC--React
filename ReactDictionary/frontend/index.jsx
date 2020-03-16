import React from "react";
import ReactDOM from "react-dom";
import { Term } from "./Term/Term.jsx";
import "./index.css";
import "./index.html";

class App extends React.Component {
  render() {
    return (
      <>
        <Term word="Hello" definition="a greeting" />
        <Term
          word="Antidisestablishmentarianism"
          definition="A political position that developed in 19th-century Britain in opposition to Liberal proposals for the disestablishment of the Church of England—meaning the removal of the Anglican Church's status as the state church of England, Ireland, and Wales. The establishment was maintained in England, but in Ireland, the Church of Ireland (Anglican) was disestablished in 1871. In Wales, four Church of England dioceses were disestablished in 1920 and became the Church in Wales."
        />
        <Term
          word="Effervescent"
          definition="marked by or expressing an appealingly lively quality"
        />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

// Create an App component which will just display 'Hello world' and put it into your #app element on the page.
// Create a component Term with hardcoded term name and definition. Use it in your App.
// Use props to set the term name and definition for the Term component. In your App component, create a three encyclopedia definitions of your favourite hard-to-pronounce terms.
