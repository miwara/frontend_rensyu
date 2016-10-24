'use strict';
import React from 'react';
import { render } from 'react-dom';

let TodoStore = require('../stores/TodoStore');

function getTodoState() {
  return {
    allTodos: TodoStore.getAll(),
    areAllComplete: TodoStore.areAllComplete()
  };
}

let TodoApp = React.createClass ({
  getInitialState: function() {
    return getTodoState();
  },

  render: function() {
    return (
        <div>hello world from React</div>
    );
  }
});

module.exports = TodoApp;
