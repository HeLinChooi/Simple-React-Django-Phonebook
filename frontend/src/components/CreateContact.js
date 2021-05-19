import React, { Component } from 'react'

export default class CreateContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddContact = this.handleAddContact.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    const obj = { ...this.state, [name]: value };
    // console.log(obj);
    this.setState(obj);
  }

  handleAddContact(e) {
    e.preventDefault();
    const { name, number } = this.state;
    if (name === '' || number === '') {
      alert("Please fill up the form."); return;
    }
    if(!confirm("Are you sure to create this contact?")){
      return;
    }
    const newContact = { name: name, number: number };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newContact)
    };
    // call POST
    fetch("/api/contacts/", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        this.setState(() => {
          return {
            name: '',
            number: '',
          }
        });
      });
  }

  render() {
    const { name, number } = this.state;
    const { history } = this.props;
    // console.log(this.state);
    return (
      <div className="container-fluid h-100 d-flex flex-column justify-content-center align-items-center">
        <div className="col-12 col-md-6">
          <form onSubmit={this.handleAddContact} className="p-3 custom-bg-yellow rounded mt-3">
            <div className="d-flex justify-content-between align-items-center">
              <h3>Add Contact</h3>
              <button type="button" className="btn custom-bg-gray p-2 my-2 text-white" onClick={() => history.push('/')}>Back</button>
            </div>
            <div className="form-group">
              <label hmtlfor="username">Name</label>
              <input type="text" className="form-control" id="username" name="name" aria-describedby="username" value={name} onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label hmtlfor="userNumber">Number</label>
              <input type="text" className="form-control" id="userNumber" name="number" aria-describedby="userNumber" value={number} onChange={this.handleChange} />
            </div>
            <div className="d-flex flex-row-reverse">
              <button type="submit" className="btn custom-bg-gray text-white">Create</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
