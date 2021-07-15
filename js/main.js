var questions = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", collapse)
}

function collapse(){
  for (i = 0; i < questions.length; i++) {
    questions[i].classList.toggle("active_q");
    var content = questions[i].nextElementSibling;
    if(content.style.display === "none"){
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  }
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
