var assert = require('assert');
var Todo = require('./todo');
var todo = new Todo();
var testsCompleted = 0;

// 削除後にTo-do 項目が残らない
function deleteTest() {
  todo.add('Delete Me');
  assert.equal(todo.getCount(), 1, '1 item should exist');

  todo.deleteAll();
  assert.equal(todo.getCount(), 0, 'No items should exist');
  testsCompleted++;
}

// To-doの追加が正しく行われる
function addTest() {
  todo.deleteAll();
  todo.add('Added');
  assert.notEqual(todo.getCount(), 0, '1 item should exists');

  testsCompleted++;
}

// doAsync コールバックにtrueが渡される
function doAsyncTest(cb) {
  todo.doAsync(function (value) {
    assert.ok(value, 'Callback should be passed true');
    testsCompleted++;
    cb();
  });
}

// addがパラメータのないときに創出するエラー
function throwsTest(cb) {
  assert.throws(todo.add, /requires/);
  testsCompleted++;
}


// テストスイート
deleteTest();
addTest();
throwsTest();
doAsyncTest(function () {
  console.log('Completed ' + testsCompleted + ' tests');
});
