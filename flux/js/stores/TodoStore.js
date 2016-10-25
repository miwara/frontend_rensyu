'use strict';
import { EventEmitter } from 'events';
import assign from 'object-assign';

import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

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

class TodoStore extends EventEmitter {
  constructor() {
    super();
    AppDispatcher.register(this.handler.bind(this));
  }

  areAllComplete() {
    for (let id in _todos) {
      if (!_todos[id].complete) {
        return false;
      }
    }
    return true;
  }

  getAll() {
    return _todos;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

handler(action) {
  let text;

  switch(action.actionType) {
  case TodoConstants.TODO_CREATE:
    text = action.text.trim();
    if (text !== '') {
      create(text);
      this.emitChange();
    }
    break;

  case TodoConstants.TODO_TOGGLE_COMPLETE_ALL:
    if (this.areAllComplete()) {
      updateAll({complete: false});
    } else {
      updateAll({complete: true});
    }
    this.emitChange();
    break;

  case TodoConstants.TODO_UNDO_COMPLETE:
    update(action.id, {complete: false});
    this.emitChange();
    break;

  case TodoConstants.TODO_COMPLETE:
    update(action.id, {complete: true});
    this.emitChange();
    break;

  case TodoConstants.TODO_UPDATE_TEXT:
    text = action.text.trim();
    if (text !== '') {
      update(action.id, {text: text});
      this.emitChange();
    }
    break;

  case TodoConstants.TODO_DESTROY:
    destroy(action.id);
    this.emitChange();
    break;

  case TodoConstants.TODO_DESTROY_COMPLETED:
    destroyCompleted();
    this.emitChange();
    break;

  default:
    // no op
    break;
  }
}
}

export default new TodoStore;
