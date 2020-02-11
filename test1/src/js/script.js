const tabLinks = document.getElementsByClassName("tab-links");
const tabItem = document.getElementsByClassName("tab-item");
const tabLinksBtn = document.getElementsByClassName("tab-link__button");

const openItem = (evt, item) => {
  let i;
  
  for (i = 0; i < tabLinksBtn.length; i++) {
    tabLinksBtn[i].className = tabLinksBtn[i].className.replace(" active", "");
  }

  if(document.documentElement.clientWidth > 480)
  for (i = 0; i < tabItem.length; i++) {      
    tabItem[i].style.display = "none";
  }
  
  document.getElementsByClassName(`${item}`)[0].style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();