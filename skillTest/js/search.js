let search = document.querySelector('.search__icon');
let searchLink = document.querySelector('.search__link');
let searchInput = document.querySelector('.search__input');
let searchClose = document.querySelector('.search-closed__icon');
let searchLine = document.querySelector('.search__line');



search.onclick = function (evt) {
  evt.preventDefault();
  searchLink.classList.add('search__link--active');
  searchInput.classList.add('shown');
  searchClose.classList.add('shown');
  searchLine.classList.add('shown');
  
};

searchClose.onclick = function (e) {
  e.preventDefault();
  searchLink.classList.remove('search__link--active');
  searchInput.classList.remove('shown');
  searchLine.classList.remove('shown');
  searchClose.classList.remove('shown');
};


