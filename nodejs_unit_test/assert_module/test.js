var assert = require('assert');
var Todo = require('./todo');
var todo = new Todo();
var testsCompleted = 0;

function deleteTest() {
  todo.add('Delete Me');
  assert.equal(todo.getCount(), 1, '1 item should exist');

  todo.deleteAll();
  assert.equal(todo.getCount(), 0, 'No items should exist');
  testsCompleted++;
}

function addTest() {
  todo.deleteAll();
  todo.add('Added');
  assert.notEqual(todo.getCount(), 0, '1 item should exists');

  testsCompleted++;
}



deleteTest();
addTest();

console.log('Completed ' + testsCompleted + ' tests');
