"use strict";
window.addEventListener('DOMContentLoaded', () => {
  // localStorage のテスト
  saveMethodToLocalStorage();
  readMethodToLocalStorage();
  savePropertyToLocalStorage();
  readPropertyToLocalStorage();
  saveHashToLocalStorage();
  readHashToLocalStorage();

  // sessionStorage のテスト
  saveMethodToSessionStorage();
  readMethodToSessionStorage();
  savePropertyToSessionStorage();
  readPropertyToSessionStorage();
  saveHashToSessionStorage();
  readHashToSessionStorage();
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

// メソッドで sessionStorage を操作
let saveMethodToSessionStorage = () => {
  sessionStorage.setItem('key1', 'val1');
};

let readMethodToSessionStorage = () => {
  alert(`use method: read ${sessionStorage.getItem('key1')} from sessionStorage`);
};

// プロパティで localstorage を操作
let savePropertyToSessionStorage = () => {
  sessionStorage.key2 = 'val2';
};

let readPropertyToSessionStorage = () => {
  alert(`use property: read ${sessionStorage.key2} from sessionStorage`);
};

// 連想配列で sessionStorage を操作
let saveHashToSessionStorage = () => {
  sessionStorage['key3'] = 'val3';
};

var readHashToSessionStorage = () => {
  alert(`use hash: read ${sessionStorage['key3']} from sessionStorage`);
};
