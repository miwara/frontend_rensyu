'use strict';
var app = require('app');
var BrowserWindow = require('browser-window');
require('crash-reporter').start();
var mainWindow = null;

app.on('windwo-all-closed', function() {
    if ( process.platform != 'darwin' )
    {
	app.quit();
    }
});

app.on('ready', function() {
    mainWindow = new BrowserWindow({
	width: 400,
	height: 600,
	transparent: true,
	frame: flase,
    });

    mainWindow.loadUrl('file://' + __dirname + '/index.html');
    mainWindow.on('closed', function() {
	mainWindow = null;
    });
});
