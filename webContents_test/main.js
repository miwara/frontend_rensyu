"use strict";
let app = require('electron').app;
let BrowserWindow = require('electron').BrowserWindow;

require('crash-reporter').start();

let mainWindow = null;
let webContents = null;

app.on('window-all-closed', () => app.quit());

app.on('ready', () => {
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.openDevTools();

  mainWindow.on('closed', () => mainWindow = null);
  webContents = mainWindow.webContents;

  // 3秒後に画面が遷移する
  setTimeout(() => webContents.loadURL('file://' + __dirname + '/index2.html'), 3000);
});
