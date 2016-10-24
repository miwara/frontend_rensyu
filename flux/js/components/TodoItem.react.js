'use strict';
import React from 'react';
import classNames from 'classNames';

let TodoActions = require('../actions/TodoActions');

let TodoItem = React.createClass({
  propTypes: {
    todo: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      isEditing: false
    };
  },

  _onToggleComplete: function() {
    TodoActions.toggleComplete(this.props.todo);
  },

  _onDoubleClick: function() {
    this.setState({isEditing: true});
  },

  render: function() {
    let todo = this.props.todo;

    let input;

    if (this.state.isEditing) {
      input =
        <TodoTextInput
          className="edit"
          onSave={this._onSave}
          value={todo.text}
        />;
    }

    return (
     <li
       className={classNames({
         'completed': todo.complete,
         'edition': this.state.isEditing
       })}
       key={todo.id}>
       <div className="view">
         <input
           className="toggle"
           type="checkbox"
           checked={todo.complete}
           onChange={this._onToggleComplete}
         />
         <label onDoubleClick={this._onDoubleClick}>{todo.text}</label>
         <button className="destroy" onClick={this._onDestroyClick} />
       </div>
       {input}
     </li>
    );
  }
});

module.exports = TodoItem;
