const buttonShow = document.getElementById("show-more");
const row1 = document.getElementById("row1");
const row2 = document.getElementById("row2");

buttonShow.addEventListener("click", function() {

  if (buttonShow.innerHTML === "Show More?") {
    row1.style.display = "flex";
    row2.style.display = "flex";
    buttonShow.innerHTML = "Show Less?";

  }
  else {
    row1.style.display = "none";
    row2.style.display = "none";
    buttonShow.innerHTML = "Show More?";
  }
})
