"use strict";
let app = require('electron').app;
let BrowserWindow = require('electron').BrowserWindow;
let crashReporter = require('electron').crashReporter;

let mainWindow = null;

app.on('window-all-closed', () => app.quit());

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.openDevTools();

  mainWindow.on('closed', () => mainWindow = null);
});
