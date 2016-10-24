'use strict';
import React from 'react';
import { render } from 'react-dom';

let TodoStore = require('../stores/TodoStore');

let MainSection = require('./MainSection.react');

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

  _onChange: function() {
    this.setSate(getTodoState());
  },

  render: function() {
    return (
      <div>
        hello world from React
        <MainSection
          allTodos={this.state.allTodos}
          areAllComplete={this.state.areAllComplete}
        />
      </div>
    );
  }
});

module.exports = TodoApp;
