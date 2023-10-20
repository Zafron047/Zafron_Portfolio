// ------------- Open Mobile Menu --------------

const hamburgerLink = document.querySelector('#hamburger-link');
const blurBackground = document.querySelector('.blur-background');
const menuLayer = document.querySelector('.menu-layer');

function pops() {
  blurBackground.style.display = 'block';
  menuLayer.style.display = 'flex';
}
hamburgerLink.addEventListener('click', pops);

// ------------- Close Mobile Menu ---------------

const closeButton = document.querySelector('.close-button');
function unPops() {
  blurBackground.style.display = 'none';
  menuLayer.style.display = 'none';
}
closeButton.addEventListener('click', unPops);

const Portfolio = document.querySelector('#Portfolio');
const About = document.querySelector('#About');
const Contact = document.querySelector('#Contact');

Portfolio.addEventListener('click', unPops);
About.addEventListener('click', unPops);
Contact.addEventListener('click', unPops);

const projectsArr = [
  {
    projectName: 'Expenditure',
    projectDescription:
      'This Ruby on Rails project is about building a mobile web application where user can manage budget: user have a list of transactions associated with a group, so that user can see how much money they have spent and on what.',
    technology: ['HTML', 'CSS', 'JavaScript'],
    linkToLive: 'https://expenditure-2i8a.onrender.com',
    linkToSource: 'https://github.com/Zafron047/Expenditures',
    image: './assets/images/expenditure.png',
  },
  {
    projectName: 'Tonic',
    projectDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technology: ['HTML', 'CSS', 'JavaScript'],
    linkToLive: 'https://zafron047.github.io/Portfolio_Cohort-20_Mod-1/',
    linkToSource: 'https://github.com/Zafron047/Portfolio_Cohort-20_Mod-1',
    image: './assets/images/card-1.svg',
  },
  {
    projectName: 'Tonic',
    projectDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technology: ['HTML', 'CSS', 'JavaScript'],
    linkToLive: 'https://zafron047.github.io/Portfolio_Cohort-20_Mod-1/',
    linkToSource: 'https://github.com/Zafron047/Portfolio_Cohort-20_Mod-1',
    image: './assets/images/card-1.svg',
  },
  {
    projectName: 'Tonic',
    projectDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technology: ['HTML', 'CSS', 'JavaScript'],
    linkToLive: 'https://zafron047.github.io/Portfolio_Cohort-20_Mod-1/',
    linkToSource: 'https://github.com/Zafron047/Portfolio_Cohort-20_Mod-1',
    image: './assets/images/card-1.svg',
  },
];

const projectBtns = document.querySelectorAll('.see-project');
Array.from(projectBtns).forEach((projectBtns, i) => {
  projectBtns.addEventListener('click', () => {
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    if (viewportWidth >= 768) {
      const popDiv = document.createElement('div');
      popDiv.id = 'blur-background';
      popDiv.classList.add('blur-background');
      popDiv.style.position = 'fixed';
      popDiv.style.display = 'block';
      popDiv.style.top = '0';
      popDiv.style.left = '0';
      popDiv.style.width = '100vw';
      popDiv.style.height = '100vh';
      popDiv.style.zIndex = '11';
      popDiv.style.backdropFilter = 'blur(6px)';
      popDiv.innerHTML = `
        <div class='d-card'>
          <div class='D-Pop-Header'>
            <div>
              <h3 id='name'>${projectsArr[i].projectName}</h3>
              <div id='exp' class='exp'>
                <p>CANOPY</p>
                <ul>
                  <li>Back End Dev</li>
                  <li>2015</li>
                </ul>
              </div>
            </div>
            <a><button id='desk-popup-close' class='popup-close'>X</button></a>
          </div>

          <img class="Pop-Img" src='${projectsArr[i].image}'/>

          <div class='card-details'>
            <div class='card-details-left'>
              <p class='project-info'>
              ${projectsArr[i].projectDescription}
              </p>
            </div>

            <div class='card-details-right'>
              <ul class='skill'>
                <li class='skill-box'>${projectsArr[i].technology[0]}</li>
                <li class='skill-box'>${projectsArr[i].technology[1]}</li>
                <li class='skill-box'>${projectsArr[i].technology[2]}</li>
              </ul>
              <hr>
              <div class='pop-btn'>
                <a href='${projectsArr[i].linkToLive}'>
                  <button class='d-pop-btn'>
                    <span>See Live</span>
                    <i class='fa-solid fa-arrow-up-right-dots fa-2xs' style='color: #6070ff;'></i>
                  </button>
                </a>
                <a href='${projectsArr[i].linkToSource}'>
                  <button class='d-pop-btn'>
                    <span>See Source</span>
                    <i class='fa-brands fa-github fa-2xs' style='color: #6070ff;'></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>`;
      document.body.appendChild(popDiv);
    } else {
      const newDiv = document.createElement('div');
      newDiv.id = 'pop-card';
      newDiv.innerHTML = `
      <div class='card-right'>
        <div class='close-container'>
          <h3>${projectsArr[i].projectName}</h3>
          <button id='popup-close' class='popup-close'>&#x2716;</button>
         </div>
        <div class='exp'>
          <p>CANOPY</p>
          <ul>
            <li>Back End Dev</li>
            <li>2015</li>
          </ul>
        </div>
  
        <img class="Pop-Img" src='${projectsArr[i].image}' alt='' />
  
        <p class="project-info">${projectsArr[i].projectDescription}</p>
  
        <ul class='skill'>
          <li class='skill-box'>${projectsArr[i].technology[0]}</li>
          <li class='skill-box'>${projectsArr[i].technology[1]}</li>
          <li class='skill-box'>${projectsArr[i].technology[2]}</li>
        </ul>
  
        <div class='pop-btn'>
          <a href='${projectsArr[i].linkToLive}'>
            <button class='btn' href>
              See Live
              <i class='fa-solid fa-arrow-up-right-dots fa-2xs' style='color: #6070ff;'></i>
            </button>
          </a>
          <a href='${projectsArr[i].linkToSource}'>
            <button class='btn'>
              See Source
              <i class='fa-brands fa-github fa-2xs' style='color: #6070ff;'></i>
            </button>
          </a>
        </div>
      </div>`;
      newDiv.classList.add('pop-card');
      newDiv.style.position = 'fixed';
      newDiv.style.marginTop = '20px';
      newDiv.style.top = '0';
      newDiv.style.left = '50%';
      newDiv.style.height = '650px';
      newDiv.style.width = '94%';
      newDiv.style.transform = 'translateX(-50%)';
      newDiv.style.zIndex = '99';
      newDiv.style.overflow = 'auto';
      document.body.appendChild(newDiv);
    }
  });
});

// ----------- close Mobile popup ------------

function removeNewDiv() {
  const newDiv = document.querySelector('#pop-card');
  const parentElement = newDiv.parentNode;
  parentElement.removeChild(newDiv);
}

document.addEventListener('click', (event) => {
  if (event.target.id === 'popup-close') {
    removeNewDiv();
  }
});

// ----------- close Desktop popup ------------

function removeDeskPop() {
  const deskDiv = document.querySelector('#blur-background');
  const parentElement = deskDiv.parentNode;
  parentElement.removeChild(deskDiv);
}

document.addEventListener('click', (event) => {
  if (event.target.id === 'desk-popup-close') {
    removeDeskPop();
  }
});

// ----------- Contact validation ------------
const contactForm = document.getElementById('desk-form');
const contactEmail = document.getElementById('email-input');
const contactMessage = document.getElementById('alertMessage');

contactForm.addEventListener('submit', (event) => {
  if (contactEmail.value.toLowerCase() !== contactEmail.value) {
    event.preventDefault();
    contactMessage.innerText = 'error: email should be in Lowercase';
  }
});

// ---------- Preserve datat in Local Storage ---------
const formName = document.getElementById('Name');
const formMessage = document.getElementById('form_message');
contactForm.addEventListener('input', () => {
  const formData = {
    name: formName.value,
    email: contactEmail.value,
    message: formMessage.value,
  };

  localStorage.setItem('contactForm', JSON.stringify(formData));
});

function showData() {
  const userData = JSON.parse(localStorage.getItem('contactForm'));
  if (userData) {
    formName.value = userData.name;
    contactEmail.value = userData.email;
    formMessage.value = userData.message;
  }
}
showData();
