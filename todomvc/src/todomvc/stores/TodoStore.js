/**
 *  store
 *
 *  Dispatcher から呼び出されるコールバックを持っている
 *  アプリケーションの状態を管理する
 *  アプリケーションのデータとビジネスロジックを担当
 *  store のデータはメッセージ一覧のようにデータの集合も扱う
 *
 *  register() メソッドにコールバック関数を登録
 *  Dispacher によってペイロードが送られて来たら，登録した全てのコールバック関数を実行
 *  それぞれのコールバック関数は，ペイロードのアクションタイプ属性を見てアクションに対応するべきか否か判断
 *  コールバック関数が複数ある場合は，waitFor() メソッドを使って順番を制御
 *  状況に応じて，イベントを発行し，view(React) に通知
 */
"use strict";
import appDispatcher from "../dispatcher/AppDispatcher";
import { EventEmitter } from "events";
import TodoConstants from "../constants/TodoConstants";
import assign from "object-assign";

const CHANGE_EVENT = 'change';

const _todos = {};

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
  for (var id in _todos) {
    update(id, updates);
  }
}

function destroy(id) {
  delete _todos[id];
}

function destroyCompleted() {
  for (var id in _todos) {
    if (_todos[id].complete) {
      destroy(id);
    }
  }
}

const TodoStore = assign({}, EventEmitter.prototype, {
  areAllComplete: function() {
    for (var id in _todos) {
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
    this.removeListner(CHANGE_EVENT, callback);
  }
});

appDispatcher.register(function(action) {
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
  }
});

export default TodoStore;
