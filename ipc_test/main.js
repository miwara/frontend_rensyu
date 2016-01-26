"use strict";
let app = require('electron').app;
let BrowserWindow = require('electron').BrowserWindow;

require('crash-reporter').start();

let mainWindow = null;

app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
	app.quit();
    }
});

app.on('ready', function(){
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.openDevTools();

    mainWindow.on('closed', function() {
	mainWindow = null;
    });
});
