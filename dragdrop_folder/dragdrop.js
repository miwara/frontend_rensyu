var fs = require('fs');

function onLoad() {
    var holder = document.getElementById('holder');

    document.ondragover = document.ondrop = function(e) {
	e.preventDefault(); // イベントの伝搬をやめて，アプリケーションのhtmlとファイルが差し替わらないようにする
	return false;
    };

    /** holderエリアにドラッグされた場合 */
    holder.ondragover = function() {
	return false;
    };

    /** holderエリアから外れたorドラッグが終了した */
    holder.ondragleave = holder.ondragend = function () {
	return false;
    };

    /** holderエリアにドロップされた */
    holder.ondrop = function (e) {
	e.preventDefault();

	getFilelist(e.dataTransfer.files[0].path);

	return false;
    };

    /**
     * 受け取ったパス内の全ファイルを取得しコンソールに表示
     *
     * @param {string} path ファイルパス
     */
    function getFilelist(path) {
	fs.readdir(path, function(err, files) {
	    if (err) throw err;
	    var fileList = [];
	    files.forEach(function (file) {
		fileList.push(file);
	    });
	    console.log(fileList);
	});
    }
}
