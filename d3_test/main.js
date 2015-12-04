var app = require('electron').app
var BrowserWindow = require('electron').BrowserWindow;

require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function() {
	app.quit();
});

app.on('ready', function(){
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadUrl('file://' + __dirname + '/index.html');

    mainWindow.on('closed', function() {
	mainWindow = null;
    });
});
