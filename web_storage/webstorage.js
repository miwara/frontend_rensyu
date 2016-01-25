"use strict";
window.addEventListener('DOMContentLoaded', () => {
  saveHash();
  readHash();
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

// プロパティで localstorage に保存する
let saveProperty = () => {
  let val = 'val2';
  localStorage.key2 = val;
};

let readProperty = () => {
  let key2 = localStorage.key2;
  alert(key2);
};

// 連想配列で localStorage に保存する
let saveHash = () => {
  let val3 = "val3";
  localStorage['key3'] = val3;
};

var readHash = () => {
  let key3 = localStorage['key3'];
  alert(key3);
};
