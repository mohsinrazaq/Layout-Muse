"use strict"

var search = document.getElementById("search");
search.onfocus = function(){
    this.parentNode.style.boxShadow = "inset 0px 0px 2px 1px rgba(255,255,255,1)";
    this.removeAttribute("placeholder");
}

search.onblur = function(){
    this.parentNode.style.boxShadow = "none";
    this.placeholder = "Search";
}

