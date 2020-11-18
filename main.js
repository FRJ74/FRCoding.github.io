const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("searchbox");

searchIcon.addEventListener('click',function() { 
  if(searchBox.style.top == '72px'){
    searchBox.style.top = '24px';
    searchBox.style.pointerEvents = 'none'; 
  } else {
      searchBox.style.top = '72px';
      searchBox.style.pointerEvents = 'auto'
  }
    });