"use strict";
window.addEventListener('DOMContentLoaded', () => {
  saveMethod();
  readMethod();
});

// メソッドで localStorage に保存する
let saveMethod = () => {
  let key = 'key1';
  let val = 'val1';
  localStorage.setItem(key, val);
};

let readMethod = () => {
  let val = localStorage.getItem('key1');
  alert(val);
};
