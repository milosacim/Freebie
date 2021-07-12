var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active_q");
    var content = this.nextElementSibling;
    if (content.style.display === "none"){
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });
}

