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
