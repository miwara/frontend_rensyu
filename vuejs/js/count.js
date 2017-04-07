'use strict';

let count = new Vue({
  el: '#count',
  data: {
    count: 0
  },
  methods: {
    up: function () {
      this.count = this.count + 1;
    },

    down: function () {
      if (this.count <= 0) this.count = 0;
      else this.count = this.count - 1;
    }
  }
});
