// ------------- Open Mobile Menu --------------

const hamburgerLink = document.querySelector("#hamburger-link");
const blurBackground = document.querySelector(".blur-background");
const menuLayer = document.querySelector(".menu-layer");

function pops() {
  blurBackground.style.display = "block";
  menuLayer.style.display = "flex";
}
hamburgerLink.addEventListener("click", pops);

// ------------- Close Mobile Menu ---------------

const closeButton = document.querySelector(".close-button");
function unPops() {
  blurBackground.style.display = "none";
  menuLayer.style.display = "none";
}
closeButton.addEventListener("click", unPops);

const Portfolio = document.querySelector("#Portfolio");
const About = document.querySelector("#About");
const Contact = document.querySelector("#Contact");

Portfolio.addEventListener("click", unPops);
About.addEventListener("click", unPops);
Contact.addEventListener("click", unPops);

// ----------- Project popup --------------

const projectBtns = document.querySelectorAll("#portfolio-card #see-project");
for (let i in projectBtns) {
  projectBtns[i].addEventListener("click", function projectPop() {

    const newDiv = document.createElement("div");
    newDiv.id = "card";
    newDiv.innerHTML = `<div class="card-right">
        <div class="close-container">
          <h3>${projectsArr[i].projectName}</h3>
          <button id="popup-close" onclick="removeNewDiv()" class="popup-close">&#x2716;</button>
         </div>
        <div class="exp">
          <p>CANOPY</p>
          <ul>
            <li>Back End Dev</li>
            <li>2015</li>
          </ul>
        </div>
  
        <img class="card-left" src="./assets/images/card-1.svg" alt="" />
  
        <p${projectsArr[i].projectDescription}</p>
  
        <ul class="skill">
          <li class="skill-box">${projectsArr[i].Technology[0]}</li>
          <li class="skill-box">${projectsArr[i].Technology[1]}</li>
          <li class="skill-box">${projectsArr[i].Technology[2]}</li>
        </ul>
  
        <div class="pop-btn">
  
        <a href="${projectsArr[i].linkToLive}">
          <button class="btn" href>
            See Live
            <i class="fa-solid fa-arrow-up-right-dots fa-2xs" style="color: #6070ff;"></i>
          </button>
        </a>
        <a href="${projectsArr[i].linkToSource}">
          <button class="btn">
            See Source
            <i class="fa-brands fa-github fa-2xs" style="color: #6070ff;"></i>
          </button>
        </a>
        </div>
      </div>`;
    newDiv.classList.add("card");
    newDiv.style.position = "fixed";
    newDiv.style.top = "0";
    newDiv.style.left = "50%";
    newDiv.style.transform = "translateX(-50%)";
    newDiv.style.zIndex = "99";
    newDiv.style.width = "94%";
    document.body.appendChild(newDiv);
  });
}

// ----------- close mobile popup ------------

function removeNewDiv() {
  const newDiv = document.querySelector("#card");
  const parentElement = newDiv.parentNode;
  parentElement.removeChild(newDiv);
}

// popupClose.addEventListener("click", removeNewDiv);
