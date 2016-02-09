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
    return false;
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.history.pushState(null, '/login');
  },

  render: function() {
    let style = {
      padding: '100px',
      borderColor: '#000',
      borderStyle: 'solid'
    };
    return (
      //        <div style={style} onDragover={this.dragover} onDragLeave={this.dragleave} onDragEnd={this.dragend} onDrop={this.drop}></div>
        <div>
        <h1>D&D</h1>
        <form onSubmit={this.handleSubmit}>
        <button type="submit">次へ</button>
        </form>
        </div>
    );
  }
});

module.exports = Holder;
