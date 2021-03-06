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
    holder.ondragleave = holder.ondragend = function() {
	return false;
    };

    /** holderエリアにドロップされた */
    holder.ondrop = function(e) {
	e.preventDefault();

	var file = e.dataTransfer.files[0];
	holder.innerText = file.name;
	console.log(file.path);

	return false;
    };
}
