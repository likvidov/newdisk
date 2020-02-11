"use strict";

var tabLinks = document.getElementsByClassName("tab-links");
var tabItem = document.getElementsByClassName("tab-item");
var tabLinksBtn = document.getElementsByClassName("tab-link__button");

var openItem = function openItem(evt, item) {
  var i = void 0;

  for (i = 0; i < tabLinksBtn.length; i++) {
    tabLinksBtn[i].className = tabLinksBtn[i].className.replace(" active", "");
  }

  if (document.documentElement.clientWidth > 480) for (i = 0; i < tabItem.length; i++) {
    tabItem[i].style.display = "none";
  }

  document.getElementsByClassName("" + item)[0].style.display = "block";
  evt.currentTarget.className += " active";
};

document.getElementById("defaultOpen").click();