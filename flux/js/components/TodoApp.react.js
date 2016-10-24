'use strict';
import React from 'react';
import { render } from 'react-dom';

let TodoStore = require('../stores/TodoStore');

let Header = require('./Header.react');
let MainSection = require('./MainSection.react');
let Footer = require('./Footer.react');

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
        <Header />
        <MainSection
          allTodos={this.state.allTodos}
          areAllComplete={this.state.areAllComplete}
        />
        <Footer allTodos={this.state.allTodos} />
      </div>
    );
  }
});

module.exports = TodoApp;
