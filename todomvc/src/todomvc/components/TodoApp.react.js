/**
 *  view
 *
 *  Store から状態情報を受け取って描画処理を行う
 *  Store のデータを表示する React Component
 *  Action を発行する React Component
 */
import Header from "./Header.react";
import React from "react";
import TodoStore from "../stores/TodoStore";

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
        <Header />
        {this.state.msg}
      </div>
    );
  }
}

export default TodoApp;
