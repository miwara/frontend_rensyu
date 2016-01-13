var index = require('../index');

exports['greet'] = function(test) {
  test.equal(index.greet('taro'), 'Hello,taro');
  test.done();
};

// 非同期関数のテスト（書き方を間違えている気がする）
exports['greetAsync'] = function(test) {
  test.expect(2);
  test.equal(index.greet('taro'), 'Hello,taro');
  index.greetAsync('hanako', function (greet) {
    test.equal(greet, 'Hello,hanako');
    test.done();
  });
};
