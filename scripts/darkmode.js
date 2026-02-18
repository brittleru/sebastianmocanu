const logoSource = document.getElementById("logoSource");
const logo = document.getElementById("logoImg");
const button = document.getElementById("dark-theme");

function getSystemPref() {
  if (matchMedia("(prefers-color-scheme: light)").matches) {
    return "light";
  }
  return "dark";
}

function getTheLocalHost() {
  return localStorage.getItem("theme") || "system";
}

function setTheLocalHost(userPreference) {
  localStorage.setItem("theme", userPreference);
}

const particleConfigs = {
  light: {
    color: "#3a515f",
    lineColor: "#3a515f",
  },
  dark: {
    color: "#19B288",
    lineColor: "#19B288",
  },
};

function initParticles(theme) {
  const config = particleConfigs[theme];

particlesJS("particles-js",{particles:{number:{value:30,density:{enable:!0,value_area:600}},color:{value:config.color},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.6,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:5,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:config.lineColor,opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,config_demo:{}});
}

function updateLogo(theme) {
  if (theme === "light") {
    logo.src = "/assets/logo-light-theme.png";
    logoSource.srcset = "/assets/logo-light-theme.webp";
  } else if (theme === "dark") {
    logo.src = "/assets/logo-dark-theme.png";
    logoSource.srcset = "/assets/logo-dark-theme.webp";
  }
}

function switchTheme() {
  if (button.innerHTML === "Light Theme?") {
    document.documentElement.setAttribute("data-theme", "light");
    updateLogo("light");
    button.innerHTML = "Dark Theme?";
    initParticles("light");
    localStorage.setItem("theme", "light");
  } else if (button.innerHTML === "Dark Theme?") {
    document.documentElement.setAttribute("data-theme", "dark");
    updateLogo("dark");
    button.innerHTML = "Light Theme?";
    initParticles("dark");
    localStorage.setItem("theme", "dark");
  }
}

const currentTheme = localStorage.getItem("theme");

function setTheme(themeValue) {
  if (themeValue) {
    document.documentElement.setAttribute("data-theme", themeValue);
    if (themeValue === "dark") {
      updateLogo("dark");
      button.innerHTML = "Light Theme?";
      initParticles("dark");
    } else if (themeValue === "light") {
      updateLogo("light");
      button.innerHTML = "Dark Theme?";
      initParticles("light");
    }
  }
}

window.addEventListener("load", () => {
  if (currentTheme) {
    setTheme(currentTheme);
  } else {
    let systemPref = getSystemPref();
    setTheme(systemPref);
  }
});
button.addEventListener("click", switchTheme);
