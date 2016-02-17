var assert = require('assert');

var Player = require('../player');

var p = null;

describe('Player', function() {
  before(function() {
    p = new Player('ChainZ');
  });

  describe('sayHello()', function() {
    it('sayHello()で挨拶する', function() {
      assert.equal(p.sayHello(), 'Hello, I\'m ChainZ');
    });
  });
});
