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

	walk(e.dataTransfer.files[0].path, function(err, results) {
	    if (err) throw err;
	    var data = {name:'root', children:results};
	    console.log(JSON.stringify(data));
	});

	return false;
    };

    var walk = function(p, callback) {
	var results = [];

	fs.readdir(p, function(err, files) {
	    if (err) throw err;

	    var pending = files.length;
	    if (!pending) return callback(null, results);

	    files.map(function (file) {
		return path.join(p, file);
	    }).filter(function (file) {
		if (fs.statSync(file).isDirectory()) walk(file, function(err, res) {
		    results.push({name:path.basename(file), children:res});
		    if (!--pending) callback(null, results);
		});
		return fs.statSync(file).isFile();
	    }).forEach(function (file) {
		var stat = fs.statSync(file);
		results.push({file:path.basename(file), size:stat.size});
		if (!--pending) callback(null, results);
	    });
	});
    };
}
