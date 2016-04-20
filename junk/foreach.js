"use strict";
let nouhin = {
  pcat1: {
    ccat1: ["jpg1", "jpg2", "jpg3"]
  },
  pcat2: {
    ccat1: ["jpg4", "jpg5", "jpg6"]
  }
};

Object.keys(nouhin).forEach(function (key) {
  console.log(key + nouhin[key]);
});
