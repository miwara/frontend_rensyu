"use strict";
"use strict";
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, History } from 'react-router';

let DD = require('./views/dd');
let Login = require('./views/login');
let Upload = require('./views/upload');

let Main = React.createClass ({
  render: function() {
    return (
        <div>{this.props.children}</div>
    );
  }
});

render((
    <Router>
    <Route path="/" component={Main}>
    <IndexRoute component={DD} />
    <Route path="/dd" component={DD} />
    <Route path="/login" component={Login} />
    <Route path="/upload" component={Upload} />
    </Route>
    </Router>
), document.querySelector("#app"));
