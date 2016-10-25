'use strict';
import React from 'react';
import { render } from 'react-dom';

import TodoApp from './components/TodoApp.react';

render(
  <TodoApp />,
  document.getElementById('todoapp')
);
