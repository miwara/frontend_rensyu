"use strict";
let $ = require("jquery"),
    jQuery = require("jquery");

$(document).ready(() => {

 $(function () {
 $("#header").css("background-color", "#eee");
 });

  let str = $(".test input[name=textform]").val();
  console.log(str);

});
