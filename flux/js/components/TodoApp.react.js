'use strict';
import React from 'react';
import { render } from 'react-dom';

import TodoStore from '../stores/TodoStore';

import Header from './Header.react';
import MainSection from './MainSection.react';
import Footer from './Footer.react';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTodos: TodoStore.getAll(),
      areAllComplete: TodoStore.areAllComplete()
    };

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    TodoStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    TodoStore.removeChnageListener(this._onChange);
  }

  _onChange() {
    this.setState({
      allTodos: TodoStore.getAll(),
      areAllComplete: TodoStore.areAllComplete()
    });
  }

  render() {
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
}

export default TodoApp;
