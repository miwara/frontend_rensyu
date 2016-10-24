'use strict';
import React from 'react';

let TodoActions = require('../actions/TodoActions');
let TodoTextInput = require('./TodoTextInput.react');

let Header = React.createClass({
  _onSave: function(text) {
    if (text.trim()) {
      TodoActions.create(text);
    }
  },

  render: function() {
    return (
      <header id="header">
        <h1>todos</h1>
        <TodoTextInput
          id="new-todo"
          placeholder="What needs to be done?"
          onSave={this._onSave}
        />
      </header>
    );
  }
});

module.exports = Header;
