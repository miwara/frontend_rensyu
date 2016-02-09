"use strict";
let app = require('electron').app;
let BrowserWindow = require('electron').BrowserWindow;

require('crash-reporter').start();

let mainWindow = null;

app.on('window-all-closed', () => app.quit());

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL(`file://${__dirname}/main.html`);
  mainWindow.openDevTools();

  mainWindow.on('closed', () => mainWindow = null);
});
