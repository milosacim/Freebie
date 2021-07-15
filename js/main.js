var collapsed = document.getElementsByClassName("collapsed");
var expanded = document.querySelector(".expanded");

expanded.addEventListener("click", expand);

function expand(){
  expanded.classList.toggle("inactive");
  var content = expanded.nextElementSibling;
  if(content.style.display === "block"|| content.style.display===""){
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}

for(let i = 0; collapsed.length; i++){
  collapsed[i].addEventListener("click", function(){
    collapsed[i].classList.toggle("active");
    var content = collapsed[i].nextElementSibling;
    if(content.style.display === "none"|| content.style.display===""){
      content.style.display = "block";
    } else {
      content.style.display = "none";
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
