/**
 *  action
 *
 *  Dispatcher へデータを渡すヘルパークラス
 *  外部と通信する場合はここが受け持つ
 *  Action を使ってdispatcher に渡す
 */
"use strict";
import AppDispatcher from "../dispatcher/AppDispatcher";
import TodoConstants from "../constants/TodoConstants";

class TodoActions {
  create(text) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_CREATE,
      text: text
    });
  }

  updateText(id, text) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_UPDATE_TEXT,
      id: id,
      text: text
    });
  }

  toggleComplete(todo) {
    let id = todo.id;
    let actionType = todo.complete ?
          TodoConstants.TODO_UNDO_COMPLETE :
          TodoConstants.TODO_COMPLETE;

    AppDispatcher.dispatch({
      actionType: actionType,
      id: id
    });
  }

  toggleCompleteAll() {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_TOGGLE_COMPLETE_ALL
    });
  }

  destroy(id) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_DESTROY,
      id: id
    });
  }

  destroyCompleted() {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_DESTROY_COMPLETED
    });
  }
}

module.exports = new TodoActions();
