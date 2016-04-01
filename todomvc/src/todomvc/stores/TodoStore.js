import { EventEmitter } from "events";
import assign from "object-assign";

const TodoStore = assign({}, EventEmitter.prototype, {
  getMsg: function() {
    return "Hello World!";
  }
});

export default TodoStore;
