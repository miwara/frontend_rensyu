"use strict";
let app = require('electron').app;
let BrowserWindow = require('electron').BrowserWindow;
let ipcMain = require('electron').ipcMain;

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
});

ipcMain.on('transitionWebPage',
           () => setTimeout(() => webContents.loadURL('file://' + __dirname + '/index2.html'), 3000));
