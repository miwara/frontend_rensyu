var index = require('../index');

exports['greet'] = function(test) {
  test.equal(index.greet('taro'), 'Hello,taro');
  test.done();
};
/*
exports['greetAsync'] = function(test) {
  test.expect(2);
  index.greetAsync('hanako', function (greet) {
  });
};
*/
