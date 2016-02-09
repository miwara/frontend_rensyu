"use strict";
import React, { Component } from 'react';
import { History } from 'react-router';

let Holder = React.createClass ({
  mixins: [ History ],

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
    this.history.pushState(null, '/login');
    return false;
  },

  render: function() {
    return (
        <div>
        <h1>D&D</h1>
        <div className="holder" onDragover={this.dragover} onDragLeave={this.dragleave} onDragEnd={this.dragend} onDrop={this.drop}></div>
        </div>
    );
  }
});

module.exports = Holder;
