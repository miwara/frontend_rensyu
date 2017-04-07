'use strict';

let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

let app2 = new Vue({
  el: '#app-2',
  data: {
    message: `You loaded this page on ${new Date()}`
  }
});

let app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});

let app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awsome' }
    ]
  }
});

let app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js',
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});

let app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
});

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

let app7 = new Vue({
  el: '#app-7',
  data: {
    grocerylist: [
      { text: 'Vegetables' },
      { text: 'Cheese' },
      { text: 'Whatever else humans are supposed to eat' }
    ]
  }
});
