/**
 *  action
 *
 *  Dispatcher へデータを渡すヘルパークラス
 *  外部と通信する場合はここが受け持つ
 *  Action を使ってdispatcher に渡す
 */
import AppDispatcher from "../dispatcher/AppDispatcher";
import TodoConstants from "../constants/TodoConstants";

class TodoActions {
  create(text) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_CREATE,
      text: text
    });
  }
}

module.exports = new TodoActions();
