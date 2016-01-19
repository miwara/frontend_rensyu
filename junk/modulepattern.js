"use strict";
var MYAPP = MYAPP || {
  util: {
    math: {}
  },
  data: {
    int: {}
  }
};

MYAPP.util.math = (function() {

  let add = function (x, y) {
    return x + y;
  };

  let minus = function (x, y) {
    return x - y;
  };

  let multiply = function (x, y) {
    return x * y;
  };

  let divide = function (x, y) {
    return y !== 0 ? x/y : "NaN";
  };

  return {
    add: add,
    minus: minus,
    multiply: multiply,
    divide: divide
  };
}());

console.log(MYAPP.util.math.add(4,5));
console.log(MYAPP.util.math.minus(4,5));
console.log(MYAPP.util.math.multiply(4,5));
console.log(MYAPP.util.math.divide(4,5));
console.log(MYAPP);
