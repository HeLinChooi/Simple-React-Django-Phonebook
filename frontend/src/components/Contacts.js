import React, { Component } from 'react'

export default class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }
  componentDidMount() {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    };
    fetch("/api/contacts", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        this.setState((state) => {
          return { contacts: data };
        });
      });
  }
  render() {
    const { contacts } = this.state;
    const { history } = this.props;
    const ContactList = () => contacts.map(contact => {
      return <div className="col-12 custom-border--yellow custom-text-yellow d-flex justify-content-between" key={contact.name}>
        <span>
          {contact.name}
        </span>
        <span>
          {contact.number}
        </span>
      </div>
    });
    return (
      <div className="container-fluid h-100 d-flex flex-column">
        <div className="row">
          <div className="mt-3 text-white col-12 col-md-6 offset-md-3 px-md-0">
            <div className="col-12 border-bottom h3 d-flex justify-content-between align-items-center">
              Contacts
            <button type="button" className="btn custom-bg-yellow px-2 py-1 my-2" onClick={()=> history.push('/create')}>Add</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3 px-md-0 pt-2">
            <ContactList />
          </div>
        </div>
      </div>
    )
  }
}
