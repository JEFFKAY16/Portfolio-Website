const menuButton = document.querySelector('#menu-icon');
const closeButton = document.querySelector('.close-icon');
const cover = document.querySelector('.desk-version');
const listItems = document.querySelectorAll('.items');
const popButton = document.querySelectorAll('.pop-buttons');
const popupCover = document.querySelector('.popup-section');

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

let projectCards = [
  {
    title: 'Keeping track of hundreds of components',
    image: './IMG/modal-popup.png',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'Bootstrap', 'CodePen', 'Terminal', 'CodeKit', 'GitHub'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dumm. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dumm',
    button: 'See Project',
    links: ['https://jeffkay16.github.io/Portfolio-Website/', 'https://github.com/JEFFKAY16/Portfolio-Website.git']
  },
];
  
  const [project] = projectCards;
  const popupSection = document.querySelector('.popup-section');
  popupSection.innerHTML =` 
  <div class="popup-card">
    <i class="fa fa-times popup-close-btn" aria-hidden="true"></i>
    <div class="popup-img">
      <img class="img-block" src="${project.image}" alt="#">
    </div>
    <div class="bottom-card-popup">
      <h4 class="popup-title">${project.title}</h4>
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
      <div class="popup-btns">
        <a href="${project.links[0]}" class="popup-btn font-f see-live">See Live <span><i class="fa fa-external-link"></i></span></a>
        <a href="${project.links[1]}" class="popup-btn font-f see-source">See Source <span><i class="fa fa-github"></i></span></a>
      </div>
    </div>
  </div>`;
  

  const popupClose = document.querySelector('.popup-close-btn');

  popButton.forEach((element) => {
    element.addEventListener('click', () => {
      popupSection.classList.remove('d-none');
    });
  });

  popupClose.addEventListener('click', () => {
    popupSection.classList.add('d-none');
  });
