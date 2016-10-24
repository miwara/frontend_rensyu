'use strict';
import React from 'react';
import { render } from 'react-dom';

let TodoApp = require('./components/TodoApp.react');

render(
  <TodoApp />,
  document.getElementById('todoapp')
);
