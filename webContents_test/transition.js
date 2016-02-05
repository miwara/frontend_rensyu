"use strict";
let ipcRenderer = require('electron').ipcRenderer;

window.addEventListener('DOMContentLoaded', () => {
  sessionStorage.setItem('key', 100);
  ipcRenderer.send('transitionWebPage');
});
