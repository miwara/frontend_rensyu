'use strict';
let AppDispatcher = require('../dispatcher/AppDispatcher');
let EventEmitter = require('events').EventEmitter;
let TodoConstants = require('../constants/TodoConstants');
let assign = require('object-assign');

let CHANGE_EVENT = 'change';

let _todos = {};

function create(text) {
  let id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _todos[id] = {
    id: id,
    complete: false,
    text: text
  };
}

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
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(action) {
  let text;

  switch(action.actionType) {
  case TodoConstants.TODO_CREATE:
    text = action.text.trim();
    if (text !== '') {
      create(text);
      TodoStore.emitChange();
    }
    break;
  }
});

module.exports = TodoStore;
