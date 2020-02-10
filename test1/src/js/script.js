const openItem = (evt, item) => {
  let i, tabcontent, tablinks;
  
  tabcontent = document.getElementsByClassName("tab-item");
  for (i = 0; i < tabcontent.length; i++) {      
    tabcontent[i].style.display = "none";
  }
  
    tablinks = document.getElementsByClassName("tab-link__button");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementsByClassName(`${item}`)[0].style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  document.getElementById("defaultOpen").click();