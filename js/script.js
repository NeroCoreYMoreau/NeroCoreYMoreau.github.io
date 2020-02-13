/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function burger() {
  var x = document.getElementById("menu_nav");
  if (x.style.display === "grid") {
    x.style.display = "none";
  } else {
    x.style.display = "grid";
  }
} 
