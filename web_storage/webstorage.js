"use strict";
window.addEventListener('DOMContentLoaded', () => {
  saveMethodToLocalStorage();
  readMethodToLocalStorage();
  savePropertyToLocalStorage();
  readPropertyToLocalStorage();
  saveHashToLocalStorage();
  readHashToLocalStorage();
});

// メソッドで localStorage を操作
let saveMethodToLocalStorage = () => {
  localStorage.setItem('key1', 'val1');
};

let readMethodToLocalStorage = () => {
  alert(`use method: read ${localStorage.getItem('key1')} from localStorage`);
};

// プロパティで localstorage を操作
let savePropertyToLocalStorage = () => {
  localStorage.key2 = 'val2';
};

let readPropertyToLocalStorage = () => {
  alert(`use property: read ${localStorage.key2} from localStorage`);
};

// 連想配列で localStorage を操作
let saveHashToLocalStorage = () => {
  localStorage['key3'] = 'val3';
};

var readHashToLocalStorage = () => {
  alert(`use hash: read ${localStorage['key3']} from localStorage`);
};
