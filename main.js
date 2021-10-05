const menuButton = document.querySelector('#menu-icon');
const closeButton = document.querySelector('.close-icon');
const cover = document.querySelector('.desk-version');
const listItems = document.querySelectorAll('.items');

menuButton.addEventListener('click', () => {
  cover.classList.add('d-flex');
});

closeButton.addEventListener('click', () => {
  cover.classList.remove('d-flex');
});

listItems.forEach(element => {
    element.addEventListener('click', () => {
    cover.classList.remove('d-flex');
  });
});
