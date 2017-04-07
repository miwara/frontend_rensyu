var fs = require('fs'),
    path = require('path'),
    dir = process.argv[2] || '.';

var walk = function(p, fileCallback, errCallback) {
    fs.readdir(p, function(err, files) {
	if (err) {
	    errCallback(err);
	    return;
	}

	files.forEach(function(f) {
	    var fp = path.join(p,f);
	    if (fs.statSync(fp).isDirectory()) {
		walk(fp, fileCallback);
	    } else {
		fileCallback(fp);
	    }
	});
    });
};

walk(dir, function(path) {
    console.log(path);
}, function(err) {
    console.log("Receive err:" + err);
});
