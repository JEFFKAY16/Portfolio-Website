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
  ///////////

  //////////

  const popupClose = document.querySelector('.popup-close-btn');

  popButton.forEach((element) => {
    element.addEventListener('click', () => {
      popupSection.classList.remove('d-none');
    });
  });

  popupClose.addEventListener('click', () => {
    popupSection.classList.add('d-none');
  });
