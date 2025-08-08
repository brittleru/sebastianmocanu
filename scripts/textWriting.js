const titleID = document.getElementById("writing-text");
const passionID = document.getElementById("writing-text-passion");

let i = 0;
let j = 0;
const titleText = "Research Scientist";
const passionText = "< AI, Computer Vision & Robotics />";
const textWriteSpeed = 100;


function blinkStop() {
    setTimeout(function () {
        titleID.innerHTML = "";
        typingText();
        setTimeout(function () {
            passionID.innerHTML = "";
            anotherText();
        }, 2000);
    }, 2000);

}

function typingText() {
    if (i < titleText.length) {
        titleID.innerHTML += titleText[i];
        i++;
        setTimeout(typingText, textWriteSpeed);

        if (i === titleText.length) {
            // titleID.innerHTML += `<span id="blinking-effect" class="blinking-dash writing-text-dash">_</span>`;
        }
    }
}

function anotherText() {
    if (j < passionText.length) {
        passionID.innerHTML += passionText[j];
        j++

        setTimeout(anotherText, textWriteSpeed);

        if (j === passionText.length) {
            passionID.innerHTML += `<span id="blinking-effect-2" class="blinking-dash writing-text-dash">_</span>`;
        }
    }
}

window.addEventListener("load", blinkStop);
