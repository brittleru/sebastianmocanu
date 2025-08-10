const navButton = document.getElementById("nav-button");

function toggleNavbar() {
  let navbarCollapse = document.getElementById("navbarResponsive");
  if (navbarCollapse.classList.contains("show")) {
    navbarCollapse.classList.remove("show");
  } else {
    navbarCollapse.classList.add("show");
  }
}

navButton.addEventListener("click", toggleNavbar);
