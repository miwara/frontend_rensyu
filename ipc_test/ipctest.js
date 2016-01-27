"use strict";
let ipcRenderer = require('electron').ipcRenderer;

window.addEventListener('DOMContentLoaded', () => {
  // 同期
  console.log(ipcRenderer.sendSync('synchronous-SubWindow'));

  // 非同期
  ipcRenderer.on('asynchronous-reply', function(event, arg) {
   console.log(arg);  // prints "create sub window"
   });
  ipcRenderer.send('asynchronous-SubWindow');
});
