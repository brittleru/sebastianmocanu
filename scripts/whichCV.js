const cvButton = document.getElementById("cv-button");
const popupElements = document.getElementById("popup-ele-id");

let check = false;

function showElements() {
  if (!check) {
    popupElements.style.visibility = "visible";
    popupElements.style.opacity = "1";
    popupElements.style.transition = "opacity 0.5s ease-in-out";
    check = true;
  } else {
    popupElements.style.visibility = "hidden";
    popupElements.style.opacity = "0";
    popupElements.style.transition = "opacity 0.5s ease-in-out";
    check = false;
  }
}

if (popupElements.style.visibility === "visible") {
  popupElements.style.visibility = "hidden";
  check = false;
}

cvButton.addEventListener("click", showElements);