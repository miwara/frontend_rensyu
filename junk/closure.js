function fn(arg) {
  var cnt = arg;
  return () => ++cnt;
}

var f1 = fn(0);
var f2 = fn(10);

console.log(f1());
console.log(f2());
console.log(f1());
console.log(f2());
