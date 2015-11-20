var fs = require('fs');
var remote = require('remote');
var dialog = remote.require('dialog');
var browserWindow = remote.require('browser-window');

var inputArea = null;
var inputTxt = null;
var footerArea = null;

var currentPath = "";
var editor = null;

/**
 *  Webページ読み込み時の処理
 */
function onLoad() {
    inputArea = document.getElementById("input.area");
    inputTxt = document.getElementById("input.txt");
    footerArea = document.getElementById("footer_fixed");

    editor = ace.edit("input_txt");
    editor.gitSession().setMode("ace/mode/javascript");
    editor.setTheme("ace/theme/twilight");

    // ドラッグ&ドロップ関連
    document.ondragover = document.ondrop = function (e) {
	e.preventDefault();
	return false;
    };

    inputArea.ondragover = Function () {
	return false;
    };

    inputArea.ondragover = inputArea.ondragover = function () {
	return false;
    };

    inputArea.ondrop = function (e) {
	e.preventDefault();
	var file = e.dataTransfer.files[0];
	readFile(file.path);
	return false;
    };
};

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
 *  テキストを読み込み，テキストを入力エリアに設定
 */
function readFile(path) {
    currentPath = path;
    fs.readFile(path, function (error, text) {
	if (error != null) {
	    alert('error : ' + error);
	    return;
	}
	footerArea.innerHTML = path;
	editor.setValue(text.toString(), -1);
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

/**
 *  ファイルを書き込む
 */
function writeFile(path, data) {
    fs.writeFile(path, data, function (error) {
	if (error != null) {
	    alert('error : ' + error);
	}
    });
}

/**
 *  新規ファイルを保存
 */
function saveNewFile() {
    var win = browserWindow.getFocusedWindow();
    dialog.showSaveDialog(
	win,
	{
	    properties : ['openFile'],
	    filters    : [
		{
		    name       : 'Documents',
		    extensions : ['txt', 'text', 'html', 'js']
		}
	    ]
	},
	function (fileName) {
	    if (fileName) {
		var data = editor.getValue();
		currentPath = fileName;
		writeFile(currentPath, data);
	    }
	}
    );
}
