"use strict";
let $ = require("jquery"),
    jQuery = require("jquery");

window.addEventListener('DOMContentLoaded', () => {

 $(function () {
 $("#header").css("background-color", "#eee");
 });

  let str = $(".test input[name=textform]").val();
  console.log(str);

});
