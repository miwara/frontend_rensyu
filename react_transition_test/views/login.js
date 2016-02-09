"use strict";
import React, { Component } from 'react';
import { History } from 'react-router';

let Login = React.createClass ({
  mixins: [ History ],

  handleSubmit: function(e) {
    e.preventDefault();
    this.history.pushState(null, '/upload');
  },

  render: function() {
    return (
        <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
        <button type="submit">次へ</button>
        </form>
        </div>
    );
  }
});

module.exports = Login;
