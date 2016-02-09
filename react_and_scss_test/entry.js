"use strict";
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

class App extends Component {
  render() {
    return <h1>Hello form React!</h1>;
  }
}

render((
    <Router history={hashHistory}>
    <Route path="/" component={App} />
    </Router>
), document.querySelector("#reactroot"));
