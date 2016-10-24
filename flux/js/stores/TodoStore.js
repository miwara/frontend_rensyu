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

function update(id, updates) {
  _todos[id] = assign({}, _todos[id], updates);
}

function updateAll(updates) {
  for (let id in _todos) {
    update(id, updates);
  }
}

function destroy(id) {
  delete _todos[id];
}

function destroyCompleted(){
  for (let id in _todos) {
    if (_todos[id].complete) {
      destroy(id);
    }
  }
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

  case TodoConstants.TODO_TOGGLE_COMPLETE_ALL:
    if (TodoStore.areAllComplete()) {
      updateAll({complete: false});
    } else {
      updateAll({complete: true});
    }
    TodoStore.emitChange();
    break;

  case TodoConstants.TODO_UNDO_COMPLETE:
    update(action.id, {complete: false});
    TodoStore.emitChange();
    break;

  case TodoConstants.TODO_COMPLETE:
    update(action.id, {complete: true});
    TodoStore.emitChange();
    break;

  case TodoConstants.TODO_UPDATE_TEXT:
    text = action.text.trim();
    if (text !== '') {
      update(action.id, {text: text});
      TodoStore.emitChange();
    }
    break;

  case TodoConstants.TODO_DESTROY:
    destroy(action.id);
    TodoStore.emitChange();
    break;

  case TodoConstants.TODO_DESTROY_COMPLETED:
    destroyCompleted();
    TodoStore.emitChange();
    break;

  default:
    // no op
    break;
  }
});

module.exports = TodoStore;
