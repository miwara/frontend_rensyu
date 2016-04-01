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
        {this.state.msg}
      </div>
    );
  }
}

export default TodoApp;
