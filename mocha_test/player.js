"use strict";
let fs = window.require('fs');


class Player
{
  constructor(name) {
    this.name = name;
  }

  create(name) {
    return new Player(name);
  }

  sayHello() {
    return 'Hello, I\'m ' + this.name;
  }
}

module.exports = Player;
