const googleBtn = document.getElementById("google-button");
const udemyBtn = document.getElementById("udemy-button");
const codecademyBtn = document.getElementById("codecademy-button");
const freecodecampBtn = document.getElementById("freecodecamp-button");
const googleContent = document.getElementById("google-content");
const udemyContent = document.getElementById("udemy-content");
const codecademyContent = document.getElementById("codecademy-content");
const freecodecampContent = document.getElementById("freecodecamp-content");
const allTabs = document.getElementsByClassName("tab-content");
const tabLinks = document.getElementsByClassName("tab-link");

function goToCertificate(eventCert, certificate) {
  for (let i = 0; i < allTabs.length; i++) {
    allTabs[i].style.display = "none";
  }
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }

  certificate.style.display = "block";
  eventCert.currentTarget.className += " active";
}

googleBtn.addEventListener("click", () => {
  goToCertificate(event, googleContent);
});

udemyBtn.addEventListener("click", () => {
  goToCertificate(event, udemyContent);
});

codecademyBtn.addEventListener("click", () => {
  goToCertificate(event, codecademyContent);
});

freecodecampBtn.addEventListener("click", () => {
  goToCertificate(event, freecodecampContent);
});

window.addEventListener("load", (event) => {
  googleContent.style.display = "block";
  googleBtn.className += " active";
});
