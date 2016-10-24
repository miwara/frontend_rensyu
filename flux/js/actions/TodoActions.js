'use strict';
let AppDispatcher = require('../dispatcher/AppDispatcher');
let TodoConstants = require('../constants/TodoConstants');

let TodoActions = {
  toggleComplete: function(todo) {
    let id = todo.id;
    let actionType = todo.complete ?
          TodoConstants.TODO_UNDO_COMPLETE :
          TodoConstants.TODO_COMPLETE;

    AppDispatcher.dispatch({
      actionType: actionType,
      id: id
    });
  },

  toggleCompleteAll: function() {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_TOGGLE_COMPLETE_ALL
    });
  }
};

module.exports = TodoActions;
