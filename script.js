let hamburgerLink = document.querySelector("#hamburger-link");
let blurBackground = document.querySelector(".blur-background");
let menuLayer = document.querySelector(".menu-layer");

function pops() {
  blurBackground.style.display = "block";
  menuLayer.style.display = "flex";
}

hamburgerLink.addEventListener("click", pops);

let closeButton = document.querySelector(".close-button");

function unPops() {
  blurBackground.style.display = "none";
  menuLayer.style.display = "none";
}

closeButton.addEventListener("click", unPops);

let Portfolio = document.querySelector("#Portfolio");
let About = document.querySelector("#About");
let Contact = document.querySelector("#Contact");

Portfolio.addEventListener("click", unPops);
About.addEventListener("click", unPops);
Contact.addEventListener("click", unPops);
