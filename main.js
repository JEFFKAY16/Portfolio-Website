const menuButton = document.querySelector('#menu-icon');
const closeButton = document.querySelector('.close-icon');
const cover = document.querySelector('.desk-version');
const listItems = document.querySelectorAll('.items');
const popButton = document.querySelectorAll('.pop-buttons');

menuButton.addEventListener('click', () => {
  cover.classList.add('d-flex');
});

closeButton.addEventListener('click', () => {
  cover.classList.remove('d-flex');
});

listItems.forEach((element) => {
  element.addEventListener('click', () => {
    cover.classList.remove('d-flex');
  });
});

const projectCard = [
  {
    id: 'card1',
    image: './IMG/to-do-pic.png',
    name: 'To-Do List Project',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    description: 'An advanced Todo List web application built with pure JS, HTML & CSS',
    button: 'See Project',
    links: ['https://vigilant-mccarthy-e60849.netlify.app/', 'https://vigilant-mccarthy-e60849.netlify.app/'],
  },
  {
    id: 'card2',
    image: './IMG/placeholder.png',
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    button: 'See Project',
    links: ['https://www.google.com', 'https://github.com/'],
  },
  {
    id: 'card3',
    image: './IMG/placeholder.png',
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    button: 'See Project',
    links: ['https://www.google.com', 'https://github.com/'],
  },
  {
    id: 'card4',
    image: './IMG/placeholder.png',
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    button: 'See Project',
    links: ['www.google.com', 'www.facebook.com'],
  },
  {
    id: 'card5',
    image: './IMG/placeholder.png',
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    button: 'See Project',
    links: ['https://www.google.com', 'https://github.com/'],
  },
  {
    id: 'card6',
    image: './IMG/placeholder.png',
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    button: 'See Project',
    links: ['https://www.google.com', 'https://github.com/'],
  },
];

projectCard.forEach((el) => {
  const template = document.createElement('template');
  template.innerHTML = `
  <li class="grid-items">
                  <div class="project-img">
                      <img src="${el.image}" alt="project-image">
                  </div>
                  <div class="project-title">
                      <h4>${el.name}</h4>
                  </div>
                  <ul class="project-technologies">
                      <li>Ruby on rails</li>
                      <li>css</li>
                      <li>JavaScript</li>
                      <li>html</li>
                  </ul>
                  <div class="project-btn">
                    <button class="pop-buttons" type="button" onclick="pop()">${el.button}</button>
                  </div>
                </li>
  `;
  document.querySelector('.grid-container').appendChild(template.content);
});

const projectCards = [
  {
    title: 'Keeping track of hundreds of components',
    image: './IMG/modal-popup.png',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'Bootstrap', 'CodePen', 'Terminal', 'CodeKit', 'GitHub'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dumm. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dumm',
    button: 'See Project',
    links: ['https://jeffkay16.github.io/Portfolio-Website/', 'https://github.com/JEFFKAY16/Portfolio-Website.git'],
  },
];
const [project] = projectCards;
const popupSection = document.querySelector('.popup-section');
popupSection.innerHTML = ` 
<div class="popup-card">
    <i class="fa fa-times popup-close-btn" aria-hidden="true"></i>
    <div class="popup-img">
      <img class="img-block" src="${project.image}" alt="#">
    </div>
    <div class="bottom-card-popup">
      <div class="desktop-popup-links">
          <h4 class="popup-title">${project.title}</h4>
        <div class="popup-btns">
          <a href="${project.links[0]}" class="popup-btn font-f see-live desktop-only">See Live <span><i class="fa fa-external-link"></i></span></a>
          <a href="${project.links[1]}" class="popup-btn font-f see-source desktop-only">See Source <span><i class="fa fa-github"></i></span></a>
        </div>
      </div>
      <ul class="popup-tech" id="foo">
        <li class="mobile-only">${project.technologies[0]}</li>
        <li class="mobile-only">${project.technologies[1]}</li>
        <li class="mobile-only">${project.technologies[2]}</li>
        <li class="desktop-only">${project.technologies[3]}</li>
        <li class="desktop-only">${project.technologies[4]}</li>
        <li class="desktop-only">${project.technologies[5]}</li>
        <li class="desktop-only">${project.technologies[6]}</li>
        <li class="desktop-only">${project.technologies[7]}</li>
      </ul>
      <p class="popup-text">${project.description}</p>
      <div class="popup-btns mobile-only">
        <a href="${project.links[0]}" class="popup-btn font-f see-live">See Live <span><i class="fa fa-external-link"></i></span></a>
        <a href="${project.links[1]}" class="popup-btn font-f see-source">See Source <span><i class="fa fa-github"></i></span></a>
      </div>
    </div>
</div>`;
const popupClose = document.querySelector('.popup-close-btn');
const pop = () => {
  popupSection.classList.remove('d-none');
  popupClose.addEventListener('click', () => {
    popupSection.classList.add('d-none');
  });
};
popButton.forEach((element) => {
  element.addEventListener('click', () => {
    pop();
  });
});

const isLowerCase = (str) => /[a-z]/.test(str) && !/[A-Z]/.test(str);
const errorMessage = document.querySelector('.error-message');
const form = document.forms['contact-form'];
const mail = form.email;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = mail.value;
  if (!isLowerCase(email)) {
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
    form.submit();
  }
});
