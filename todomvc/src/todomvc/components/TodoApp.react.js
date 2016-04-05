/**
 *  view
 *
 *  Store から状態情報を受け取って描画処理を行う
 *  Store のデータを表示する React Component
 *  Action を発行する React Component
 */
import React from "react";
import TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";
import TodoTextInput from "./TodoTextInput.react";

function getTodoState() {
  return {
    msg: TodoStore.getMsg()
  };
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = getTodoState();
  }

  render() {
    return (
      <div>
        <header id="header">
        <h1>todos</h1>
        <TodoTextInput id="new-todo" placeholder="What needs to be done?" onSave={this._onSave} />
        </header>
        {this.state.msg}
      </div>
    );
  }

  _onSave(text) {
    if (text.trim()) {
      TodoActions.create(text);
    }
  }
}

export default TodoApp;
