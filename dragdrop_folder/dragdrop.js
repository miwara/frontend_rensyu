var fs = require('fs'),
    path = require('path');

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

	var eventDir = e.dataTransfer.files[0];
	getChildCatsList(eventDir.path, function(err, cCatsList){
	    if (err) throw err;
	    console.log(cCatsList);
	});

	return false;
    };

    function getChildCatsList(eventPath, callback) {
	var cCatsList = [];

	fs.readdir(eventPath, function(err, childCats) {
	    if (err) throw err;

	    var pending = childCats.length;
	    if (!pending) return callback(null, cCatsList);

	    childCats.map(function (childCat) {
		return path.join(eventPath, childCat);
	    }).filter(function (childCat) {
		if (fs.statSync(childCat).isFile()) throw err;
		return fs.statSync(childCat).isDirectory;
	    }).forEach(function (childCat) {
		cCatsList.push(path.basename(childCat));
		if (!--pending) callback(null, cCatsList);
	    });
	});
    };

    /**
     * 受け取ったパス内のjpgファイルを取得する
     *
     * @param {string} path ファイルパス
     */
    function getJPGFilelist(cCatPath, callback) {
        var fileList = [];
	fs.readdir(cCatPath, function(err, files) {
           if (err) throw err;

	    var pending = files.length;
	    if (!pending) return callback(null, fileList);

            files.forEach(function (file) {
		fileList.push(file);
            });
	    if (!--pending) callback(null, fileList);
    });
   }
}
