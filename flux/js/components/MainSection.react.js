'use strict';
import React from 'react';
import { render } from 'react-dom';

import TodoActions from '../actions/TodoActions';

import TodoItem from './TodoItem.react';

class MainSection extends React.Component {
  _onToggleCompleteAll() {
    TodoActions.toggleCompleteAll();
  }

  render() {
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
         onChange={this._onToggleCompleteAll.bind(this)}
         checked={this.props.areAllComplete ? 'checked' : ''}
       />
       <label htmlFor="toggle-all">Mark all as complete</label>
       <ul id="todo-list">{todos}</ul>
      </section>
    );
  }
}

MainSection.propTypes = {
  allTodos: React.PropTypes.object.isRequired,
  areAllComplete: React.PropTypes.bool.isRequired
};

export default MainSection;
