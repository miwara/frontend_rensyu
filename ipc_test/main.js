"use strict";
let app = require('electron').app;
let BrowserWindow = require('electron').BrowserWindow;
let ipcMain = require('electron').ipcMain;

require('crash-reporter').start();

let mainWindow = null;

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function(){
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.openDevTools();

    mainWindow.on('closed', function() {
	mainWindow = null;
    });
});

// 同期
ipcMain.on('synchronous-SubWindow', function(event) {
  let subWindow = new BrowserWindow({width: 200, height:500});
  subWindow.loadURL('file://' + __dirname + '/synchronousSubWindow.html');

  event.returnValue = 'create sub window(synchronous)';

  subWindow.on('closed', function() {
    subWindow = null;
  });
});

// 非同期
ipcMain.on('asynchronous-SubWindow', function(event) {
  let subWindow = new BrowserWindow({width: 200, height:500});
  subWindow.loadURL('file://' + __dirname + '/asynchronousSubWindow.html');
  event.sender.send('asynchronous-reply', 'create sub window(asynchronous)');

  subWindow.on('closed', function() {
    subWindow = null;
  });
});
