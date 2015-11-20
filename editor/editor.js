editor = ace.edit("input_txt");
editor.gitSession().setMode("ace/mode/javascript");
editor.setTheme("ace/theme/twilight");

var remote = require('remote');
var dialog = remote.require('dialog');
var browserWindow = remote.require('browser-window');
/**
 *  読み込みするためのファイルを開く
 */
function openLoadFile() {
    var win = browserWindow.getFocusedWindow();

    dialog.showOpenDialog(
	win,
	{
	    properties : ['openFile'],
	    filters : [
		{
		    name : 'Documents',
		    extensions : ['txt', 'text', 'html']
		}
	    ]
	},
	function (filenames) {
	    if (filenames) {
		readFile(filenames[0]);
	    }
	});
}
