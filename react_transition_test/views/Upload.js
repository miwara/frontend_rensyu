"use strict";
import React, { Component } from 'react';
import { History } from 'react-router';

let Upload = React.createClass ({
  mixins: [ History ],

  handleSubmit: function(e) {
    e.preventDefault();
    this.history.pushState(null, '/DD');
  },

  render: function() {
    return (
        <div>
        <h1>Upload</h1>
        <form onSubmit={this.handleSubmit}>
        <button type="submit">次へ</button>
        </form>
        </div>
    );
  }
});

module.exports = Upload;
