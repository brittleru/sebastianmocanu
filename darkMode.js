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
    root.style.setProperty("--scrollB", "#c2f0fc");
    photo.src = "./img/me2.jpeg";
    logo.src = "./img/logo2.png";
    button.innerHTML = "Dark Theme?";

    particlesJS('particles-js',
      {
        "particles": {
          "number": {
            "value": 50,
            "density": {
              "enable": true,
              "value_area": 600
            }
          },
          "color": {
            "value": "#3a515f"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.6,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#3a515f",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true,
        "config_demo": {
          // "hide_card": false,
          // "background_color": "#b61924",
          // "background_image": "",
          // "background_position": "50% 50%",
          // "background_repeat": "no-repeat",
          // "background_size": "cover"
        }
      }

    );


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

    particlesJS('particles-js',
      {
        "particles": {
          "number": {
            "value": 30,
            "density": {
              "enable": true,
              "value_area": 600
            }
          },
          "color": {
            "value": "#19B288"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.6,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#19B288",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true,
        "config_demo": {
          // "hide_card": false,
          // "background_color": "#b61924",
          // "background_image": "",
          // "background_position": "50% 50%",
          // "background_repeat": "no-repeat",
          // "background_size": "cover"
        }
      }
    );

  }
})
