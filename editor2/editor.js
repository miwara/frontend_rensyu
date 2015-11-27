var fs = require('fs'); /* ファイル操作 https://nodejs.org/api/fs.html */
var remote = require('remote'); /* http://qiita.com/Misumi_Rize/items/a434cc0d17e5c6b85147 */
var dialog = remote.require('dialog');
var browserWindow = remote.require('browser-window'); /* http://electron.atom.io/docs/v0.35.0/api/browser-window/ */
var editor = null;

function onLoad() {
    editor = ace.edit("editor"); /* 入力エリアを指定 */
    editor.getSession().setMode('ace/mode/javascript'); /* シンタックスのモードを javascript に */
    editor.$blockScrolling = Infinity;
    if (process.platform == 'darwin') {
	editor.commands.bindKey("Ctrl-P", "golineup");
    }
}

function openLoadFile(file) {
    dialog.showOpenDialog( /* http://nhamada.hatenablog.com/entry/2015/05/24/210639 */
	browserWindow.getFocusedWindow(),
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
	    if (filenames) {
		readFile(filenames[0]);
	    }
	});
}

function readFile(path) {
    fs.readFile(path, function (error, text) {
	if (error !== null) {
	    alert('error : ' + error);
	    return;
	}

	editor.setValue(text.toString(), -1); /* エディタにセット */
    });
}
