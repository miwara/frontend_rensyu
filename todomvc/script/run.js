var electorn = require('electron-prebuilt');
var proc = require('child_process');

// spawn electron
// ナニコレ？
var child = proc.spawn(electorn, ["."]);
