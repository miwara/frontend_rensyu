"use strict";
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route} from 'react-router';

let Holder = React.createClass ({
  dragover: function() {
    return false;
  },

  dragleave: function() {
    return false;
  },

  dragend: function() {
    return false;
  },

  drop: function(e) {
    e.preventDefault();
    sessionStorage.setItem('path', e.dataTransfer.files[0].path);
    sessionStorage.setItem('name', e.dataTransfer.files[0].name);
    return false;
  },

  render: function() {
    let style = {
      padding: '100px',
      borderColor: '#000',
      borderStyle: 'solid'
    };
    return (
        <div style={style} onDragover={this.dragover} onDragLeave={this.dragleave} onDragEnd={this.dragend} onDrop={this.drop}></div>
    );
  }
});

render((
    <Router>
    <Route path="/" component={Holder} />
    </Router>
), document.querySelector("#app"));
