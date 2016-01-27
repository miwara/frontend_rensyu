"use strict";
let ipcRenderer = require('electron').ipcRenderer;

window.addEventListener('DOMContentLoaded', () => {
  ipcRenderer.send('transitionWebPage');
});
