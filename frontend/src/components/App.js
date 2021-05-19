import React, { Component } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Contacts from './Contacts';
import CreateContact from './CreateContact';
import 'bootstrap/dist/css/bootstrap.css';
import '../../static/css/index.css';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/create" render={(props) => (
            <CreateContact {...props} />
          )}/>
          <Route path="/" render={(props) => (
            <Contacts {...props} />
          )}/>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    )
  }
}