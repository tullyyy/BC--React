import React from "react";
import "./contact-list.css";
import { Contact } from "../toggle/toggle.jsx/index.js.js";

export class ContactList extends React.Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    fetch("http://bootcamp.podlomar.org/api/contacts")
      .then(resp => resp.json()) //taking the json from the response
      .then(json => this.setState({ contacts: json })); //telling react we are changing the state and want to change the property to data that has arrived from the server
  }

  render() {
    if (this.state.contacts.length === 0) {
      return <h1>Waiting for the Data</h1>;
    }

    return (
      <div className=".contact-list">
        {this.state.contacts.map(contact => {
          return (
            <Contact
              gender={contact.gender}
              name={contact.name}
              number={contact.number}
            />
          );
        })}
      </div>
    );
  }
}
