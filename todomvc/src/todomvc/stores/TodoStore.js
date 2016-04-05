/**
 *  store
 *
 *  Dispatcher から呼び出されるコールバックを持っている
 *  アプリケーションの状態を管理する
 *  アプリケーションのデータとビジネスロジックを担当
 *  store のデータはメッセージ一覧のようにデータの集合も扱う
 */
"use strinct";
import appDispatcher from "../dispatcher/AppDispatcher";
import { EventEmitter } from "events";
import TodoConstants from "../constants/TodoConstants";
import assign from "object-assign";

const _todos = {};

function create(text) {
  let id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _todos[id] = {
    id: id,
    complete: false,
    text: text
  };
}

const TodoStore = assign({}, EventEmitter.prototype, {
  getMsg: function() {
    return "Hello World!";
  },

  emitChange: function() {
    this.emit('change');
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
  }
});

export default TodoStore;
