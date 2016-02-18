"use strict";

import React from 'react';
import { render } from 'react-dom';

let fs = require('fs');
let remote = require('electron').remote;

let App = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    console.log(fs.statSync('./src/build').isDirectory());
    return false;
  },

  render: function () {
    return (
        <div>
        <form onSubmit={this.handleSubmit}>
        <button type="submit">submit</button>
        </form>
        </div>
    );
  }
});


render(
  <App />,
  document.getElementById('example')
);
