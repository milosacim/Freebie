var collapsed = document.getElementsByClassName("collapsed");
var expanded = document.querySelector(".expanded");

expanded.addEventListener("click", expand);

function expand(){
  expanded.classList.toggle("inactive");
  var content = expanded.nextElementSibling;
  if(content.style.maxHeight === "0px"){  
    content.style.maxHeight = content.scrollHeight + "px";
  } else {
    content.style.maxHeight = "0px";
  }
}

for(let i = 0; collapsed.length; i++){
  collapsed[i].addEventListener("click", function(){
    collapsed[i].classList.toggle("active");
    var content = collapsed[i].nextElementSibling;
    if(content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
  );
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
