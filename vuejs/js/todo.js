'use strict';

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

let todo = new Vue({
  el: '#todo',
  data: {
    newTodo: "",
    todos: []
  },
  methods: {
    create: function (e) {
      e.preventDefault();
      this.todos.push({text: this.newTodo});
    }
  }
});
