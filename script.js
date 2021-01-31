var h3 = document.querySelector("h3");
var color1 = document.querySelector(".gradient1");
var color2 = document.querySelector(".gradient2");
var body = document.querySelector("body");

function setGradient() {
  body.style.background = "linear-gradient( to right, " + color1.value + ", " + color2.value + ")";
  h3.innerHTML = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
