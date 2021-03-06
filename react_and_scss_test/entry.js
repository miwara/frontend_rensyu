"use strict";
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link } from 'react-router';

class App extends Component {
  render() {
    return (
        <div>
        <ul>
        <li><Link to="/">index</Link></li>
        <li><Link to="/a">page A</Link></li>
        <li><Link to="/b">page B</Link></li>
        </ul>
        <div>{this.props.children}</div>
        </div>
    );
  }
}

class Index extends Component {
  render() {
    return <div>Index</div>;
  }
}

class PageA extends Component {
  render() {
    return <div>A</div>;
  }
}

class PageB extends Component {
  render() {
    return <div>B</div>;
  }
}

render((
    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="/a" component={PageA} />
        <Route path="/b" component={PageB} />
      </Route>
    </Router>
), document.querySelector("#reactroot"));
