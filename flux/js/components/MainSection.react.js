'use strict';
import React from 'react';
import { render } from 'react-dom';

let TodoActions = require('../actions/TodoActions');
let TodoItem = require('./TodoItem.react');

let MainSection = React.createClass({
  propTypes: {
    allTodos: React.PropTypes.object.isRequired,
    areAllComplete: React.PropTypes.bool.isRequired
  },

  _onToggleCompleteAll: function() {
    TodoActions.toggleCompleteAll();
  },

  render: function() {
    if (Object.keys(this.props.allTodos).length < 1) {
      return null;
    }

    let allTodos = this.props.allTodos;
    let todos = [];

    for (let key in allTodos) {
      todos.push(<TodoItem key={key} todo={allTodos[key]} />);
    }

    return (
      <section id="main">
       <input
         id="toggle-all"
         type="checkbox"
         onChange={this._onToggleCompleteAll}
         checked={this.props.areAllComplete ? 'checked' : ''}
       />
       <label htmlFor="toggle-all">Mark all as complete</label>
       <ul id="todo-list">{todos}</ul>
      </section>
    );
  }
});

module.exports = MainSection;
