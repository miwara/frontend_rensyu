var fs = require('fs'); /* ファイル操作 https://nodejs.org/api/fs.html */
var remote = require('remote'); /* http://qiita.com/Misumi_Rize/items/a434cc0d17e5c6b85147 */
var dialog = remote.require('dialog');
var browserWindow = remote.require('browser-window'); /* http://electron.atom.io/docs/v0.35.0/api/browser-window/ */
var editor = null;
var currentPath = null;

function onLoad() {
    var domEditArea = document.getElementById("edit_area");
    var domEditor = document.getElementsByClassName("editor");

    editor = ace.edit(domEditor[0]); /* 入力エリアを指定 */
    editor.getSession().setMode('ace/mode/javascript'); /* シンタックスのモードを javascript に */
    editor.$blockScrolling = Infinity;
    if (process.platform == 'darwin') {
	editor.commands.bindKey("Ctrl-P", "golineup");
    }

    domEditArea.ondragover = function () {
	return false;
    };
    domEditArea.ondragleave = domEditArea.ondragend = function () {
	return false;
    };
    domEditArea.ondrop = function (e){
	e.preventDefault();
	var file = e.dataTransfer.files[0];
	readFile(file.path);
	return false;
      };
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
	    if (filenames) readFile(filenames[0]);
	});
}

function readFile(path) {
    currentPath = path;
    fs.readFile(path, function (error, text) {
	if (error !== null) {
	    alert('error : ' + error);
	    return;
	}

	editor.setValue(text.toString(), -1); /* エディタにセット */
    });
}

function saveFile() {
    fs.writeFile(
	currentPath,
	editor.getValue(),
	function (error) {
	    if (error !== null) {
		alert('error : ' + error);
		return;
	    }
	});
}
