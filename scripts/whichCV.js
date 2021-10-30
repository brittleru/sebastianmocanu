const cvButton = document.getElementById("cv-button");
const popupElements = document.getElementById("popup-ele-id");

let check = false;

function showElements() {

  console.log(check);
  if (!check) {
    popupElements.style.visibility = "visible";
    $(popupElements).fadeTo("slow", 1);
    check = true;


  }
  else {
    popupElements.style.visibility = "hidden";
    $(popupElements).fadeTo("slow", 0);

    check = false;
  }

}



if (popupElements.style.visibility === "visible") {
  popupElements.style.visibility = "hidden";

  check = false;
}

cvButton.addEventListener("click", showElements);



// "./cv/Mocanu Sebastian CV.pdf"
