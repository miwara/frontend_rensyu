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

/**
 *  ファイルを保存する
 */
function saveFile() {
    if (currentPath == "") {
	saveNewFile();
	return;
    }

    var win = browserWindow.getFocusedWindow();

    dialog.showMessageBox(
	win,
	{
	    title   : 'ファイルの上書き保存を行います．',
	    type    : 'info',
	    buttons : ['OK', 'Cancel'],
	    detail  : '本当に保存しますか?'
	},
	function (response) {
	    if (response == 0) {
		var data = editor.getValue();
		writeFile(currentPath, data)
	    }
	});
}

