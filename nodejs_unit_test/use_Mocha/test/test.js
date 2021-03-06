var assert = require('assert');
var index = require('../index');

describe('index', function () {
  describe('greet', function () {
    it('引数に応じて決まった文字列を返すこと', function () {
      assert.equal(index.greet('taro'), 'Hello,taro');
    });
  });
});

describe('index', function () {
  describe('greet', function () {
    it('引数に応じて決まった文字列を返すこと', function () {
      assert.equal(index.greet('taro'), 'Hello,taro');
    });
  });

  describe('greetAsync', function () {
    it('引数に応じてコールバック内で決まった文字列になること', function (done) {
      index.greetAsync('hanako', function (greet) {
        assert.equal(greet, 'Hello,hanako');
        done();
      });
    });
  });
});
