'use strict';

let todo = new Vue({
  el: '#todo',
  data: {
    newTodo: "",
    todos: [],
    checkedTodo: []
  },
  methods: {
    create: function (e) {
      e.preventDefault();
      this.todos.push({text: this.newTodo});
    },
    deleteTodo: function (todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    }
  }
});
