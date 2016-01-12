var assert = require('assert');
var index = require('../index');

describe('index', function () {
  describe('greet', function () {
    it('引数に応じて決まった文字列を返すこと', function () {
      assert.equal(index.greet('taro'), 'Hello,taro');
    });
  });
});
