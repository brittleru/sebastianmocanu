const button = document.getElementById("dark-theme");
const body = document.querySelector("body");
const welcome = document.getElementById("welcome-section")
const root = document.documentElement;
const photo = document.getElementById("photo-me");
const logo = document.getElementById("logoImg");
const navbar = document.getElementById("");
const footer = document.getElementById("");

// Event listeners
button.addEventListener("click", function() {
  // body.style.backgroundColor = "#F8F8F8";
  // welcome.style.backgroundColor = "#F8F8F8";

  if (button.innerHTML === "Light Theme?") {
    root.style.setProperty("--backgroundcol", "linear-gradient(to right, #2980b9, #6dd5fa, #ffffff)");
    root.style.setProperty("--navFot", "#3a515f");
    root.style.setProperty("--hoverColor", "#c2f0fc");
    root.style.setProperty("--borders", "#3a515f");
    root.style.setProperty("--cardBack", "#3a515f");
    root.style.setProperty("--cardText", "#c2f0fc");
    root.style.setProperty("--upButton", "#6dd5fa");
    root.style.setProperty("--scrollB", "#c2f0fc")
    photo.src = "./img/me2.jpeg";
    logo.src = "./img/logo2.png";
    button.innerHTML = "Dark Theme?";

  }
  else {
    root.style.setProperty("--backgroundcol", "linear-gradient(to right, #203a43, #2c5364, #385151)");
    root.style.setProperty("--navFot", "linear-gradient(to right, #000000, #434343)");
    root.style.setProperty("--hoverColor", "green");
    root.style.setProperty("--borders", "#222");
    root.style.setProperty("--cardBack", "#222");
    root.style.setProperty("--cardText", "#F8F8F8");
    root.style.setProperty("--upButton", "#19B288");
    root.style.setProperty("--scrollB", "#222");
    photo.src = "./img/me.jpeg";
    logo.src = "./img/logo.png";
    button.innerHTML = "Light Theme?";

  }


})
