"use strict";

var checkbox = document.getElementsByClassName("checkbox");
var tabItemImage = document.getElementsByClassName("tab-item__image");
var tabItemTitle = document.getElementsByClassName("tab-item__title");
var tabItemText = document.getElementsByClassName("tab-item__text");

var titleArrayOff = ['Ветер', 'Дождь', 'Снег', 'Метель', 'Град', 'Гололед', 'Мороз'];
var titleArrayOn = ['Сильный ветер (шквалистый)', 'Сильный дождь (Ливень)', 'Сильный снег', 'Сильная Метель', 'Крупный Град', 'Сильный Гололед', 'Сильный Мороз'];

var switchBtn = function switchBtn(item) {
  if (!checkbox[item].checked) {
    tabItemImage[item].src = "img/" + (item + 1) + "_on.png";
    tabItemTitle[item].innerHTML = titleArrayOn[item];
    tabItemTitle[item].classList.add('active');
    tabItemText[item].style.visibility = 'visible';
  } else {
    tabItemImage[item].src = "img/" + (item + 1) + "_off.png";
    tabItemTitle[item].innerHTML = titleArrayOff[item];
    tabItemTitle[item].classList.remove('active');
    tabItemText[item].style.visibility = 'hidden';
  }
};