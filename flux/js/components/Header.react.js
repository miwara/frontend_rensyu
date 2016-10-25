'use strict';
import React from 'react';

let TodoActions = require('../actions/TodoActions');

import TodoTextInput from './TodoTextInput.react';

class Header extends React.Component {
  _onSave(text) {
    if (text.trim()) {
      TodoActions.create(text);
    }
  }

  render() {
    return (
      <header id="header">
        <h1>todos</h1>
        <TodoTextInput
          id="new-todo"
          placeholder="What needs to be done?"
          onSave={this._onSave.bind(this)}
        />
      </header>
    );
  }
}

export default Header;
