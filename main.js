const menu_btn = document.querySelector('#menu-icon');
const close_btn = document.querySelector('.close-icon');
const cover = document.querySelector('.desk-version');
const list_items = document.querySelectorAll('.items');

menu_btn.addEventListener('click', function() {
  cover.classList.add('d-flex');
})

close_btn.addEventListener('click', function() {
  cover.classList.remove('d-flex');
})
