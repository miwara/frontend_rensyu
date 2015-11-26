var fs = require('fs');
var remote = require('remote');
var dialog = remote.require('dialog');
var browserWindow = remote.require('browser-window');
var editor = null;

function onLoad() {
    editor = ace.edit("editor");
    editor.getSession().setMode('ace/mode/javascript');
    editor.setTheme("ace/theme/twilight");
};

function openLoadFile(file) {
    var win = browserWindow.getFocusedWindow();

    dialog.showOpenDialog(
	win,
	{
	    properties: ['openFile'],
	    filters: [
		{
		    name: 'Documents',
		    extensions: ['txt', 'text', 'html', 'js']
		}
	    ]
	},
	function (filenames) {
	    if (filenames)
	    {
		readFile(filenames[0]);
	    }

	});
}

function readFile(path) {
    currentPath = path;
    fs.readFile(path, function (error, text) {
	if (error != null) {
	    alert('error : ' + error);
	    return;
	}

	editor.setValue(text.toString(), -1);
    });
}
