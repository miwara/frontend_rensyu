'use strict';
let EventEmitter = require('events').EventEmitter;
let assign = require('object-assign');

let _todos = {};

let TodoStore = assign({}, EventEmitter.prototype, {
  areAllComplete: function() {
    for (let id in _todos) {
      if (!_todos[id].complete) {
        return false;
      }
    }
    return true;
  },

  getAll: function() {
    return _todos;
  }
});

module.exports = TodoStore;
