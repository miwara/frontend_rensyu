"use strict";
let fs = require("fs");
let path = require("path");

const testDir = "./test";

let dirStructure = {};

let pcatList = fs.readdirSync(testDir);

let pviewno = 0;
for (let pkey in pcatList) {
  pviewno++;
  dirStructure[pviewno] = {parentCategoryName: pcatList[pkey]};

  let pcatPath = testDir + '/' + pcatList[pkey];
  let scatList = getList(pcatPath);

  let sviewno = 0;
  for (let skey in scatList) {
    sviewno++;
    dirStructure[pviewno][sviewno] = {categoryName: scatList[skey]};

    let scatPath = pcatPath + '/' + scatList[skey];
    let jpgList = getList(scatPath);

    dirStructure[pviewno][sviewno] = {photos: jpgList};
  }
}

function getList(path) {
  if (fs.statSync(path).isFile()) throw new Error(path + ' is not directory.');
  return fs.readdirSync(path);
}

console.log(dirStructure);
