/**
 *  view
 *
 *  Store から状態情報を受け取って描画処理を行う
 *  Store のデータを表示する React Component
 *  Action を発行する React Component
 *
 *  onClick などのイベントによって，Action を呼び出す
 *  Store の状態を監視し，状況に応じてsetState() メソッドを使って view を更新
 */
import Footer from "./Footer.react";
import Header from "./Header.react";
import MainSection from "./MainSection.react";
import React from "react";
import TodoStore from "../stores/TodoStore";

function getTodoState() {
  return {
    allTodos: TodoStore.getAll(),
    areAllComplete: TodoStore.areAllComplete()
  };
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = getTodoState();
  }

  componentDidMount() {
    TodoStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <div>
        <Header />
        <MainSection allTodos={this.state.allTodos} areAllComplete={this.state.areAllComplete} />
        <Footer allTodos={this.state.allTodos} />
      </div>
    );
  }

  _onChange() {
    this.setState(getTodoState());
  }
}

export default TodoApp;
